import { useEffect } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const PrivacyFeministNewsletter = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-grow">
        <section className="bg-white py-16 md:py-24">
          <div className="max-container">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold text-charcoal mb-8">Privacy Policy: Feminist Newsletter Calendar Automation</h1>
              <p className="text-lg text-charcoal/80 mb-8">
                <strong>Last updated:</strong> {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
              </p>
              <div className="max-w-none">
                <section className="mt-8">
                  <h2 className="text-2xl font-bold text-charcoal mb-2">Introduction</h2>
                  <p className="text-charcoal/80 leading-relaxed">
                    This privacy policy explains how we handle your information when you use the Feminist Newsletter Calendar Automation tool ("the Service"). We are committed to protecting your privacy and ensuring transparency about how your data is used.
                  </p>
                </section>
                <section className="mt-8">
                  <h2 className="text-2xl font-bold text-charcoal mb-2">What Information We Collect</h2>
                  <ul className="list-disc list-inside text-charcoal/80">
                    <li><strong>Google Account Information:</strong> When you authorize the Service, we access your Google Calendar and Gmail account only as necessary to automate the extraction of event information from newsletter emails and to create calendar events on your behalf.</li>
                    <li><strong>Email Content:</strong> The Service processes the content of specific newsletter emails to extract event details. Only emails relevant to the newsletter are accessed and processed.</li>
                    <li><strong>Calendar Data:</strong> The Service creates and updates events in your Google Calendar as part of its core functionality.</li>
                  </ul>
                </section>
                <section className="mt-8">
                  <h2 className="text-2xl font-bold text-charcoal mb-2">How We Use Your Information</h2>
                  <ul className="list-disc list-inside text-charcoal/80">
                    <li>To extract event information from newsletter emails.</li>
                    <li>To create and update events in your Google Calendar.</li>
                    <li>To improve the accuracy and reliability of the Service (e.g., by logging errors or failures in time extraction).</li>
                  </ul>
                </section>
                <section className="mt-8">
                  <h2 className="text-2xl font-bold text-charcoal mb-2">Data Storage and Security</h2>
                  <ul className="list-disc list-inside text-charcoal/80">
                    <li><strong>No Data Retention:</strong> The Service does not store your personal data, email content, or calendar data on any external servers. All processing happens in-memory and is only used for the duration of the automation process.</li>
                    <li><strong>No Data Sharing:</strong> We do not share your information with third parties.</li>
                    <li><strong>Security:</strong> We use industry-standard security practices to protect your information during processing and while communicating with Google APIs.</li>
                  </ul>
                </section>
                <section className="mt-8">
                  <h2 className="text-2xl font-bold text-charcoal mb-2">Your Choices</h2>
                  <ul className="list-disc list-inside text-charcoal/80">
                    <li>You can revoke the Service's access to your Google account at any time via your Google Account security settings.</li>
                    <li>You may delete any calendar events created by the Service at your discretion.</li>
                  </ul>
                </section>
                <section className="mt-8">
                  <h2 className="text-2xl font-bold text-charcoal mb-2">Changes to This Policy</h2>
                  <p className="text-charcoal/80 leading-relaxed">
                    We may update this privacy policy from time to time. Any changes will be posted on this page with an updated effective date.
                  </p>
                </section>
                <section className="mt-8">
                  <h2 className="text-2xl font-bold text-charcoal mb-2">Contact</h2>
                  <p className="text-charcoal/80 leading-relaxed">
                    If you have any questions or concerns about this privacy policy or your data, please contact us at: <a href="mailto:hello@letstalkaitools.com" className="text-hot-pink hover:text-hot-pink/80 transition-colors">hello@letstalkaitools.com</a>
                  </p>
                </section>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default PrivacyFeministNewsletter; 