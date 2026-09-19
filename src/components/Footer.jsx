import React, { useState, useEffect } from 'react';
import { Terminal, Mail, Heart } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './SocialIcons';
import { portfolioData } from '../data/portfolioData';

export const Footer = () => {
  const [timeStr, setTimeStr] = useState('');

  useEffect(() => {
    const updateClock = () => {
      const now = new Date();
      setTimeStr(now.toLocaleTimeString() + ' IST');
    };
    updateClock();
    const interval = setInterval(updateClock, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <footer style={{
      background: '#04060b',
      borderTop: '1px solid var(--glass-border)',
      padding: '2.5rem 0',
      position: 'relative',
      zIndex: 10
    }}>
      <div className="container">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1.5rem' }}>
          
          <div>
            <div style={{ fontFamily: 'var(--font-heading)', fontWeight: 800, fontSize: '1.2rem', color: '#fff' }}>
              VINAYAK PATEL
            </div>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.78rem', color: 'var(--text-dim)', marginTop: '0.2rem' }}>
              Software Engineer // B.Tech CSE @ AITR Indore
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', fontFamily: 'var(--font-mono)', fontSize: '0.8rem', color: 'var(--cyan)' }}>
            <div>SYSTEM TIME: {timeStr}</div>
            <div>BUILD: v2.5.0-REACT</div>
          </div>

          <div style={{ display: 'flex', gap: '1rem' }}>
            <a
              href={portfolioData.personal.github}
              target="_blank"
              rel="noreferrer"
              style={{ color: 'var(--text-main)', transition: 'color 0.2s' }}
              title="GitHub"
            >
              <GithubIcon size={20} />
            </a>
            <a
              href={portfolioData.personal.linkedin}
              target="_blank"
              rel="noreferrer"
              style={{ color: 'var(--cyan)', transition: 'color 0.2s' }}
              title="LinkedIn"
            >
              <LinkedinIcon size={20} />
            </a>
            <a
              href={`mailto:${portfolioData.personal.email}`}
              style={{ color: 'var(--magenta)', transition: 'color 0.2s' }}
              title="Email"
            >
              <Mail size={20} />
            </a>
          </div>

        </div>

        <div style={{
          textAlign: 'center',
          marginTop: '2rem',
          paddingTop: '1.5rem',
          borderTop: '1px solid rgba(255, 255, 255, 0.05)',
          fontFamily: 'var(--font-mono)',
          fontSize: '0.75rem',
          color: 'var(--text-dim)'
        }}>
          © {new Date().getFullYear()} Vinayak Patel. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};
