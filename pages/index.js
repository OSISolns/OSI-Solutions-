import Head from 'next/head';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import emailjs from '@emailjs/browser';

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
            <Link href="/" className="logo-link">
              <svg className="logo-icon" width="32" height="32" viewBox="0 0 32 32">
                <path fill="currentColor" d="M16 0C7.163 0 0 7.163 0 16s7.163 16 16 16 16-7.163 16-16S24.837 0 16 0zm0 4c6.627 0 12 5.373 12 12s-5.373 12-12 12S4 22.627 4 16 9.373 4 16 4zm0 4c-4.418 0-8 3.582-8 8s3.582 8 8 8 8-3.582 8-8-3.582-8-8-8z"/>
              </svg>
              <span>OSI SOLUTIONS</span>
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
            <form className="contact-form" onSubmit={handleSubmit}>
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
              <button type="submit" className="cta-button" disabled={isSubmitting}>
                <span className="button-text">Send Message</span>
                {isSubmitting && <span className="button-loader"></span>}
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
                <p>valery.osisolns@gmail.com</p>
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
    </>
  );
} 