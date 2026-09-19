import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2, Radio, MessageSquare } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './SocialIcons';
import { portfolioData } from '../data/portfolioData';
import { soundFX } from '../utils/audioFX';
import confetti from 'canvas-confetti';

export const ContactRelay = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [transmitting, setTransmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    soundFX.playCommand();
    setTransmitting(true);

    const apiKey = import.meta.env.VITE_WEB3FORMS_KEY || portfolioData.personal.web3formsKey;

    if (apiKey) {
      try {
        const response = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: JSON.stringify({
            access_key: apiKey,
            name: formData.name,
            email: formData.email,
            subject: formData.subject || "Portfolio Contact Message",
            message: formData.message
          })
        });
        const result = await response.json();
        if (result.success) {
          soundFX.playSuccess();
          confetti({ particleCount: 70, spread: 60, origin: { y: 0.8 } });
          setSuccess(true);
          setTransmitting(false);
          return;
        }
      } catch {
        // Fallback to mailto if network or API error occurs
      }
    }

    // Direct mailto fallback
    setTimeout(() => {
      setTransmitting(false);
      setSuccess(true);
      soundFX.playSuccess();
      confetti({ particleCount: 70, spread: 60, origin: { y: 0.8 } });

      const mailtoUrl = `mailto:${portfolioData.personal.email}?subject=${encodeURIComponent(formData.subject || 'Portfolio Inquiry')}&body=${encodeURIComponent(`From: ${formData.name} (${formData.email})\n\nMessage:\n${formData.message}`)}`;
      window.location.href = mailtoUrl;
    }, 800);
  };

  return (
    <section id="contact" className="section-padding" style={{ background: 'rgba(5, 8, 14, 0.6)' }}>
      <div className="container">
        {/* Section Header */}
        <div style={{ marginBottom: '3rem' }}>
          <div className="section-title-badge">
            <Radio size={14} />
            COMMUNICATIONS://DIRECT_RELAY
          </div>
          <h2 className="section-heading">
            DISPATCH <span style={{ color: 'var(--cyan)' }}>CONTACT TRANSMISSION</span>
          </h2>
          <p style={{ color: 'var(--text-dim)', maxWidth: '600px', marginTop: '0.5rem' }}>
            Open for software engineering roles, full-stack development projects, and technical collaborations. Send a direct transmission.
          </p>
        </div>

        <div className="contact-grid">
          
          {/* Left Info Panel */}
          <div className="hud-panel" style={{ padding: '2rem' }}>
            <div className="hud-corner-tl" />
            <div className="hud-corner-tr" />
            
            <h3 style={{ fontFamily: 'var(--font-heading)', color: '#fff', fontSize: '1.4rem', fontWeight: 800, marginBottom: '1.5rem' }}>
              DIRECT COORDINATES
            </h3>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', marginBottom: '2rem' }}>
              
              {/* Email */}
              <a
                href={`mailto:${portfolioData.personal.email}`}
                onMouseEnter={() => soundFX.playHover()}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem',
                  color: 'inherit',
                  textDecoration: 'none',
                  background: 'rgba(0, 243, 255, 0.05)',
                  padding: '1rem',
                  borderRadius: '8px',
                  border: '1px solid rgba(0, 243, 255, 0.15)'
                }}
              >
                <div style={{ background: 'rgba(0, 243, 255, 0.15)', color: 'var(--cyan)', padding: '0.75rem', borderRadius: '8px' }}>
                  <Mail size={22} />
                </div>
                <div>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--cyan)' }}>EMAIL ADDRESS</div>
                  <div style={{ fontWeight: 700, color: '#fff', fontSize: '1rem' }}>{portfolioData.personal.email}</div>
                </div>
              </a>

              {/* Location */}
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '1rem',
                background: 'rgba(139, 92, 246, 0.05)',
                padding: '1rem',
                borderRadius: '8px',
                border: '1px solid rgba(139, 92, 246, 0.15)'
              }}>
                <div style={{ background: 'rgba(139, 92, 246, 0.15)', color: 'var(--purple)', padding: '0.75rem', borderRadius: '8px' }}>
                  <MapPin size={22} />
                </div>
                <div>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--purple)' }}>LOCATION</div>
                  <div style={{ fontWeight: 700, color: '#fff', fontSize: '0.95rem' }}>{portfolioData.personal.address}</div>
                </div>
              </div>

            </div>

            {/* Social Buttons */}
            <div>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.78rem', color: 'var(--text-dim)', marginBottom: '0.75rem' }}>
                PROFILES & REPOSITORIES
              </div>
              <div style={{ display: 'flex', gap: '1rem' }}>
                <a
                  href={portfolioData.personal.github}
                  target="_blank"
                  rel="noreferrer"
                  onMouseEnter={() => soundFX.playHover()}
                  className="cyber-btn cyber-btn-outline"
                  style={{ flex: 1, justifyContent: 'center', fontSize: '0.85rem' }}
                >
                  <GithubIcon size={16} /> GITHUB
                </a>
                <a
                  href={portfolioData.personal.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  onMouseEnter={() => soundFX.playHover()}
                  className="cyber-btn cyber-btn-outline"
                  style={{ flex: 1, justifyContent: 'center', fontSize: '0.85rem', borderColor: 'var(--cyan)' }}
                >
                  <LinkedinIcon size={16} /> LINKEDIN
                </a>
              </div>
            </div>

          </div>

          {/* Right Dispatch Form */}
          <div className="hud-panel" style={{ padding: '2rem' }}>
            <div className="hud-corner-tl" />
            <div className="hud-corner-tr" />
            <div className="hud-corner-bl" />
            <div className="hud-corner-br" />

            <h3 style={{ fontFamily: 'var(--font-heading)', color: '#fff', fontSize: '1.4rem', fontWeight: 800, marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <MessageSquare size={20} color="var(--cyan)" /> TRANSMIT SIGNAL
            </h3>

            {success ? (
              <div style={{
                textAlign: 'center',
                padding: '3rem 1rem',
                background: 'rgba(16, 185, 129, 0.08)',
                borderRadius: '8px',
                border: '1px solid var(--green)'
              }}>
                <CheckCircle2 size={48} color="var(--green)" style={{ margin: '0 auto 1rem' }} />
                <h4 style={{ fontFamily: 'var(--font-heading)', color: '#fff', fontSize: '1.4rem', fontWeight: 800 }}>
                  TRANSMISSION DISPATCHED!
                </h4>
                <p style={{ color: 'var(--text-main)', marginTop: '0.5rem', fontSize: '0.95rem' }}>
                  Thank you for reaching out. Your signal has been routed to <strong>vp40668@gmail.com</strong>.
                </p>
                <button
                  onClick={() => setSuccess(false)}
                  className="cyber-btn cyber-btn-outline"
                  style={{ marginTop: '1.5rem' }}
                >
                  SEND ANOTHER SIGNAL
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                
                <div>
                  <label style={{ display: 'block', fontFamily: 'var(--font-mono)', fontSize: '0.78rem', color: 'var(--cyan)', marginBottom: '0.35rem' }}>
                    YOUR NAME *
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Recruiter or Hiring Manager Name"
                    style={{
                      width: '100%',
                      background: 'rgba(0,0,0,0.4)',
                      border: '1px solid var(--glass-border)',
                      borderRadius: '6px',
                      padding: '0.75rem 1rem',
                      color: '#fff',
                      fontFamily: 'var(--font-body)',
                      outline: 'none'
                    }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontFamily: 'var(--font-mono)', fontSize: '0.78rem', color: 'var(--cyan)', marginBottom: '0.35rem' }}>
                    SENDER EMAIL *
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="yourname@company.com"
                    style={{
                      width: '100%',
                      background: 'rgba(0,0,0,0.4)',
                      border: '1px solid var(--glass-border)',
                      borderRadius: '6px',
                      padding: '0.75rem 1rem',
                      color: '#fff',
                      fontFamily: 'var(--font-body)',
                      outline: 'none'
                    }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontFamily: 'var(--font-mono)', fontSize: '0.78rem', color: 'var(--cyan)', marginBottom: '0.35rem' }}>
                    TRANSMISSION SUBJECT
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Software Engineering Position / Project Opportunity"
                    style={{
                      width: '100%',
                      background: 'rgba(0,0,0,0.4)',
                      border: '1px solid var(--glass-border)',
                      borderRadius: '6px',
                      padding: '0.75rem 1rem',
                      color: '#fff',
                      fontFamily: 'var(--font-body)',
                      outline: 'none'
                    }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontFamily: 'var(--font-mono)', fontSize: '0.78rem', color: 'var(--cyan)', marginBottom: '0.35rem' }}>
                    SIGNAL MESSAGE *
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="State job role details or project requirements..."
                    style={{
                      width: '100%',
                      background: 'rgba(0,0,0,0.4)',
                      border: '1px solid var(--glass-border)',
                      borderRadius: '6px',
                      padding: '0.75rem 1rem',
                      color: '#fff',
                      fontFamily: 'var(--font-body)',
                      outline: 'none',
                      resize: 'vertical'
                    }}
                  />
                </div>

                <button
                  type="submit"
                  disabled={transmitting}
                  className="cyber-btn cyber-btn-primary"
                  style={{ width: '100%', justifyContent: 'center', marginTop: '0.5rem' }}
                >
                  {transmitting ? 'TRANSMITTING SIGNAL...' : 'DISPATCH TRANSMISSION'} <Send size={18} />
                </button>

                <a
                  href={`mailto:${portfolioData.personal.email}?subject=${encodeURIComponent(formData.subject || 'Portfolio Contact')}&body=${encodeURIComponent(formData.message ? `From: ${formData.name}\n\n${formData.message}` : 'Hi Vinayak,')}`}
                  className="cyber-btn cyber-btn-outline"
                  style={{ width: '100%', justifyContent: 'center', textDecoration: 'none', fontSize: '0.82rem' }}
                >
                  <Mail size={16} /> OR DIRECT EMAIL (vp40668@gmail.com)
                </a>

              </form>
            )}

          </div>

        </div>
      </div>
    </section>
  );
};
