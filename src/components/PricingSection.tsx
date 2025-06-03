"use client";

import type { FC } from 'react';
import { useState } from "react";
import clsx from "clsx";

// interface PricingSectionProps {}

const PricingSection: FC = () => {
    const [mode, setMode] = useState<"credits" | "subscription">("credits");

  const creditPlans = [
    {
      price: "0 €",
      title: "Free trial",
      features: [
        "3 free credits when you sign up",
        "1 link = 1 credit",
        "Custom tracking",
        "Unlimited responses per link",
        "Source tracking (WhatsApp, Email...)",
      ],
      note: "Perfect for testing quickly",
    },
    {
      price: "10 €",
      title: "10 credits (+1 bonus)",
      features: [
        "1 personalized link = 1 credit",
        "Unlimited responses per link",
        "Source tracking included",
        "Custom tracking",
      ],
      note: "For one-off small validations",
    },
  ];

  const subscriptionPlan = {
    price: "19 €/mo",
    title: "Unlimited subscription",
    features: [
      "Unlimited validation links",
      "Custom tracking",
      "Source tracking included",
    ],
    note: "For professionals who validate often",
  };

        return (
    <section className="bg-white py-24 px-6">
      <div className="max-w-6xl mx-auto text-center">
        {/* Titre */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
          Pricing
        </h2>

        {/* Toggle */}
        <div className="inline-flex items-center border rounded-md overflow-hidden text-sm mb-12">
          <button
            onClick={() => setMode("credits")}
            className={clsx(
              "px-4 py-2 font-medium",
              mode === "credits"
                ? "bg-blue-600 text-white"
                : "bg-white text-gray-600 hover:bg-gray-100"
            )}
          >
            Credits
          </button>
          <button
            onClick={() => setMode("subscription")}
            className={clsx(
              "px-4 py-2 font-medium",
              mode === "subscription"
                ? "bg-blue-600 text-white"
                : "bg-white text-gray-600 hover:bg-gray-100"
            )}
          >
            Subscription
          </button>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto text-left">
          {mode === "credits" &&
            creditPlans.map((plan, index) => (
              <div
                key={index}
                className="border border-gray-200 rounded-xl p-6 shadow-sm"
              >
                <p className="text-2xl font-bold text-blue-600 mb-2">
                  {plan.price}
                </p>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  {plan.title}
                </h3>
                <ul className="space-y-2 text-gray-700 text-sm">
                  {plan.features.map((f, i) => (
                    <li key={i}>• {f}</li>
                  ))}
                </ul>
                <p className="text-sm text-gray-500 mt-6 italic">{plan.note}</p>
              </div>
            ))}

          {mode === "subscription" && (
            <div className="border border-gray-200 rounded-xl p-6 shadow-sm md:col-span-2 max-w-xl mx-auto">
              <p className="text-2xl font-bold text-blue-600 mb-2">
                {subscriptionPlan.price}
              </p>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                {subscriptionPlan.title}
              </h3>
              <ul className="space-y-2 text-gray-700 text-sm">
                {subscriptionPlan.features.map((f, i) => (
                  <li key={i}>• {f}</li>
                ))}
              </ul>
              <p className="text-sm text-gray-500 mt-6 italic">
                {subscriptionPlan.note}
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
  
}
export default PricingSection;