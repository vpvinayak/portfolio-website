import React, { useState } from 'react';
import { ParticleCanvas } from './components/ParticleCanvas';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { SkillsMatrix } from './components/SkillsMatrix';
import { ProjectsVault } from './components/ProjectsVault';
import { ExperienceTimeline } from './components/ExperienceTimeline';
import { InteractiveTerminal } from './components/InteractiveTerminal';
import { ContactRelay } from './components/ContactRelay';
import { Footer } from './components/Footer';
import { soundFX } from './utils/audioFX';

export function App() {
  const [soundMuted, setSoundMuted] = useState(false);
  const [scanlinesEnabled, setScanlinesEnabled] = useState(true);

  const handleToggleSound = () => {
    const isMuted = soundFX.toggleMute();
    setSoundMuted(isMuted);
  };

  const handleToggleScanlines = () => {
    setScanlinesEnabled(!scanlinesEnabled);
  };

  return (
    <div style={{ minHeight: '100vh', position: 'relative', background: '#070a11' }}>
      {/* Particle Canvas Grid */}
      <ParticleCanvas />

      {/* CRT Scanline FX Overlay */}
      {scanlinesEnabled && <div className="scanlines-overlay" />}

      {/* Navigation Header */}
      <Navbar
        soundMuted={soundMuted}
        onToggleSound={handleToggleSound}
        scanlinesEnabled={scanlinesEnabled}
        onToggleScanlines={handleToggleScanlines}
      />

      {/* Main Sections */}
      <main style={{ position: 'relative', zIndex: 1 }}>
        <Hero />
        <SkillsMatrix />
        <ProjectsVault />
        <ExperienceTimeline />
        <InteractiveTerminal />
        <ContactRelay />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
