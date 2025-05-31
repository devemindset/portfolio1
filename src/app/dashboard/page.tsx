"use client";

import { useEffect, useState } from "react";
import type { NextPage } from "next";
import api from "@/lib/api";
import Link from "next/link";
import { RequestTrack } from "@/types";

const DashboardPage: NextPage = () => {
  const [tracks, setTracks] = useState<RequestTrack[]>([]);
  const [error, setError] = useState("");

  const APP_URL = process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.get("/track_user/track_users_list");
        setTracks(response.data);
    
      } catch (err: any) {
        console.error("Error loading tracks", err);
        setError("Échec de chargement des requêtes.");
      }
    };

    fetchData();
  }, []);

  const copyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      alert("Lien copié !");
    } catch (err) {
      console.error("Échec de copie", err);
    }
  };

  const formatDate = (dateStr: string): string => {
    const date = new Date(dateStr);
    return date.toLocaleDateString("fr-FR", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    });
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Dashboard</h1>

      <Link href="/new" className="text-blue-600 hover:underline mb-4 block">
        ➕ Créer une nouvelle track
      </Link>

      {error && <p className="text-red-500">{error}</p>}

      <div className="flex flex-col-reverse items-center ">
      {tracks.map((track) => {
        const sources = track.all_source;

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

              {track.deadline && (
                <p className="text-sm text-gray-600">
                  🗓️ Deadline : {formatDate(track.deadline)}
                </p>
              )}

              <div className="mt-2 space-y-2">
                {Object.entries(sources).map(([sourceName, key]) => (
                  <button
                    key={sourceName}
                    onClick={() => copyToClipboard(`${APP_URL}/req/${track.token}${key}`)}
                    className="text-sm text-blue-600 underline block"
                  >
                    Copier le lien {sourceName}
                  </button>
                ))}
              </div>

              {track.validators.length > 0 && (
  <div className="mt-4">
    <h3 className="font-medium mb-2">✅ Validations reçues :</h3>
    <ul className="space-y-1 text-sm text-gray-700">
      {track.validators.map((validator) => {
        const sourceKeyMap = Object.entries(track.all_source).reduce<Record<string, string>>(
          (acc, [name, key]) => {
            acc[key] = name;
            return acc;
          },
          {}
        );

        const readableSource = sourceKeyMap[validator.source] || "inconnue";

        return (
          <li key={validator.id} className="bg-gray-50 p-2 rounded border">
            <p><span className="font-semibold">Nom/Email :</span> {validator.email_or_name || "—"}</p>
            <p><span className="font-semibold">Statut :</span> {validator.status}</p>
            <p><span className="font-semibold">Source :</span> {readableSource}</p>
            {validator.comment && (
              <p><span className="font-semibold">Commentaire :</span> {validator.comment}</p>
            )}
          </li>
        );
      })}
    </ul>
  </div>
                )}

            </div>
          
        );
      })}
      </div>
    </div>
  );
};

export default DashboardPage;
