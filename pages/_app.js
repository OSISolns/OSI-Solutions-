import '../styles/globals.css';
import { useEffect } from 'react';

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
    window.addEventListener('keydown', function(e) {
      if (e.ctrlKey && (e.key === 'u' || e.key === 's')) {
        e.preventDefault();
        return false;
      }
    });
  }, []);

  return <Component {...pageProps} />;
}

export default MyApp; 
