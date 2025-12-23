"use client";

import { useMemo, useState } from "react";
import Link from "next/link";

type Item = {
  type: string;
  title: string;
  text: string;
  url: string;
};

function scoreMatch(query: string, text: string) {
  const q = query.trim().toLowerCase();
  const t = text.toLowerCase();

  if (!q) return 0;
  if (t.includes(q)) return 100;

  // lightweight “AI-like” scoring: counts overlapping words
  const qWords = q.split(/\s+/).filter(Boolean);
  let hits = 0;
  for (const w of qWords) if (t.includes(w)) hits++;

  return hits * 12; // simple scoring
}

export default function SmartSearch({ items }: { items: Item[] }) {
  const [q, setQ] = useState("");

  const results = useMemo(() => {
    if (!q.trim()) return [];
    const scored = items
      .map((it) => ({
        ...it,
        s: scoreMatch(q, `${it.title} ${it.text}`),
      }))
      .filter((x) => x.s > 0)
      .sort((a, b) => b.s - a.s)
      .slice(0, 6);

    return scored;
  }, [q, items]);

  return (
    <div className="w-full">
      <div className="relative">
        <input
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="Ask Dreamhub… (e.g. “discipline camp”, “holiday program”, “booking”)"
          className="w-full rounded-2xl border border-white/15 bg-white/10 backdrop-blur-xl px-5 py-4 text-white placeholder-white/60 shadow-[0_10px_30px_rgba(0,0,0,0.25)] outline-none focus:ring-2 focus:ring-white/30"
          aria-label="AI search"
        />

        {results.length > 0 && (
          <div className="absolute mt-3 w-full rounded-2xl border border-white/10 bg-black/70 backdrop-blur-xl shadow-[0_15px_45px_rgba(0,0,0,0.35)] overflow-hidden">
            {results.map((r, idx) => (
              <Link
                key={`${r.url}-${idx}`}
                href={r.url}
                className="block px-5 py-4 hover:bg-white/10 transition"
              >
                <div className="text-white font-semibold">{r.title}</div>
                <div className="text-white/70 text-sm line-clamp-2">
                  {r.text}
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>

      <p className="text-white/60 text-xs mt-3">
        Smart Search (v1). Next: true AI semantic search once API key is added.
      </p>
    </div>
  );
}
