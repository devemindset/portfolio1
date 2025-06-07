"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import type { NextPage } from "next";
import { pubic_api } from "@/lib/api";
import { DataValidation, RequestInTheTokenPage } from "@/types";
import { useAuthState } from "@/context/AuthContext";
import RequestHeader from "@/components/RequestHeader";
import BackgroundLoader from "@/components/BackgroundLoader";
import DescriptionBox from "@/components/DescriptionBox";



const Page: NextPage = () => {
  const { slugtokenWithKey } = useParams();
  const {userData,browserLimitValue, setBrowserLimitValue,userAction} = useAuthState();
 
   
  useEffect(() => {
        userAction("visit","public")
      },[])


  const [track, setTrack] = useState<RequestInTheTokenPage | null>(null);
  const [requestId, setRequestId] = useState<number | null>(null);
  const [comment, setComment] = useState("");
  const [emailOrName, setEmailOrName] = useState("");
  const [status, setStatus] = useState<"approved" | "rejected" | "">("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");
  const [view,setView] = useState(false);
  const [collect,setCollect] = useState("anonymous");

  const raw = typeof slugtokenWithKey === "string" ? slugtokenWithKey : "";
const TOKEN_LENGTH = 12;

const lastDashIndex = raw.lastIndexOf("-");
const combinedKey = raw.slice(lastDashIndex + 1); // token + sourceKey

const token = combinedKey.slice(0, TOKEN_LENGTH);
const sourceKey = combinedKey.slice(TOKEN_LENGTH);

  useEffect(() => {
    if (!token || token.length < TOKEN_LENGTH) {
      setError("Invalid link.");
      return;
    }

    // slugtokenWithKey
   
    pubic_api
      .get(`/track_user/track_by_token/${token}/`)
      .then((res) => {
        setTrack(res.data);
        setRequestId(res.data.id);
        setCollect(res.data.collect);

      })
      .catch(() => setError("Request not found."));
  }, [token]);

  useEffect(() =>{
    const viewHandle = async () => {

      if (!requestId) return;
      const payload: DataValidation = {
      request_id: requestId,
      email_or_name: emailOrName,
      source: sourceKey,
      comment,
      status : "viewed",
    };
    try {
      const res = await pubic_api.post("/track_user/user_validation_view", payload);
      if (res.status === 201) {
        setBrowserLimitValue((prevState) => {
              const updateState = prevState
                ? { ...prevState, view_request : true }
                : { date: "", contact: 0, newsletterSub: 0, view_request : true };
              localStorage.setItem("limite_actions", JSON.stringify(updateState));
              return updateState;
            });
        
      }
    } catch {
      console.log("Something went wrong.");
    } 
      }

      if(view === false){
        const timeoutId = setTimeout(async () => {
        setView(true)
      }, 5000)
      return () => clearTimeout(timeoutId);

      }
      

    if(requestId && !userData.username && view &&  browserLimitValue && !browserLimitValue.view_request){
      viewHandle()
      
    }
    
    
    
    
  },[requestId,userData,view])

  // handle request 
  const handleSubmit = async () => {
    if (!requestId || !status) return;

    if (status === "approved" && !emailOrName.trim()) {
      setError(`Please provide your ${collect} to approve.`);
      return;
    }

    const payload: DataValidation = {
      request_id: requestId,
      email_or_name: emailOrName,
      source: sourceKey,
      comment,
      status,
    };

    setLoading(true);
    setError("");
    try {
      const res = await pubic_api.post("/track_user/user_validation_view", payload);
      if (res.status === 201) {
        setSuccess("Your response has been saved successfully.");
      }
    } catch {
      setError("Something went wrong.");
    } finally {
      setLoading(false);
    }
  };


  if (!track) {
    return (
      <BackgroundLoader />
    );
  }

  return (
    <>
      <RequestHeader />
      <main className="flex justify-center items-center min-h-screen bg-gray-100 px-4 flex-col py-10">

        <p className="mb-4">(Validate anything in one click)</p>
        <p className="mb-3">Someone needs your validation 👇</p>
        <section className="bg-white py-10 px-6 md:px-10 rounded-lg max-w-3xl w-full shadow-md">
          <h1 className="text-2xl font-bold text-center mb-4">{track.title}</h1>
          {track.description && (
            <DescriptionBox content={track.description} />
          )}

          {track.file_url && (
            <p className="text-center mb-6">
              <a
                href={track.file_url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 underline"
              >
                Open attached file
              </a>
            </p>
          )}

          {!status && (
            <div className="flex justify-center gap-4 mb-6 pt-5">
              <button
                onClick={() => setStatus("approved")}
                className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md font-medium cursor-pointer"
              >
                ✅ Approve
              </button>
              <button
                onClick={() => setStatus("rejected")}
                className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md font-medium cursor-pointer"
              >
                ❌ Reject
              </button>
            </div>
          )}

          { status && !success && (
            <div className="space-y-4">
              
                {collect !== "anonymous" && status === "approved" && (<input
                  type="text"
                  placeholder={`Your ${collect}`}
                  value={emailOrName}
                  onChange={(e) => setEmailOrName(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />)}
            

              <textarea
                placeholder="Comment (optional)"
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                rows={4}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />

              <button
                onClick={handleSubmit}
                disabled={loading}
                className={`${
                  loading ? "bg-gray-400" : "bg-[#2A6DD2] hover:bg-[#1a4a9c]"
                } transition-all duration-200 text-white px-6 py-2 rounded-md font-medium w-full`}
              >
                {loading ? "Sending..." : "Send"}
              </button>

              <button
                onClick={() => {
                  setStatus("");
                  setError("");
                  setSuccess("");
                }}
                className="text-sm text-gray-500 underline flex text-center "
              >
                Cancel
              </button>
              {error && <p className="text-red-600 text-sm mt-4 text-center">{error}</p>}
            </div>

            
          
          )}

          {success && <p className="text-green-600 text-sm mt-4 text-center">{success}</p>}
        </section>
          
          {/* small text for visitors */}
          <div className="mt-6 text-sm text-neutral-600 px-2 sm:px-0">
            <div className="bg-neutral-50 border border-neutral-200 rounded-lg p-4 sm:p-5">
              <p className="text-xs sm:text-sm leading-relaxed">
                🔒 This page was generated via <span className="font-semibold">ValidationFlow</span>.  
                It helps creators and teams get fast, authentic feedback.
                <br />
                No account required. Your answer is anonymous and private.
                <br />
                ValidationFlow is used by freelancers, founders, and teams to validate faster —
                <span className="italic"> no spam, no pressure, just clarity.</span>
              </p>

              <div className="mt-3 flex flex-wrap gap-4 text-xs sm:text-sm text-blue-600 font-medium">
                <a href="/about" className="hover:underline">Learn more</a>
                <a href="/report" className="hover:underline">Report abuse</a>
              </div>
            </div>
          </div>
      </main>
    </>
  );
};

export default Page;
