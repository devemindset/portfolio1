import SiteUserActionComponent from "@/components/SiteUserActionComponent";
import Head from "next/head";

// app/privacy/page.tsx
export default function PrivacyPolicyPage() {
  return (
    <>
      <Head>
        <title>Privacy | TimeTally</title>
      </Head>

      <main className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md">
          <h1 className="text-3xl font-bold text-gray-900 mb-6 text-center">
            Privacy Policy for TimeTally
          </h1>

          <div className="space-y-6 text-gray-800 leading-relaxed text-sm sm:text-base">
            <p><strong>Effective Date:</strong> 01.01.2025</p>

            <p>
              At TimeTally, we are committed to protecting your privacy and ensuring a transparent user experience.
              This Privacy Policy explains how we collect, use, store, and protect your personal information when you use our platform.
            </p>

            <p>
              TimeTally is a productivity tool designed for freelancers, teams, and solo founders to track time spent on projects and generate reports. 
              By using our service, you agree to the practices described in this Privacy Policy.
            </p>

            <hr className="my-6 border-gray-300" />

            <h2 className="text-xl font-semibold text-gray-800">1. Information We Collect</h2>

            <h3 className="font-medium">a. Personal Information</h3>
            <ul className="list-disc list-inside space-y-1">
              <li><strong>Google Authentication Data:</strong> When you sign in with Google, we collect your name, email address, and profile picture. We do <strong>not</strong> access your password.</li>
              <li><strong>Account Metadata:</strong> We generate a unique user ID to manage your account securely.</li>
            </ul>

            <h3 className="font-medium">b. Usage Data</h3>
            <ul className="list-disc list-inside space-y-1">
              <li>Time entries and session logs</li>
              <li>Projects and report creation activity</li>
              <li>Date and time of usage</li>
              <li>Browser and device information</li>
            </ul>

            <h3 className="font-medium">c. Payment Data</h3>
            <ul className="list-disc list-inside space-y-1">
              <li>We do <strong>not</strong> store your credit card or banking information directly.</li>
              <li>Payments are processed securely through <strong>Stripe</strong>.</li>
            </ul>

            <h2 className="text-xl font-semibold text-gray-800">2. How We Use Your Information</h2>
            <ul className="list-disc list-inside space-y-1">
              <li>Provide access to your dashboard, projects, and reports</li>
              <li>Enable time tracking, session viewing, and report generation</li>
              <li>Manage your subscription and usage limits</li>
              <li>Communicate updates and support messages</li>
              <li>Improve service features and performance</li>
            </ul>
            <p>We do <strong>not</strong> sell or rent your data to any third parties.</p>

            <h2 className="text-xl font-semibold">3. Subscription and Usage Quota</h2>
            <ul className="list-disc list-inside space-y-1">
              <li>Free users receive a limited number of sessions per month</li>
              <li>Premium users enjoy unlimited tracking and report features</li>
              <li>Billing is handled by Stripe, with recurring subscription options</li>
            </ul>

            <h2 className="text-xl font-semibold">4. Sharing and Disclosure</h2>
            <ul className="list-disc list-inside space-y-1">
              <li><strong>Service Providers:</strong> We work with GDPR/CCPA-compliant providers for hosting, analytics, and payments.</li>
              <li><strong>Legal Compliance:</strong> Information may be disclosed only when legally required.</li>
            </ul>

            <h2 className="text-xl font-semibold">5. Data Retention</h2>
            <ul className="list-disc list-inside space-y-1">
              <li>Personal data is retained as long as your account is active.</li>
              <li>You may request account deletion at any time.</li>
              <li>We keep anonymized usage data for analytics.</li>
            </ul>

            <h2 className="text-xl font-semibold">6. Cookies and Tracking</h2>
            <ul className="list-disc list-inside space-y-1">
              <li>Session authentication</li>
              <li>Tracking of session length and navigation</li>
              <li>Service performance optimization</li>
            </ul>
            <p>Cookies are stored in your browser. You can control their behavior through your browser settings.</p>

            <h2 className="text-xl font-semibold">7. Security Measures</h2>
            <ul className="list-disc list-inside space-y-1">
              <li>HTTPS encryption for all data transmission</li>
              <li>Google OAuth for secure authentication</li>
              <li>Stripe for secure payment processing</li>
              <li>Role-based access control to protect sensitive data</li>
            </ul>

            <h2 className="text-xl font-semibold">8. Your Rights</h2>
            <ul className="list-disc list-inside space-y-1">
              <li>Access and export your data</li>
              <li>Edit or update your profile information</li>
              <li>Delete your account and data</li>
              <li>Withdraw your consent at any time</li>
            </ul>
            <p>To exercise these rights, contact us at <a href="/contact" className="text-blue-600 underline">/contact</a>.</p>

            <h2 className="text-xl font-semibold">9. Children’s Privacy</h2>
            <p>TimeTally is not intended for children under 13. We do not knowingly collect data from minors. If we become aware of such data, it will be removed promptly.</p>

            <h2 className="text-xl font-semibold">10. Third-Party Services</h2>
            <ul className="list-disc list-inside space-y-1">
              <li><strong>Google OAuth</strong> for sign-in authentication</li>
              <li><strong>Stripe</strong> for payment processing</li>
              <li><strong>Hosting providers</strong> (e.g., Vercel, Render)</li>
              <li><strong>Analytics</strong> (e.g., Plausible, Google Analytics)</li>
            </ul>

            <h2 className="text-xl font-semibold">11. Changes to This Policy</h2>
            <p>We may update this policy periodically. You will be informed of changes via email or through a notification in the platform.</p>
            <ul className="list-disc list-inside space-y-1">
              <li>The effective date will always be updated at the top.</li>
              <li>Major updates will be clearly announced.</li>
            </ul>

            <p className="pt-6 font-semibold">
              Thank you for trusting TimeTally. We are committed to keeping your data private and your work organized.
            </p>
          </div>
        </div>
      </main>
      <SiteUserActionComponent action="visite" object="privacy" />
    </>
  );
}
