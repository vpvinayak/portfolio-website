import React, { useState, useEffect } from 'react';
import { Terminal, ArrowRight, Download, Award, ShieldCheck, Mail, Cpu, Sparkles } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './SocialIcons';
import confetti from 'canvas-confetti';
import { portfolioData } from '../data/portfolioData';
import { soundFX } from '../utils/audioFX';

export const Hero = () => {
  const [displayText, setDisplayText] = useState('');
  const fullText = "SOFTWARE ENGINEER // JAVA & FULL-STACK ARCHITECT";
  const [textIndex, setTextIndex] = useState(0);

  useEffect(() => {
    if (textIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayText((prev) => prev + fullText[textIndex]);
        setTextIndex((prev) => prev + 1);
      }, 50);
      return () => clearTimeout(timeout);
    }
  }, [textIndex]);

  const triggerResumeDownload = () => {
    soundFX.playSuccess();
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#00f3ff', '#ff007f', '#8b5cf6']
    });

    // Download PDF resume from public folder
    const link = document.createElement('a');
    link.href = '/Vinayak_Patel_Resume.pdf';
    link.download = 'Vinayak_Patel_Resume.pdf';
    link.target = '_blank';
    link.click();
  };

  const scrollToSection = (id) => {
    soundFX.playClick();
    const elem = document.getElementById(id);
    if (elem) elem.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="overview" className="section-padding" style={{ paddingTop: '6rem', position: 'relative' }}>
      <div className="container">
        <div className="hero-grid">
          
          {/* Left Bio Column */}
          <div>
            <div className="section-title-badge">
              <Terminal size={14} />
              SYSTEM://INIT_PORTFOLIO_V2.5
            </div>

            <h1 style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(2.2rem, 5vw, 3.8rem)',
              fontWeight: 900,
              color: '#fff',
              lineHeight: 1.1,
              marginBottom: '1rem'
            }}>
              HI, I'M <span style={{ color: 'var(--cyan)' }} className="cyan-glow">VINAYAK PATEL</span>
            </h1>

            {/* Glitch Typing Subtitle */}
            <div style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '1.05rem',
              color: 'var(--magenta)',
              minHeight: '2rem',
              marginBottom: '1.5rem',
              display: 'flex',
              alignItems: 'center',
              gap: '0.4rem'
            }}>
              <span className="glitch-text">&gt; {displayText}</span>
              <span style={{ animation: 'pulseLed 0.8s infinite' }}>_</span>
            </div>

            {/* Objective summary */}
            <p style={{
              color: 'var(--text-main)',
              fontSize: '1.05rem',
              marginBottom: '2rem',
              maxWidth: '620px',
              background: 'rgba(13, 19, 34, 0.5)',
              padding: '1.25rem',
              borderRadius: '8px',
              borderLeft: '3px solid var(--cyan)'
            }}>
              {portfolioData.personal.objective}
            </p>

            {/* Action Buttons */}
            <div className="hero-action-btns" style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', marginBottom: '2.5rem' }}>
              <button
                onClick={() => scrollToSection('projects')}
                onMouseEnter={() => soundFX.playHover()}
                className="cyber-btn cyber-btn-primary"
              >
                EXPLORE PROJECTS <ArrowRight size={18} />
              </button>

              <a
                href="/Resume.pdf"
                download="Vinayak_Patel_Resume.pdf"
                target="_blank"
                rel="noreferrer"
                onClick={() => {
                  soundFX.playSuccess();
                  confetti({
                    particleCount: 80,
                    spread: 70,
                    origin: { y: 0.6 },
                    colors: ['#00f3ff', '#ff007f', '#8b5cf6']
                  });
                }}
                onMouseEnter={() => soundFX.playHover()}
                className="cyber-btn cyber-btn-outline"
                style={{ textDecoration: 'none' }}
              >
                <Download size={18} /> DOWNLOAD RESUME
              </a>
            </div>

            {/* Quick Contact & Social Handles */}
            <div className="hero-social-links" style={{ display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
              <a
                href={portfolioData.personal.github}
                target="_blank"
                rel="noreferrer"
                onMouseEnter={() => soundFX.playHover()}
                style={{
                  color: 'var(--text-main)',
                  background: 'rgba(255, 255, 255, 0.05)',
                  padding: '0.6rem',
                  borderRadius: '8px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  fontSize: '0.85rem',
                  textDecoration: 'none',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  transition: 'all 0.2s ease'
                }}
              >
                <GithubIcon size={18} /> GitHub
              </a>

              <a
                href={portfolioData.personal.linkedin}
                target="_blank"
                rel="noreferrer"
                onMouseEnter={() => soundFX.playHover()}
                style={{
                  color: 'var(--cyan)',
                  background: 'rgba(0, 243, 255, 0.08)',
                  padding: '0.6rem',
                  borderRadius: '8px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  fontSize: '0.85rem',
                  textDecoration: 'none',
                  border: '1px solid rgba(0, 243, 255, 0.2)',
                  transition: 'all 0.2s ease'
                }}
              >
                <LinkedinIcon size={18} /> LinkedIn
              </a>

              <a
                href={`mailto:${portfolioData.personal.email}`}
                onMouseEnter={() => soundFX.playHover()}
                style={{
                  color: 'var(--magenta)',
                  background: 'rgba(255, 0, 127, 0.08)',
                  padding: '0.6rem',
                  borderRadius: '8px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  fontSize: '0.85rem',
                  textDecoration: 'none',
                  border: '1px solid rgba(255, 0, 127, 0.2)',
                  transition: 'all 0.2s ease'
                }}
              >
                <Mail size={18} /> Email
              </a>
            </div>
          </div>

          {/* Right Holographic Orbit Core Visual */}
          <div style={{ position: 'relative', display: 'flex', justifyContent: 'center' }}>
            <div className="hud-panel box-cyan-glow" style={{ padding: '2rem', textAlign: 'center', width: '100%', maxWidth: '380px' }}>
              <div className="hud-corner-tl" />
              <div className="hud-corner-tr" />
              <div className="hud-corner-bl" />
              <div className="hud-corner-br" />

              {/* Holographic Avatar Showcase Frame */}
              <div style={{
                width: '170px',
                height: '170px',
                borderRadius: '50%',
                margin: '0 auto 1.5rem',
                padding: '4px',
                border: '2px dashed var(--cyan)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative',
                background: 'radial-gradient(circle, rgba(0,243,255,0.2) 0%, rgba(7,10,17,0.9) 70%)',
                boxShadow: '0 0 25px rgba(0, 243, 255, 0.4)'
              }}>
                <img
                  src={portfolioData.personal.avatar}
                  alt={portfolioData.personal.name}
                  onError={(e) => {
                    // Fallback to stylized icon if image not loaded yet
                    e.target.style.display = 'none';
                    if (e.target.nextSibling) e.target.nextSibling.style.display = 'flex';
                  }}
                  style={{
                    width: '100%',
                    height: '100%',
                    borderRadius: '50%',
                    objectFit: 'cover',
                    border: '2px solid var(--cyan)'
                  }}
                />
                <div style={{ display: 'none', width: '100%', height: '100%', alignItems: 'center', justifyContent: 'center' }}>
                  <Cpu size={60} color="var(--cyan)" className="cyan-glow" />
                </div>
                <div style={{
                  position: 'absolute',
                  top: '-4px',
                  left: '-4px',
                  right: '-4px',
                  bottom: '-4px',
                  borderRadius: '50%',
                  border: '1px solid var(--magenta)',
                  pointerEvents: 'none'
                }} />
              </div>

              <h3 style={{ fontFamily: 'var(--font-heading)', color: '#fff', fontSize: '1.3rem', fontWeight: 800 }}>
                {portfolioData.personal.name}
              </h3>
              <p style={{ fontFamily: 'var(--font-mono)', color: 'var(--cyan)', fontSize: '0.8rem', marginBottom: '1.25rem' }}>
                {portfolioData.personal.degree}
              </p>

              <div style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '0.75rem',
                textAlign: 'left'
              }}>
                {portfolioData.stats.map((stat, idx) => (
                  <div key={idx} style={{
                    background: 'rgba(0, 0, 0, 0.4)',
                    padding: '0.75rem',
                    borderRadius: '6px',
                    border: '1px solid rgba(255, 255, 255, 0.08)'
                  }}>
                    <div style={{ fontFamily: 'var(--font-heading)', fontSize: '1.4rem', fontWeight: 900, color: 'var(--cyan)' }}>
                      {stat.value}
                    </div>
                    <div style={{ fontSize: '0.72rem', color: 'var(--text-bright)', fontWeight: 600 }}>
                      {stat.label}
                    </div>
                    <div style={{ fontSize: '0.65rem', color: 'var(--text-dim)', fontFamily: 'var(--font-mono)' }}>
                      {stat.sub}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
