import Head from 'next/head';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import emailjs from '@emailjs/browser';
import Image from 'next/image';

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [notification, setNotification] = useState(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await emailjs.send('service_id', 'template_id', formData, 'YOUR_PUBLIC_KEY');
      setNotification({ type: 'success', message: 'Message sent successfully!' });
      setFormData({ name: '', email: '', phone: '', service: '', message: '' });
    } catch (error) {
      setNotification({ type: 'error', message: 'Failed to send message. Please try again.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleWhatsApp = (e) => {
    e.preventDefault();
    const { name, email, phone, service, message } = formData;
    const text = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nService: ${service}\nMessage: ${message}`
    );
    window.open(`https://wa.me/250788647452?text=${text}`, '_blank');
  };

  useEffect(() => {
    if (notification) {
      const timer = setTimeout(() => setNotification(null), 3000);
      return () => clearTimeout(timer);
    }
  }, [notification]);

  return (
    <>
      <Head>
        <title>OSI Solutions Ltd - IT Solutions & Services</title>
        <meta name="description" content="IT solutions and services provider specializing in web development, digital marketing, cloud engineering, and IT infrastructure." />
      </Head>

      <nav>
        <div className="container">
          <div className="logo">
            <Link href="/">
              <span className="logo-link" style={{ display: 'flex', alignItems: 'center' }}>
                <Image src="/images/logo.png" alt="OSI Solutions Logo" width={64} height={64} className="logo-img" priority />
                <span>OSI SOLUTIONS</span>
              </span>
            </Link>
          </div>
          <div className={`burger ${isMenuOpen ? 'toggle' : ''}`} onClick={toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <ul className={`nav-links ${isMenuOpen ? 'nav-active' : ''}`}>
            <li><Link href="#home">Home</Link></li>
            <li><Link href="#services">Our Services</Link></li>
            <li><Link href="#about">About Us</Link></li>
            <li><Link href="#contact">Contact Us</Link></li>
          </ul>
        </div>
      </nav>

      <section id="home" className="hero">
        <div className="container">
          <h1>Transform Your Business with Modern IT Solutions</h1>
          <p>Your trusted technology partner since 2018</p>
          <Link href="#contact" className="cta-button">Get Started</Link>
        </div>
      </section>

      <section id="services" className="services">
        <div className="container">
          <h2>Our Services</h2>
          <p className="section-intro">We provide comprehensive IT solutions to help businesses of all sizes grow and thrive in the digital age. Our services are tailored to meet your specific needs.</p>
          <div className="services-grid">
            <div className="service-card">
              <div className="service-card-header">
                <i className="fas fa-laptop-code service-icon"></i>
                <h3>Web Development</h3>
              </div>
              <div className="service-card-body">
                <p>Custom web applications and responsive websites built with modern technologies.</p>
              </div>
              <div className="service-card-footer">
                <Link href="/services" className="service-link">Learn More <i className="fas fa-arrow-right"></i></Link>
              </div>
            </div>

            <div className="service-card">
              <div className="service-card-header">
                <i className="fas fa-bullhorn service-icon"></i>
                <h3>Digital Marketing</h3>
              </div>
              <div className="service-card-body">
                <p>Strategic digital marketing solutions to boost your online presence and reach.</p>
              </div>
              <div className="service-card-footer">
                <Link href="/services" className="service-link">Learn More <i className="fas fa-arrow-right"></i></Link>
              </div>
            </div>

            <div className="service-card">
              <div className="service-card-header">
                <i className="fas fa-cloud service-icon"></i>
                <h3>Cloud Engineering</h3>
              </div>
              <div className="service-card-body">
                <p>Cloud infrastructure setup, migration, and optimization services.</p>
              </div>
              <div className="service-card-footer">
                <Link href="/services" className="service-link">Learn More <i className="fas fa-arrow-right"></i></Link>
              </div>
            </div>

            <div className="service-card">
              <div className="service-card-header">
                <i className="fas fa-headset service-icon"></i>
                <h3>Technical Support</h3>
              </div>
              <div className="service-card-body">
                <p>24/7 technical support and IT helpdesk services for your business.</p>
              </div>
              <div className="service-card-footer">
                <Link href="/services" className="service-link">Learn More <i className="fas fa-arrow-right"></i></Link>
              </div>
            </div>

            <div className="service-card">
              <div className="service-card-header">
                <i className="fas fa-network-wired service-icon"></i>
                <h3>IT Infrastructure</h3>
              </div>
              <div className="service-card-body">
                <p>Complete IT infrastructure setup and management solutions.</p>
              </div>
              <div className="service-card-footer">
                <Link href="/services" className="service-link">Learn More <i className="fas fa-arrow-right"></i></Link>
              </div>
            </div>

            <div className="service-card">
              <div className="service-card-header">
                <i className="fas fa-shield-alt service-icon"></i>
                <h3>Data Security</h3>
              </div>
              <div className="service-card-body">
                <p>Comprehensive data security and protection services.</p>
              </div>
              <div className="service-card-footer">
                <Link href="/services" className="service-link">Learn More <i className="fas fa-arrow-right"></i></Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="about">
        <div className="container">
          <h2>About Us</h2>
          <p className="section-intro">Learn more about OSI Solutions and our journey to becoming a leading IT solutions provider in Rwanda and beyond.</p>
          <div className="about-content">
            <div className="about-text">
              <div className="phrase-container">
                <div className="phrase">
                  <span className="highlight">Founded in 2018</span> by Valery N.
                </div>
                <div className="phrase">
                  <span className="highlight">Innovative IT solutions</span> for modern businesses
                </div>
                <div className="phrase">
                  <span className="highlight">Technical excellence</span> meets business acumen
                </div>
                <div className="phrase">
                  <span className="highlight">Trusted partner</span> for companies of all sizes
                </div>
                <div className="phrase">
                  <span className="highlight">Customer-focused</span> approach in our services
                </div>
              </div>
            </div>
            <div className="about-stats">
              <div className="stat">
                <i className="fas fa-clock stat-icon"></i>
                <h3>5+</h3>
                <p>Years Experience</p>
              </div>
              <div className="stat">
                <i className="fas fa-project-diagram stat-icon"></i>
                <h3>100+</h3>
                <p>Projects Completed</p>
              </div>
              <div className="stat">
                <i className="fas fa-headset stat-icon"></i>
                <h3>24/7</h3>
                <p>Support</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="contact">
        <div className="container">
          <h2>Contact Us</h2>
          <div className="contact-content">
            <div className="contact-grid">
              <form className="contact-form" onSubmit={handleWhatsApp}>
                <input
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Your Phone Number"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                />
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleInputChange}
                  required
                >
                  <option value="">Select Service</option>
                  <option value="Web Development">Web Development</option>
                  <option value="Digital Marketing">Digital Marketing</option>
                  <option value="Cloud Engineering">Cloud Engineering</option>
                  <option value="Technical Support">Technical Support</option>
                  <option value="IT Infrastructure">IT Infrastructure</option>
                  <option value="Data Security">Data Security</option>
                  <option value="Software Development">Software Development</option>
                  <option value="Software Licensing">Software Licensing</option>
                  <option value="Hardware Solutions">Hardware Solutions</option>
                </select>
                <textarea
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                ></textarea>
                <button type="submit" className="cta-button whatsapp-btn">
                  <i className="fab fa-whatsapp"></i> Send via WhatsApp
                </button>
              </form>
              <div className="contact-info">
                <div className="info-item">
                  <i className="fas fa-map-marker-alt"></i>
                  <p>Kigali, Rwanda</p>
                </div>
                <div className="info-item">
                  <i className="fas fa-phone"></i>
                  <p>+250 788 647 452</p>
                </div>
                <div className="info-item">
                  <i className="fas fa-envelope"></i>
                  <p>valery.n@osisolutions.pro</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer>
        <div className="container">
          <p>&copy; 2025 OSI Solutions Ltd. All rights reserved.</p>
        </div>
      </footer>

      {notification && (
        <div className={`notification ${notification.type}`}>
          {notification.message}
        </div>
      )}

      <style jsx>{`
        .whatsapp-contact-btn {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          background: #25D366;
          color: #fff;
          font-weight: 700;
          font-size: 1.1rem;
          padding: 14px 32px;
          border-radius: 6px;
          text-decoration: none;
          margin: 0 auto;
          box-shadow: 0 2px 8px rgba(44,62,80,0.08);
          transition: background 0.18s, transform 0.18s;
          border: none;
          cursor: pointer;
        }
        .whatsapp-contact-btn:hover {
          background: #128C7E;
          transform: scale(1.05);
        }
        .whatsapp-icon {
          font-size: 1.5rem;
        }
        .whatsapp-btn {
          background: #25D366;
          color: #fff;
          border: none;
          display: flex;
          align-items: center;
          gap: 8px;
          font-weight: 700;
          font-size: 1.1rem;
          transition: background 0.18s, transform 0.18s;
        }
        .whatsapp-btn:hover {
          background: #128C7E;
          transform: scale(1.05);
        }
        .business-hours {
          background: #fff;
          border-radius: 10px;
          padding: 24px;
          margin: 24px 0;
          box-shadow: 0 2px 12px rgba(44,62,80,0.07);
        }
        .business-hours h3 {
          color: #2c3e50;
          font-size: 1.4rem;
          margin-bottom: 20px;
          text-align: center;
        }
        .hours-grid {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }
        .hours-item {
          display: flex;
          align-items: center;
          gap: 16px;
          padding: 12px;
          background: #f8f9fa;
          border-radius: 8px;
        }
        .hours-icon {
          font-size: 1.5rem;
        }
        .hours-content {
          text-align: left;
        }
        .hours-content h4 {
          color: #2c3e50;
          font-size: 1.1rem;
          margin: 0 0 4px 0;
        }
        .hours-content p {
          color: #666;
          margin: 0;
          font-size: 1rem;
        }
        @media (max-width: 700px) {
          .business-hours {
            padding: 20px;
          }
          .hours-item {
            padding: 10px;
          }
        }
        .contact {
          position: relative;
          overflow: hidden;
        }
        .contact::before {
          content: '';
          position: absolute;
          top: 50%;
          right: 0;
          transform: translateY(-50%);
          width: 900px;
          height: 900px;
          background: url('/images/logo.png') no-repeat right center;
          background-size: contain;
          opacity: 0.06;
          z-index: 0;
          pointer-events: none;
        }
        .contact-content, .contact h2 {
          position: relative;
          z-index: 1;
        }
        .contact h2 {
          font-size: 2.4rem;
          margin-bottom: 48px;
          text-align: center;
          color: #2c3e50;
        }
        .contact-grid {
          display: grid;
          grid-template-columns: 62% 38%;
          gap: 48px;
          align-items: start;
        }
        .contact-info {
          background: #f8f9fa;
          border-radius: 16px;
          padding: 36px;
          box-shadow: 0 4px 24px rgba(44,62,80,0.08);
          display: flex;
          flex-direction: column;
          gap: 32px;
          margin: 0 auto;
          max-width: 340px;
        }
        .info-item {
          display: flex;
          align-items: center;
          gap: 16px;
          color: #ff6b33;
          font-size: 1.2rem;
        }
        .info-item p {
          margin: 0;
          color: #2c3e50;
          font-size: 1.1rem;
        }
        .business-hours {
          background: #fff;
          border-radius: 16px;
          padding: 48px;
          box-shadow: 0 4px 24px rgba(44,62,80,0.08);
          animation: fadeInUp 0.8s ease-out 0.4s backwards;
        }
        .business-hours h3 {
          color: #2c3e50;
          font-size: 1.5rem;
          margin-bottom: 30px;
          text-align: center;
        }
        .hours-grid {
          display: flex;
          flex-direction: column;
          gap: 24px;
        }
        .hours-item {
          display: flex;
          align-items: center;
          gap: 24px;
          padding: 24px;
          background: #f8f9fa;
          border-radius: 12px;
          transition: transform 0.2s ease;
        }
        .hours-item:hover {
          transform: translateY(-2px);
        }
        .hours-icon {
          font-size: 1.8rem;
        }
        .hours-content {
          text-align: left;
        }
        .hours-content h4 {
          color: #2c3e50;
          font-size: 1.2rem;
          margin: 0 0 8px 0;
        }
        .hours-content p {
          color: #666;
          margin: 0;
          font-size: 1.1rem;
        }
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @media (max-width: 768px) {
          .contact {
            padding: 60px 0;
          }
          .contact h2 {
            font-size: 2rem;
            margin-bottom: 36px;
          }
          .contact-grid {
            grid-template-columns: 1fr;
            gap: 32px;
          }
          .contact-form,
          .contact-info {
            max-width: 100%;
            width: 100%;
            padding: 24px;
            margin: 0 auto;
          }
        }
        .logo-img {
          display: inline-block;
          vertical-align: middle;
          margin-right: 14px;
          height: 64px;
          width: 64px;
        }
      `}</style>
    </>
  );
} 