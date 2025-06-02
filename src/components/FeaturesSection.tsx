import type { FC } from 'react';
import { CheckCircle } from "lucide-react";

// interface FeaturesSectionProps {}
const FEATURES = [
  "No account required",
  "Secure link with optional expiration",
  "Email notifications",
  "Validation history",
  "Customizable message",
  "Multiple validators",
  "Real-time dashboard",
  "Branded validation link",
  "Mobile-friendly",
  "Quick setup (under 30 seconds)",
  "Comments supported with each response",
];

const FeaturesSection: FC = () => {
        return (
    <section className="bg-gray-50 py-24 px-6">
      <div className="max-w-6xl mx-auto text-center">
        {/* Titre */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-16">
          Key Features
        </h2>

        {/* Grille de features */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 text-left">
          {FEATURES.map((feature, index) => (
            <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-sm flex items-center gap-4"
            >
                <CheckCircle className="text-blue-600 w-6 h-6" />
                <p className="text-gray-700">{feature}</p>
            </div>
            ))}
        </div>
      </div>
    </section>
  );
}
export default FeaturesSection;