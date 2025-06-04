// app/dashboard/page.tsx

"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import api from "@/lib/api";
import { RequestTrack, Validator } from "@/types";
import { HelpCircle, Home, Link2, Copy } from "lucide-react";
import { ChevronDownIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import { formatDate } from "@/tools/utils";
import { platforms } from "@/constant";
import Image from "next/image";

export default function DashboardPage() {
const [tracks, setTracks] = useState<RequestTrack[]>([]);
const [expandedId, setExpandedId] = useState<number | null>(null);
const [visibleLinkId, setVisibleLinkId] = useState<number | null>(null);

useEffect(() => {
api
.get("/track_user/track_users_list")
.then((res) => setTracks(res.data))
.catch((err) => console.error("Error:", err));
}, []);

const groupByStatus = (validators: Validator[]) => ({
approved: validators.filter((v) => v.status === "approved"),
rejected: validators.filter((v) => v.status === "rejected"),
viewed: validators.filter((v) => v.status === "viewed" || !v.status),
});

const statusOrder = ["approved", "rejected", "viewed"] as const;
const statusLabel = {
approved: "Approved",
rejected: "Rejected",
viewed: "Viewed",
};
const statusColor = {
approved: "bg-green-100 text-green-700",
rejected: "bg-red-100 text-red-700",
viewed: "bg-gray-100 text-gray-700",
};

const handleCopy = async (text: string) => {
try {
await navigator.clipboard.writeText(text);
alert("Link copied!");
} catch (err) {
console.error("Copy failed:", err);
}
};

return (
<div className="flex min-h-screen">
{/* SIDEBAR */}
<aside className="w-60 bg-white shadow-sm p-6 flex flex-col justify-between">
<div>
<Link href="/dashboard" className="flex items-center mb-4 text-gray-800 font-medium">
<Home size={20} className="mr-2" />
Dashboard
</Link>
      <Link
        href="/new"
        className="block bg-[#1E2A3A] text-white text-center py-2 mt-8 rounded hover:bg-blue-700"
      >
        + Create new
      </Link>
    </div>

    <div className="mt-10">
      <Link href="/contact" className="flex items-center text-gray-600 hover:text-gray-800">
        <HelpCircle size={20} className="mr-2" />
        Help
      </Link>
    </div>
  </aside>

  {/* MAIN CONTENT */}
  <main className="flex-1 bg-gray-50 p-6 md:p-10 overflow-x-auto">
    <div className="flex justify-between items-center mb-6">
      <h2 className="text-2xl font-semibold">My Validations</h2>
      <Link href="/new" className="bg-[#1E2A3A] text-white px-4 py-2 rounded hover:bg-blue-700">
        + Create Link
      </Link>
    </div>

    {/* HEADERS */}
    <div className="grid grid-cols-6 gap-4 text-xs font-semibold bg-[#1E2A3A] text-white py-3 px-4 rounded-t-md min-w-[800px]">
  <div>Title</div>
  <div>Description</div>
  <div>File URL</div>
  <div>Date</div>
  <div>Links</div>
  <div >Count</div>
</div>

    <div className="flex flex-col-reverse ">

    
    {tracks.map((track) => {
      const isExpanded = expandedId === track.id;
      const linkVisible = visibleLinkId === track.id;


      return (
        <div key={track.id} className="bg-white shadow-sm rounded-md mb-4">
          <div
            className="flex flex-col md:flex-row items-start md:items-center justify-between p-4 cursor-pointer relative"
            onClick={() => setExpandedId(isExpanded ? null : track.id)}
          >
            <div className="flex flex-col md:flex-row md:items-center gap-4 w-full">
              <p className="w-48 truncate text-sm font-semibold">{track.title}</p>
              <p className="w-60 truncate text-sm">{track.description}</p>
              <p className="w-56 truncate text-sm text-blue-700">{track.file_url}</p>
              <div className="w-40 truncate text-sm flex flex-wrap gap-1">
                {Object.entries(track.all_source).map(([label]) => (
                  <span key={label} className="truncate text-gray-700 text-xs bg-gray-100 px-2 py-0.5 rounded">
                    {label}
                  </span>
                ))}
              </div>
              <p className="w-32 text-xs text-gray-500">{formatDate(track.deadline)}</p>
              <div
                className="w-20 flex justify-center relative z-10"
                onClick={(e) => {
                  e.stopPropagation();
                  setVisibleLinkId(linkVisible ? null : track.id);
                }}
              >
                <Link2 size={18} />
                {linkVisible && (
                  <div className="absolute top-6 right-0 bg-white border shadow-lg p-4 rounded z-20 w-64 space-y-2">
                    {Object.entries(track.all_source).map(([label, key]) => (
                      <div key={key} className="flex items-center justify-between gap-2">
                        <div className="flex items-center gap-1 truncate">
                          <Image
                            src={
                              platforms.find((p) => p.name.toLowerCase() === label.toLowerCase())
                                ?.iconUrl || "https://cdn.simpleicons.org/link"
                            }
                            alt={label}
                            width={16}
                            height={16}
                          />
                          <span className="text-xs truncate">{label}</span>
                        </div>
                        <button
                          onClick={() =>
                            handleCopy(`${process.env.NEXT_PUBLIC_APP_URL}/req/${track.token}${key}`)
                          }
                        >
                          <Copy size={14} className="text-gray-600 hover:text-black" />
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>
              <div className="w-20 text-center">
                <span className="text-xs bg-blue-600 text-white px-2 py-0.5 rounded-full">
                  {track.validators.length}
                </span>
              </div>
            </div>

            <div className="ml-auto mt-2 md:mt-0">
              {isExpanded ? <ChevronDownIcon className="w-4 h-4" /> : <ChevronRightIcon className="w-4 h-4" />}
            </div>
          </div>

          {/* VALIDATOR EXPANSION */}
          {isExpanded && (
            <div className="bg-gray-50 p-4">
              <p className="text-sm font-semibold mb-3">Validators</p>
              {track.validators.length === 0 ? (
                <p className="text-gray-500 text-sm italic">No validation yet.</p>
              ) : (
                statusOrder.map((status) => {
                  const grouped = groupByStatus(track.validators)[status];
                  if (grouped.length === 0) return null;

                  return (
                    <div key={status} className="mb-4">
                      <h4 className={`text-xs font-medium mb-2 inline-block px-3 py-1 rounded-full ${statusColor[status]}`}>
                        {statusLabel[status]} ({grouped.length})
                      </h4>
                      <div className="space-y-2">
                        <div className="hidden md:flex font-semibold bg-white border px-4 py-2 rounded-md text-sm">
                          <div className="w-48">Name / Email</div>
                          <div className="w-40">Source</div>
                          <div className="w-80">Comment</div>
                          <div className="w-32">Date</div>
                        </div>
                        {grouped.map((val) => {
                          const sourceLabel = Object.entries(track.all_source).find(([_, k]) => k === val.source)?.[0] || "—";
                          return (
                            <div key={val.id} className="flex flex-col md:flex-row gap-2 md:gap-0 text-sm bg-white px-4 py-3 rounded-md">
                              <div className="w-48 truncate">{val.email_or_name || "—"}</div>
                              <div className="w-40 truncate text-gray-600">{sourceLabel}</div>
                              <div className="w-80 truncate text-gray-500">{val.comment || "No comment"}</div>
                              <div className="w-32 text-xs text-gray-400">{formatDate(val.responded_at)}</div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  );
                })
              )}
            </div>
          )}
        </div>
      );
    })}
    </div>
  </main>
  .
</div>
);
}