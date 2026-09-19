import React from 'react';
import { X, ExternalLink, CheckCircle2, Layers, Cpu } from 'lucide-react';
import { GithubIcon } from './SocialIcons';
import { soundFX } from '../utils/audioFX';

export const ProjectModal = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: 'rgba(5, 8, 14, 0.85)',
      backdropFilter: 'blur(12px)',
      zIndex: 1000,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '1.5rem'
    }}>
      <div className="hud-panel box-cyan-glow project-modal-container" style={{
        maxWidth: '700px',
        width: '100%',
        maxHeight: '90vh',
        overflowY: 'auto',
        padding: '2rem'
      }}>
        <div className="hud-corner-tl" />
        <div className="hud-corner-tr" />
        <div className="hud-corner-bl" />
        <div className="hud-corner-br" />

        {/* Modal Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
          <div>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', color: 'var(--cyan)' }}>
              PROJECT_VAULT://DEEP_DIVE
            </div>
            <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.8rem', fontWeight: 800, color: '#fff' }}>
              {project.title}
            </h2>
          </div>
          <button
            onClick={() => {
              soundFX.playClick();
              onClose();
            }}
            style={{
              background: 'rgba(255, 255, 255, 0.08)',
              border: 'none',
              color: '#fff',
              padding: '0.5rem',
              borderRadius: '6px',
              cursor: 'pointer'
            }}
          >
            <X size={20} />
          </button>
        </div>

        {/* High Res Visual Banner */}
        <div className="modal-banner-img" style={{
          width: '100%',
          height: '240px',
          borderRadius: '8px',
          overflow: 'hidden',
          marginBottom: '1.5rem',
          border: '1px solid var(--glass-border)'
        }}>
          <img
            src={project.image}
            alt={project.title}
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </div>

        {/* Overview Description */}
        <p style={{ color: 'var(--text-main)', fontSize: '1rem', lineHeight: 1.6, marginBottom: '1.5rem' }}>
          {project.description}
        </p>

        {/* Key Features */}
        <div style={{ marginBottom: '1.5rem' }}>
          <h4 style={{ fontFamily: 'var(--font-heading)', color: 'var(--cyan)', fontSize: '1.1rem', marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <CheckCircle2 size={18} /> KEY SYSTEM ARCHITECTURE FEATURES
          </h4>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '0.6rem' }}>
            {project.features.map((feat, idx) => (
              <div key={idx} style={{
                background: 'rgba(0, 243, 255, 0.05)',
                border: '1px solid rgba(0, 243, 255, 0.15)',
                padding: '0.6rem 0.9rem',
                borderRadius: '6px',
                fontSize: '0.9rem',
                color: 'var(--text-bright)',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem'
              }}>
                <span style={{ color: 'var(--cyan)' }}>▶</span> {feat}
              </div>
            ))}
          </div>
        </div>

        {/* Tech Stack Pills */}
        <div style={{ marginBottom: '2.0rem' }}>
          <h4 style={{ fontFamily: 'var(--font-heading)', color: 'var(--magenta)', fontSize: '1rem', marginBottom: '0.6rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <Cpu size={16} /> TECHNOLOGIES UTILIZED
          </h4>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
            {project.techStack.map((tech, idx) => (
              <span key={idx} style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.78rem',
                background: 'rgba(139, 92, 246, 0.15)',
                border: '1px solid rgba(139, 92, 246, 0.4)',
                color: '#fff',
                padding: '0.3rem 0.75rem',
                borderRadius: '4px'
              }}>
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Actions */}
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noreferrer"
            className="cyber-btn cyber-btn-primary"
            style={{ textDecoration: 'none' }}
          >
            <GithubIcon size={18} /> VIEW GITHUB REPO
          </a>
          <button
            onClick={() => {
              soundFX.playClick();
              onClose();
            }}
            className="cyber-btn cyber-btn-outline"
          >
            CLOSE WINDOW
          </button>
        </div>
      </div>
    </div>
  );
};
