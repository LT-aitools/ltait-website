import { useEffect } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const Privacy = () => {
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-grow">
        <section className="bg-white py-16 md:py-24">
          <div className="max-container">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold mb-8 text-charcoal">Privacy Policy</h1>
              
              <div className="prose prose-lg max-w-none">
                <p className="text-lg text-charcoal/80 mb-8">
                  <strong>Last updated:</strong> {new Date().toLocaleDateString('en-US', { 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric' 
                  })}
                </p>

                <div className="space-y-8">
                  <section>
                    <h2 className="text-2xl font-bold mb-4 text-charcoal">Introduction</h2>
                    <p className="text-charcoal/80 leading-relaxed">
                      Let's Talk AI Tools ("we," "our," or "us") is committed to protecting your privacy. 
                      This Privacy Policy explains how we collect, use, disclose, and safeguard your information 
                      when you visit our website at www.letstalkaitools.com.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-2xl font-bold mb-4 text-charcoal">Information We Collect</h2>
                    <div className="space-y-4">
                      <div>
                        <h3 className="text-xl font-semibold mb-2 text-charcoal">Personal Information</h3>
                        <p className="text-charcoal/80 leading-relaxed">
                          We may collect personal information that you voluntarily provide to us when you:
                        </p>
                        <ul className="list-disc list-inside mt-2 space-y-1 text-charcoal/80">
                          <li>Contact us through our website</li>
                          <li>Subscribe to our newsletter</li>
                          <li>Comment on our blog posts</li>
                          <li>Interact with our social media accounts</li>
                        </ul>
                      </div>
                      
                      <div>
                        <h3 className="text-xl font-semibold mb-2 text-charcoal">Automatically Collected Information</h3>
                        <p className="text-charcoal/80 leading-relaxed">
                          When you visit our website, we automatically collect certain information about your device, including:
                        </p>
                        <ul className="list-disc list-inside mt-2 space-y-1 text-charcoal/80">
                          <li>IP address</li>
                          <li>Browser type and version</li>
                          <li>Operating system</li>
                          <li>Pages visited and time spent on each page</li>
                          <li>Referring website</li>
                        </ul>
                      </div>
                    </div>
                  </section>

                  <section>
                    <h2 className="text-2xl font-bold mb-4 text-charcoal">How We Use Your Information</h2>
                    <p className="text-charcoal/80 leading-relaxed mb-4">
                      We use the information we collect to:
                    </p>
                    <ul className="list-disc list-inside space-y-1 text-charcoal/80">
                      <li>Provide and maintain our website</li>
                      <li>Improve user experience and website functionality</li>
                      <li>Analyze website usage and trends</li>
                      <li>Respond to your inquiries and comments</li>
                      <li>Send newsletters and updates (with your consent)</li>
                      <li>Comply with legal obligations</li>
                    </ul>
                  </section>

                  <section>
                    <h2 className="text-2xl font-bold mb-4 text-charcoal">Cookies and Tracking Technologies</h2>
                    <p className="text-charcoal/80 leading-relaxed">
                      We use cookies and similar tracking technologies to enhance your browsing experience. 
                      These technologies help us understand how you use our website and improve our services. 
                      You can control cookie settings through your browser preferences.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-2xl font-bold mb-4 text-charcoal">Third-Party Services</h2>
                    <p className="text-charcoal/80 leading-relaxed mb-4">
                      Our website may contain links to third-party services, including:
                    </p>
                    <ul className="list-disc list-inside space-y-1 text-charcoal/80">
                      <li>Medium (for blog content)</li>
                      <li>GitHub (for project repositories)</li>
                      <li>Social media platforms (Twitter/X, Bluesky, LinkedIn)</li>
                      <li>Analytics services</li>
                    </ul>
                    <p className="text-charcoal/80 leading-relaxed mt-4">
                      These third-party services have their own privacy policies, and we encourage you to review them.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-2xl font-bold mb-4 text-charcoal">Data Security</h2>
                    <p className="text-charcoal/80 leading-relaxed">
                      We implement appropriate security measures to protect your personal information against 
                      unauthorized access, alteration, disclosure, or destruction. However, no method of 
                      transmission over the internet is 100% secure, and we cannot guarantee absolute security.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-2xl font-bold mb-4 text-charcoal">Your Rights</h2>
                    <p className="text-charcoal/80 leading-relaxed mb-4">
                      Depending on your location, you may have certain rights regarding your personal information:
                    </p>
                    <ul className="list-disc list-inside space-y-1 text-charcoal/80">
                      <li>Access and review your personal information</li>
                      <li>Request correction of inaccurate information</li>
                      <li>Request deletion of your personal information</li>
                      <li>Object to processing of your personal information</li>
                      <li>Withdraw consent for data processing</li>
                    </ul>
                  </section>

                  <section>
                    <h2 className="text-2xl font-bold mb-4 text-charcoal">Children's Privacy</h2>
                    <p className="text-charcoal/80 leading-relaxed">
                      Our website is not intended for children under 13 years of age. We do not knowingly 
                      collect personal information from children under 13. If you are a parent or guardian 
                      and believe your child has provided us with personal information, please contact us.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-2xl font-bold mb-4 text-charcoal">Changes to This Privacy Policy</h2>
                    <p className="text-charcoal/80 leading-relaxed">
                      We may update this Privacy Policy from time to time. We will notify you of any changes 
                      by posting the new Privacy Policy on this page and updating the "Last updated" date. 
                      We encourage you to review this Privacy Policy periodically.
                    </p>
                  </section>

                  <section>
                    <h2 className="text-2xl font-bold mb-4 text-charcoal">Contact Us</h2>
                    <p className="text-charcoal/80 leading-relaxed">
                      If you have any questions about this Privacy Policy or our data practices, please contact us:
                    </p>
                    <div className="mt-4 space-y-2 text-charcoal/80">
                      <p>Email: <a href="mailto:hello@letstalkaitools.com" className="text-hot-pink hover:text-hot-pink/80 transition-colors">hello@letstalkaitools.com</a></p>
                      <p>Website: <a href="https://www.letstalkaitools.com" className="text-hot-pink hover:text-hot-pink/80 transition-colors">www.letstalkaitools.com</a></p>
                    </div>
                  </section>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Privacy; 