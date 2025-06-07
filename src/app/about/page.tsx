import { useAuthState } from "@/context/AuthContext";
import Link from "next/link";
import { useEffect } from "react";

// app/about/page.tsx
export default function AboutPage() {
  const {userAction} = useAuthState();
       
      useEffect(() => {
            userAction("visit","about")
          },[])
  return (
    <main className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold text-gray-900 mb-6 text-center">About Us | ValidationFlow</h1>

        <div className="space-y-6 text-gray-800 leading-relaxed text-sm sm:text-base">
          <h2 className="text-xl font-semibold text-gray-800">Why We Exist</h2>
          <p>
            {'Every day, people waste hours chasing approvals: "Hey, did you see my message?", "Can you confirm?", "Is this okay?" over email, WhatsApp, Slack, and dozens of other platforms. '}
            {'Important decisions are scattered, delayed, or forgotten. Nobody really knows who approved what, when, and how. That’s where chaos begins.'}
          </p>
          <p>
            {'We built ValidationFlow because we’ve lived that frustration. Whether you’re a freelancer trying to get client sign-off, a student validating a group project idea, or a creator testing a new campaign, one truth remains: getting a simple "yes" or "no" shouldn’t be this hard.'}
          </p>
          <p>
            ValidationFlow is here to make validation as fast, clear, and organized as it should be.
          </p>

          <h2 className="text-xl font-semibold text-gray-800 mt-8">{"The Problem We're Solving"}</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Approvals are spread across too many platforms: Conversations happen over email, DMs, Slack threads, and nobody tracks the outcome.</li>
            <li>It’s unclear who approved what: You lose context or forget who said what — and when.</li>
            <li>People forget to respond: You have to follow up manually. It drains your time and patience.</li>
            <li>No accountability: There’s no audit trail. No proof. No transparency.</li>
          </ul>
          <p>
            All this creates delays, miscommunication, stress, and poor decisions.
          </p>

          <h2 className="text-xl font-semibold text-gray-800 mt-8">Our Solution</h2>
          <p>ValidationFlow turns approvals into clean, shareable links.</p>
          <ul className="list-disc list-inside space-y-2">
            <li>✅ Create a validation link in seconds</li>
            <li>📩 Add the emails of people to notify (or not)</li>
            <li>🔗 Share the link on any platform (email, social, chat apps…)</li>
            <li>👀 Track exactly who responded, how, and when</li>
            <li>⏰ Get automatic reminders to boost response rate</li>
            <li>🧾 Collect clean data with no need to chase anyone</li>
          </ul>
          <p>All in one place. All beautifully organized. We handle the messy part — so you can focus on what matters.</p>

          <h2 className="text-xl font-semibold text-gray-800 mt-8">Who It’s For</h2>
          <ul className="list-disc list-inside space-y-2">
            <li><strong>Freelancers:</strong> Quickly get approvals from clients before starting work</li>
            <li><strong>Students:</strong> Validate group ideas or projects from peers or teachers</li>
            <li><strong>Indie Hackers & Makers:</strong> Ask your community before building</li>
            <li><strong>Social media creators:</strong> Run fast feedback loops on posts, campaigns or offers</li>
            <li><strong>Agencies:</strong> Gather stakeholder input without wasting time</li>
            <li><strong>Teams & managers:</strong> Make internal decisions visible and verifiable</li>
          </ul>
          <p>If you need approval, ValidationFlow is for you.</p>

          <h2 className="text-xl font-semibold text-gray-800 mt-8">What Makes Us Different</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>No account needed (for responders)</li>
            <li>Fast and intuitive interface</li>
            <li>Credits-based usage so you only pay for what you need</li>
            <li>Unlimited links with subscription options</li>
            <li>Link-level validation with support for multiple platforms (WhatsApp, LinkedIn, Messenger…)</li>
            <li>Security first: Each link is tokenized and private</li>
          </ul>
          <p>You don’t need to learn anything new. You just drop the link where you want — we handle the rest.</p>

          <h2 className="text-xl font-semibold text-gray-800 mt-8">Why It Will Save You Time (and Stress)</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>No more hunting for replies</li>
            <li>No more lost approvals</li>
            <li>No more wasted energy on reminders</li>
            <li>Clear, timestamped responses from your audience or collaborators</li>
            <li>Peace of mind and faster decisions</li>
          </ul>
          <p>Our users consistently say ValidationFlow saves them hours per week and removes the pain from feedback and approval loops.</p>

          <h2 className="text-xl font-semibold text-gray-800 mt-8">Join the Flow</h2>
          <p>
            Whether you validate one idea per month or ten per day — ValidationFlow is built to support you. 
            It’s fast, smart, secure, and incredibly simple to use.
          </p>
          <p>
            If {"you're"} tired of unclear approvals, missed responses, and scattered feedback, try ValidationFlow today.
          </p>
          <p><strong>Let validation feel like flow — not friction.</strong></p>

          <div className="mt-6 space-y-2 text-center">
            <Link
              href="/register"
              className="inline-block bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
            >
              ➡️ Get Started — no credit card needed
            </Link>
            <br />
            {/* <Link href="/how-it-works" className="text-blue-600 underline">
              ➡️ See how it works — short walkthrough
            </Link> */}
          </div>

          <p className="text-center mt-6 text-sm text-gray-500">The ValidationFlow Team</p>
        </div>
      </div>
    </main>
  );
}
