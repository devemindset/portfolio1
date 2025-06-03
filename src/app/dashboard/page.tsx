"use client";

import { useEffect, useState } from "react";
import { RequestTrack } from "@/types";
import api from "@/lib/api";
import { useRouter } from "next/navigation";

const DashboardPage = () => {
  const [tracks, setTracks] = useState<RequestTrack[]>([]);
  const [openTrackId, setOpenTrackId] = useState<number | null>(null);
  const [error, setError] = useState("");
  const router = useRouter();

 

  useEffect(() => {
    api.get("/track_user/track_users_list")
      .then(res => setTracks(res.data))
      .catch(() => setError("Failed to load validations."));
  }, []);

  const toggleTrack = (id: number) => {
    setOpenTrackId((prev) => (prev === id ? null : id));
  };

  return (
    <div className="min-h-screen flex bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-md hidden md:flex flex-col justify-between">
        <div className="p-6 space-y-4">
          <h1 className="text-2xl font-bold text-blue-600">SnapValidate</h1>
          <nav className="space-y-2 text-gray-700">
            <button className="block w-full text-left">Dashboard</button>
            <button className="block w-full text-left font-semibold">My Validations</button>
            <button
              onClick={() => router.push("/new")}
              className="bg-blue-600 text-white px-4 py-2 rounded w-full text-center"
            >
              + Create New
            </button>
          </nav>
        </div>
        <div className="p-6 space-y-2">
          <button className="block w-full text-left text-sm text-gray-500">Help</button>
          <button className="block w-full text-left text-sm text-red-500">Logout</button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6">
        <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-2">
          <h2 className="text-2xl font-bold">My Validations</h2>
          <button
            onClick={() => router.push("/new")}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            + Create Validation
          </button>
        </div>

        {error && <p className="text-red-500">{error}</p>}

        <div className="space-y-4">
          {tracks.map((track) => {
            const sourceKeyMap = Object.entries(track.all_source).reduce<Record<string, string>>(
              (acc, [name, key]) => {
                acc[key] = name;
                return acc;
              }, {}
            );

            return (
              <div key={track.id} className="bg-white shadow rounded-md p-4">
                <div className="flex justify-between items-center cursor-pointer" onClick={() => toggleTrack(track.id)}>
                  <div>
                    <h3 className="text-lg font-semibold">{track.title}</h3>
                    <p className="text-gray-600 text-sm">{track.description}</p>
                  </div>
                  <span className="text-xl text-gray-400">{openTrackId === track.id ? "˅" : ">"}</span>
                </div>

                {openTrackId === track.id && (
                  <div className="mt-4 border-t pt-4 space-y-2">
                    {track.validators.length > 0 ? (
                      track.validators.map((v) => (
                        <div key={v.id} className="bg-gray-50 p-3 rounded border text-sm">
                          <p><strong>Name/Email:</strong> {v.email_or_name || "—"}</p>
                          <p><strong>Status:</strong> {v.status}</p>
                          <p><strong>Source:</strong> {sourceKeyMap[v.source] || "unknown"}</p>
                          {v.comment && <p><strong>Comment:</strong> {v.comment}</p>}
                        </div>
                      ))
                    ) : (
                      <p className="text-gray-500 italic">No validations yet.</p>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </main>
    </div>
  );
};

export default DashboardPage;
