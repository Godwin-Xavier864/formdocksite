import React from 'react';
import { 
  Sparkles, Code, Terminal, Zap, Globe, 
  Database, Lock, Server, MessageSquare, LineChart, 
  Inbox, CheckCircle, ShieldCheck, Rocket, LayoutTemplate
} from 'lucide-react';
import './App.css';
import PrivacyPolicy from './PrivacyPolicy';
import TermsAndConditions from './TermsAndConditions';

function LandingPage() {
  return (
    <div className="app-wrapper">
      {/* Background blobs for vibrancy */}
      <div className="bg-blobs">
        <div className="blob blob-1"></div>
        <div className="blob blob-2"></div>
      </div>

      {/* Navigation */}
      <nav className="navbar">
        <div className="container nav-container">
          <div className="logo">
            FormDock
          </div>
          <div className="nav-links">
            <a href="#features">Features</a>
            <a href="#how-it-works">How it Works</a>
          </div>
          <div>
            <a href="https://app.formdock.in" target="_blank" rel="noopener noreferrer">
              <button className="btn btn-primary" style={{ padding: '0.5rem 1rem', fontSize: '0.9rem' }}>
                Sign In
              </button>
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <div className="container hero-content">
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', padding: '0.4rem 1rem', borderRadius: '2rem', marginBottom: '2rem', fontSize: '0.9rem' }}>
            <Sparkles size={16} className="logo-icon" />
            <span className="text-secondary">Introducing FormDock AI Form Generation</span>
          </div>
          <h1>Build Forms <span className="text-gradient">Without a Backend</span></h1>
          <p>
            Plug in one API key, collect submissions instantly, and let FormDock handle storage, emails, analytics, and AI — all in one place.
          </p>
          <div className="hero-cta">
            <a href="https://app.formdock.in" target="_blank" rel="noopener noreferrer">
              <button className="btn btn-primary">
                <Rocket size={20} />
                Get Started Free
              </button>
            </a>
            <a href="https://app.formdock.in" target="_blank" rel="noopener noreferrer">
              <button className="btn btn-secondary">
                <Sparkles size={20} />
                Generate Form with AI
              </button>
            </a>
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section id="how-it-works" className="section">
        <div className="container">
          <h2 className="section-title">Drop-in Integration in Minutes</h2>
          <p className="section-subtitle">No SDK required. Just simple HTML or a native fetch request.</p>
          
          <div className="grid-3">
            <div className="glass-panel step-card">
              <div className="step-number">1</div>
              <h3>Create a project</h3>
              <p>Sign up and get your unique API key instantly. Configure your settings and domain restrictions.</p>
            </div>
            <div className="glass-panel step-card">
              <div className="step-number">2</div>
              <h3>Add to your HTML</h3>
              <p>No backend needed. Just point your form action to our API endpoint. Works with any static site or localhost.</p>
            </div>
            <div className="glass-panel step-card">
              <div className="step-number">3</div>
              <h3>Start receiving</h3>
              <p>Submissions are safely stored, processed, and delivered via email webhooks in real-time.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Code Demo Section / For Developers */}
      <section className="section">
        <div className="container grid-2">
          <div className="glass-panel feature-box">
            <h3 className="text-gradient">For Developers</h3>
            <h2>"You bring frontend. We handle everything else."</h2>
            <p className="text-secondary" style={{ marginTop: '1rem', marginBottom: '2rem' }}>
              Skip server setup. Just send a POST request — you're live. Built perfectly for modern workflows.
            </p>
            <ul>
              <li><CheckCircle size={20} className="feature-icon-bullet" /> Works with plain HTML & static sites</li>
              <li><CheckCircle size={20} className="feature-icon-bullet" /> Works with React, Vue, Svelte, Vite</li>
              <li><CheckCircle size={20} className="feature-icon-bullet" /> No complicated SDK required</li>
              <li><CheckCircle size={20} className="feature-icon-bullet" /> Localhost and Production domains supported</li>
            </ul>
          </div>
          
          <div className="code-container">
            <div className="code-header">
              <div className="code-dot"></div>
              <div className="code-dot"></div>
              <div className="code-dot"></div>
            </div>
            <pre style={{ margin: 0, padding: 0 }}>
<code style={{ color: '#e5e7eb' }}>
<span style={{ color: '#ec4899' }}>&lt;form</span> <span style={{ color: '#8b5cf6' }}>action=</span><span style={{ color: '#a78bfa' }}>"https://api.formdock.com/v1/submit/&#123;YOUR_API_KEY&#125;"</span> <span style={{ color: '#8b5cf6' }}>method=</span><span style={{ color: '#a78bfa' }}>"POST"</span><span style={{ color: '#ec4899' }}>&gt;</span>
  
  <span style={{ color: '#6b7280' }}>&lt;!-- Just normal HTML fields --&gt;</span>
  <span style={{ color: '#ec4899' }}>&lt;input</span> <span style={{ color: '#8b5cf6' }}>type=</span><span style={{ color: '#a78bfa' }}>"text"</span> <span style={{ color: '#8b5cf6' }}>name=</span><span style={{ color: '#a78bfa' }}>"name"</span> <span style={{ color: '#8b5cf6' }}>required</span> <span style={{ color: '#ec4899' }}>/&gt;</span>
  <span style={{ color: '#ec4899' }}>&lt;input</span> <span style={{ color: '#8b5cf6' }}>type=</span><span style={{ color: '#a78bfa' }}>"email"</span> <span style={{ color: '#8b5cf6' }}>name=</span><span style={{ color: '#a78bfa' }}>"email"</span> <span style={{ color: '#8b5cf6' }}>required</span> <span style={{ color: '#ec4899' }}>/&gt;</span>
  
  <span style={{ color: '#ec4899' }}>&lt;button</span> <span style={{ color: '#8b5cf6' }}>type=</span><span style={{ color: '#a78bfa' }}>"submit"</span><span style={{ color: '#ec4899' }}>&gt;</span>Send<span style={{ color: '#ec4899' }}>&lt;/button&gt;</span>

<span style={{ color: '#ec4899' }}>&lt;/form&gt;</span>
</code>
            </pre>
          </div>
        </div>
      </section>

      {/* Feature Grid */}
      <section id="features" className="section">
        <div className="container">
          <h2 className="section-title">Everything you need, built-in.</h2>
          <div className="grid-3">
            {/* Core Handling */}
            <div className="glass-panel" style={{ padding: '2rem' }}>
              <Terminal size={32} className="logo-icon" style={{ marginBottom: '1rem' }} />
              <h3>Smart Submission Pipeline</h3>
              <p className="text-secondary" style={{ marginBottom: '1rem' }}>Never lose submissions — even under extreme load.</p>
              <ul style={{ listStyle: 'none', fontSize: '0.9rem', color: '#a1a1aa' }}>
                <li style={{ marginBottom: '0.5rem' }}>• Queue-based processing</li>
                <li style={{ marginBottom: '0.5rem' }}>• Duplicate detection & protection</li>
                <li style={{ marginBottom: '0.5rem' }}>• Automatic metadata capture (IP, User Agent)</li>
              </ul>
            </div>

            {/* AI Features */}
            <div className="glass-panel" style={{ padding: '2rem' }}>
              <Sparkles size={32} className="logo-icon" style={{ marginBottom: '1rem' }} />
              <h3>AI Powered Features</h3>
              <p className="text-secondary" style={{ marginBottom: '1rem' }}>Extract intelligent answers effortlessly using RAG.</p>
              <ul style={{ listStyle: 'none', fontSize: '0.9rem', color: '#a1a1aa' }}>
                <li style={{ marginBottom: '0.5rem' }}>• AI Form Integration via plain HTML</li>
                <li style={{ marginBottom: '0.5rem' }}>• AI FAQ Chatbot powered by RAG technology</li>
                <li style={{ marginBottom: '0.5rem' }}>• Context-aware responses based on user input</li>
              </ul>
            </div>

            {/* Analytics */}
            <div className="glass-panel" style={{ padding: '2rem' }}>
              <LineChart size={32} className="logo-icon" style={{ marginBottom: '1rem' }} />
              <h3>Built-in Analytics</h3>
              <p className="text-secondary" style={{ marginBottom: '1rem' }}>Track engagement intuitively in real-time.</p>
              <ul style={{ listStyle: 'none', fontSize: '0.9rem', color: '#a1a1aa' }}>
                <li style={{ marginBottom: '0.5rem' }}>• Analyze submission volume</li>
                <li style={{ marginBottom: '0.5rem' }}>• FAQ Chatbot conversational metrics</li>
                <li style={{ marginBottom: '0.5rem' }}>• Track locked & duplicate spam entries</li>
              </ul>
            </div>

            {/* Mini CMS */}
            <div className="glass-panel" style={{ padding: '2rem' }}>
              <LayoutTemplate size={32} className="logo-icon" style={{ marginBottom: '1rem' }} />
              <h3>Mini CMS for Dynamic Context</h3>
              <p className="text-secondary" style={{ marginBottom: '1rem' }}>Manage your text-based content directly from the dashboard.</p>
              <ul style={{ listStyle: 'none', fontSize: '0.9rem', color: '#a1a1aa' }}>
                <li style={{ marginBottom: '0.5rem' }}>• Create dynamic blogs (Text only)</li>
                <li style={{ marginBottom: '0.5rem' }}>• Manage service & course listings</li>
                <li style={{ marginBottom: '0.5rem' }}>• Instant publishing with zero deployment</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Security & Control */}
      <section className="section">
        <div className="container">
          <div className="glass-panel" style={{ padding: '4rem', textAlign: 'center' }}>
            <ShieldCheck size={48} className="logo-icon" style={{ margin: '0 auto 1.5rem' }} />
            <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Enterprise-Grade Protection</h2>
            <p className="section-subtitle" style={{ margin: '0 auto 3rem' }}>
              We keep your inbox clean with robust spam filtering, rate limiting, and exact domain validation controls.
            </p>
            <div className="grid-3">
              <div>
                <Lock size={24} style={{ margin: '0 auto 1rem', color: 'var(--text-secondary)' }} />
                <h4 style={{ marginBottom: '0.5rem' }}>Domain Control</h4>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Restrict submissions only to your domain or keep it open for testing.</p>
              </div>
              <div>
                <Database size={24} style={{ margin: '0 auto 1rem', color: 'var(--text-secondary)' }} />
                <h4 style={{ marginBottom: '0.5rem' }}>Data Safety</h4>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>API key-based access and secure data transit.</p>
              </div>
              <div>
                <MessageSquare size={24} style={{ margin: '0 auto 1rem', color: 'var(--text-secondary)' }} />
                <h4 style={{ marginBottom: '0.5rem' }}>Support System</h4>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Built-in communications and direct admin notifications.</p>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Final CTA */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="cta-section">
            <h2>Ready to launch your forms in minutes?</h2>
            <p>No backend. No stress. Just forms.</p>
            <a href="https://app.formdock.in" target="_blank" rel="noopener noreferrer">
              <button className="btn btn-primary" style={{ padding: '1rem 2.5rem', fontSize: '1.2rem' }}>
                Start Building Today
              </button>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <div className="container text-secondary">
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem', color: 'white', fontWeight: 'bold', fontSize: '1.25rem' }}>
            FormDock
          </div>
          <div style={{ marginBottom: '1rem', display: 'flex', gap: '1.5rem', justifyContent: 'center' }}>
            <a href="/privacy" style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Privacy Policy</a>
            <a href="/terms" style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Terms &amp; Conditions</a>
          </div>
          <p>© {new Date().getFullYear()} ForzaSoft Solutions. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default function App({ url }) {
  // SSR-safe: use the url prop on the server, window.location.pathname on the client
  const getInitialPath = () => {
    if (typeof window === 'undefined') return url || '/';
    // Backward compat: redirect old hash-based links (e.g. formdock.in/#privacy)
    if (window.location.hash === '#privacy') return '/privacy';
    if (window.location.hash === '#terms') return '/terms';
    return window.location.pathname;
  };

  const [currentPath, setCurrentPath] = React.useState(getInitialPath);

  React.useEffect(() => {
    // Redirect legacy hash URLs to path-based URLs
    if (window.location.hash === '#privacy') {
      window.history.replaceState(null, '', '/privacy');
      setCurrentPath('/privacy');
      return;
    }
    if (window.location.hash === '#terms') {
      window.history.replaceState(null, '', '/terms');
      setCurrentPath('/terms');
      return;
    }

    const handlePopState = () => setCurrentPath(window.location.pathname);
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  if (currentPath === '/privacy') return <PrivacyPolicy />;
  if (currentPath === '/terms') return <TermsAndConditions />;
  return <LandingPage />;
}
