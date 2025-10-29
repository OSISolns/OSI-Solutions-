import '../styles/globals.css';
import { useEffect } from 'react';
import Script from 'next/script';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    // Protection logic from protect.js
    if (window.location !== window.parent.location) {
      window.top.location = window.location;
    }

    const warning = `
    ⚠️ Warning:
    This site is protected by copyright law.
    Unauthorized use or reproduction is prohibited.
    
    © 2024 OSI Solutions Ltd
    `;
    console.log(warning);

    window.addEventListener('keydown', function (e) {
      if (e.ctrlKey && (e.key === 'u' || e.key === 's')) {
        e.preventDefault();
        return false;
      }
    });
  }, []);

  return (
    <>
      {/* Google AdSense Script */}
      <Script
        id="adsense-script"
        strategy="afterInteractive"
        async
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6854820298632805"
        crossOrigin="anonymous"
      />

      {/* Your App */}
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
