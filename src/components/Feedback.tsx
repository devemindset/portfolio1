"use client";
import { useAuthState } from '@/context/AuthContext';
import { pubic_api } from '@/lib/api';
import { useEffect, useState, type FC } from 'react';
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";

// interface FeedbackProps {}

const Feedback: FC = ({}) => {
        const {userAction} = useAuthState();
        const [name,setName] = useState("");
        const [message,setMessage] = useState("");
        const [feedbackState,setFeedbackState] = useState("");
        const [status,setStatus] = useState("");
        const [loading,setLoading] = useState(false);


        const { executeRecaptcha } = useGoogleReCaptcha();

        useEffect(() => {
          userAction("visit","feebback page");
        },[])
        const handleSubmit = async (e: React.FormEvent) => {
            e.preventDefault();

            setStatus("Authenticating...");

            if (!executeRecaptcha) {
              setFeedbackState("error")
              setStatus("Authentication issue.");

              return;
            }
            if(name !== "" && name.length <= 10 && message.length <= 1000 && message !== ""){
              const recaptchaToken = await executeRecaptcha("feedback_form");
                setLoading(true);

                if (recaptchaToken){

                  setStatus("Processing...");
                try{
                    const response = await pubic_api.post('/user/feedback/',{
                        name : name,
                        message : message,
                        recaptcha_token: recaptchaToken,
                    })
                    if(response.status === 201){
                        setStatus("Thank you for your feedback!");
                        setFeedbackState("success");
                        setLoading(false);
                        setName("");
                        setMessage("");
                    }
                    else{
                        setFeedbackState("error");
                        setStatus("Oops! There was a problem. Please retry.");
                        setLoading(false);

                    }
                }catch{
                    setStatus("Oops! There was a problem. Please retry.");
                    setFeedbackState("error");
                    setLoading(false);
                }
                  }else {
                  setFeedbackState("error")
                  setStatus("Authentication failed, please try again!");
                  setStatus("Send");
                }


            }else{
                setFeedbackState("error")
                setStatus("Name or message is too long. Please shorten it")
                setLoading(false);
            }
            


        }
        return (
            <>
    <section className="bg-gray-50 py-10 px-4 md:px-10 rounded-lg max-w-3xl mx-auto mt-10 shadow-md">
      <h2 className="text-2xl font-semibold text-center mb-6">Send us your feedback</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
        <textarea
          placeholder="Your message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          rows={4}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        ></textarea>
        <button
          type="submit"
          disabled={loading}
          className={`${loading ? "bg-green-600" : "bg-[#2A6DD2]"} hover:bg-[#1a4a9c] transition-all duration-200 text-white px-6 py-2 rounded-md font-medium w-full cursor-pointer`}
        >
          {!loading ? "Send" : "sending..."}
        </button>
        {feedbackState === "success" && (
          <p className="text-green-600 text-sm mt-2 text-center">{status}</p>
        )}
        {feedbackState === "error" && (
            <p className="text-red-600 text-sm mt-2 text-center">{status}</p>
        )}
        {status === "Authenticating..." && (
            <p className="text-green-700 text-sm mt-2 text-center">{status}</p>
        )}
      </form>
    </section>
            </>
        );
}
export default Feedback;