import React, { useState, useEffect } from 'react';
import { Volume2, VolumeX, Eye, EyeOff, Terminal, Menu, X, ShieldAlert } from 'lucide-react';
import { soundFX } from '../utils/audioFX';
import { portfolioData } from '../data/portfolioData';

export const Navbar = ({ soundMuted, onToggleSound, scanlinesEnabled, onToggleScanlines }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('overview');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'overview', label: '01.// OVERVIEW' },
    { id: 'skills', label: '02.// SKILLS_MATRIX' },
    { id: 'projects', label: '03.// PROJECTS_VAULT' },
    { id: 'experience', label: '04.// TIMELINE' },
    { id: 'cli', label: '05.// CLI_SHELL' },
    { id: 'contact', label: '06.// CONTACT_RELAY' }
  ];

  const handleNavClick = (id) => {
    soundFX.playClick();
    setActiveSection(id);
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        background: scrolled ? 'rgba(7, 10, 17, 0.9)' : 'transparent',
        backdropFilter: scrolled ? 'blur(16px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(0, 243, 255, 0.2)' : '1px solid transparent',
        transition: 'all 0.3s ease',
        padding: '0.9rem 0'
      }}
    >
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        {/* Brand Logo & Live Diagnostics */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <div 
            onClick={() => handleNavClick('overview')}
            style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.6rem' }}
            onMouseEnter={() => soundFX.playHover()}
          >
            <div style={{
              width: '36px',
              height: '36px',
              borderRadius: '8px',
              background: 'linear-gradient(135deg, #00f3ff, #8b5cf6)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#000',
              fontWeight: 900,
              fontFamily: 'var(--font-heading)',
              boxShadow: '0 0 15px rgba(0, 243, 255, 0.5)'
            }}>
              VP
            </div>
            <div>
              <div style={{ fontFamily: 'var(--font-heading)', fontWeight: 800, fontSize: '1.1rem', color: '#fff', letterSpacing: '0.5px' }}>
                VINAYAK PATEL
              </div>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.68rem', color: 'var(--cyan)', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                <span className="pulse-led" />
                {portfolioData.personal.systemStatus}
              </div>
            </div>
          </div>
        </div>

        {/* Desktop Nav Links */}
        <nav className="desktop-nav">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleNavClick(link.id)}
              onMouseEnter={() => soundFX.playHover()}
              style={{
                background: 'none',
                border: 'none',
                color: activeSection === link.id ? 'var(--cyan)' : 'var(--text-main)',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.8rem',
                fontWeight: activeSection === link.id ? 700 : 500,
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                padding: '0.4rem 0.6rem',
                borderRadius: '4px',
                borderBottom: activeSection === link.id ? '2px solid var(--cyan)' : '2px solid transparent'
              }}
            >
              {link.label}
            </button>
          ))}
        </nav>

        {/* System HUD Action Controls */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          {/* Audio FX Toggle */}
          <button
            onClick={() => {
              soundFX.playClick();
              onToggleSound();
            }}
            onMouseEnter={() => soundFX.playHover()}
            title={soundMuted ? "Audio Muted - Click to Enable UI Sound FX" : "Audio Active - Click to Mute"}
            style={{
              background: 'rgba(0, 243, 255, 0.08)',
              border: '1px solid rgba(0, 243, 255, 0.3)',
              color: soundMuted ? 'var(--text-dim)' : 'var(--cyan)',
              padding: '0.45rem 0.75rem',
              borderRadius: '6px',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '0.4rem',
              fontSize: '0.75rem',
              fontFamily: 'var(--font-mono)'
            }}
          >
            {soundMuted ? <VolumeX size={15} /> : <Volume2 size={15} />}
            <span className="control-label">{soundMuted ? "SFX: OFF" : "SFX: ON"}</span>
          </button>

          {/* CRT Scanline Toggle */}
          <button
            onClick={() => {
              soundFX.playClick();
              onToggleScanlines();
            }}
            onMouseEnter={() => soundFX.playHover()}
            title="Toggle CRT Scanline Overlay Effect"
            style={{
              background: 'rgba(255, 0, 127, 0.08)',
              border: '1px solid rgba(255, 0, 127, 0.3)',
              color: scanlinesEnabled ? 'var(--magenta)' : 'var(--text-dim)',
              padding: '0.45rem 0.75rem',
              borderRadius: '6px',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '0.4rem',
              fontSize: '0.75rem',
              fontFamily: 'var(--font-mono)'
            }}
          >
            {scanlinesEnabled ? <Eye size={15} /> : <EyeOff size={15} />}
            <span className="control-label">{scanlinesEnabled ? "CRT: ON" : "CRT: OFF"}</span>
          </button>

          {/* Mobile Hamburger Toggle */}
          <button
            className="mobile-menu-btn"
            onClick={() => {
              soundFX.playClick();
              setMobileMenuOpen(!mobileMenuOpen);
            }}
            style={{
              background: 'none',
              border: 'none',
              color: 'var(--text-bright)',
              cursor: 'pointer',
              padding: '0.4rem'
            }}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div style={{
          background: 'rgba(7, 10, 17, 0.98)',
          backdropFilter: 'blur(20px)',
          borderBottom: '1px solid var(--glass-border)',
          padding: '1.5rem',
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem',
          marginTop: '0.8rem'
        }}>
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleNavClick(link.id)}
              style={{
                background: 'rgba(0, 243, 255, 0.05)',
                border: '1px solid rgba(0, 243, 255, 0.2)',
                color: activeSection === link.id ? 'var(--cyan)' : 'var(--text-bright)',
                padding: '0.8rem 1rem',
                borderRadius: '6px',
                textAlign: 'left',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.9rem',
                cursor: 'pointer'
              }}
            >
              {link.label}
            </button>
          ))}
        </div>
      )}
    </header>
  );
};
