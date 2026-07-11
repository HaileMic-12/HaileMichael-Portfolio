import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();
  const [buttonText, setButtonText] = useState('Send Message');
  const [isSending, setIsSending] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSending(true);
    setButtonText('Sending...');

    // Your live EmailJS credentials
    emailjs.sendForm(
      'service_ap0njjx', 
      'template_yhbtwz8', 
      form.current, 
      'ghRVM6FfnbkWPWTvC'
    )
      .then((result) => {
          setButtonText('Message Sent!');
          setIsSending(false);
          e.target.reset(); // Clears the form after success
          
          // Reset button text after 3 seconds
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
        :root {
          --accent-cyan: #38bdf8;
          --accent-purple: #8b5cf6;
          --text-main: #f8fafc;
          --text-muted: #cbd5e1;
          --bg-dark: #0f172a;
          --glass-bg: rgba(30, 41, 59, 0.4);
          --glass-border: rgba(255, 255, 255, 0.08);
          --input-bg: rgba(255, 255, 255, 0.03);
        }

        .contact-section {
          position: relative;
          padding: 8rem 2rem;
          background-color: var(--bg-dark);
          overflow: hidden;
          z-index: 1;
        }

        /* Ambient Orbs */
        .orb {
          position: absolute;
          border-radius: 50%;
          filter: blur(120px);
          z-index: -1;
          animation: float 20s infinite ease-in-out alternate;
          opacity: 0.5;
        }
        .orb-1 {
          top: 10%; right: -5%; width: 500px; height: 500px;
          background: rgba(56, 189, 248, 0.12); /* Cyan */
        }
        .orb-2 {
          bottom: 10%; left: -5%; width: 600px; height: 600px;
          background: rgba(139, 92, 246, 0.12); /* Purple */
          animation-delay: -7s;
        }

        .contact-container {
          max-width: 1000px;
          margin: 0 auto;
        }

        /* Header Animations */
        .section-header {
          text-align: center;
          margin-bottom: 4rem;
          opacity: 0;
          animation: fadeUp 1s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(30px); filter: blur(10px); }
          to { opacity: 1; transform: translateY(0); filter: blur(0); }
        }

        .section-title {
          font-size: 3rem;
          font-weight: 800;
          color: var(--text-main);
          margin-bottom: 1rem;
        }

        .highlight-text {
          background: linear-gradient(135deg, var(--accent-cyan) 0%, var(--accent-purple) 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .section-subtitle {
          color: var(--text-muted);
          font-size: 1.1rem;
          max-width: 500px;
          margin: 0 auto;
        }

        /* Glassmorphism Contact Card */
        .contact-card {
          display: grid;
          grid-template-columns: 1fr 1.5fr;
          gap: 3rem;
          background: var(--glass-bg);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border: 1px solid var(--glass-border);
          border-radius: 2rem;
          padding: 3.5rem;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
          
          opacity: 0;
          animation: fadeUp 1s cubic-bezier(0.16, 1, 0.3, 1) 0.3s forwards;
        }

        /* Left Side: Contact Info */
        .contact-info {
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }

        .info-block {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .info-label {
          font-size: 0.75rem;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          color: var(--accent-cyan);
          font-weight: 700;
        }

        .info-value {
          color: var(--text-main);
          font-size: 1.1rem;
          font-weight: 500;
          text-decoration: none;
          transition: color 0.3s ease;
        }

        a.info-value:hover {
          color: var(--accent-cyan);
        }

        /* Right Side: Form */
        .contact-form {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .input-group {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .form-input, .form-textarea {
          width: 100%;
          background: var(--input-bg);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 1rem;
          padding: 1rem 1.25rem;
          color: var(--text-main);
          font-family: inherit;
          font-size: 1rem;
          transition: all 0.3s ease;
          outline: none;
        }

        .form-textarea {
          min-height: 150px;
          resize: vertical;
        }

        .form-input::placeholder, .form-textarea::placeholder {
          color: rgba(255, 255, 255, 0.3);
        }

        .form-input:focus, .form-textarea:focus {
          border-color: var(--accent-cyan);
          background: rgba(255, 255, 255, 0.05);
          box-shadow: 0 0 15px rgba(56, 189, 248, 0.15);
        }

        .submit-btn {
          margin-top: 1rem;
          padding: 1.1rem 2.5rem;
          border-radius: 1rem;
          font-size: 1rem;
          font-weight: 600;
          cursor: pointer;
          background: linear-gradient(135deg, var(--accent-cyan) 0%, #0284c7 100%);
          color: #0f172a;
          border: none;
          box-shadow: 0 10px 20px -10px rgba(56, 189, 248, 0.5);
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 100%;
        }

        .submit-btn:hover {
          transform: translateY(-4px);
          box-shadow: 0 15px 30px -10px rgba(56, 189, 248, 0.7);
        }

        @media (max-width: 768px) {
          .contact-card {
            grid-template-columns: 1fr;
            padding: 2.5rem;
          }
          .section-title {
            font-size: 2.5rem;
          }
        }
      `}</style>

      <section className="contact-section" id="contact">
        <div className="orb orb-1"></div>
        <div className="orb orb-2"></div>

        <div className="contact-container">
          <div className="section-header">
            <h2 className="section-title">Let's <span className="highlight-text">Connect</span></h2>
            <p className="section-subtitle">
              Currently open for engineering roles. Whether you have a project in mind or just want to say hi, feel free to drop a message.
            </p>
          </div>

          <div className="contact-card">
            
            {/* Left Side: Professional Details */}
            <div className="contact-info">
              <div className="info-block">
                <span className="info-label">Email</span>
                <a href="mailto:hailemichaelmekonenn@gmail.com" className="info-value">
                  hailemichaelmekonenn@gmail.com
                </a>
              </div>
              
              <div className="info-block">
                <span className="info-label">Phone</span>
                <a href="tel:+251993965310" className="info-value">
                  +251 993 965 310
                </a>
              </div>

              <div className="info-block">
                <span className="info-label">Location</span>
                <span className="info-value">Addis Ababa, Ethiopia</span>
              </div>

              <div className="info-block">
                <span className="info-label">GitHub</span>
                <a href="https://github.com/HaileMic-12" target="_blank" rel="noopener noreferrer" className="info-value">
                  github.com/HaileMic-12
                </a>
              </div>
            </div>

            {/* Right Side: The Wired Form */}
            <form ref={form} onSubmit={sendEmail} className="contact-form">
              <div className="input-group">
                <input 
                  type="text" 
                  name="user_name" 
                  className="form-input" 
                  placeholder="Your Name" 
                  required 
                />
              </div>

              {/* NEW: Company Field */}
              <div className="input-group">
                <input 
                  type="text" 
                  name="company_name" 
                  className="form-input" 
                  placeholder="Company / Organization (Optional)" 
                />
              </div>
              
              <div className="input-group">
                <input 
                  type="email" 
                  name="user_email" 
                  className="form-input" 
                  placeholder="Your Email" 
                  required 
                />
              </div>
              
              <div className="input-group">
                <textarea 
                  name="message" 
                  className="form-textarea" 
                  placeholder="How can I help you?" 
                  required 
                ></textarea>
              </div>

              <button 
                type="submit" 
                className="submit-btn"
                disabled={isSending}
                style={{ opacity: isSending ? 0.7 : 1, cursor: isSending ? 'not-allowed' : 'pointer' }}
              >
                {buttonText}
              </button>
            </form>

          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;