// pages/booking/cancel.tsx
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { useMemo } from "react";
import dynamic from "next/dynamic";

const MainHeader = dynamic(() => import("@/components/MainHeader"), { ssr: false });
// If you have a footer component, uncomment and adjust:
// const FooterSection = dynamic(() => import("@/components/FooterSection"), { ssr: false });

export default function BookingCancelPage() {
  const router = useRouter();

  const transactionReference = useMemo(() => {
    if (!router.isReady) return "";
    const q = router.query;

    // Support common query param names:
    const ref =
      (q.transactionReference as string) ||
      (q.ref as string) ||
      (q.transaction_reference as string) ||
      "";

    return typeof ref === "string" ? ref : "";
  }, [router.isReady, router.query]);

  return (
    <>
      <Head>
        <title>Payment Cancelled | Dreamhub</title>
        <meta
          name="description"
          content="Your Dreamhub payment was cancelled. You can try again anytime."
        />
        {/* ✅ SEO: do not index cancel pages */}
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
                  className="h-12 w-12 rounded-full flex items-center justify-center bg-yellow-500/10 text-yellow-400"
                  aria-hidden="true"
                >
                  !
                </div>

                <div className="flex-1">
                  <h1 className="text-2xl sm:text-3xl font-bold text-white">
                    Payment Cancelled
                  </h1>

                  <p className="mt-2 text-white/80">
                    No worries — your payment was cancelled and you have not been charged.
                    You can try again whenever you’re ready.
                  </p>

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
                      href="/booking"
                      className="btn btn-primary w-full sm:w-auto text-center"
                    >
                      Try Again
                    </Link>

                    <Link
                      href="/contact"
                      className="btn btn-outline w-full sm:w-auto text-center"
                    >
                      Contact Support
                    </Link>
                  </div>

                  <p className="mt-4 text-sm text-white/60">
                    If you keep getting cancelled unexpectedly, try a different device/network
                    or contact us for help.
                  </p>
                </div>
              </div>
            </div>

            <p className="mt-6 text-center text-sm text-white/60">
              You can also browse our camp options at any time.
            </p>

            <div className="mt-4 flex justify-center">
              <Link
                href="/camps"
                className="text-sm text-white/70 hover:text-white underline underline-offset-4"
              >
                View Camps
              </Link>
            </div>
          </div>
        </div>
      </main>

      {/* <FooterSection /> */}
    </>
  );
}
