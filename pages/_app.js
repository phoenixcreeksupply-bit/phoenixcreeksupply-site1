// pages/_app.js
import "../styles/globals.css";
import Header from "../components/Header";

export default function App({ Component, pageProps }) {
  return (
    <main className="min-h-screen bg-white text-gray-900 font-sans">
      <Header />
      <div className="px-6 pb-12">
        <Component {...pageProps} />
      </div>
    <Head>
  <title>Phoenix Creek Supply — Rugged Tools for the Modern Stoic</title>
  <meta name="description" content="Field-tested gear, digital guides, and no-nonsense tools for the modern stoic." />
</Head>
    {/* Google Analytics – replace G-XXXXXXXXXX */}
<script async src={`https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX`}></script>
<script
  dangerouslySetInnerHTML={{
    __html: `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'GA4500338019');
    `,
  }}
/>
    </main>
  );
}
