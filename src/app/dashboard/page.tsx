"use client";

import { useEffect, useState } from "react";
import type { NextPage } from "next";
import api from "@/lib/api";
import Link from "next/link";

type Validator = {
  id: number;
  email_or_name: string;
  status: string;
  source?: string;
};

type RequestTrack = {
  id: number;
  title: string;
  description: string;
  file_url: string;
  token: string;
  all_source: string;
  all_receiver: string;
  deadline?: string;
  validators: Validator[];
};

const DashboardPage: NextPage = () => {
  const [tracks, setTracks] = useState<RequestTrack[]>([]);
  const [error, setError] = useState("");

  const APP_URL = process.env.NEXT_PUBLIC_APP_URL

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.get("track_user/track_users_list");
        setTracks(response.data);
      } catch (err: any) {
        console.error("Error loading tracks", err);
        setError("Failed to load tracks.");
      }
    };

    fetchData();
  }, []);

  const copyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      alert("Lien copié !");
    } catch (err) {
      console.error("Échec de copie dans le presse-papiers", err);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Dashboard</h1>

      <Link href="/new" className="text-blue-600 hover:underline mb-4 block">
        ➕ Créer une nouvelle track
      </Link>

      {error && <p className="text-red-500">{error}</p>}

      {tracks.map((track) => {
        const baseLink = `${APP_URL}/req/${track.token}`;
        const sources = track.all_source ? track.all_source.split(",") : [];

        return (
          <div key={track.id} className="border p-4 mb-6 rounded shadow-sm">
            <h2 className="text-xl font-semibold">{track.title}</h2>
            <p className="text-gray-700">{track.description}</p>

            {track.file_url && (
              <p className="text-sm text-blue-700">
                <a href={track.file_url} target="_blank" rel="noopener noreferrer">
                  Voir le fichier
                </a>
              </p>
            )}

            <div className="mt-2 space-y-2">
              <button
                onClick={() => copyToClipboard(baseLink)}
                className="text-sm text-blue-600 underline"
              >
                Copier le lien général
              </button>

              {sources.map((source) => (
                <button
                  key={source}
                  onClick={() => copyToClipboard(`${baseLink}?source=${source}`)}
                  className="text-sm text-blue-600 underline block"
                >
                  Copier le lien {source}
                </button>
              ))}
            </div>

            {track.validators.length > 0 && (
              <div className="mt-4">
                <h3 className="font-medium">Validators</h3>
                <ul className="list-disc list-inside text-sm text-gray-600">
                  {track.validators.map((validator) => (
                    <li key={validator.id}>
                      {validator.email_or_name} — {validator.status}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default DashboardPage;
