import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Panorama from './components/Panorama';
import ChatBox from './components/ChatBox';

export default function App() {
  const [selectedLang, setSelectedLang] = useState('en');
  const [activeQuery, setActiveQuery] = useState('');

  const handlePresetClick = (query) => {
    setActiveQuery(query);
    const chatEl = document.getElementById('chat-section');
    if (chatEl) {
      chatEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        background: 'var(--bg)',
      }}
    >
      <Navbar selectedLang={selectedLang} onLangChange={setSelectedLang} />

      <main style={{ flex: 1 }}>
        <Hero onPresetClick={handlePresetClick} />
        <Panorama />
        <div id="chat-section">
          <ChatBox initialQuery={activeQuery} selectedLang={selectedLang} />
        </div>
                {/* Project Team */}
        <section
          style={{
            padding: '70px 24px',
            borderTop: '1px solid var(--border)',
            background: 'var(--bg)',
          }}
        >
          <div
            style={{
              maxWidth: '1000px',
              margin: '0 auto',
              textAlign: 'center',
            }}
          >
            <p
              style={{
                fontSize: '11px',
                fontWeight: 600,
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
                color: 'var(--text-muted)',
                marginBottom: '10px',
              }}
            >
              Major Project Team
            </p>

            <h2
              style={{
                fontSize: '32px',
                fontWeight: 600,
                marginBottom: '40px',
              }}
            >
              Project Team
            </h2>

            {/* Team Leader */}
            <div
              style={{
                maxWidth: '420px',
                margin: '0 auto 40px',
                padding: '28px',
                border: '2px solid var(--text)',
                borderRadius: '16px',
                background: 'var(--surface, var(--bg))',
              }}
            >
              <div
                style={{
                  fontSize: '10px',
                  fontWeight: 700,
                  letterSpacing: '0.16em',
                  textTransform: 'uppercase',
                  marginBottom: '12px',
                }}
              >
                ★ Team Leader ★
              </div>

              <h3
                style={{
                  fontSize: '25px',
                  fontWeight: 700,
                  marginBottom: '8px',
                }}
              >
                Shivam Digarse
              </h3>

              <p
                style={{
                  fontSize: '13px',
                  color: 'var(--text-muted)',
                  margin: 0,
                }}
              >
                Enrollment No.: 0133CL231123
              </p>
            </div>

            {/* Team Members */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                gap: '16px',
                marginBottom: '45px',
              }}
            >
              {[
                ['Sachin Sahu', '01323CL231116'],
                ['Siddharth Tiwari', '01323CL231130'],
                ['Prashant Patel', '0133CL231104'],
                ['Mahendra Shilpkar', '01323CL243D08'],
              ].map(([name, enrollment]) => (
                <div
                  key={name}
                  style={{
                    padding: '22px 16px',
                    border: '1px solid var(--border)',
                    borderRadius: '12px',
                  }}
                >
                  <h3
                    style={{
                      fontSize: '16px',
                      fontWeight: 600,
                      marginBottom: '8px',
                    }}
                  >
                    {name}
                  </h3>

                  <p
                    style={{
                      fontSize: '11px',
                      color: 'var(--text-muted)',
                      margin: 0,
                    }}
                  >
                    Enrollment No.: {enrollment}
                  </p>
                </div>
              ))}
            </div>

            {/* Mentor */}
            <div>
              <p
                style={{
                  fontSize: '10px',
                  fontWeight: 600,
                  letterSpacing: '0.14em',
                  textTransform: 'uppercase',
                  color: 'var(--text-muted)',
                  marginBottom: '8px',
                }}
              >
                Project Mentor
              </p>

              <h3
                style={{
                  fontSize: '20px',
                  fontWeight: 600,
                  margin: 0,
                }}
              >
                Monika Ma'am
              </h3>

              <p
                style={{
                  fontSize: '12px',
                  color: 'var(--text-muted)',
                  marginTop: '8px',
                }}
              >
                Sagar Institute of Research & Technology, Bhopal
                <br />
                Department of Artificial Intelligence & Machine Learning
                <br />
                B.Tech 2023–2027
              </p>
            </div>
          </div>
        </section>
      </main>

      <footer
        style={{
          padding: '20px 16px',
          borderTop: '1px solid var(--border)',
          textAlign: 'center',
        }}
      >
        <p
          style={{
            fontSize: '11px',
            fontWeight: 500,
            letterSpacing: '0.09em',
            textTransform: 'uppercase',
            color: 'var(--text-muted)',
          }}
        >
          AI Based Government Scheme & Eligibility Assistant System — B.Tech Major Project · SIRT Bhopal · AIML 2023–27
        </p>
      </footer>
    </div>
  );
}
