"use client";

import { useEffect, useState } from "react";
import { useParams} from "next/navigation"
import type { NextPage } from "next";
import { pubic_api } from "@/lib/api";
import { DataValidation, RequestInTheTokenPage } from "@/types";

const TOKEN_LENGTH = 12;

const Page: NextPage = () => {
   const { tokenWithKey } = useParams();
//   const router = useRouter();

  const [track, setTrack] = useState<RequestInTheTokenPage | null>(null);
//   const [source, setSource] = useState("");
//   const [token, setToken] = useState("");
  const [requestId, setRequestId] = useState<number | null>(null);
//   const [key, setKey] = useState("");
  const [comment, setComment] = useState("");
  const [emailOrName, setEmailOrName] = useState("");
  const [status, setStatus] = useState<"approved" | "rejected" | "">("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  useEffect(() => {
    if (typeof tokenWithKey !== "string" || tokenWithKey.length < TOKEN_LENGTH) {
      setError("Lien invalide.");
      return;
    }

    const _token = tokenWithKey.slice(0, TOKEN_LENGTH);
    

    
    // 1. Récupérer la track
    pubic_api.get(`/track_user/track_by_token/${_token}/`)
      .then((res) => {
        setTrack(res.data);
        setRequestId(res.data.id);
        // Source sera envoyée directement depuis le frontend — à deviner sur backend si nécessaire
        
      })
      .catch(() => setError("Requête introuvable."));
  }, [tokenWithKey]);

  const handleSubmit = async () => {

    const _key = tokenWithKey?.slice(TOKEN_LENGTH);

    if (!requestId || !status || !tokenWithKey) return;

    if (status === "approved" && !emailOrName.trim()) {
      setError("Veuillez renseigner votre email ou nom pour valider.");
      return;
    }

    const payload: DataValidation = {
      request_id: requestId,
      email_or_name: emailOrName,
      source: _key,
      comment: comment,
      status: status,
    };

    try {
      const res = await pubic_api.post("/track_user/user_validation_view", payload);
      if (res.status === 201) {
        setSuccess("Votre réponse a bien été enregistrée.");
      }
    } catch (err) {
      console.error(err);
      setError("Erreur lors de l'envoi.");
    }
  };

  if (error) {
    return <div className="p-6 text-red-500">{error}</div>;
  }

  if (!track) {
    return <div className="p-6">Chargement...</div>;
  }
  return (
    <div className="max-w-xl mx-auto p-6 border rounded shadow">
      <h1 className="text-2xl font-bold mb-2">{track.title}</h1>
      <p className="mb-2 text-gray-700">{track.description}</p>

      {track.file_url && (
        <p className="mb-4 text-blue-600 underline">
          <a href={track.file_url} target="_blank" rel="noopener noreferrer">
            Voir le fichier associé
          </a>
        </p>
      )}

      {!status && (
        <div className="space-x-4 mt-4">
          <button
            onClick={() => setStatus("approved")}
            className="bg-green-600 text-white px-4 py-2 rounded"
          >
            ✅ Valider
          </button>
          <button
            onClick={() => setStatus("rejected")}
            className="bg-red-600 text-white px-4 py-2 rounded"
          >
            ❌ Refuser
          </button>
        </div>
      )}

      {status && (
        <div className="mt-6 space-y-4">
          {status === "approved" && (
            <input
              type="text"
              placeholder="Votre nom ou email (requis)"
              className="w-full border p-2 rounded"
              value={emailOrName}
              onChange={(e) => setEmailOrName(e.target.value)}
              required
            />
          )}

          <textarea
            placeholder="Commentaire (optionnel)"
            className="w-full border p-2 rounded"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          />

          <button
            onClick={handleSubmit}
            className="bg-blue-700 text-white px-4 py-2 rounded"
          >
            Envoyer
          </button>

          <button
            onClick={() => {
              setStatus("");
              setError("");
              setSuccess("");
            }}
            className="text-sm text-gray-500 underline ml-2"
          >
            Annuler
          </button>
        </div>
      )}

      {success && <p className="text-green-600 mt-4">{success}</p>}
    </div>
  );
}

export default Page