import React, { useState } from 'react';
import { GraduationCap, Award, ShieldCheck, Trophy, Calendar, MapPin, ChevronRight, BookmarkCheck } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import { soundFX } from '../utils/audioFX';

export const ExperienceTimeline = () => {
  const [activeTab, setActiveTab] = useState('education');

  return (
    <section id="experience" className="section-padding" style={{ background: 'rgba(5, 8, 14, 0.6)' }}>
      <div className="container">
        {/* Section Header */}
        <div style={{ marginBottom: '3rem' }}>
          <div className="section-title-badge">
            <GraduationCap size={14} />
            CHRONOLOGY://MILESTONES_&_ACCOLADES
          </div>
          <h2 className="section-heading">
            EDUCATION, CERTIFICATIONS & <span style={{ color: 'var(--cyan)' }}>ACCOLADES</span>
          </h2>
          <p style={{ color: 'var(--text-dim)', maxWidth: '600px', marginTop: '0.5rem' }}>
            Academic credentials, industry certifications, research awards, and technical leadership initiatives.
          </p>
        </div>

        {/* Tab Selection */}
        <div style={{ display: 'flex', gap: '1rem', marginBottom: '2.5rem', flexWrap: 'wrap' }}>
          <button
            onClick={() => {
              soundFX.playClick();
              setActiveTab('education');
            }}
            onMouseEnter={() => soundFX.playHover()}
            style={{
              background: activeTab === 'education' ? 'rgba(0, 243, 255, 0.15)' : 'rgba(13, 19, 34, 0.8)',
              color: activeTab === 'education' ? 'var(--cyan)' : 'var(--text-main)',
              border: activeTab === 'education' ? '1px solid var(--cyan)' : '1px solid var(--glass-border)',
              padding: '0.75rem 1.5rem',
              borderRadius: '6px',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.88rem',
              fontWeight: 600,
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem'
            }}
          >
            <GraduationCap size={18} /> ACADEMIC RECORD
          </button>

          <button
            onClick={() => {
              soundFX.playClick();
              setActiveTab('certs');
            }}
            onMouseEnter={() => soundFX.playHover()}
            style={{
              background: activeTab === 'certs' ? 'rgba(0, 243, 255, 0.15)' : 'rgba(13, 19, 34, 0.8)',
              color: activeTab === 'certs' ? 'var(--cyan)' : 'var(--text-main)',
              border: activeTab === 'certs' ? '1px solid var(--cyan)' : '1px solid var(--glass-border)',
              padding: '0.75rem 1.5rem',
              borderRadius: '6px',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.88rem',
              fontWeight: 600,
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem'
            }}
          >
            <ShieldCheck size={18} /> CERTIFICATIONS
          </button>

          <button
            onClick={() => {
              soundFX.playClick();
              setActiveTab('awards');
            }}
            onMouseEnter={() => soundFX.playHover()}
            style={{
              background: activeTab === 'awards' ? 'rgba(0, 243, 255, 0.15)' : 'rgba(13, 19, 34, 0.8)',
              color: activeTab === 'awards' ? 'var(--cyan)' : 'var(--text-main)',
              border: activeTab === 'awards' ? '1px solid var(--cyan)' : '1px solid var(--glass-border)',
              padding: '0.75rem 1.5rem',
              borderRadius: '6px',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.88rem',
              fontWeight: 600,
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem'
            }}
          >
            <Trophy size={18} /> AWARDS & LEADERSHIP
          </button>
        </div>

        {/* Tab Content 1: Education */}
        {activeTab === 'education' && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {portfolioData.education.map((edu, idx) => (
              <div key={idx} className="hud-panel" style={{ padding: '1.75rem' }}>
                <div className="hud-corner-tl" />
                <div className="hud-corner-tr" />
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '0.5rem' }}>
                  <h3 style={{ fontFamily: 'var(--font-heading)', color: '#fff', fontSize: '1.25rem', fontWeight: 800 }}>
                    {edu.degree}
                  </h3>
                  <span style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.78rem',
                    color: 'var(--cyan)',
                    background: 'rgba(0, 243, 255, 0.08)',
                    border: '1px solid rgba(0, 243, 255, 0.25)',
                    padding: '0.25rem 0.65rem',
                    borderRadius: '4px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.4rem'
                  }}>
                    <Calendar size={13} /> {edu.timeline}
                  </span>
                </div>
                <div style={{ color: 'var(--magenta)', fontWeight: 600, fontSize: '0.92rem', marginBottom: '0.5rem' }}>
                  {edu.institution} {edu.affiliation ? `(${edu.affiliation})` : ''}
                </div>
                <p style={{ color: 'var(--text-main)', fontSize: '0.9rem', lineHeight: 1.6 }}>
                  {edu.details}
                </p>
              </div>
            ))}
          </div>
        )}

        {/* Tab Content 2: Certifications */}
        {activeTab === 'certs' && (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
            {portfolioData.certifications.map((cert, idx) => (
              <div key={idx} className="hud-panel" style={{ padding: '1.75rem' }}>
                <div className="hud-corner-tl" />
                <div className="hud-corner-tr" />
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem' }}>
                  <div style={{ background: 'rgba(0, 243, 255, 0.1)', color: 'var(--cyan)', padding: '0.6rem', borderRadius: '8px' }}>
                    <ShieldCheck size={22} />
                  </div>
                  <span style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.75rem',
                    background: 'rgba(255, 0, 127, 0.15)',
                    color: 'var(--magenta)',
                    border: '1px solid rgba(255, 0, 127, 0.3)',
                    padding: '0.25rem 0.6rem',
                    borderRadius: '4px'
                  }}>
                    {cert.badge}
                  </span>
                </div>
                <h3 style={{ fontFamily: 'var(--font-heading)', color: '#fff', fontSize: '1.2rem', fontWeight: 800, marginBottom: '0.35rem' }}>
                  {cert.title}
                </h3>
                <div style={{ color: 'var(--cyan)', fontFamily: 'var(--font-mono)', fontSize: '0.8rem', marginBottom: '0.75rem' }}>
                  ISSUER: {cert.issuer} // {cert.type}
                </div>
                <p style={{ color: 'var(--text-main)', fontSize: '0.88rem', lineHeight: 1.5 }}>
                  {cert.desc}
                </p>
              </div>
            ))}
          </div>
        )}

        {/* Tab Content 3: Awards & Leadership */}
        {activeTab === 'awards' && (
          <div className="awards-grid">
            
            {/* Awards Box */}
            <div className="hud-panel" style={{ padding: '1.75rem' }}>
              <div className="hud-corner-tl" />
              <div className="hud-corner-tr" />
              <h3 style={{ fontFamily: 'var(--font-heading)', color: 'var(--cyan)', fontSize: '1.3rem', fontWeight: 800, marginBottom: '1.25rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Trophy size={20} /> REWARDS & ACCOLADES
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
                {portfolioData.awards.map((award, idx) => (
                  <div key={idx} style={{ background: 'rgba(0,0,0,0.3)', padding: '1rem', borderRadius: '8px', borderLeft: '3px solid var(--cyan)' }}>
                    <div style={{ color: '#fff', fontWeight: 700, fontSize: '1rem' }}>{award.title}</div>
                    <div style={{ color: 'var(--magenta)', fontSize: '0.8rem', fontFamily: 'var(--font-mono)', margin: '0.25rem 0' }}>{award.event}</div>
                    <div style={{ color: 'var(--text-dim)', fontSize: '0.82rem' }}>{award.desc}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Leadership & Hackathons Box */}
            <div className="hud-panel" style={{ padding: '1.75rem' }}>
              <div className="hud-corner-tl" />
              <div className="hud-corner-tr" />
              <h3 style={{ fontFamily: 'var(--font-heading)', color: 'var(--purple)', fontSize: '1.3rem', fontWeight: 800, marginBottom: '1.25rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <BookmarkCheck size={20} /> CO-CURRICULAR & LEADERSHIP
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
                {portfolioData.leadership.map((item, idx) => (
                  <div key={idx} style={{ background: 'rgba(0,0,0,0.3)', padding: '1rem', borderRadius: '8px', borderLeft: '3px solid var(--purple)' }}>
                    <div style={{ color: '#fff', fontWeight: 700, fontSize: '1rem' }}>{item.role}</div>
                    <div style={{ color: 'var(--cyan)', fontSize: '0.8rem', fontFamily: 'var(--font-mono)', margin: '0.25rem 0' }}>{item.organization}</div>
                    <div style={{ color: 'var(--text-dim)', fontSize: '0.82rem' }}>{item.desc}</div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        )}

      </div>
    </section>
  );
};
