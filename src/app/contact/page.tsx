"use client";
import { useAuthState } from "@/context/AuthContext";
import { pubic_api } from "@/lib/api";
import { isValidEmail } from "@/tools/utils";
import type { NextPage } from "next";
import { useEffect, useState } from "react";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";

const Page: NextPage = ({}) => {
  const [message, setMessage] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const { browserLimitValue, setBrowserLimitValue,userAction } = useAuthState();
  const [status, setStatus] = useState("SEND");
  const [error,setError] = useState("");
  const [success,setSuccess] = useState("");

  const { executeRecaptcha } = useGoogleReCaptcha();


  useEffect(() => {
    userAction("visite","contact")
  })
  const handleContactForm = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();

    if (email !== "" && message !== "") {
      setError("");
      setSuccess("");

      if (browserLimitValue && browserLimitValue.contact === 1) {
        setError("Please try again tomorrow.");
        return;
      }

      if (!isValidEmail(email)) {
        setError("Your email address is invalid.");
        return;
      }

      setStatus("Authenticating...");

      if (!executeRecaptcha) {
        setError("Authentication issue.");
        return;
      }

      const recaptchaToken = await executeRecaptcha("contact_form");
      if (recaptchaToken) {
        setStatus("Processing...");
        try {
          const response = await pubic_api.post("/user/contact_form/", {
            email,
            message,
            recaptcha_token: recaptchaToken,
          });

          if (response.status === 200) {
            setSuccess("Your message was sent successfully.");
            setEmail("");
            setStatus("SEND")
            if (typeof setMessage === "function") {
              setMessage("");
            }
            setBrowserLimitValue((prevState) => {
              const updateState = prevState
                ? { ...prevState, contact: prevState.contact + 1 }
                : { date: "", contact: 1, newsletterSub: 0 ,view_request : false, send_feedback : false};
              localStorage.setItem("limite_actions", JSON.stringify(updateState));
              return updateState;
            });
          }
        } catch (error) {
          console.log("Error", error);
          setError("There was an error, please try sending again.");
          setStatus("SEND");
        }
      } else {
        setError("Authentication failed, please try again!");
        setStatus("SEND");
      }
    } else {
      setError("There is an error, please check your information.");
      setStatus("SEND")
    }
  };

  return (
    <main className="flex justify-center items-center w-screen h-screen bg-gray-100">
      <section className="bg-gray-50 py-10 px-4 md:px-10 rounded-lg max-w-3xl mx-auto mt-10 shadow-md w-full">
        <h1 className="text-2xl font-semibold text-center mb-6">Contact Us</h1>
        <form onSubmit={handleContactForm} className="space-y-4">
          <div className="w-full">
            <label htmlFor="email-me" className="block mb-1 text-sm font-medium text-gray-700">
              Your email:
            </label>
            <input
              type="email"
              name="email-me"
              id="email-me"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div className="w-full">
            <label htmlFor="message" className="block mb-1 text-sm font-medium text-gray-700">
              Your message:
            </label>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows={4}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className={`${
              status === "Processing..." || status === "Authenticating..."
                ? "bg-green-600"
                : "bg-[#2A6DD2]"
            } hover:bg-[#1a4a9c] transition-all duration-200 text-white px-6 py-2 rounded-md font-medium w-full cursor-pointer`}
          >
            {status}
          </button>

          {success === "Your message was sent successfully." && (
            <p className="text-green-600 text-sm mt-2 text-center">{success}</p>
          )}
          {error !== "" && (
            <p className="text-red-600 text-sm mt-2 text-center">{error}</p>
          )}
        </form>
      </section>
    </main>
  );
};

export default Page;
