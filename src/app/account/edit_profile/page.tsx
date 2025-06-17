"use client";
import RequestHeader from "@/components/RequestHeader";
import { useAuthState } from "@/context/AuthContext";
import type { NextPage } from "next";
import Avatar from "../components/Avatar";
import { useState } from "react";
import api from "@/lib/api";
import toast from "react-hot-toast";
import { AxiosError } from "axios";

type UpdateUserErrorResponse = {
  username?: string[];
  [key: string]: string[] | undefined;
};

const Page: NextPage = () => {
  const { userData,getUserInfo } = useAuthState(); // ← Refresh après update si tu as ça
  const [username, setUsername] = useState(userData.username);
  const [previewImage, setPreviewImage] = useState<string | null>(null);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [btnStatus, setBtnStatus] = useState(false);
  const [error, setError] = useState("");
  const [usernameError, setUsernameError] = useState<string | null>(null);

  const MAX_FILE_SIZE_MB = 2;
const ALLOWED_TYPES = ["image/jpeg", "image/png", "image/webp"];

const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  const file = e.target.files?.[0];

  if (file) {
    // Vérifie le type de fichier
    if (!ALLOWED_TYPES.includes(file.type)) {
      toast.error("Only JPG, PNG or WebP images are allowed.");
      return;
    }

    // Vérifie la taille du fichier
    if (file.size > MAX_FILE_SIZE_MB * 1024 * 1024) {
      toast.error("Image must be smaller than 2MB.");
      return;
    }

    setSelectedFile(file);
    setPreviewImage(URL.createObjectURL(file));
  }
};

  const EditProfilHandle = async () => {
    setBtnStatus(true);
    setError("");

    try {
      const formData = new FormData();
      if (selectedFile) {
        formData.append("image", selectedFile);
      }
      formData.append("username", username);

      const response = await api.patch("/user/user_update/", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      if (response.status === 200) {
        // Si tu as une méthode de rafraîchissement de l’utilisateur (ex: depuis ton contexte)
        getUserInfo()
        toast.success("Profile updated successfully");
        setSelectedFile(null);
        setPreviewImage(null);
      } else {
        setError("Failed to update profile");
      }
    } catch (err) {
  const error = err as AxiosError<UpdateUserErrorResponse>;

  if (error.response?.data) {
    const res = error.response.data;
    if (res.username && Array.isArray(res.username)) {
      setUsernameError(res.username[0]);
    } else {
      setError("An error occurred during update.");
    }
  } else {
    setError("An unexpected error occurred.");
  }
} finally {
      setBtnStatus(false);
    }
  };

  return (
    <>
      <RequestHeader />
      <main className="flex justify-center pt-25 h-screen">
        <div className="w-full max-w-md bg-white rounded-xl shadow-md p-8 space-y-6 flex flex-col items-center">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              EditProfilHandle();
            }}
            className="space-y-4 w-full"
          >
            <div className="flex items-center">
              <Avatar userData={userData} previewImage={previewImage} />
              {/* Superposition du bouton & input file */}
              <div className="relative ml-4">
                <button
                  type="button"
                  className="bg-blue-600 text-white rounded-md hover:bg-blue-700 transition cursor-pointer px-3 py-2 text-sm"
                >
                  Update image
                </button>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                  className="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer"
                />
              </div>
            </div>

            <input
              type="text"
              placeholder="Username"
              className="w-full p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />

            {error && (
              <p className="text-sm text-red-600 text-center">{error}</p>
            )}
            {usernameError && (
              <p className="text-sm text-red-600 mt-1">{usernameError}</p>
            )}

            {!btnStatus ? (
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 transition cursor-pointer"
              >
                Update
              </button>
            ) : (
              <span className="flex justify-center items-center gap-2 text-sm font-medium text-blue-700">
                <svg
                  className="animate-spin h-5 w-5 text-blue-700"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                    fill="none"
                  />
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8v8H4z"
                  />
                </svg>
                Processing...
              </span>
            )}
          </form>
        </div>
      </main>
    </>
  );
};

export default Page;
