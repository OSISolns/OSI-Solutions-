import Head from 'next/head';
import Link from 'next/link';

const services = [
  {
    icon: 'fas fa-laptop-code',
    title: 'Web Development',
    description: 'Custom web applications and responsive websites built with modern technologies. Scalable, secure, and high-performance solutions tailored to your business.',
    features: [
      'Responsive & mobile-first design',
      'E-commerce & CMS solutions',
      'API integration',
      'Performance optimization',
      'SEO best practices',
    ],
  },
  {
    icon: 'fas fa-bullhorn',
    title: 'Digital Marketing',
    description: 'Strategic digital marketing to boost your online presence and reach. Connect with your audience and grow your brand.',
    features: [
      'Social media management',
      'Content creation',
      'SEO & SEM',
      'Email marketing',
      'Analytics & reporting',
    ],
  },
  {
    icon: 'fas fa-cloud',
    title: 'Cloud Engineering',
    description: 'Cloud infrastructure setup, migration, and optimization. Reliable, secure, and cost-effective cloud solutions for your business.',
    features: [
      'Cloud migration',
      'Infrastructure as Code (IaC)',
      'Cloud security',
      'Cost optimization',
      'Multi-cloud solutions',
    ],
  },
  {
    icon: 'fas fa-headset',
    title: 'Technical Support',
    description: '24/7 technical support and IT helpdesk services. Our team is always ready to assist you with any IT challenges.',
    features: [
      'Remote & onsite support',
      'Proactive monitoring',
      'Incident management',
      'User training',
      'Service Level Agreements (SLAs)',
    ],
  },
  {
    icon: 'fas fa-network-wired',
    title: 'IT Infrastructure',
    description: 'Complete IT infrastructure setup and management. We design, implement, and maintain robust IT environments for your business.',
    features: [
      'Network design & setup',
      'Server & storage solutions',
      'Virtualization',
      'Backup & disaster recovery',
      'IT asset management',
    ],
  },
  {
    icon: 'fas fa-shield-alt',
    title: 'Data Security',
    description: 'Comprehensive data security and protection services. Safeguard your business data with advanced security measures and best practices.',
    features: [
      'Risk assessment',
      'Data encryption',
      'Access control',
      'Security audits',
      'Compliance consulting',
    ],
  },
];

