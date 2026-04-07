import React, { useEffect } from 'react';
import { ArrowLeft } from 'lucide-react';
import './App.css';

export default function TermsAndConditions() {
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
          <h1 style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>Terms and Conditions for FormDock</h1>
          <p className="text-secondary" style={{ marginBottom: '2.5rem' }}>Last Updated: 05/04/2026</p>

          <div className="prose" style={{ color: '#d4d4d8', lineHeight: '1.8' }}>
            <p style={{ marginBottom: '1.5rem' }}>
              FormDock is a product owned and operated by <strong>ForzaSoft Solutions</strong> ("we", "our", "us").
            </p>
            <p style={{ marginBottom: '1.5rem' }}>
              By using FormDock, you agree to the following terms.
            </p>

            <h2 style={{ color: '#fff', marginTop: '2.5rem', marginBottom: '1rem' }}>1. Service Description</h2>
            <p style={{ marginBottom: '1.5rem' }}>FormDock provides a backend service for handling form submissions, analytics, and AI-assisted features.</p>

            <h2 style={{ color: '#fff', marginTop: '2.5rem', marginBottom: '1rem' }}>2. Ownership</h2>
            <p style={{ marginBottom: '1.5rem' }}>FormDock is owned and operated by ForzaSoft Solutions. All rights, title, and interest in the platform, including software, branding, and infrastructure, belong to ForzaSoft Solutions.</p>

            <h2 style={{ color: '#fff', marginTop: '2.5rem', marginBottom: '1rem' }}>3. Account Responsibility</h2>
            <p style={{ marginBottom: '0.5rem' }}>You are responsible for:</p>
            <ul style={{ paddingLeft: '1.5rem', marginBottom: '1.5rem' }}>
              <li>Maintaining your account credentials</li>
              <li>Securing your API keys</li>
              <li>All activity under your account</li>
            </ul>

            <h2 style={{ color: '#fff', marginTop: '2.5rem', marginBottom: '1rem' }}>4. Acceptable Use</h2>
            <p style={{ marginBottom: '0.5rem' }}>You agree NOT to use FormDock for:</p>
            <ul style={{ paddingLeft: '1.5rem', marginBottom: '1.5rem' }}>
              <li>Illegal activities</li>
              <li>Spam or abusive submissions</li>
              <li>Collecting sensitive data without consent</li>
              <li>Violating applicable laws or regulations</li>
            </ul>

            <h2 style={{ color: '#fff', marginTop: '2.5rem', marginBottom: '1rem' }}>5. API Usage</h2>
            <ul style={{ paddingLeft: '1.5rem', marginBottom: '1.5rem' }}>
              <li>API keys must be kept secure</li>
              <li>Abuse of API (e.g., excessive requests, bypassing limits) may result in suspension</li>
            </ul>

            <h2 style={{ color: '#fff', marginTop: '2.5rem', marginBottom: '1rem' }}>6. Data Responsibility</h2>
            <ul style={{ paddingLeft: '1.5rem', marginBottom: '1.5rem' }}>
              <li>You are responsible for the data you collect</li>
              <li>You must ensure compliance with applicable privacy laws</li>
            </ul>

            <h2 style={{ color: '#fff', marginTop: '2.5rem', marginBottom: '1rem' }}>7. AI Features</h2>
            <ul style={{ paddingLeft: '1.5rem', marginBottom: '1.5rem' }}>
              <li>AI outputs are generated automatically</li>
              <li>We do not guarantee accuracy</li>
              <li>We do NOT use your data, your users’ data, or your website content to train AI models</li>
            </ul>

            <h2 style={{ color: '#fff', marginTop: '2.5rem', marginBottom: '1rem' }}>8. Beta Disclaimer</h2>
            <p style={{ marginBottom: '0.5rem' }}>FormDock may be in beta. Therefore:</p>
            <ul style={{ paddingLeft: '1.5rem', marginBottom: '1rem' }}>
              <li>The service may be unstable</li>
              <li>Downtime may occur</li>
              <li>Data loss is possible</li>
            </ul>
            <p style={{ marginBottom: '1rem' }}>Additionally, we reserve the right to modify, suspend, or discontinue the service (in whole or in part) at any time, without prior notice, during the beta period.</p>
            <p style={{ marginBottom: '1.5rem' }}>By using the service, you acknowledge and accept these risks.</p>

            <h2 style={{ color: '#fff', marginTop: '2.5rem', marginBottom: '1rem' }}>9. Limitation of Liability</h2>
            <p style={{ marginBottom: '0.5rem' }}>To the maximum extent permitted by law:</p>
            <ul style={{ paddingLeft: '1.5rem', marginBottom: '1.5rem' }}>
              <li>FormDock is provided "as is"</li>
              <li>ForzaSoft Solutions shall not be liable for:
                <ul style={{ paddingLeft: '1.5rem', marginTop: '0.5rem' }}>
                  <li>Data loss</li>
                  <li>Service downtime</li>
                  <li>Business interruption</li>
                  <li>Indirect or consequential damages</li>
                </ul>
              </li>
            </ul>

            <h2 style={{ color: '#fff', marginTop: '2.5rem', marginBottom: '1rem' }}>10. Termination</h2>
            <p style={{ marginBottom: '0.5rem' }}>We may suspend or terminate accounts if:</p>
            <ul style={{ paddingLeft: '1.5rem', marginBottom: '1.5rem' }}>
              <li>Terms are violated</li>
              <li>Abuse is detected</li>
              <li>Required by law</li>
            </ul>

            <h2 style={{ color: '#fff', marginTop: '2.5rem', marginBottom: '1rem' }}>11. Payments</h2>
            <ul style={{ paddingLeft: '1.5rem', marginBottom: '1.5rem' }}>
              <li>Paid plans are billed as described</li>
              <li>No guarantees of uninterrupted service</li>
              <li>No refunds unless explicitly stated</li>
            </ul>

            <h2 style={{ color: '#fff', marginTop: '2.5rem', marginBottom: '1rem' }}>12. Changes to Terms</h2>
            <p style={{ marginBottom: '1.5rem' }}>We may modify these terms at any time. Continued use implies acceptance.</p>

            <h2 style={{ color: '#fff', marginTop: '2.5rem', marginBottom: '1rem' }}>13. Governing Law</h2>
            <p style={{ marginBottom: '1.5rem' }}>These terms are governed by the laws of India.</p>

            <h2 style={{ color: '#fff', marginTop: '2.5rem', marginBottom: '1rem' }}>14. Contact</h2>
            <p style={{ marginBottom: '1.5rem' }}>For support or legal inquiries: <a href="mailto:support@formdock.com" style={{ color: 'var(--accent-1)', textDecoration: 'underline' }}>support@formdock.com</a></p>
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
