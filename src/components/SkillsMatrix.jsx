import React, { useState } from 'react';
import { Cpu, Code, Globe, Wrench, CheckCircle, Info } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import { soundFX } from '../utils/audioFX';

export const SkillsMatrix = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedSkill, setSelectedSkill] = useState(null);

  const iconMap = {
    Code: <Code size={18} />,
    Cpu: <Cpu size={18} />,
    Globe: <Globe size={18} />,
    Wrench: <Wrench size={18} />
  };

  const categories = portfolioData.skillCategories;

  const filteredCategories = activeCategory === 'all'
    ? categories
    : categories.filter(cat => cat.id === activeCategory);

  return (
    <section id="skills" className="section-padding" style={{ background: 'rgba(5, 8, 14, 0.6)' }}>
      <div className="container">
        {/* Section Title */}
        <div style={{ textBaseline: 'center', marginBottom: '3rem' }}>
          <div className="section-title-badge">
            <Cpu size={14} />
            DIAGNOSTICS://TECHNICAL_CAPABILITIES
          </div>
          <h2 className="section-heading">
            SKILLS & <span style={{ color: 'var(--cyan)' }}>COMPETENCIES MATRIX</span>
          </h2>
          <p style={{ color: 'var(--text-dim)', maxWidth: '600px', marginTop: '0.5rem' }}>
            Comprehensive analysis of core programming languages, data structures, backend frameworks, and software engineering practices.
          </p>
        </div>

        {/* Category Filters */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', marginBottom: '2.5rem' }}>
          <button
            onClick={() => {
              soundFX.playClick();
              setActiveCategory('all');
            }}
            onMouseEnter={() => soundFX.playHover()}
            style={{
              background: activeCategory === 'all' ? 'linear-gradient(135deg, var(--cyan), var(--purple))' : 'rgba(13, 19, 34, 0.8)',
              color: activeCategory === 'all' ? '#000' : 'var(--text-main)',
              border: activeCategory === 'all' ? 'none' : '1px solid var(--glass-border)',
              padding: '0.6rem 1.25rem',
              borderRadius: '6px',
              fontWeight: 700,
              fontFamily: 'var(--font-mono)',
              fontSize: '0.85rem',
              cursor: 'pointer',
              transition: 'all 0.2s ease'
            }}
          >
            [// ALL SKILLS]
          </button>

          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => {
                soundFX.playClick();
                setActiveCategory(cat.id);
              }}
              onMouseEnter={() => soundFX.playHover()}
              style={{
                background: activeCategory === cat.id ? 'rgba(0, 243, 255, 0.15)' : 'rgba(13, 19, 34, 0.8)',
                color: activeCategory === cat.id ? 'var(--cyan)' : 'var(--text-main)',
                border: activeCategory === cat.id ? '1px solid var(--cyan)' : '1px solid var(--glass-border)',
                padding: '0.6rem 1.25rem',
                borderRadius: '6px',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.85rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                cursor: 'pointer',
                transition: 'all 0.2s ease'
              }}
            >
              {iconMap[cat.icon]}
              {cat.title}
            </button>
          ))}
        </div>

        {/* Skill Category Cards Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
          {filteredCategories.map((category) => (
            <div key={category.id} className="hud-panel" style={{ padding: '1.75rem' }}>
              <div className="hud-corner-tl" />
              <div className="hud-corner-tr" />
              
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem', borderBottom: '1px solid rgba(255, 255, 255, 0.08)', paddingBottom: '0.75rem' }}>
                <div style={{ color: 'var(--cyan)', background: 'rgba(0, 243, 255, 0.1)', padding: '0.5rem', borderRadius: '6px' }}>
                  {iconMap[category.icon]}
                </div>
                <h3 style={{ fontFamily: 'var(--font-heading)', color: '#fff', fontSize: '1.15rem', fontWeight: 700 }}>
                  {category.title}
                </h3>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
                {category.skills.map((skill, idx) => (
                  <div
                    key={idx}
                    onClick={() => {
                      soundFX.playClick();
                      setSelectedSkill(skill);
                    }}
                    onMouseEnter={() => soundFX.playHover()}
                    style={{ cursor: 'pointer' }}
                  >
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.35rem', fontSize: '0.9rem' }}>
                      <span style={{ fontWeight: 600, color: 'var(--text-bright)' }}>{skill.name}</span>
                      <span style={{ fontFamily: 'var(--font-mono)', color: 'var(--cyan)', fontSize: '0.8rem' }}>{skill.level}%</span>
                    </div>

                    {/* Progress Level Bar */}
                    <div style={{
                      width: '100%',
                      height: '6px',
                      background: 'rgba(255, 255, 255, 0.08)',
                      borderRadius: '3px',
                      overflow: 'hidden',
                      position: 'relative'
                    }}>
                      <div style={{
                        width: `${skill.level}%`,
                        height: '100%',
                        background: 'linear-gradient(90deg, var(--cyan), var(--purple))',
                        boxShadow: '0 0 8px var(--cyan)',
                        borderRadius: '3px',
                        transition: 'width 1s cubic-bezier(0.16, 1, 0.3, 1)'
                      }} />
                    </div>

                    <div style={{ fontSize: '0.75rem', color: 'var(--text-dim)', marginTop: '0.35rem' }}>
                      {skill.desc}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Modal for Skill Detail Inspection */}
        {selectedSkill && (
          <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'rgba(0,0,0,0.8)',
            backdropFilter: 'blur(10px)',
            zIndex: 1000,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '1rem'
          }}>
            <div className="hud-panel box-cyan-glow" style={{ maxWidth: '450px', width: '100%', padding: '2rem' }}>
              <div className="hud-corner-tl" />
              <div className="hud-corner-tr" />
              <div className="hud-corner-bl" />
              <div className="hud-corner-br" />

              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', color: 'var(--cyan)', marginBottom: '0.5rem' }}>
                <Info size={18} />
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem' }}>SKILL_NODE://INSPECTOR</span>
              </div>

              <h3 style={{ fontFamily: 'var(--font-heading)', color: '#fff', fontSize: '1.5rem', fontWeight: 800, marginBottom: '0.5rem' }}>
                {selectedSkill.name}
              </h3>

              <div style={{ fontFamily: 'var(--font-mono)', color: 'var(--cyan)', fontSize: '1.1rem', marginBottom: '1rem' }}>
                PROFICIENCY LEVEL: {selectedSkill.level}%
              </div>

              <p style={{ color: 'var(--text-main)', fontSize: '0.95rem', marginBottom: '1.5rem', lineHeight: 1.6 }}>
                {selectedSkill.desc}
              </p>

              <button
                onClick={() => {
                  soundFX.playClick();
                  setSelectedSkill(null);
                }}
                className="cyber-btn cyber-btn-outline"
                style={{ width: '100%', justifyContent: 'center' }}
              >
                CLOSE INSPECTOR
              </button>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