export default function Services() {
  return (
    <>
      <Head>
        <title>Our Services - OSI Solutions Ltd</title>
        <meta name="description" content="Explore the full range of IT services offered by OSI Solutions Ltd, including web development, digital marketing, cloud engineering, technical support, IT infrastructure, and data security." />
      </Head>
      {/* Header */}
      <section className="services-hero">
        <div className="container">
          <Link href="/" legacyBehavior>
            <a className="back-home-btn">&larr; Back to Home</a>
          </Link>
          <h1 className="services-title animated-fadein">Our Services</h1>
          <p className="services-intro animated-fadein" style={{ animationDelay: '0.1s' }}>OSI Solutions Ltd offers a comprehensive suite of IT services to help your business thrive in the digital age. Explore our expertise below and see how we can empower your success.</p>
        </div>
      </section>
      <section className="services-grid-section">
        <div className="container">
          <div className="services-grid">
            {services.map((service, idx) => (
              <div className="service-card-pro animated-slideup" key={service.title} style={{ animationDelay: `${0.1 + idx * 0.1}s` }}>
                <div className="service-card-header-pro">
                  <i className={`${service.icon} service-card-icon-pro`}></i>
                  <h2>{service.title}</h2>
                </div>
                <p className="service-card-desc-pro">{service.description}</p>
                <ul className="service-features-list-pro">
                  {service.features.map((feature, i) => (
                    <li key={i}><i className="fas fa-check-circle feature-check-pro"></i> {feature}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Business Hours Section */}
      <section className="business-hours-section">
        <div className="container">
          <h2 className="business-hours-title">Business Hours</h2>
          <div className="business-hours-grid">
            <div className="business-hours-card">
              <div className="hours-item">
                <span className="hours-icon">🕒</span>
                <div className="hours-content">
                  <h3>Monday – Friday</h3>
                  <p>8:00 AM – 6:00 PM</p>
                </div>
              </div>
              <div className="hours-item">
                <span className="hours-icon">📅</span>
                <div className="hours-content">
                  <h3>Saturday</h3>
                  <p>9:00 AM – 2:00 PM</p>
                </div>
              </div>
              <div className="hours-item">
                <span className="hours-icon">🚫</span>
                <div className="hours-content">
                  <h3>Sunday</h3>
                  <p>Closed</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Tech Blog Section */}
      <section className="tech-blog-section">
        <div className="container">
          <h2 className="tech-blog-title">Tech Blog & Knowledge Base</h2>
          <div className="tech-blog-grid">
            <div className="blog-post-card">
              <h3>5 Ways to Secure Your Small Business Network</h3>
              <p>Learn practical steps to protect your business from cyber threats, including strong passwords, firewalls, regular updates, employee training, and secure Wi-Fi.</p>
              <a href="#" className="blog-read-more">Read More</a>
            </div>
            <div className="blog-post-card">
              <h3>Why POS Systems Fail — and How to Prevent It</h3>
              <p>Discover the common reasons POS systems break down, from hardware issues to software bugs, and get tips on maintenance, backups, and choosing reliable vendors.</p>
              <a href="#" className="blog-read-more">Read More</a>
            </div>
            <div className="blog-post-card">
              <h3>Laravel vs Next.js for Web Apps</h3>
              <p>Which framework is right for your next project? We compare Laravel and Next.js in terms of performance, scalability, developer experience, and use cases.</p>
              <a href="#" className="blog-read-more">Read More</a>
            </div>
          </div>
        </div>
      </section>
      {/* Footer */}
      <footer className="site-footer">
        <div className="container">
          <p>&copy; {new Date().getFullYear()} OSI Solutions Ltd. All rights reserved.</p>
          <p>Kigali, Rwanda</p>
        </div>
      </footer>
      <style jsx>{`
        @keyframes fadeIn {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes slideUp {
          0% { opacity: 0; transform: translateY(40px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animated-fadein {
          opacity: 0;
          animation: fadeIn 0.8s forwards;
        }
        .animated-slideup {
          opacity: 0;
          animation: slideUp 0.8s forwards;
        }
        .service-card-pro.animated-slideup {
          will-change: opacity, transform;
        }
        .services-title.animated-fadein,
        .services-intro.animated-fadein,
        .services-cta.animated-fadein,
        .services-cta-section .animated-fadein {
          will-change: opacity, transform;
        }
        .services-hero {
          background: linear-gradient(90deg, #f4f6f9 60%, #fff 100%);
          padding: 60px 0 30px 0;
          text-align: center;
        }
        .services-title {
          font-size: 2.8rem;
          font-weight: 800;
          color: #2c3e50;
          margin-bottom: 10px;
        }
        .services-intro {
          max-width: 700px;
          margin: 0 auto 30px auto;
          color: #555;
          font-size: 1.2rem;
        }
        .services-cta {
          display: inline-block;
          margin-top: 18px;
          background: #ff6b33;
          color: #fff;
          padding: 14px 36px;
          border-radius: 6px;
          font-weight: 700;
          font-size: 1.1rem;
          text-decoration: none;
          transition: background 0.2s;
        }
        .services-cta:hover {
          background: #e65721;
        }
        .services-grid-section {
          background: #f4f6f9;
          padding: 30px 0 60px 0;
        }
        .services-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(340px, 1fr));
          gap: 32px;
        }
        .service-card-pro {
          background: #fff;
          border-radius: 14px;
          box-shadow: 0 4px 24px rgba(44,62,80,0.07);
          padding: 36px 28px 28px 28px;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          transition: box-shadow 0.2s, transform 0.2s, border 0.2s;
          position: relative;
          border-top: 4px solid transparent;
        }
        .service-card-pro:hover {
          box-shadow: 0 12px 36px rgba(44,62,80,0.18);
          transform: translateY(-8px) scale(1.035);
          z-index: 2;
          border-top: 4px solid #ff6b33;
        }
        .service-card-pro::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 4px;
          background: linear-gradient(90deg, #ff6b33 0%, #e65721 100%);
          border-radius: 14px 14px 0 0;
          opacity: 0;
          transition: opacity 0.2s;
        }
        .service-card-pro:hover::before {
          opacity: 1;
        }
        .service-card-header-pro {
          display: flex;
          align-items: center;
          gap: 18px;
          margin-bottom: 12px;
        }
        .service-card-icon-pro {
          font-size: 2.2rem;
          color: #ff6b33;
        }
        .service-card-header-pro h2 {
          font-size: 1.5rem;
          font-weight: 700;
          color: #2c3e50;
          margin: 0;
        }
        .service-card-desc-pro {
          color: #444;
          margin-bottom: 18px;
          font-size: 1.08rem;
        }
        .service-features-list-pro {
          list-style: none;
          padding: 0;
          margin: 0 0 18px 0;
        }
        .service-features-list-pro li {
          margin-bottom: 8px;
          color: #333;
          font-size: 1rem;
          display: flex;
          align-items: center;
        }
        .feature-check-pro {
          color: #4CAF50;
          margin-right: 8px;
        }
        .services-cta-section {
          background: #fff;
          padding: 40px 0 60px 0;
          text-align: center;
        }
        .services-cta-section h2 {
          font-size: 2rem;
          font-weight: 700;
          color: #2c3e50;
          margin-bottom: 10px;
        }
        .services-cta-section p {
          color: #555;
          margin-bottom: 18px;
        }
        .services-cta, .services-cta-section .cta-button {
          transition: background 0.2s, transform 0.18s;
        }
        .services-cta:hover, .services-cta-section .cta-button:hover {
          background: #e65721;
          transform: scale(1.06);
        }
        @media (max-width: 700px) {
          .services-grid {
            grid-template-columns: 1fr;
          }
        }
        .back-home-btn {
          display: inline-block;
          margin-bottom: 18px;
          background: #fff;
          color: #ff6b33;
          border: 2px solid #ff6b33;
          padding: 8px 22px;
          border-radius: 6px;
          font-weight: 600;
          font-size: 1rem;
          text-decoration: none;
          transition: background 0.18s, color 0.18s, border 0.18s, transform 0.18s;
          margin-right: auto;
        }
        .back-home-btn:hover {
          background: #ff6b33;
          color: #fff;
          border-color: #e65721;
          transform: translateY(-2px) scale(1.04);
        }
        .site-footer {
          background: #2c3e50;
          color: #fff;
          text-align: center;
          padding: 28px 0 18px 0;
          margin-top: 60px;
        }
        .site-footer a {
          color: #ff6b33;
          text-decoration: underline;
        }
        .site-footer a:hover {
          color: #fff;
        }
        .tech-blog-section {
          background: #fff;
          padding: 60px 0 40px 0;
          text-align: center;
        }
        .tech-blog-title {
          font-size: 2rem;
          color: #2c3e50;
          margin-bottom: 32px;
          font-weight: 700;
        }
        .tech-blog-grid {
          display: flex;
          flex-wrap: wrap;
          gap: 32px;
          justify-content: center;
        }
        .blog-post-card {
          background: #f4f6f9;
          border-radius: 10px;
          box-shadow: 0 2px 12px rgba(44,62,80,0.07);
          padding: 28px 24px;
          max-width: 340px;
          min-width: 260px;
          font-size: 1.08rem;
          color: #333;
          text-align: left;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
        }
        .blog-post-card h3 {
          color: #ff6b33;
          font-size: 1.18rem;
          font-weight: 700;
          margin-bottom: 12px;
        }
        .blog-post-card p {
          margin-bottom: 18px;
        }
        .blog-read-more {
          color: #ff6b33;
          font-weight: 600;
          text-decoration: none;
          margin-top: auto;
          transition: color 0.18s;
        }
        .blog-read-more:hover {
          color: #e65721;
          text-decoration: underline;
        }
        @media (max-width: 700px) {
          .tech-blog-grid {
            flex-direction: column;
            gap: 18px;
          }
        }
        .business-hours-section {
          background: #f4f6f9;
          padding: 60px 0;
          text-align: center;
        }
        .business-hours-title {
          font-size: 2rem;
          color: #2c3e50;
          margin-bottom: 32px;
          font-weight: 700;
        }
        .business-hours-grid {
          display: flex;
          justify-content: center;
          padding: 0 20px;
        }
        .business-hours-card {
          background: #fff;
          border-radius: 14px;
          box-shadow: 0 4px 24px rgba(44,62,80,0.07);
          padding: 36px;
          max-width: 500px;
          width: 100%;
        }
        .hours-item {
          display: flex;
          align-items: center;
          gap: 20px;
          padding: 16px 0;
          border-bottom: 1px solid #eee;
        }
        .hours-item:last-child {
          border-bottom: none;
        }
        .hours-icon {
          font-size: 1.8rem;
        }
        .hours-content {
          text-align: left;
        }
        .hours-content h3 {
          color: #2c3e50;
          font-size: 1.2rem;
          font-weight: 600;
          margin: 0 0 4px 0;
        }
        .hours-content p {
          color: #666;
          margin: 0;
          font-size: 1.1rem;
        }
        @media (max-width: 700px) {
          .business-hours-card {
            padding: 24px;
          }
          .hours-item {
            padding: 12px 0;
          }
        }
      `}</style>
    </>
  );
} 