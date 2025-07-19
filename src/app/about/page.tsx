import Head from "next/head";
import Link from "next/link";
import SiteUserActionComponent from "@/components/SiteUserActionComponent";

export default function AboutPage() {
  return (
    <>
      <Head>
        <title>About | TimeTallyApp</title>
        <meta
          name="description"
          content="TimeTally helps you track time, deliver transparent reports, and stay in control — even when dealing with demanding clients."
        />
      </Head>

      <main className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md">
          <h1 className="text-3xl font-bold text-gray-900 mb-6 text-center">About TimeTallyApp</h1>

          <div className="space-y-6 text-gray-800 leading-relaxed text-sm sm:text-base">
            <p>
              <strong>TimeTallyApp</strong> was created to give independent professionals and small teams a simple way to track time, build trust, and protect their work with clear, shareable reports.
            </p>

            <h2 className="text-xl font-semibold mt-6">Our Mission</h2>
            <p>
              Empower you to stay productive, transparent, and in control — especially when dealing with high-stakes clients or stressful situations.
            </p>

            <h2 className="text-xl font-semibold mt-6">The Problem</h2>
            <ul className="list-disc list-inside space-y-1">
              <li>Most time trackers are bloated or distracting</li>
              <li>Professionals waste time manually creating reports</li>
              <li>It’s hard to justify your time to clients without proof</li>
              <li>Clients can question your work without transparency</li>
              <li>“Toxic” clients create pressure to over-explain your effort</li>
            </ul>

            <h2 className="text-xl font-semibold mt-6">Our Solution</h2>
            <ul className="list-disc list-inside space-y-1">
              <li>⏱️ Track time sessions with just a few clicks</li>
              <li>📊 Instantly generate detailed reports</li>
              <li>📥 Export clean PDFs or share a private link</li>
              <li>📁 Organize your weekly workflow clearly</li>
              <li>🔐 Show proof of effort to any client — anytime</li>
            </ul>

            <h2 className="text-xl font-semibold mt-6">Who It’s For</h2>
            <ul className="list-disc list-inside space-y-1">
              <li><strong>Freelancers & consultants:</strong> Document your time, prove your value</li>
              <li><strong>Remote workers:</strong> Stay accountable with session logs</li>
              <li><strong>Small teams & agencies:</strong> Group project reporting made easy</li>
              <li><strong>Anyone working with clients:</strong> Avoid disputes, impress with transparency</li>
            </ul>

            <h2 className="text-xl font-semibold mt-6">Why People Love It</h2>
            <ul className="list-disc list-inside space-y-1">
              <li>🧠 Zero learning curve — just start tracking</li>
              <li>📱 Works on desktop and mobile</li>
              <li>📄 One-click PDF or web reports</li>
              <li>🎯 Built for speed and clarity, not distractions</li>
              <li>🔒 Privacy-first: your data stays with you</li>
            </ul>

            <div className="text-center mt-8 space-y-3">
              <Link
                href="/register"
                className="inline-block bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
              >
                ⏳ Start Tracking, {"It's"} Free
              </Link>
              <br />
              {/* <Link href="/how-it-works" className="text-blue-600 underline">
                🔍 See How It Works
              </Link> */}
            </div>

            <p className="text-center text-sm text-gray-500 mt-8">– The TimeTallyApp Team</p>
          </div>
        </div>
      </main>

      <SiteUserActionComponent action="visit" object="about" />
    </>
  );
}
