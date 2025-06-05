// app/terms/page.tsx
"use client";
export default function TermsPage() {
  return (
    <main className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold text-center text-gray-900 mb-6">
          Terms of Service
        </h1>

        <div className="prose prose-sm sm:prose-base max-w-none text-gray-800">
          <p><strong>Last updated: [Date of publication]</strong></p>

          <p>
            Welcome to <strong>ValidationFlow</strong>. By accessing or using our website, services, and features, you agree to be bound by these Terms of Service. If you do not agree with any part of the terms, you must not use our service.
          </p>

          <h2>1. Overview</h2>
          <p>
            ValidationFlow (“we”, “us”, “our”) provides a platform that simplifies the process of getting approvals and feedback by generating shareable validation links. Whether you're validating an idea, running a survey, or collecting team sign-offs, our tool is built to make validation fast, transparent, and organized.
          </p>

          <h2>2. Eligibility</h2>
          <p>
            You must be at least 13 years old to use ValidationFlow. By using our service, you affirm that you are of legal age to enter into these terms and agree to comply with all applicable laws and regulations.
          </p>

          <h2>3. Account Registration</h2>
          <p>
            To use ValidationFlow, users can sign up via <strong>Google authentication</strong>. We do not store your password or login credentials.
          </p>
          <ul>
            <li>You are responsible for all activity under your account.</li>
            <li>You must notify us immediately of any unauthorized use.</li>
            <li>One person or legal entity may not maintain more than one free account.</li>
          </ul>

          <h2>4. Services Description</h2>
          <ul>
            <li>Create validation links to request approvals or feedback</li>
            <li>Track interactions (approval status, timestamps, platform origin)</li>
            <li>Share links across email, WhatsApp, LinkedIn, X (Twitter), and more</li>
            <li>Access analytics for tracking decisions</li>
          </ul>

          <h2>5. Credits & Usage</h2>
          <p>We operate a <strong>credit-based system</strong>:</p>
          <ul>
            <li>Every validation request or sub-link costs <strong>1 credit</strong></li>
            <li>Free accounts receive a limited number of credits upon registration</li>
            <li>Additional credits can be purchased at any time</li>
            <li>Paid subscribers benefit from unlimited validation link creation</li>
          </ul>
          <p><strong>Note</strong>: Credits are non-refundable and do not carry over between billing cycles for subscription plans.</p>

          <h2>6. Subscription & Payments</h2>
          <p>
            We offer monthly and yearly <strong>subscription plans</strong> via <a href="https://stripe.com" target="_blank">Stripe</a>.
          </p>
          <ul>
            <li>We <strong>do not store any credit card or banking information</strong>.</li>
            <li>Stripe handles all payments securely on our behalf.</li>
            <li>Subscriptions renew automatically unless canceled prior to the renewal date.</li>
            <li>Users can manage or cancel their subscription from the dashboard.</li>
          </ul>
          <p>If a payment fails, your subscription may be paused until the payment is resolved.</p>

          <h2>7. Refund Policy</h2>
          <p>ValidationFlow operates under a <strong>no-refund</strong> policy. We do not offer refunds for:</p>
          <ul>
            <li>Unused credits</li>
            <li>Partial months of service</li>
            <li>Downgrades</li>
          </ul>
          <p>However, if you believe there has been a billing error, contact us and we’ll do our best to address the issue.</p>

          <h2>8. Acceptable Use</h2>
          <p>You agree not to:</p>
          <ul>
            <li>Use the service for phishing, spamming, or malicious activities</li>
            <li>Create misleading or deceptive validation requests</li>
            <li>Attempt to reverse-engineer, hack, or disrupt the platform</li>
            <li>Share offensive, discriminatory, or harmful content</li>
          </ul>
          <p>Violation of these terms may result in immediate termination of your account.</p>

          <h2>9. Intellectual Property</h2>
          <p>
            All content, trademarks, and code on the platform are the exclusive property of ValidationFlow. You agree not to copy, modify, distribute, or reproduce any part of the service without written permission.
          </p>
          <p>
            You retain ownership of content you create and share on the platform. By using our service, you grant us a non-exclusive license to display and process your content strictly for service delivery.
          </p>

          <h2>10. Third-Party Services</h2>
          <p>ValidationFlow uses:</p>
          <ul>
            <li><strong>Google Auth</strong> for user authentication</li>
            <li><strong>Stripe</strong> for secure payment processing</li>
          </ul>
          <p>By using our platform, you agree to the respective terms of those providers. We are not responsible for issues arising from third-party services.</p>

          <h2>11. Termination</h2>
          <p>
            You may delete your account at any time from your dashboard. We reserve the right to suspend or terminate any account that violates these terms or abuses the service.
          </p>
          <ul>
            <li>Access to your account and validation data will be revoked</li>
            <li>Subscription plans will be canceled</li>
            <li>No refunds will be issued</li>
          </ul>

          <h2>12. Disclaimer of Warranties</h2>
          <p>
            ValidationFlow is provided “as is” and “as available.” We do not guarantee that the service will be uninterrupted, error-free, or meet your expectations. We disclaim all warranties to the fullest extent allowed by law.
          </p>

          <h2>13. Limitation of Liability</h2>
          <p>To the maximum extent permitted by law, ValidationFlow shall not be liable for:</p>
          <ul>
            <li>Any indirect, incidental, or consequential damages</li>
            <li>Loss of data, revenue, profits, or business</li>
            <li>Any content shared through validation links</li>
          </ul>
          <p>Your sole remedy for dissatisfaction with the service is to stop using it.</p>

          <h2>14. Changes to the Terms</h2>
          <p>
            We may update these Terms of Service from time to time. If we make significant changes, we’ll notify users via email or in-app notifications. Continued use after changes implies acceptance.
          </p>

          <h2>15. Contact</h2>
          <p>If you have any questions or concerns about these terms, please contact us at:</p>
          <ul>
            <li>📧 <a href="mailto:support@validationflow.com">support@validationflow.com</a></li>
          </ul>

          <p><strong>Thank you for using ValidationFlow — built to help you move fast and make decisions with confidence. 🚀</strong></p>
        </div>
      </div>
    </main>
  );
}
