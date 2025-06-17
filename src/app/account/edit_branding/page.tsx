"use client";
import RequestHeader from "@/components/RequestHeader";
import type { NextPage } from "next";
import BrandingAvatar from "../components/BrandingAvatar";
import { useAuthState } from "@/context/AuthContext";
import { useState } from "react";

import type { AxiosError } from "axios";
import api from "@/lib/api";
import toast from "react-hot-toast";

type UpdateBrandingErrorResponse = {
  branding_name?: string[];
  branding_description?: string[];
  branding_image?: string[];
  [key: string]: string[] | undefined;
};

const Page: NextPage = () => {
  const { userData, getUserInfo } = useAuthState();
  const [brandName, setBrandName] = useState(userData.branding_name || "");
  const [description, setDescription] = useState(userData.branding_description || "");
  const [image, setImage] = useState<File | null>(null);
  const [previewImage, setPreviewImage] = useState<string | null>(null);

  const [btnStatus, setBtnStatus] = useState(false);
  const [error, setError] = useState("");

  // erreurs par champ
  const [brandNameError, setBrandNameError] = useState<string | null>(null);
  const [descriptionError, setDescriptionError] = useState<string | null>(null);
  const [imageError, setImageError] = useState<string | null>(null);

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

    setImage(file);
    setPreviewImage(URL.createObjectURL(file));
  }
};


  const EditBrandingHandle = async () => {
    setBtnStatus(true);
    setError("");
    setBrandNameError(null);
    setDescriptionError(null);
    setImageError(null);

    try {
      const formData = new FormData();
      formData.append("branding_name", brandName);
      formData.append("branding_description", description);
      if (image) formData.append("branding_image", image);

      const response = await api.patch("/user/user_update/", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      if (response.status === 200) {
        getUserInfo()
        alert("Branding updated successfully");
        setImage(null);
        setPreviewImage(null);
      } else {
        setError("Failed to update branding.");
      }
    } catch (err) {
      const error = err as AxiosError<UpdateBrandingErrorResponse>;
      const res = error.response?.data;

      if (res) {
        if (res.branding_name) setBrandNameError(res.branding_name[0]);
        if (res.branding_description) setDescriptionError(res.branding_description[0]);
        if (res.branding_image) setImageError(res.branding_image[0]);
        else setError("An error occurred.");
      } else {
        setError("Unexpected error.");
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
              EditBrandingHandle();
            }}
            className="space-y-4 w-full"
          >
            {/* Avatar + bouton update image */}
            <div className="flex items-center">
              <BrandingAvatar userData={userData} previewImage={previewImage} />
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
            {imageError && <p className="text-red-600 text-sm">{imageError}</p>}

            {/* Nom de la marque */}
            <input
              type="text"
              placeholder="Branding name"
              className={`w-full p-3 rounded-md border ${
                brandNameError ? "border-red-500" : "border-gray-300"
              } focus:outline-none focus:ring-2 focus:ring-blue-500`}
              value={brandName}
              onChange={(e) => setBrandName(e.target.value)}
            />
            {brandNameError && <p className="text-red-600 text-sm">{brandNameError}</p>}

            {/* Bio */}
            <textarea
              placeholder="Bio"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              rows={4}
              className={`w-full px-4 py-2 border ${
                descriptionError ? "border-red-500" : "border-gray-300"
              } rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
              required
            />
            {descriptionError && <p className="text-red-600 text-sm">{descriptionError}</p>}

            {/* Erreur générale */}
            {error && <p className="text-center text-sm text-red-600">{error}</p>}

            {/* Bouton ou spinner */}
            {!btnStatus ? (
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 transition cursor-pointer"
              >
                Update
              </button>
            ) : (
              <span className="flex justify-center items-center gap-2 text-sm font-medium text-blue-700">
                <svg className="animate-spin h-5 w-5 text-blue-700" viewBox="0 0 24 24">
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
