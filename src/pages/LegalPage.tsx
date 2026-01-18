export function LegalPage() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="mb-16">
          <h1 className="mb-4">Privacy & Legal</h1>
          <p className="opacity-70">
            Last updated: October 22, 2025
          </p>
        </div>

        <div className="space-y-12">
          {/* Privacy Policy */}
          <div className="glass-strong p-8 rounded-2xl border-2 border-border brutalist-shadow">
            <h2 className="mb-6">Privacy Policy</h2>
            
            <div className="space-y-6 opacity-80">
              <div>
                <h3 className="mb-3">Your Privacy Matters</h3>
                <p>
                  At AIGENCY.LIMITED, we're committed to protecting your privacy. 
                  We only collect essential information needed to provide our services 
                  and never sell your data to third parties.
                </p>
              </div>

              <div>
                <h3 className="mb-3">Information We Collect</h3>
                <ul className="list-disc list-inside space-y-2">
                  <li>Name and email address (when you contact us)</li>
                  <li>Business information (when requesting consultations)</li>
                  <li>Website usage data (via analytics)</li>
                  <li>Communication preferences</li>
                </ul>
              </div>

              <div>
                <h3 className="mb-3">How We Use Your Information</h3>
                <ul className="list-disc list-inside space-y-2">
                  <li>To respond to your inquiries and provide services</li>
                  <li>To send course materials and updates (if enrolled)</li>
                  <li>To improve our website and services</li>
                  <li>To send newsletters (only with your consent)</li>
                </ul>
              </div>

              <div>
                <h3 className="mb-3">Your Rights</h3>
                <p>
                  You have the right to access, update, or delete your personal data at any time. 
                  Contact us at hello@aigency.limited to exercise these rights.
                </p>
              </div>
            </div>
          </div>

          {/* Cookie Policy */}
          <div className="glass-strong p-8 rounded-2xl border-2 border-border brutalist-shadow">
            <h2 className="mb-6">Cookie Policy</h2>
            
            <div className="space-y-6 opacity-80">
              <div>
                <h3 className="mb-3">What Are Cookies?</h3>
                <p>
                  Cookies are small text files stored on your device that help us improve 
                  your browsing experience. We use essential cookies to ensure the website 
                  functions properly.
                </p>
              </div>

              <div>
                <h3 className="mb-3">Cookies We Use</h3>
                <ul className="list-disc list-inside space-y-2">
                  <li><strong>Essential Cookies:</strong> Required for the website to function</li>
                  <li><strong>Analytics Cookies:</strong> Help us understand how visitors use our site</li>
                  <li><strong>Preference Cookies:</strong> Remember your settings (like dark mode)</li>
                </ul>
              </div>

              <div>
                <h3 className="mb-3">Managing Cookies</h3>
                <p>
                  You can control cookies through your browser settings. Note that disabling 
                  cookies may affect website functionality.
                </p>
              </div>
            </div>
          </div>

          {/* Terms of Service */}
          <div className="glass-strong p-8 rounded-2xl border-2 border-border brutalist-shadow">
            <h2 className="mb-6">Terms of Service</h2>
            
            <div className="space-y-6 opacity-80">
              <div>
                <h3 className="mb-3">Service Agreement</h3>
                <p>
                  By using AIGENCY.LIMITED services, you agree to these terms. 
                  We reserve the right to update these terms at any time.
                </p>
              </div>

              <div>
                <h3 className="mb-3">Course Enrollment</h3>
                <ul className="list-disc list-inside space-y-2">
                  <li>All course fees are non-refundable after 14 days</li>
                  <li>Course access is granted for the duration specified</li>
                  <li>Course materials are for personal use only</li>
                  <li>We reserve the right to update course content</li>
                </ul>
              </div>

              <div>
                <h3 className="mb-3">Consultation Services</h3>
                <p>
                  Free consultations are subject to availability. Paid services will be 
                  invoiced separately with clear terms outlined.
                </p>
              </div>
            </div>
          </div>

          {/* Contact for Legal */}
          <div className="glass-strong p-8 rounded-2xl border-2 border-purple-500 brutalist-shadow text-center">
            <h3 className="mb-4">Questions About Privacy or Legal?</h3>
            <p className="opacity-80 mb-6">
              We're happy to answer any questions about how we handle your data.
            </p>
            <a 
              href="mailto:hello@aigency.limited"
              className="inline-block px-6 py-3 rounded-lg glass-purple border-2 border-purple-500 hover:scale-105 transition-transform"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
