import Head from "next/head";
import Link from "next/link";
import SiteUserActionComponent from "@/components/SiteUserActionComponent";

export default function AboutPage() {
  return (
    <>
      <Head>
        <title>About | TimeTallyApp</title>
        <meta name="description" content="Discover how TimeTallyApp helps you track time, generate project reports, and stay productive effortlessly." />
      </Head>

      <main className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md">
          <h1 className="text-3xl font-bold text-gray-900 mb-6 text-center">About TimeTallyApp</h1>

          <div className="space-y-6 text-gray-800 leading-relaxed text-sm sm:text-base">
            <p>
              <strong>TimeTallyApp</strong> was created to simplify how freelancers, remote workers, and small teams track their time and generate clear, professional reports. If {"you've"} ever wasted hours trying to explain how you spent your time — this is for you.
            </p>

            <h2 className="text-xl font-semibold mt-6">Our Mission</h2>
            <p>
              To help you stay focused, accountable, and efficient — without overcomplicating your workflow.
            </p>

            <h2 className="text-xl font-semibold mt-6">The Problem</h2>
            <ul className="list-disc list-inside space-y-1">
              <li>Time tracking tools are often too complex or too manual</li>
              <li>Freelancers waste time creating reports for clients</li>
              <li>Teams lack visibility on how time is spent across projects</li>
              <li>It’s easy to lose track of small daily sessions</li>
            </ul>

            <h2 className="text-xl font-semibold mt-6">Our Solution</h2>
            <ul className="list-disc list-inside space-y-1">
              <li>⏱️ Track time sessions linked to specific projects</li>
              <li>📊 Instantly generate reports by selecting a date range</li>
              <li>📥 Export reports as PDF or send them via email</li>
              <li>📁 Organize your work week without the clutter</li>
              <li>📌 Keep a visual history of your productivity</li>
            </ul>

            <h2 className="text-xl font-semibold mt-6">Who It’s For</h2>
            <ul className="list-disc list-inside space-y-1">
              <li><strong>Freelancers:</strong> Track work time for each client or task</li>
              <li><strong>Solo developers & makers:</strong> Stay accountable to your goals</li>
              <li><strong>Remote teams:</strong> Maintain a clear record of productivity</li>
              <li><strong>Consultants:</strong> Create professional summaries in minutes</li>
            </ul>

            <h2 className="text-xl font-semibold mt-6">Why People Love It</h2>
            <ul className="list-disc list-inside space-y-1">
              <li>No setup or learning curve — just start tracking</li>
              <li>Minimal, distraction-free interface</li>
              <li>One-click report creation</li>
              <li>Works on desktop and mobile</li>
              <li>Privacy-first: your data is yours</li>
            </ul>

            <div className="text-center mt-8 space-y-3">
              <Link
                href="/register"
                className="inline-block bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
              >
                ⏳ Start Tracking — {"it's"} free
              </Link>
              <br />
              <Link href="/how-it-works" className="text-blue-600 underline">
                🔍 See how it works
              </Link>
            </div>

            <p className="text-center text-sm text-gray-500 mt-8">The TimeTallyApp Team</p>
          </div>
        </div>
      </main>

      <SiteUserActionComponent action="visit" object="about" />
    </>
  );
}
