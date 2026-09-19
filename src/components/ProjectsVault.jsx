import React, { useState } from 'react';
import { FolderGit2, ExternalLink, Sparkles, Layers } from 'lucide-react';
import { GithubIcon } from './SocialIcons';
import { portfolioData } from '../data/portfolioData';
import { ProjectModal } from './ProjectModal';
import { soundFX } from '../utils/audioFX';

export const ProjectsVault = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const projects = portfolioData.projects;

  return (
    <section id="projects" className="section-padding">
      <div className="container">
        {/* Section Title */}
        <div style={{ marginBottom: '3rem' }}>
          <div className="section-title-badge">
            <FolderGit2 size={14} />
            DATABASE://SOFTWARE_PROJECTS
          </div>
          <h2 className="section-heading">
            FEATURED <span style={{ color: 'var(--cyan)' }}>PROJECTS VAULT</span>
          </h2>
          <p style={{ color: 'var(--text-dim)', maxWidth: '620px', marginTop: '0.5rem' }}>
            Production-ready platforms built leveraging Java, RESTful web services, database architecture, and modern React user interfaces.
          </p>
        </div>

        {/* Projects Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
          {projects.map((project) => (
            <div
              key={project.id}
              className="hud-panel"
              style={{ display: 'flex', flexDirection: 'column', height: '100%' }}
            >
              <div className="hud-corner-tl" />
              <div className="hud-corner-tr" />
              <div className="hud-corner-bl" />
              <div className="hud-corner-br" />

              {/* Project Visual Banner */}
              <div style={{
                position: 'relative',
                height: '200px',
                overflow: 'hidden',
                borderRadius: '11px 11px 0 0',
                borderBottom: '1px solid var(--glass-border)'
              }}>
                <img
                  src={project.image}
                  alt={project.title}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'transform 0.5s ease'
                  }}
                  className="project-card-image"
                />
                <div style={{
                  position: 'absolute',
                  top: '12px',
                  right: '12px',
                  background: 'rgba(7, 10, 17, 0.85)',
                  backdropFilter: 'blur(8px)',
                  border: '1px solid var(--cyan)',
                  color: 'var(--cyan)',
                  fontSize: '0.72rem',
                  fontFamily: 'var(--font-mono)',
                  padding: '0.3rem 0.6rem',
                  borderRadius: '4px'
                }}>
                  {project.badge}
                </div>
              </div>

              {/* Content Body */}
              <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.78rem', color: 'var(--magenta)', marginBottom: '0.4rem' }}>
                  ROLE: {project.role}
                </div>

                <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.4rem', fontWeight: 800, color: '#fff', marginBottom: '0.75rem' }}>
                  {project.title}
                </h3>

                <p style={{ color: 'var(--text-main)', fontSize: '0.92rem', lineHeight: 1.6, marginBottom: '1.25rem', flexGrow: 1 }}>
                  {project.summary}
                </p>

                {/* Tech Stack Badges */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginBottom: '1.5rem' }}>
                  {project.techStack.map((tech, idx) => (
                    <span key={idx} style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.72rem',
                      background: 'rgba(0, 243, 255, 0.08)',
                      border: '1px solid rgba(0, 243, 255, 0.25)',
                      color: 'var(--cyan)',
                      padding: '0.2rem 0.55rem',
                      borderRadius: '4px'
                    }}>
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div style={{ display: 'flex', gap: '0.75rem' }}>
                  <button
                    onClick={() => {
                      soundFX.playClick();
                      setSelectedProject(project);
                    }}
                    onMouseEnter={() => soundFX.playHover()}
                    className="cyber-btn cyber-btn-primary"
                    style={{ flex: 1, justifyContent: 'center', fontSize: '0.8rem' }}
                  >
                    SYSTEM DETAILS <Layers size={15} />
                  </button>

                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    onMouseEnter={() => soundFX.playHover()}
                    className="cyber-btn cyber-btn-outline"
                    style={{ padding: '0.6rem 0.8rem' }}
                    title="View GitHub Source Code"
                  >
                    <GithubIcon size={18} />
                  </a>
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* Modal Window */}
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      </div>
    </section>
  );
};
