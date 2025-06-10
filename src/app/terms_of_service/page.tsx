import SiteUserActionComponent from "@/components/SiteUserActionComponent";
import Head from "next/head";


export default function TermsPage() {
 
  return (
    <>
      <Head>
        <title>Terms | Validation Flow</title>
      </Head>
    <main className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold text-center text-gray-900 mb-6">
          Terms of Service
        </h1>

        <div className="prose prose-sm sm:prose-base max-w-none text-gray-800">
          <p className="text-center mb-2"><strong>Last updated: 01.01.025</strong></p>

          <p>
            Welcome to <strong>ValidationFlow</strong>. By accessing or using our website, services, and features, you agree to be bound by these Terms of Service. If you do not agree with any part of the terms, you must not use our service.
          </p>

          <h2 className="font-bold my-5">1. Overview</h2>
          <p>
            ValidationFlow (“we”, “us”, “our”) provides a platform that simplifies the process of getting approvals and feedback by generating shareable validation links. Whether {"you're"} validating an idea, running a survey, or collecting team sign-offs, our tool is built to make validation fast, transparent, and organized.
          </p>

          <h2 className="font-bold my-5">2. Eligibility</h2>
          <p>
            You must be at least 13 years old to use ValidationFlow. By using our service, you affirm that you are of legal age to enter into these terms and agree to comply with all applicable laws and regulations.
          </p>

          <h2 className="font-bold my-5">3. Account Registration</h2>
          <p>
            To use ValidationFlow, users can sign up via <strong>Google authentication</strong>. We do not store your password or login credentials.
          </p>
          <ul className="list-disc list-inside space-y-1" >
            <li className="font-semibold text-sm">You are responsible for all activity under your account.</li>
            <li className="font-semibold text-sm">You must notify us immediately of any unauthorized use.</li>
            <li className="font-semibold text-sm">One person or legal entity may not maintain more than one free account.</li>
          </ul>

          <h2 className="font-bold my-5">4. Services Description</h2>
          <ul className="list-disc list-inside space-y-1" >
            <li className="font-semibold text-sm">Create validation links to request approvals or feedback</li>
            <li className="font-semibold text-sm">Track interactions (approval status, timestamps, platform origin)</li>
            <li className="font-semibold text-sm">Share links across email, WhatsApp, LinkedIn, X (Twitter), and more</li>
            <li className="font-semibold text-sm">Access analytics for tracking decisions</li>
          </ul>

          <h2 className="font-bold my-5">5. Credits & Usage</h2>
          <p>We operate a <strong>credit-based system</strong>:</p>
          <ul className="list-disc list-inside space-y-1" >
            <li className="font-semibold text-sm">Every validation request or sub-link costs <strong>1 credit</strong></li>
            <li className="font-semibold text-sm">Free accounts receive a limited number of credits upon registration</li>
            <li className="font-semibold text-sm">Additional credits can be purchased at any time</li>
            <li className="font-semibold text-sm">Paid subscribers benefit from unlimited validation link creation</li>
          </ul>
          <p><strong>Note</strong>: Credits are non-refundable and do not carry over between billing cycles for subscription plans.</p>

          <h2 className="font-bold my-5">6. Subscription & Payments</h2>
          <p>
            We offer monthly and yearly <strong>subscription plans</strong> via <a href="https://stripe.com" target="_blank" className="text-blue-600">Stripe</a>.
          </p>
          <ul className="list-disc list-inside space-y-1" >
            <li className="font-semibold text-sm">We <strong>do not store any credit card or banking information</strong>.</li>
            <li className="font-semibold text-sm">Stripe handles all payments securely on our behalf.</li>
            <li className="font-semibold text-sm">Subscriptions renew automatically unless canceled prior to the renewal date.</li>
            <li className="font-semibold text-sm">Users can manage or cancel their subscription from the dashboard.</li>
          </ul>
          <p>If a payment fails, your subscription may be paused until the payment is resolved.</p>

          <h2 className="font-bold my-5">7. Refund Policy</h2>
          <p>ValidationFlow operates under a <strong>no-refund</strong> policy. We do not offer refunds for:</p>
          <ul className="list-disc list-inside space-y-1" >
            <li className="font-semibold text-sm">Unused credits</li>
            <li className="font-semibold text-sm">Partial months of service</li>
            <li className="font-semibold text-sm">Downgrades</li>
          </ul>
          <p>However, if you believe there has been a billing error, contact us and we’ll do our best to address the issue.</p>

          <h2 className="font-bold my-5">8. Acceptable Use</h2>
          <p>You agree not to:</p>
          <ul className="list-disc list-inside space-y-1" >
            <li className="font-semibold text-sm">Use the service for phishing, spamming, or malicious activities</li>
            <li className="font-semibold text-sm">Create misleading or deceptive validation requests</li>
            <li className="font-semibold text-sm">Attempt to reverse-engineer, hack, or disrupt the platform</li>
            <li className="font-semibold text-sm">Share offensive, discriminatory, or harmful content</li>
          </ul>
          <p>Violation of these terms may result in immediate termination of your account.</p>

          <h2 className="font-bold my-5">9. Intellectual Property</h2>
          <p>
            All content, trademarks, and code on the platform are the exclusive property of ValidationFlow. You agree not to copy, modify, distribute, or reproduce any part of the service without written permission.
          </p>
          <p>
            You retain ownership of content you create and share on the platform. By using our service, you grant us a non-exclusive license to display and process your content strictly for service delivery.
          </p>

          <h2 className="font-bold my-5">10. Third-Party Services</h2>
          <p>ValidationFlow uses:</p>
          <ul className="list-disc list-inside space-y-1" >
            <li className="font-semibold text-sm"><strong>Google Auth</strong> for user authentication</li>
            <li className="font-semibold text-sm"><strong>Stripe</strong> for secure payment processing</li>
          </ul>
          <p>By using our platform, you agree to the respective terms of those providers. We are not responsible for issues arising from third-party services.</p>

          <h2 className="font-bold my-5">11. Termination</h2>
          <p>
            You may delete your account at any time from your dashboard. We reserve the right to suspend or terminate any account that violates these terms or abuses the service.
          </p>
          <ul className="list-disc list-inside space-y-1" >
            <li className="font-semibold text-sm">Access to your account and validation data will be revoked</li>
            <li className="font-semibold text-sm">Subscription plans will be canceled</li>
            <li className="font-semibold text-sm">No refunds will be issued</li>
          </ul>

          <h2 className="font-bold my-5">12. Disclaimer of Warranties</h2>
          <p>
            ValidationFlow is provided “as is” and “as available.” We do not guarantee that the service will be uninterrupted, error-free, or meet your expectations. We disclaim all warranties to the fullest extent allowed by law.
          </p>

          <h2 className="font-bold my-5">13. Limitation of Liability</h2>
          <p>To the maximum extent permitted by law, ValidationFlow shall not be liable for:</p>
          <ul className="list-disc list-inside space-y-1" >
            <li className="font-semibold text-sm">Any indirect, incidental, or consequential damages</li>
            <li className="font-semibold text-sm">Loss of data, revenue, profits, or business</li>
            <li className="font-semibold text-sm">Any content shared through validation links</li>
          </ul>
          <p>Your sole remedy for dissatisfaction with the service is to stop using it.</p>

          <h2 className="font-bold my-5">14. Changes to the Terms</h2>
          <p>
            We may update these Terms of Service from time to time. If we make significant changes, we’ll notify users via email or in-app notifications. Continued use after changes implies acceptance.
          </p>

          <h2 className="font-bold my-5">15. Contact</h2>
          <p>If you have any questions or concerns about these terms, please contact us here:</p>
          <ul className="list-disc list-inside space-y-1" >
            <li className="font-semibold text-blue-700 text-sm">📧 <a href="/contact" >contact</a></li>
          </ul>

          <p><strong>Thank you for using ValidationFlow — built to help you move fast and make decisions with confidence. 🚀</strong></p>
        </div>
      </div>
      <SiteUserActionComponent action="visit" object="terms"/>
    </main>
    </>
  );
}
