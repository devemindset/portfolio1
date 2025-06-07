"use client";

import { useState } from "react";
import { useAuthState } from "@/context/AuthContext";
import api from "@/lib/api";
import { loadStripe } from "@stripe/stripe-js";
import { motion } from "framer-motion";

const creditOptions = [
  {
    price: 0,
    credits: 2,
    label: "Free trial",
    // title : "Free trial",
    popular: false,
    features: ["2 free credits when you sign up",
        "1 link = 1 credit",
        "Custom tracking",
        "Unlimited responses per link",
        "Source tracking (WhatsApp, Email...)"],
        note: "Perfect for testing quickly",
  },
  {
    price: 5,
    credits: 15,
    // title :"10 credits (+1 bonus)",
    label: "Starter",
    popular: false,
    features: ["personalized link",
        "Unlimited responses per link",
        "Source tracking included",
        "Custom tracking",],
        note: "For one-off small validations",
  },
  {
    price: 10,
    credits: 30,
    label: "Pro",
    popular: true,
    features: ["personalized link",
        "Unlimited responses per link",
        "Source tracking included",
        "Custom tracking",],
        note: "For advanced tracking",
  },
];

const subscriptionOptions = [
  {
    price: 12,
    label: "Monthly",
    credits : 0,
    // description: "Unlimited usage billed monthly.",
    popular: false,
    features: ["Unlimited validation links",
      "Custom tracking",
      "Source tracking included",],
      note: "For professionals who validate often",
  },
  {
    price: 100,
    label: "Annual",
    credits : 0,
    // description: "Save 15% with annual billing.",
    popular: true,
    features: ["Unlimited validation links",
      "Custom tracking",
      "Source tracking included",],
       note: "For professionals who validate often",
  },
];

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!);

const PricingComponent = () => {
  const { userData,userAction } = useAuthState();
  const [mode, setMode] = useState<"credits" | "subscription">("credits");
  const [loading, setLoading] = useState(false);

  const handleCheckout = async (price: number) => {
    userAction("click","pay")
    if (!userData.username) {
      window.location.href = "/register";
      return;
    }

    setLoading(true);
    try {
      const response = await api.post("payment/create_checkout_session/", {
        amount: price,
        user_email: userData.email,
        payment_place: "validationFlow",
      });

      const { url } = response.data;
      const stripe = await stripePromise;

      if (stripe && url) {
        window.location.href = url;
      }
    } catch (err) {
      console.error("Checkout error", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    
      <motion.div className="max-w-6xl w-full px-5 "
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
              ? "Buy credits to validate as you go."
              : "Subscribe for unlimited access."}
          </p>

          <div className="inline-flex border border-gray-200 rounded-full overflow-hidden bg-gray-100">
            <button
              onClick={() => setMode("credits")}
              className={`px-5 py-2 text-sm font-medium transition ${
                mode === "credits"
                  ? "bg-blue-600 text-white"
                  : "text-gray-700 hover:bg-gray-200"
              }`}
            >
              Credits
            </button>
            <button
              onClick={() => setMode("subscription")}
              className={`px-5 py-2 text-sm font-medium transition ${
                mode === "subscription"
                  ? "bg-blue-600 text-white"
                  : "text-gray-700 hover:bg-gray-200"
              }`}
            >
              Subscription
            </button>
          </div>
        </div>

        {/* Dynamic Plans */}
        <div className={`grid ${mode === "credits" ? "md:grid-cols-3" : "md:grid-cols-2"} grid-cols-1 gap-6`}>
          {(mode === "credits" ? creditOptions : subscriptionOptions).map(
            ({ price, label, credits, features, popular }) => (
              <motion.div
                  key={label}
                  className={`rounded-lg shadow p-6 bg-white border-2 ${
                    popular ? "border-blue-600" : "border-gray-200"
                  } flex flex-col justify-between hover:shadow-md transition-all`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02 }}
                >
                {popular && (
                  <div className="text-xs uppercase bg-blue-600 text-white px-3 py-1 rounded-full w-fit mb-3 font-medium shadow">
                  Most Popular
                </div>
                )}
                <div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-1">
                    {label} {mode === "credits" ? "Plan" : "Subscription"}
                  </h3>
                  <p className="text-4xl font-extrabold text-blue-600 mb-2">${price}</p>
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
                  onClick={() => handleCheckout(price)}
                  className="mt-4 bg-blue-600 hover:bg-blue-700 text-white text-center py-2 rounded transition cursor-pointer"
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
          <div className="fixed inset-0 flex items-center justify-center bg-white/80 z-50">
            <p className="text-blue-700 text-lg font-semibold">Redirecting to Stripe...</p>
          </div>
        )}
      </motion.div>
  
  );
};

export default PricingComponent;
