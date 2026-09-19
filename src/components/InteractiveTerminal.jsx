import React, { useState, useRef, useEffect } from 'react';
import { Terminal, CornerDownLeft, Trash2, HelpCircle } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import { soundFX } from '../utils/audioFX';
import confetti from 'canvas-confetti';

export const InteractiveTerminal = () => {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState([
    { type: 'output', text: 'VINAYAK_PATEL_OS v2.5 CLI Terminal Engine' },
    { type: 'output', text: 'Type "help" or click sample commands below to execute system commands.' }
  ]);

  const terminalEndRef = useRef(null);

  useEffect(() => {
    terminalEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  const handleCommand = (cmdStr) => {
    const rawCmd = cmdStr.trim().toLowerCase();
    if (!rawCmd) return;

    soundFX.playCommand();

    const newHistory = [...history, { type: 'input', text: `$ ${rawCmd}` }];

    if (rawCmd === 'clear') {
      setHistory([]);
      setInput('');
      return;
    }

    if (rawCmd === 'sudo hire' || rawCmd === 'hire') {
      soundFX.playSuccess();
      confetti({ particleCount: 100, spread: 80, origin: { y: 0.7 } });
      newHistory.push({
        type: 'output',
        text: '★ ACCESS GRANTED! Transmission dispatched to Vinayak Patel (vp40668@gmail.com). Expect a rapid response!'
      });
    } else if (portfolioData.terminalCommands[rawCmd]) {
      newHistory.push({ type: 'output', text: portfolioData.terminalCommands[rawCmd] });
    } else {
      newHistory.push({
        type: 'error',
        text: `Command not recognized: "${rawCmd}". Type "help" to see available terminal commands.`
      });
    }

    setHistory(newHistory);
    setInput('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleCommand(input);
  };

  return (
    <section id="cli" className="section-padding">
      <div className="container">
        {/* Section Header */}
        <div style={{ marginBottom: '2.5rem' }}>
          <div className="section-title-badge">
            <Terminal size={14} />
            SHELL://CLI_INTERACTIVE_CONSOLE
          </div>
          <h2 className="section-heading">
            DEVELOPER <span style={{ color: 'var(--cyan)' }}>CLI TERMINAL</span>
          </h2>
          <p style={{ color: 'var(--text-dim)', maxWidth: '600px', marginTop: '0.5rem' }}>
            Interactive command-line shell interface for power users. Execute commands to query portfolio modules directly.
          </p>
        </div>

        {/* Terminal HUD Container */}
        <div className="hud-panel box-cyan-glow" style={{ padding: '0', overflow: 'hidden', background: '#05080f' }}>
          
          {/* Top Window Bar */}
          <div style={{
            background: '#0d1322',
            padding: '0.75rem 1.25rem',
            borderBottom: '1px solid var(--glass-border)',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#ef4444' }} />
              <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#f59e0b' }} />
              <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#10b981' }} />
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--text-dim)', marginLeft: '0.5rem' }}>
                bash - vinayak@aitr-indore: ~
              </span>
            </div>

            <button
              onClick={() => {
                soundFX.playClick();
                setHistory([]);
              }}
              style={{
                background: 'none',
                border: 'none',
                color: 'var(--text-dim)',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '0.3rem',
                fontSize: '0.75rem',
                fontFamily: 'var(--font-mono)'
              }}
              title="Clear terminal history"
            >
              <Trash2 size={14} /> CLEAR
            </button>
          </div>

          {/* Terminal Output Area */}
          <div style={{
            padding: '1.25rem',
            minHeight: '260px',
            maxHeight: '380px',
            overflowY: 'auto',
            fontFamily: 'var(--font-mono)',
            fontSize: '0.88rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '0.6rem'
          }}>
            {history.map((item, index) => (
              <div
                key={index}
                style={{
                  color: item.type === 'input' ? 'var(--cyan)' : item.type === 'error' ? 'var(--magenta)' : 'var(--text-bright)',
                  lineHeight: 1.5,
                  wordBreak: 'break-word'
                }}
              >
                {item.text}
              </div>
            ))}
            <div ref={terminalEndRef} />
          </div>

          {/* Command Input Form */}
          <form
            onSubmit={handleSubmit}
            className="terminal-input-row"
          >
            <span className="terminal-prompt-label" style={{ color: 'var(--cyan)', fontFamily: 'var(--font-mono)', fontSize: '0.9rem', marginRight: '0.6rem' }}>
              vinayak@os:~$
            </span>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="type 'help', 'bio', 'skills', 'projects', 'sudo hire'..."
              className="terminal-input-field"
              style={{
                flex: 1,
                background: 'transparent',
                border: 'none',
                outline: 'none',
                color: '#fff',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.9rem',
                minWidth: '120px'
              }}
            />
            <button
              type="submit"
              className="terminal-execute-btn"
              style={{
                background: 'rgba(0, 243, 255, 0.1)',
                border: '1px solid var(--cyan)',
                color: 'var(--cyan)',
                padding: '0.35rem 0.75rem',
                borderRadius: '4px',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '0.4rem',
                fontSize: '0.75rem',
                fontFamily: 'var(--font-mono)'
              }}
            >
              EXECUTE <CornerDownLeft size={13} />
            </button>
          </form>

          {/* Quick Click Shortcut Badges */}
          <div style={{ padding: '0.75rem 1.25rem', background: '#070a14', borderTop: '1px solid rgba(255,255,255,0.05)', display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--text-dim)', alignSelf: 'center' }}>QUICK COMMANDS:</span>
            {['help', 'bio', 'skills', 'projects', 'awards', 'certs', 'sudo hire'].map((cmd) => (
              <button
                key={cmd}
                onClick={() => handleCommand(cmd)}
                style={{
                  background: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid rgba(255, 255, 255, 0.15)',
                  color: 'var(--cyan)',
                  fontSize: '0.72rem',
                  fontFamily: 'var(--font-mono)',
                  padding: '0.2rem 0.5rem',
                  borderRadius: '4px',
                  cursor: 'pointer'
                }}
              >
                {cmd}
              </button>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};
