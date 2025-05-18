import Head from 'next/head';
import Link from 'next/link';

export default function ThankYou() {
  return (
    <>
      <Head>
        <title>Thank You - OSI Solutions Ltd</title>
      </Head>
      <div className="thank-you-page">
        <h1>Thank You!</h1>
        <p>Your message has been sent successfully. We'll get back to you soon.</p>
        <Link href="/" className="cta-button">Back to Home</Link>
      </div>
    </>
  );
} 