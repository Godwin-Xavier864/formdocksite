import React, { useEffect } from 'react';
import { ArrowLeft } from 'lucide-react';
import './App.css';

export default function PrivacyPolicy() {
  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="app-wrapper" style={{ padding: '4rem 1rem' }}>
      <div className="container" style={{ maxWidth: '800px' }}>
        <a href="#" className="btn btn-secondary" style={{ display: 'inline-flex', marginBottom: '2rem', padding: '0.5rem 1rem' }}>
          <ArrowLeft size={16} /> Back to Home
        </a>
        
        <div className="glass-panel" style={{ padding: '3rem 2rem', textAlign: 'left' }}>
          <h1 style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>Privacy Policy for FormDock</h1>
          <p className="text-secondary" style={{ marginBottom: '2.5rem' }}>Last Updated: 05/04/2026</p>

          <div className="prose" style={{ color: '#d4d4d8', lineHeight: '1.8' }}>
            <p style={{ marginBottom: '1.5rem' }}>
              FormDock ("we", "our", "us") operates a SaaS platform that enables users to collect and manage form submissions without building a backend.
              This Privacy Policy explains how we collect, use, and protect your information.
            </p>

            <h2 style={{ color: '#fff', marginTop: '2.5rem', marginBottom: '1rem' }}>1. Information We Collect</h2>
            <p style={{ marginBottom: '1rem' }}>We collect the following types of information:</p>
            
            <h3 style={{ color: '#fff', marginTop: '1.5rem', marginBottom: '0.5rem' }}>1.1 Account Information</h3>
            <ul style={{ paddingLeft: '1.5rem', marginBottom: '1.5rem' }}>
              <li>Name (if provided)</li>
              <li>Email address</li>
              <li>Authentication data</li>
            </ul>

            <h3 style={{ color: '#fff', marginTop: '1.5rem', marginBottom: '0.5rem' }}>1.2 Form Submission Data</h3>
            <ul style={{ paddingLeft: '1.5rem', marginBottom: '1.5rem' }}>
              <li>Data submitted through forms (as defined by your users)</li>
              <li>Metadata such as:
                <ul style={{ paddingLeft: '1.5rem', marginTop: '0.5rem' }}>
                  <li>IP address</li>
                  <li>User agent</li>
                  <li>Referrer URL</li>
                  <li>Page URL</li>
                  <li>Timestamp</li>
                </ul>
              </li>
            </ul>

            <h3 style={{ color: '#fff', marginTop: '1.5rem', marginBottom: '0.5rem' }}>1.3 Usage Data</h3>
            <ul style={{ paddingLeft: '1.5rem', marginBottom: '1.5rem' }}>
              <li>API usage</li>
              <li>Feature usage</li>
              <li>Logs and analytics data</li>
            </ul>

            <h2 style={{ color: '#fff', marginTop: '2.5rem', marginBottom: '1rem' }}>2. How We Use Your Information</h2>
            <p style={{ marginBottom: '1rem' }}>We use collected data to:</p>
            <ul style={{ paddingLeft: '1.5rem', marginBottom: '1.5rem' }}>
              <li>Provide and operate the FormDock service</li>
              <li>Process and store form submissions</li>
              <li>Send notifications related to form submissions</li>
              <li>Improve system performance and reliability</li>
              <li>Provide customer support</li>
            </ul>
            
            <div style={{ background: 'rgba(236, 72, 153, 0.1)', borderLeft: '4px solid #ec4899', padding: '1rem 1.5rem', borderRadius: '0 8px 8px 0', marginBottom: '1.5rem' }}>
              <strong>Important:</strong> We <strong>do NOT use your data, your users’ data, or your website content to train AI models.</strong>
            </div>

            <h2 style={{ color: '#fff', marginTop: '2.5rem', marginBottom: '1rem' }}>3. Email Usage</h2>
            <p style={{ marginBottom: '0.5rem' }}>We may use your email address for:</p>
            <ul style={{ paddingLeft: '1.5rem', marginBottom: '1rem' }}>
              <li>Service-related notifications</li>
              <li>Account updates</li>
              <li>Product announcements</li>
              <li>Targeted promotional communications</li>
            </ul>
            <p style={{ marginBottom: '1.5rem' }}>You may opt out of non-essential emails at any time.</p>

            <h2 style={{ color: '#fff', marginTop: '2.5rem', marginBottom: '1rem' }}>4. Data Ownership</h2>
            <ul style={{ paddingLeft: '1.5rem', marginBottom: '1.5rem' }}>
              <li>You retain full ownership of your data</li>
              <li>We act as a processor of your data</li>
              <li>We do not sell your data to third parties</li>
            </ul>

            <h2 style={{ color: '#fff', marginTop: '2.5rem', marginBottom: '1rem' }}>5. Data Security</h2>
            <p style={{ marginBottom: '0.5rem' }}>We implement reasonable security measures to protect your data. However:</p>
            <ul style={{ paddingLeft: '1.5rem', marginBottom: '1.5rem' }}>
              <li>No system is completely secure</li>
              <li>We cannot guarantee absolute security</li>
            </ul>

            <h2 style={{ color: '#fff', marginTop: '2.5rem', marginBottom: '1rem' }}>6. Data Retention</h2>
            <p style={{ marginBottom: '1.5rem' }}>We retain data as long as necessary to provide the service or comply with legal obligations.</p>

            <h2 style={{ color: '#fff', marginTop: '2.5rem', marginBottom: '1rem' }}>7. Third-Party Services</h2>
            <p style={{ marginBottom: '0.5rem' }}>We may use third-party services (e.g., hosting, email providers, payment gateways) to operate the platform.</p>
            <p style={{ marginBottom: '1.5rem' }}>These services may process your data as necessary to provide functionality.</p>

            <h2 style={{ color: '#fff', marginTop: '2.5rem', marginBottom: '1rem' }}>8. Beta Disclaimer</h2>
            <p style={{ marginBottom: '0.5rem' }}>FormDock may be in beta. During this period:</p>
            <ul style={{ paddingLeft: '1.5rem', marginBottom: '1rem' }}>
              <li>Features may change without notice</li>
              <li>Service interruptions may occur</li>
              <li>Data loss may occur</li>
            </ul>
            <p style={{ marginBottom: '1.5rem' }}>By using the service, you acknowledge and accept these risks.</p>

            <h2 style={{ color: '#fff', marginTop: '2.5rem', marginBottom: '1rem' }}>9. Your Rights</h2>
            <p style={{ marginBottom: '0.5rem' }}>Depending on your jurisdiction, you may have rights to:</p>
            <ul style={{ paddingLeft: '1.5rem', marginBottom: '1.5rem' }}>
              <li>Access your data</li>
              <li>Request deletion</li>
              <li>Request correction</li>
            </ul>

            <h2 style={{ color: '#fff', marginTop: '2.5rem', marginBottom: '1rem' }}>10. Changes to This Policy</h2>
            <p style={{ marginBottom: '1.5rem' }}>We may update this policy at any time. Continued use of the service implies acceptance of changes.</p>

            <h2 style={{ color: '#fff', marginTop: '2.5rem', marginBottom: '1rem' }}>11. Contact</h2>
            <p style={{ marginBottom: '1.5rem' }}>For questions, contact: <a href="mailto:support@formdock.com" style={{ color: 'var(--accent-1)', textDecoration: 'underline' }}>support@formdock.com</a></p>
          </div>
        </div>
      </div>
      
      {/* Background blobs for vibrancy */}
      <div className="bg-blobs" style={{ zIndex: -1 }}>
        <div className="blob blob-1"></div>
        <div className="blob blob-2" style={{ top: '50%' }}></div>
      </div>
    </div>
  );
}
