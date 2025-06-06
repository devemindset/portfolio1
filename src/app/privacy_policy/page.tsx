// app/privacy/page.tsx
export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold text-gray-900 mb-6 text-center">
          Privacy Policy for ValidationFlow
        </h1>

        <div className="space-y-6 text-gray-800 leading-relaxed text-sm sm:text-base">
          <p><strong>Effective Date:</strong> 01.01.025</p>

          <p>
            At ValidationFlow, we are committed to protecting your privacy and ensuring a transparent user experience.
            This Privacy Policy explains how we collect, use, store, and protect your personal information when you use our platform.
          </p>

          <p>
            ValidationFlow is a SaaS tool that enables users to create validation request links and track responses across multiple platforms.
            Our users range from freelancers and indie hackers to students and professionals who need a simple and effective way to gather
            validation for ideas, tasks, or projects. By using our service, you agree to the practices described in this Privacy Policy.
          </p>

          <hr className="my-6 border-gray-300" />

          <h2 className="text-xl font-semibold text-gray-800">1. Information We Collect</h2>

          <h3 className="font-medium">a. Personal Information</h3>
          <ul className="list-disc list-inside space-y-1">
            <li><strong>Google Authentication Data:</strong> When you sign in with Google, we collect your name, email address, and profile picture. We do <strong>not</strong> access your password or other Google account data.</li>
            <li><strong>Account Metadata:</strong> We generate a unique user ID for your account.</li>
          </ul>

          <h3 className="font-medium">b. Usage Data</h3>
          <ul className="list-disc list-inside space-y-1">
            <li>Pages visited</li>
            <li>Features used (e.g., link creation, link clicks)</li>
            <li>Date and time of usage</li>
            <li>Browser and device information</li>
          </ul>

          <h3 className="font-medium">c. Payment Data</h3>
          <ul className="list-disc list-inside space-y-1">
            <li>We do <strong>not</strong> store or process your credit card or banking information.</li>
            <li>Stripe handles all sensitive payment data and returns us a confirmation of the transaction.</li>
          </ul>

          <h2 className="text-xl font-semibold text-gray-800">2. How We Use Your Information</h2>
          <ul className="list-disc list-inside space-y-1">
            <li>Provide access to the platform</li>
            <li>Enable core features like validation tracking and link creation</li>
            <li>Manage credit balances and subscription status</li>
            <li>Communicate important updates and support responses</li>
            <li>Improve platform performance and usability</li>
          </ul>
          <p>We do <strong>not</strong> sell or rent your data to any third parties.</p>

          <h2 className="text-xl font-semibold">3. Credit System and Subscription</h2>
          <ul className="list-disc list-inside space-y-1">
            <li>Each user with a free account receives <strong>2 free credits</strong></li>
            <li>Additional credits can be purchased through Stripe</li>
            <li>One credit equals the tracking of one validation link or one variation (e.g., per platform like WhatsApp, Facebook, etc.)</li>
            <li>Subscriptions allow unlimited validation links</li>
            <li>Stripe handles all billing and renewals securely</li>
          </ul>

          <h2 className="text-xl font-semibold">4. Sharing and Disclosure</h2>
          <ul className="list-disc list-inside space-y-1">
            <li><strong>Service Providers:</strong> GDPR/CCPA-compliant third parties (e.g., hosting, analytics)</li>
            <li><strong>Legal Compliance:</strong> Shared only if required by law</li>
          </ul>

          <h2 className="text-xl font-semibold">5. Data Retention</h2>
          <ul className="list-disc list-inside space-y-1">
            <li>Your personal data is stored securely as long as your account is active.</li>
            <li>You can request account deletion at any time.</li>
            <li>We retain anonymized usage data for analytical purposes.</li>
          </ul>

          <h2 className="text-xl font-semibold">6. Cookies and Tracking</h2>
          <ul className="list-disc list-inside space-y-1">
            <li>User authentication</li>
            <li>Session tracking</li>
            <li>Analyzing usage patterns</li>
          </ul>
          <p>Cookies are small data files stored in your browser. You can modify your browser settings to block cookies.</p>

          <h2 className="text-xl font-semibold">7. Security Measures</h2>
          <ul className="list-disc list-inside space-y-1">
            <li>HTTPS encryption for all data in transit</li>
            <li>OAuth via Google for secure login</li>
            <li>Stripe for secure billing</li>
            <li>Role-based access controls</li>
          </ul>

          <h2 className="text-xl font-semibold">8. User Rights</h2>
          <ul className="list-disc list-inside space-y-1">
            <li>Access your data</li>
            <li>Modify or correct your information</li>
            <li>Request deletion of your account and data</li>
            <li>Withdraw consent at any time</li>
          </ul>
          <p>Contact us : <a href="/contact" className="text-blue-600 underline">Contact</a> for any such requests.</p>

          <h2 className="text-xl font-semibold">9. Children’s Privacy</h2>
          <p>ValidationFlow is not intended for children under 13. We do not knowingly collect personal data from children. If we learn we have collected such data, we will delete it promptly.</p>

          <h2 className="text-xl font-semibold">10. Third-Party Services</h2>
          <ul className="list-disc list-inside space-y-1">
            <li><strong>Google OAuth</strong> for authentication</li>
            <li><strong>Stripe</strong> for payment processing</li>
            <li><strong>Vercel/Render/etc.</strong> for hosting</li>
            <li><strong>Analytics tools</strong> (e.g., Plausible, Google Analytics)</li>
          </ul>

          <h2 className="text-xl font-semibold">11. Changes to This Policy</h2>
          <p>We may update this Privacy Policy from time to time. When changes are made, we will:</p>
          <ul className="list-disc list-inside space-y-1">
            <li>Notify users via email or in-app message</li>
            <li>Update the effective date at the top</li>
          </ul>

          {/* <h2 className="text-xl font-semibold">12. Contact</h2>
          <ul className="list-disc list-inside space-y-1">
            <li><strong>Email:</strong> <a href="mailto:support@validationflow.com" className="text-blue-600 underline">support@validationflow.com</a></li>
            <li><strong>Website:</strong> <a href="https://validationflow.com" className="text-blue-600 underline">https://validationflow.com</a></li>
          </ul> */}

          <p className="pt-6 font-semibold">
            Thank you for trusting ValidationFlow. We are committed to providing you with a secure, transparent, and reliable experience.
          </p>
        </div>
      </div>
    </main>
  );
}
