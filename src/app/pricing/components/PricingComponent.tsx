"use client";

import { useState } from "react";
import { useAuthState } from "@/context/AuthContext";
import api from "@/lib/api";
import { loadStripe } from "@stripe/stripe-js";
import { motion } from "framer-motion";
import BackgroundLoader from "@/components/BackgroundLoader";


const creditOptions = [ 
  {
    price: 0,
    credits: 5,
    label: "Free",
    name : "free plan",
    popular: false,
    features: [
      "1 client, 1 project",
      "1 PDF report + shareable link",
      "5 free credits (1 report = 5 credits)",
      "Unlimited time tracking & sessions",
    ],
    note: "Perfect for testing the tool",
  },
  {
    price: 9,
    credits: 50,
    name : "Starter Pack",
    label: "Starter",
    popular: false,
    features: [
      "Generate up to 10 reports (1 report = 5 credits)",
      "Unlimited clients and projects",
      "No TimeTally branding",
    ],
    note: "For occasional freelancers",
    
  },
  {
    price: 19,
    credits: 120,
    name : "Pro Pack",
    label: "Pro",
    popular: true,
    features: [
      "Generate up to 24 reports (1 report = 5 credits)",
      "Unlimited clients and projects",
      "No TimeTally branding",
    ],
    note: "Best for regular time tracking needs",
    
  },
];
const subscriptionOptions = [
  {
    price: 0,
    credits: 0,
    label: "Free",
     name : "free plan",
    popular: false,
    features: [
      "1 client, 1 project",
      "1 PDF report + shareable link",
      "5 free credits (1 report = 5 credits)",
    ],
    note: "Explore the platform for free",
   
  },
  {
    price: 9,
    credits: 0,
     name : "Monthly Subscription",
    label: "Monthly",
    popular: false,
    features: [
      "Unlimited reports (no credits needed)",
      "Unlimited clients & projects",
      "No TimeTally branding",
    ],
    note: "Ideal for frequent users",
   
  },
  {
    price: 90,
    credits: 0,
    name : "Annual Subscription",
    label: "Annual",
    popular: true,
    features: [
      "Unlimited reports (no credits needed)",
      "Unlimited clients & projects",
      "Priority support",
      "No TimeTally branding",
    ],
    note: "Save 20% with yearly billing",
    
  },
];


const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!);

const PricingComponent = () => {
  const { userData,userAction } = useAuthState();
  const [mode, setMode] = useState<"credits" | "subscription">("credits");
  const [loading, setLoading] = useState(false);

  const handleCheckout = async (name:string) => {
    userAction("click","pay")
    if (!userData.full_name) {
      window.location.href = "/register";
      return;
    }
    console.log(name)
    setLoading(true);
    try {
      const response = await api.post("payment/create_checkout_session/", {
        name :name,
        user_email: userData.email,
        payment_place: "TimeTallyApp",
      });

      const { url } = response.data;
      const stripe = await stripePromise;

      if (stripe && url) {
        window.location.href = url;
      }
    } catch (err) {
      console.error("Checkout error", err);
    } 
  };

  return (
    
      <motion.div className="max-w-6xl w-full px-5 mt-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
      
      >
        {/* Title + Toggle */}
        <div className="text-center mb-12 ">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Choose Your Plan</h1>
          <p className="text-gray-600 text-lg mb-6">
            {mode === "credits"
              ? "Buy credits to create sessions anytime."
              : "Subscribe for unlimited access."}
          </p>

          <div className="inline-flex border border-gray-200 rounded-full overflow-hidden bg-gray-100">
            <button
              onClick={() => setMode("credits")}
              className={`px-5 py-2 text-sm font-medium transition ${
                mode === "credits"
                  ? "bg-[var(--btn-bg)] text-white"
                  : "text-gray-700 hover:bg-gray-200"
              }`}
            >
              Credits
            </button>
            <button
              onClick={() => setMode("subscription")}
              className={`px-5 py-2 text-sm font-medium transition ${
                mode === "subscription"
                  ? "bg-[var(--btn-bg)] text-white"
                  : "text-gray-700 hover:bg-gray-200"
              }`}
            >
              Subscription
            </button>
          </div>
        </div>

        {/* Dynamic Plans */}
        <div className={`grid  md:grid-cols-3  grid-cols-1 gap-6`}>
          {(mode === "credits" ? creditOptions : subscriptionOptions).map(
            ({ price, label, credits, features, popular,name }) => (
              <motion.div
                  key={label}
                  className={`rounded-lg shadow p-6 bg-white border-2 ${
                    popular ? "border-[var(--btn-bg)]" : "border-gray-200"
                  } flex flex-col justify-between hover:shadow-md transition-all`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02 }}
                >
                {popular && (
                  <div className="text-xs uppercase bg-[var(--btn-bg)] text-white px-3 py-1 rounded-full w-fit mb-3 font-medium shadow">
                  Most Popular
                </div>
                )}
                <div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-1">
                    {label} {mode === "credits" ? "Plan" : "Subscription"}
                  </h3>
                  <p className="text-4xl font-extrabold text-[var(--btn-bg)] mb-2">${price}</p>
                  {credits !== 0 && (
                    <p className="text-gray-600 mb-2">{credits} credits included</p>
                  )}
                  {/* {description && (
                    <p className="text-gray-600 mb-2">{description}</p>
                  )} */}
                  <ul className="mb-4 list-disc list-inside text-sm text-gray-700 space-y-1">
                    {features?.map((f, i) => (
                      <li key={i}>{f}</li>
                    ))}
                  </ul>
                </div>
                {price !== 0 && <button
                  onClick={() => handleCheckout(name)}
                  className="mt-4 bg-[var(--btn-bg)] hover:bg-[var(--btn-hover)] text-white text-center py-2 rounded transition cursor-pointer"
                  disabled={loading}
                >
                  {mode === "credits" ? "Buy Now" : "Subscribe"}
                </button>}
              </motion.div>
            )
          )}
        </div>

        <p className="text-center text-sm text-gray-500 mt-12">
          {mode === "credits"
            ? "Credits never expire. Use them whenever you need."
            : "Subscriptions renew automatically and include unlimited usage."}
        </p>

        {loading && (
          <BackgroundLoader />
        )}
      </motion.div>
  
  );
};

export default PricingComponent;
