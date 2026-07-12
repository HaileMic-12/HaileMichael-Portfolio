import React, { useRef, useState, memo } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { TbMail, TbPhone, TbMapPin, TbBrandGithub, TbSend } from 'react-icons/tb';

// 1. DATA EXTRACTION: Keep constant data outside the component lifecycle
const CONTACT_INFO = [
  {
    id: 'email',
    label: 'Email',
    value: 'hailemichaelmekonenn@gmail.com',
    link: 'mailto:hailemichaelmekonenn@gmail.com',
    icon: TbMail
  },
  {
    id: 'phone',
    label: 'Phone',
    value: '+251 993 965 310',
    link: 'tel:+251993965310',
    icon: TbPhone
  },
  {
    id: 'location',
    label: 'Location',
    value: 'Addis Ababa, Ethiopia',
    link: null,
    icon: TbMapPin
  },
  {
    id: 'github',
    label: 'GitHub',
    value: 'github.com/HaileMic-12',
    link: 'https://github.com/HaileMic-12',
    icon: TbBrandGithub
  }
];

// 2. ANIMATION CONFIGURATIONS
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.15
    }
  }
};

const cardElementVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
  }
};

const Contact = memo(() => {
  const form = useRef();
  const [buttonText, setButtonText] = useState('Send Message');
  const [isSending, setIsSending] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSending(true);
    setButtonText('Sending...');

    emailjs.sendForm(
      'service_ap0njjx', 
      'template_yhbtwz8', 
      form.current, 
      'ghRVM6FfnbkWPWTvC'
    )
      .then((result) => {
          setButtonText('Message Sent!');
          setIsSending(false);
          e.target.reset(); 
          
          setTimeout(() => setButtonText('Send Message'), 3000);
      }, (error) => {
          console.log(error.text);
          setButtonText('Failed. Try Again.');
          setIsSending(false);
          
          setTimeout(() => setButtonText('Send Message'), 3000);
      });
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,600;0,800;1,600&family=Inter:wght@400;500;600;700&display=swap');

        :root {
          --contact-bg: #F4F3F0;
          --contact-text-main: #232524;
          --contact-text-muted: #5C605E;
          --contact-accent-primary: #C08457;
          --contact-accent-hover: #8B5A2B;
          --contact-accent-secondary: #8A9A86;
          --contact-card-bg: rgba(252, 251, 250, 0.65);
          --contact-border: rgba(220, 218, 213, 0.8);
          --contact-input-bg: rgba(255, 255, 255, 0.5);
          --contact-focus-ring: #C08457;
        }

        .contact-section {
          position: relative;
          padding: 8rem 2rem;
          background-color: var(--contact-bg);
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.04'/%3E%3C/svg%3E");
          overflow: hidden;
          z-index: 1;
          font-family: 'Inter', sans-serif;
        }

        .contact-orb {
          position: absolute;
          border-radius: 50%;
          filter: blur(100px);
          z-index: -1;
          animation: float-contact 22s infinite ease-in-out alternate;
          opacity: 0.6;
          pointer-events: none;
        }
        
        .orb-top-right {
          top: 5%; right: -5%; width: 600px; height: 600px;
          background: rgba(212, 163, 115, 0.25);
        }
        
        .orb-bottom-left {
          bottom: 5%; left: -5%; width: 700px; height: 700px;
          background: rgba(138, 154, 134, 0.3);
          animation-delay: -9s;
        }

        @keyframes float-contact {
          0% { transform: translate(0, 0) scale(1) rotate(0deg); }
          100% { transform: translate(-40px, -60px) scale(1.1) rotate(-5deg); }
        }

        .contact-container {
          max-width: 1100px;
          margin: 0 auto;
        }

        .section-header {
          text-align: center;
          margin-bottom: 5rem;
        }

        .section-title {
          font-family: 'Playfair Display', serif;
          font-size: clamp(3rem, 5vw, 4rem);
          font-weight: 800;
          color: var(--contact-text-main);
          margin-bottom: 1.2rem;
          line-height: 1.1;
          letter-spacing: -0.03em;
        }

        .highlight-text {
          color: var(--contact-accent-primary);
          font-style: italic;
        }

        .section-subtitle {
          color: var(--contact-text-muted);
          font-size: 1.15rem;
          max-width: 550px;
          margin: 0 auto;
          line-height: 1.8;
          font-weight: 400;
        }

        .contact-card {
          display: grid;
          grid-template-columns: 1fr 1.5fr;
          gap: 4rem;
          background: var(--contact-card-bg);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.8);
          border-radius: 2rem;
          padding: 4rem;
          box-shadow: 0 15px 40px rgba(35, 37, 36, 0.04), inset 0 0 0 1px rgba(255, 255, 255, 0.5);
        }

        .contact-info {
          display: flex;
          flex-direction: column;
          gap: 2.5rem;
        }

        .info-block {
          display: flex;
          align-items: flex-start;
          gap: 1.2rem;
        }

        .info-icon-wrapper {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 44px;
          height: 44px;
          background: #ffffff;
          border: 1px solid var(--contact-border);
          border-radius: 0.8rem;
          color: var(--contact-accent-primary);
          font-size: 1.4rem;
          box-shadow: 0 4px 10px rgba(0,0,0,0.02);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .info-block:hover .info-icon-wrapper {
          transform: translateY(-3px) scale(1.05);
          box-shadow: 0 8px 15px rgba(192, 132, 87, 0.15);
        }

        .info-content {
          display: flex;
          flex-direction: column;
          gap: 0.3rem;
        }

        .info-label {
          font-size: 0.75rem;
          text-transform: uppercase;
          letter-spacing: 0.15em;
          color: var(--contact-text-muted);
          font-weight: 700;
        }

        .info-value {
          color: var(--contact-text-main);
          font-size: 1.05rem;
          font-weight: 500;
          text-decoration: none;
          transition: color 0.3s ease;
        }

        a.info-value:hover, a.info-value:focus-visible {
          color: var(--contact-accent-primary);
          outline: none;
          text-decoration: underline;
          text-underline-offset: 4px;
        }

        .contact-form {
          display: flex;
          flex-direction: column;
          gap: 1.8rem;
        }

        .input-group {
          display: flex;
          flex-direction: column;
          gap: 0.6rem;
        }

        .input-label {
          font-size: 0.85rem;
          font-weight: 600;
          color: var(--contact-text-main);
          margin-left: 0.2rem;
        }

        .form-input, .form-textarea {
          width: 100%;
          background: var(--contact-input-bg);
          border: 1px solid var(--contact-border);
          border-radius: 1rem;
          padding: 1.1rem 1.25rem;
          color: var(--contact-text-main);
          font-family: inherit;
          font-size: 1rem;
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
          outline: none;
          box-shadow: inset 0 2px 4px rgba(0,0,0,0.01);
        }

        .form-textarea {
          min-height: 160px;
          resize: vertical;
        }

        .form-input::placeholder, .form-textarea::placeholder {
          color: #9CA3AF;
          font-weight: 400;
        }

        .form-input:focus, .form-textarea:focus {
          border-color: var(--contact-accent-primary);
          background: #ffffff;
          box-shadow: 0 0 0 4px rgba(192, 132, 87, 0.1), inset 0 2px 4px rgba(0,0,0,0.01);
        }

        .submit-btn {
          margin-top: 0.5rem;
          padding: 1.1rem 2.5rem;
          border-radius: 2rem;
          font-size: 0.95rem;
          font-weight: 700;
          letter-spacing: 0.05em;
          text-transform: uppercase;
          background: var(--contact-accent-primary);
          color: #ffffff;
          border: none;
          box-shadow: 0 8px 20px -6px rgba(192, 132, 87, 0.4);
          transition: background 0.3s, box-shadow 0.3s;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 0.6rem;
          width: 100%;
          outline: none;
        }

        .submit-btn:focus-visible {
          outline: 2px solid var(--contact-focus-ring);
          outline-offset: 4px;
        }

        @media (prefers-reduced-motion: reduce) {
          .contact-orb, .info-icon-wrapper, .submit-btn {
            animation: none !important;
            transition: none !important;
            transform: none !important;
          }
        }

        @media (max-width: 992px) {
          .contact-card {
            grid-template-columns: 1fr;
            padding: 3rem;
            gap: 3.5rem;
          }
          .contact-info {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            border-bottom: 1px solid var(--contact-border);
            padding-bottom: 3.5rem;
          }
        }

        @media (max-width: 768px) {
          .contact-section { padding: 6rem 1.5rem; }
          .section-title { font-size: 2.8rem; }
          .contact-card { padding: 2rem; }
          .contact-info { grid-template-columns: 1fr; gap: 2rem; }
        }
      `}</style>

      <section className="contact-section" id="contact" aria-labelledby="contact-heading">
        <div className="contact-orb orb-top-right" aria-hidden="true"></div>
        <div className="contact-orb orb-bottom-left" aria-hidden="true"></div>

        <div className="contact-container">
          {/* Section Header entry physics */}
          <motion.header 
            className="section-header"
            initial={{ opacity: 0, filter: 'blur(12px)', y: -20 }}
            animate={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <h2 id="contact-heading" className="section-title">
              Let's <span className="highlight-text">Connect.</span>
            </h2>
            <p className="section-subtitle">
              Currently open for engineering roles. Whether you have a project in mind or just want to discuss system architecture, feel free to drop a message.
            </p>
          </motion.header>

          {/* Main Card entrance logic */}
          <motion.div 
            className="contact-card"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          >
            
            {/* Left Side Info Stagger */}
            <motion.address 
              className="contact-info" 
              aria-label="Contact Information" 
              style={{ fontStyle: 'normal' }}
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {CONTACT_INFO.map((info) => (
                <motion.div key={info.id} className="info-block" variants={cardElementVariants}>
                  <div className="info-icon-wrapper" aria-hidden="true">
                    <info.icon />
                  </div>
                  <div className="info-content">
                    <span className="info-label">{info.label}</span>
                    {info.link ? (
                      <a href={info.link} className="info-value" target={info.id === 'github' ? "_blank" : undefined} rel={info.id === 'github' ? "noopener noreferrer" : undefined}>
                        {info.value}
                      </a>
                    ) : (
                      <span className="info-value">{info.value}</span>
                    )}
                  </div>
                </motion.div>
              ))}
            </motion.address>

            {/* Right Side Form Stagger */}
            <motion.form 
              ref={form} 
              onSubmit={sendEmail} 
              className="contact-form" 
              aria-label="Contact Form"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              <motion.div className="input-group" variants={cardElementVariants}>
                <label htmlFor="user_name" className="input-label">Full Name</label>
                <input 
                  id="user_name"
                  type="text" 
                  name="user_name" 
                  className="form-input" 
                  placeholder="Mike Mekonenn" 
                  required 
                  aria-required="true"
                />
              </motion.div>

              <motion.div className="input-group" variants={cardElementVariants}>
                <label htmlFor="company_name" className="input-label">Organization (Optional)</label>
                <input 
                  id="company_name"
                  type="text" 
                  name="company_name" 
                  className="form-input" 
                  placeholder="Mike PLC" 
                />
              </motion.div>
              
              <motion.div className="input-group" variants={cardElementVariants}>
                <label htmlFor="user_email" className="input-label">Email Address</label>
                <input 
                  id="user_email"
                  type="email" 
                  name="user_email" 
                  className="form-input" 
                  placeholder="mike@example.com" 
                  required 
                  aria-required="true"
                />
              </motion.div>
              
              <motion.div className="input-group" variants={cardElementVariants}>
                <label htmlFor="message" className="input-label">Message</label>
                <textarea 
                  id="message"
                  name="message" 
                  className="form-textarea" 
                  placeholder="How can I help you?" 
                  required 
                  aria-required="true"
                ></textarea>
              </motion.div>

              <motion.button 
                variants={cardElementVariants}
                whileHover={!isSending ? { y: -4, scale: 1.01 } : {}}
                whileTap={!isSending ? { scale: 0.98 } : {}}
                type="submit" 
                className="submit-btn"
                disabled={isSending}
                style={{ opacity: isSending ? 0.7 : 1, cursor: isSending ? 'not-allowed' : 'pointer' }}
                aria-live="polite"
              >
                {buttonText} {buttonText === 'Send Message' && <TbSend className="fs-5" aria-hidden="true" />}
              </motion.button>
            </motion.form>

          </motion.div>
        </div>
      </section>
    </>
  );
});

Contact.displayName = 'Contact';

export default Contact;