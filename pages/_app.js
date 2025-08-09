// pages/_app.js
import Head from "next/head";
import "../styles/globals.css";
import Header from "../components/Header";

const GA_ID = "G-XXXXXXXXXX"; // ← replace with your GA4 ID when you have it

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* Basic SEO defaults */}
        <meta name="theme-color" content="#ffffff" />
        <meta property="og:site_name" content="Phoenix Creek Supply" />
        <meta property="og:type" content="website" />
      </Head>

      {/* Google Analytics (safe to keep even before you add your real ID) */}
      {GA_ID !== "G-XXXXXXXXXX" && (
        <>
          <script async src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}></script>
          <script
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${GA_ID}');
              `,
            }}
          />
        </>
      )}

      <Header />
      <main className="min-h-screen bg-white text-gray-900">
        <Component {...pageProps} />
      </main>

      <footer className="border-t border-gray-200 bg-white">
        <div className="mx-auto max-w-6xl px-5 py-8 text-sm text-gray-600">
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
            <p>Field-tested by Monroe · Patience is a Virtue</p>
            <p className="text-xs text-gray-500">
              As an Amazon Associate, we earn from qualifying purchases.
            </p>
            <nav className="text-xs space-x-4">
              <a href="/disclaimer" className="hover:underline">Disclaimer</a>
              <a href="/terms" className="hover:underline">Terms</a>
              <a href="/privacy" className="hover:underline">Privacy</a>
            </nav>
          </div>
        </div>
      </footer>
    </>
  );
    }
