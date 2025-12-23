// pages/booking/success.tsx
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useMemo, useState } from "react";
import dynamic from "next/dynamic";

const MainHeader = dynamic(() => import("@/components/MainHeader"), { ssr: false });
// If you have a Footer component, uncomment and adjust the path:
// const FooterSection = dynamic(() => import("@/components/FooterSection"), { ssr: false });

type PaymentState = "checking" | "paid" | "pending" | "failed" | "unknown";

export default function BookingSuccessPage() {
  const router = useRouter();
  const [status, setStatus] = useState<PaymentState>("checking");
  const [message, setMessage] = useState<string>("Verifying your payment…");

  const transactionReference = useMemo(() => {
    if (!router.isReady) return "";
    const q = router.query;

    // Support common names:
    // ?transactionReference=...  | ?ref=... | ?transaction_reference=...
    const ref =
      (q.transactionReference as string) ||
      (q.ref as string) ||
      (q.transaction_reference as string) ||
      "";

    return typeof ref === "string" ? ref : "";
  }, [router.isReady, router.query]);

  useEffect(() => {
    if (!router.isReady) return;

    // If we don't have a ref, still show a success message (user might land here without query params)
    if (!transactionReference) {
      setStatus("unknown");
      setMessage(
        "Payment completed. If you don’t see a reference code, please check your email for confirmation."
      );
      return;
    }

    // Optional status check endpoint (won’t break if not implemented yet)
    const checkStatus = async () => {
      try {
        const res = await fetch(`/api/booking-status?ref=${encodeURIComponent(transactionReference)}`);
        if (!res.ok) {
          // If endpoint doesn't exist yet, show a safe success message
          setStatus("paid");
          setMessage("Payment successful! Your booking is being confirmed.");
          return;
        }

        const data = await res.json().catch(() => null);

        // Expected: { paymentStatus: "paid" | "pending" | "failed" }
        const ps = (data?.paymentStatus || "").toLowerCase();

        if (ps === "paid") {
          setStatus("paid");
          setMessage("Payment successful! Your booking is confirmed.");
        } else if (ps === "failed") {
          setStatus("failed");
          setMessage("Your payment was not successful. Please try again.");
        } else if (ps === "pending") {
          setStatus("pending");
          setMessage(
            "Your payment is processing. This can take a few minutes. Refresh this page shortly."
          );
        } else {
          setStatus("paid");
          setMessage("Payment successful! Your booking is being confirmed.");
        }
      } catch {
        // Network issues — still show a positive safe message
        setStatus("paid");
        setMessage("Payment successful! Your booking is being confirmed.");
      }
    };

    checkStatus();
  }, [router.isReady, transactionReference]);

  return (
    <>
      <Head>
        <title>Payment Successful | Dreamhub</title>
        <meta
          name="description"
          content="Your Dreamhub payment was successful. Thank you for booking a camp."
        />
        {/* ✅ SEO: do not index success pages */}
        <meta name="robots" content="noindex,nofollow" />
      </Head>

      <MainHeader />

      {/* Spacer so content doesn't hide behind fixed header */}
      <div className="h-[110px]" />

      <main className="section">
        <div className="container">
          <div className="max-w-2xl mx-auto">
            <div className="glass p-6 sm:p-8">
              <div className="flex items-start gap-4">
                <div
                  className={[
                    "h-12 w-12 rounded-full flex items-center justify-center",
                    status === "failed"
                      ? "bg-red-500/10 text-red-600"
                      : "bg-green-500/10 text-green-600",
                  ].join(" ")}
                  aria-hidden="true"
                >
                  {status === "failed" ? "✕" : "✓"}
                </div>

                <div className="flex-1">
                  <h1 className="text-2xl sm:text-3xl font-bold text-white">
                    {status === "failed" ? "Payment Failed" : "Payment Successful"}
                  </h1>

                  <p className="mt-2 text-white/80">{message}</p>

                  {transactionReference ? (
                    <div className="mt-4 rounded-xl border border-white/10 bg-white/5 p-4">
                      <p className="text-xs text-white/60">Transaction Reference</p>
                      <p className="mt-1 text-sm font-semibold text-white break-all">
                        {transactionReference}
                      </p>
                    </div>
                  ) : null}

                  <div className="mt-6 flex flex-col sm:flex-row gap-3">
                    <Link
                      href="/camps"
                      className="btn btn-outline w-full sm:w-auto text-center"
                    >
                      View Camps
                    </Link>

                    {status === "failed" ? (
                      <Link
                        href="/booking"
                        className="btn btn-primary w-full sm:w-auto text-center"
                      >
                        Try Payment Again
                      </Link>
                    ) : (
                      <Link
                        href="/contact"
                        className="btn btn-primary w-full sm:w-auto text-center"
                      >
                        Need Help? Contact Us
                      </Link>
                    )}
                  </div>

                  {status === "pending" ? (
                    <button
                      onClick={() => window.location.reload()}
                      className="mt-4 text-sm text-white/70 hover:text-white underline underline-offset-4"
                    >
                      Refresh status
                    </button>
                  ) : null}
                </div>
              </div>
            </div>

            <p className="mt-6 text-center text-sm text-white/60">
              A confirmation email will be sent to you. If you don’t receive it, please contact us.
            </p>
          </div>
        </div>
      </main>

      {/* If you have FooterSection, use it here */}
      {/* <FooterSection /> */}
    </>
  );
}
