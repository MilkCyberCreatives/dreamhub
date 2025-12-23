import { createClient } from "@sanity/client";

const projectId = (process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "").trim();
const dataset = (process.env.NEXT_PUBLIC_SANITY_DATASET || "production").trim();
const apiVersion = (process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2024-01-01").trim();

if (!projectId) {
  throw new Error("Missing NEXT_PUBLIC_SANITY_PROJECT_ID in .env.local");
}

// Sanity projectId format check: lowercase a-z, 0-9, and hyphen only
if (!/^[a-z0-9-]+$/.test(projectId)) {
  throw new Error(
    `Invalid Sanity projectId "${projectId}". Use only lowercase a-z, 0-9, and hyphens (-).`
  );
}

export const sanityClient = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: process.env.NODE_ENV === "production",
});
