"use client";

import { useEffect, useState } from "react";
import api from "@/lib/api";
import { RequestTrack, Validator } from "@/types";
import Sidebar from "./components/Sidebar";
import TrackTable from "./components/TrackTable";
import RequestHeader from "@/components/RequestHeader";
import Link from "next/link";
import { useAuthState } from "@/context/AuthContext";
import BackgroundLoader from "@/components/BackgroundLoader";


export default function DashboardPage() {
  const [tracks, setTracks] = useState<RequestTrack[]>([]);
  const [expandedId, setExpandedId] = useState<number | null>(null);
  const [visibleLinkId, setVisibleLinkId] = useState<number | null>(null);
  const {userData} = useAuthState();

  useEffect(() => {
    if(userData.username){
      api
      .get("/track_user/track_users_list")
      .then((res) => {setTracks(res.data);})
      .catch((err) => console.error("Error:", err));
    }
    
  }, [userData]);

  const groupByStatus = (validators: Validator[]) => ({
    approved: validators.filter((v) => v.status === "approved"),
    rejected: validators.filter((v) => v.status === "rejected"),
    viewed: validators.filter((v) => v.status === "viewed" || !v.status),
  });

  return (
    <>
    <RequestHeader />
    <div className="flex min-h-screen flex-col md:flex-row">
      <Sidebar />
      <main className="flex-1 bg-gray-50 pt-20 md:pt-0 p-4 sm:p-6 md:p-10 overflow-x-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4 pt-10"
         
        >
          <h2 className="text-2xl font-semibold">My Validations</h2>
          <Link
            href="/new"
            className="bg-[#1E2A3A] text-white px-4 py-2 rounded hover:bg-blue-700 whitespace-nowrap"
          >
            + Create Track
          </Link>
        </div>

        <TrackTable
          tracks={tracks}
          expandedId={expandedId}
          setExpandedId={setExpandedId}
          visibleLinkId={visibleLinkId}
          setVisibleLinkId={setVisibleLinkId}
          groupByStatus={groupByStatus}
        />
      </main>
    </div>
    {!userData.username && <BackgroundLoader />}
    </>
  );
}
