import SiteUserActionComponent from "@/components/SiteUserActionComponent";
import Head from "next/head";

export default function TermsPage() {
  return (
    <>
      <Head>
        <title>Terms | TimeTally</title>
      </Head>
      <main className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md">
          <h1 className="text-3xl font-bold text-center text-gray-900 mb-6">
            Terms of Service
          </h1>

          <div className="prose prose-sm sm:prose-base max-w-none text-gray-800">
            <p className="text-center mb-2">
              <strong>Last updated: 01.06.2025</strong>
            </p>

            <p>
              Welcome to <strong>TimeTally</strong>. By using our website, services, and features, you agree to these Terms of Service. If you do not accept any part of the terms, please do not use our service.
            </p>

            <h2 className="font-bold my-5">1. Overview</h2>
            <p>
              TimeTally {'("we", "us", "our")'} helps freelancers and small teams track time for client work, export time reports, and organize billable sessions. 
              Whether {"you're"} a solo founder, freelancer, or indie hacker, TimeTally is designed to be simple, effective, and fast.
            </p>

            <h2 className="font-bold my-5">2. Eligibility</h2>
            <p>
              You must be at least 13 years old to use TimeTally. By using our service, you confirm you are legally allowed to enter into this agreement.
            </p>

            <h2 className="font-bold my-5">3. Account Registration</h2>
            <p>TimeTally allows you to sign up using Google authentication.</p>
            <ul className="list-disc list-inside space-y-1">
              <li className="font-semibold text-sm">You are responsible for all activity on your account.</li>
              <li className="font-semibold text-sm">You must notify us of any unauthorized access.</li>
              <li className="font-semibold text-sm">You may only maintain one free account.</li>
            </ul>

            <h2 className="font-bold my-5">4. Services Description</h2>
            <ul className="list-disc list-inside space-y-1">
              <li className="font-semibold text-sm">Track time entries for different projects</li>
              <li className="font-semibold text-sm">Create and manage clients and projects</li>
              <li className="font-semibold text-sm">Export PDF reports with or without branding</li>
              <li className="font-semibold text-sm">Access detailed session data per project</li>
            </ul>

            <h2 className="font-bold my-5">5. Credits & Usage</h2>
            <p>We use a credit-based system for session creation:</p>
            <ul className="list-disc list-inside space-y-1">
              <li className="font-semibold text-sm">Only session creation consumes credits</li>
              <li className="font-semibold text-sm">Free users receive 3 credits on signup</li>
              <li className="font-semibold text-sm">Clients and projects do not consume credits</li>
              <li className="font-semibold text-sm">Buy credits anytime for more sessions</li>
            </ul>
            <p><strong>Note:</strong> Credits are non-refundable and non-transferable.</p>

            <h2 className="font-bold my-5">6. Subscription & Payments</h2>
            <p>We offer monthly and annual subscription plans via <a href="https://stripe.com" target="_blank" className="text-blue-600">Stripe</a>.</p>
            <ul className="list-disc list-inside space-y-1">
              <li className="font-semibold text-sm">We do not store payment data; Stripe handles it securely</li>
              <li className="font-semibold text-sm">Subscriptions auto-renew unless canceled</li>
              <li className="font-semibold text-sm">You can cancel your plan anytime from your dashboard</li>
            </ul>
            <p>If payment fails, your subscription may be paused until resolved.</p>

            <h2 className="font-bold my-5">7. Refund Policy</h2>
            <p>TimeTally does not offer refunds for:</p>
            <ul className="list-disc list-inside space-y-1">
              <li className="font-semibold text-sm">Unused credits</li>
              <li className="font-semibold text-sm">Partial billing periods</li>
              <li className="font-semibold text-sm">Plan downgrades</li>
            </ul>

            <h2 className="font-bold my-5">8. Acceptable Use</h2>
            <p>Do not use TimeTally to:</p>
            <ul className="list-disc list-inside space-y-1">
              <li className="font-semibold text-sm">Engage in malicious, fraudulent, or spammy activities</li>
              <li className="font-semibold text-sm">Share false or misleading time reports</li>
              <li className="font-semibold text-sm">Exploit or reverse-engineer our platform</li>
            </ul>
            <p>Violation of these terms may result in account termination.</p>

            <h2 className="font-bold my-5">9. Intellectual Property</h2>
            <p>
              All content, branding, and code are the property of TimeTally. You may not reuse, reproduce, or distribute without permission.
            </p>
            <p>
              You own the data you generate. We only use it to provide services to you.
            </p>

            <h2 className="font-bold my-5">10. Third-Party Services</h2>
            <p>TimeTally relies on:</p>
            <ul className="list-disc list-inside space-y-1">
              <li className="font-semibold text-sm">Google for authentication</li>
              <li className="font-semibold text-sm">Stripe for secure payment processing</li>
            </ul>

            <h2 className="font-bold my-5">11. Termination</h2>
            <p>You can delete your account at any time. We may terminate accounts that violate these terms.</p>
            <ul className="list-disc list-inside space-y-1">
              <li className="font-semibold text-sm">Access to data will be revoked</li>
              <li className="font-semibold text-sm">Subscriptions will be canceled</li>
              <li className="font-semibold text-sm">No refunds will be issued</li>
            </ul>

            <h2 className="font-bold my-5">12. Disclaimer of Warranties</h2>
            <p>
              TimeTally is provided {"as is"}. We do not guarantee uninterrupted service or error-free functionality.
            </p>

            <h2 className="font-bold my-5">13. Limitation of Liability</h2>
            <p>TimeTally is not liable for:</p>
            <ul className="list-disc list-inside space-y-1">
              <li className="font-semibold text-sm">Indirect or incidental damages</li>
              <li className="font-semibold text-sm">Loss of revenue or data</li>
              <li className="font-semibold text-sm">Actions based on exported reports</li>
            </ul>

            <h2 className="font-bold my-5">14. Changes to Terms</h2>
            <p>We may update these Terms at any time. Continued use means you agree to the latest version.</p>

            <h2 className="font-bold my-5">15. Contact</h2>
            <p>If you have questions, contact us here:</p>
            <ul className="list-disc list-inside space-y-1">
              <li className="font-semibold text-blue-700 text-sm">📧 <a href="/contact">contact</a></li>
            </ul>

            <p><strong>Thanks for using TimeTally — track better, bill smarter. ⏱️</strong></p>
          </div>
        </div>
        <SiteUserActionComponent action="visit" object="terms" />
      </main>
    </>
  );
}
