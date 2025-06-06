"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import type { NextPage } from "next";
import type { ChangeEvent } from "react";
import Image from "next/image";
import api from "@/lib/api";
import { CreateTrack } from "@/types";
import { platforms } from "@/constant";
import { useAuthState } from "@/context/AuthContext";
import Link from "next/link";

const CreateTrackPage: NextPage = () => {
  const { getUserInfo } = useAuthState();
  const router = useRouter();

  const [form, setForm] = useState<CreateTrack>({
    title: "",
    description: "",
    file_url: "",
    all_receiver: "",
    collect: "anonymous",
  });

  const [platformMode, setPlatformMode] = useState<"one" | "multiple" | "all">("one");
  const [selectedPlatforms, setSelectedPlatforms] = useState<string[]>([]);
  const [customPlatforms, setCustomPlatforms] = useState<string[]>([""]);
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [creationSuccess, setCreationSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const togglePlatform = (name: string) => {
    if (platformMode === "one") {
      setSelectedPlatforms(selectedPlatforms.includes(name) ? [] : [name]);
    } else {
      setSelectedPlatforms((prev) =>
        prev.includes(name) ? prev.filter((p) => p !== name) : [...prev, name]
      );
    }
  };

  const addCustomField = () => setCustomPlatforms((prev) => [...prev, ""]);
  const updateCustomPlatform = (index: number, value: string) => {
    const updated = [...customPlatforms];
    updated[index] = value;
    setCustomPlatforms(updated);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (platformMode === "one" && selectedPlatforms.length > 1) {
      setError("Only one platform can be selected in 'One' mode.");
      return;
    }

    setShowModal(true);
  };

  const handleConfirm = async () => {
    setLoading(true);
    setShowModal(false);

    const all_source =
      platformMode === "all"
        ? platforms.map((p) => p.name).concat(customPlatforms.filter(Boolean))
        : selectedPlatforms.concat(customPlatforms.filter(Boolean));

    const dataToSubmit = { ...form, all_source: all_source.join(","),platformode : platformMode  };

    try {
      const response = await api.post("track_user/create_track_users", dataToSubmit);
      
      if (response.status === 201 || response.status === 200) {
        setCreationSuccess(true);
        getUserInfo();
      }
     
    } catch (err: unknown) {
      if (typeof err === "object" && err !== null && "response" in err) {
          const axiosError = err as {
            response?: {
              status?: number;
              data?: { error?: string; detail?: string };
            };
          };

          if (axiosError.response?.status === 402) {
            setError("Not enough credits.");
          } else {
            setError(
              axiosError.response?.data?.error ||
              axiosError.response?.data?.detail ||
              "Something went wrong."
            );
          }
        }  else {
              setError("Unexpected error occurred.");
            }
    } finally {
      setLoading(false);
    }
  };

  const resetForm = () => {
    setForm({
      title: "",
      description: "",
      file_url: "",
      all_receiver: "",
      collect: "anonymous",
    });
    setSelectedPlatforms([]);
    setCustomPlatforms([""]);
    setCreationSuccess(false);
    setPlatformMode("one");
  };

  return (
    <main className="flex justify-center items-center bg-gray-100 min-h-screen py-12 px-4">
      <section className="bg-white py-10 px-6 md:px-10 rounded-lg max-w-3xl w-full shadow-md">
        {!creationSuccess ? (
          <>
            <h1 className="text-2xl font-semibold text-center mb-2">Create a validation link</h1>
            <p className="text-center text-gray-500 mb-8">
              Collect clear feedback, track approvals, and make better decisions.
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block font-medium">Title</label>
                <input
                  name="title"
                  value={form.title}
                  onChange={handleChange}
                  required
                  className="w-full border px-3 py-2 rounded-md"
                  placeholder="Title of your validation"
                />
              </div>

              <div>
                <label className="block font-medium">Description (optional)</label>
                <textarea
                  name="description"
                  value={form.description}
                  onChange={handleChange}
                  rows={1}
                  className="w-full border px-3 py-2 rounded-md resize-y max-h-48"
                  placeholder="Add details or context"
                />
              </div>

              <div>
                <label className="block font-medium">File URL (optional)</label>
                <input
                  name="file_url"
                  value={form.file_url}
                  onChange={handleChange}
                  className="w-full border px-3 py-2 rounded-md"
                  placeholder="https://figma.com/..."
                />
              </div>

              <div>
                <span className="text-green-600">{" One link 👉 1 credit, Several links  👉 3 credits, All links  👉 4 credits"}</span>
                <label className="block font-medium mb-2">Sharing platforms </label>
                <div className="flex gap-4 mb-4">
                  {(["one", "multiple", "all"] as const).map((mode) => (
                   
                    
                    <button
                      key={mode}
                      type="button"
                      onClick={() => {
                        setPlatformMode(mode);
                        setSelectedPlatforms([]);
                      }}
                      className={`px-4 py-2 border rounded-md ${
                        platformMode === mode ? "bg-blue-600 text-white" : ""
                      }`}
                    >
                      {mode === "one" ? "One" : mode === "multiple" ? "Several" : "All"}
                    </button>
                    
                   
                  ))}
                  
                </div>
                  
                {(platformMode === "one" || platformMode === "multiple") && (
                  <div className="flex flex-wrap gap-3">
                    {platforms.map((p) => (
                      <label key={p.name} className="flex items-center gap-2">
                        <input
                          type="checkbox"
                          checked={selectedPlatforms.includes(p.name)}
                          onChange={() => togglePlatform(p.name)}
                        />
                        <Image src={p.iconUrl} alt={p.name} width={20} height={20} />
                        <span className="text-sm">{p.name}</span>
                      </label>
                    ))}
                  </div>
                )}

                {platformMode === "all" && (
                  <div className="grid grid-cols-3 gap-3">
                    {platforms.map((p) => (
                      <div key={p.name} className="flex items-center gap-2">
                        <Image src={p.iconUrl} alt={p.name} width={20} height={20} />
                        <span className="text-sm">{p.name}</span>
                      </div>
                    ))}
                  </div>
                )}

                {!(platformMode === "one" && selectedPlatforms.length > 0) && (
                  <div className="mt-4 space-y-2">
                    {customPlatforms.map((val, i) => (
                      <input
                        key={i}
                        value={val}
                        onChange={(e) => updateCustomPlatform(i, e.target.value)}
                        placeholder="Other platform or Receiver"
                        className="w-full border px-3 py-2 rounded-md"
                      />
                    ))}
                    {platformMode !== "one" && (
                      <button type="button" onClick={addCustomField} className="text-blue-600 text-sm">
                        + Add another
                      </button>
                    )}
                  </div>
                )}
              </div>

              <div>
                <label className="block font-medium mb-2">What should validators provide?</label>
                <div className="space-y-2">
                  {["anonymous", "name", "email"].map((opt) => (
                    <label key={opt} className="flex items-center gap-2">
                      <input
                        type="radio"
                        name="collect"
                        value={opt}
                        checked={form.collect === opt}
                        onChange={handleChange}
                      />
                      {opt === "anonymous" ? "Anonymous (no info)" : opt.charAt(0).toUpperCase() + opt.slice(1)}
                    </label>
                  ))}
                </div>
              </div>

              {platformMode !== "one" && (
                <div>
                  <label className="block font-medium">Receivers (optional)</label>
                  <input
                    name="all_receiver"
                    value={form.all_receiver}
                    onChange={handleChange}
                    className="w-full border px-3 py-2 rounded-md"
                    placeholder="Enter emails or names"
                  />
                </div>
              )}

              

              <button
                type="submit"
                disabled={loading}
                className={`w-full ${loading ? "bg-gray-400" : "bg-blue-600 hover:bg-blue-700"} text-white py-3 rounded-md`}
              >
                {loading ? (
                  <span className="flex justify-center items-center gap-2">
                    <svg className="animate-spin h-5 w-5 text-white" viewBox="0 0 24 24">
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
                    Creating...
                  </span>
                ) : (
                  "Create validation link"
                )}
              </button>
              {error && <p className="text-red-500 text-sm text-center">{error}</p>}
              {error === "Not enough credits." && <Link href="/pricing" target="_blank" className="underline block text-center text-blue-700">Get more to continue.</Link>}
            </form>
          </>
        ) : (
          <div className="text-center space-y-4">
            <h2 className="text-green-600 text-xl font-semibold">✅ Validation link created successfully!</h2>
            <div className="flex flex-col items-center gap-2">
              <button
                onClick={() => router.push("/dashboard")}
                className="bg-blue-600 text-white px-5 py-2 rounded-md hover:bg-blue-700"
              >
                Go to dashboard
              </button>
              <button
                onClick={resetForm}
                className="text-blue-600 underline hover:text-blue-800 text-sm"
              >
                Create another link
              </button>
            </div>
          </div>
        )}
      </section>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">
          <div className="bg-white max-w-md w-full rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-semibold mb-4">Preview validation link</h3>
            <ul className="text-sm text-gray-700 space-y-2">
              <li><strong>Title:</strong> {form.title}</li>
              <li><strong>Description:</strong> {form.description || "—"}</li>
              <li><strong>File URL:</strong> {form.file_url || "—"}</li>
              <li><strong>Collect:</strong> {form.collect}</li>
              <li><strong>Platforms:</strong> {selectedPlatforms.join(", ") || "All"}</li>
              <li><strong>Others:</strong> {customPlatforms.filter(Boolean).join(", ") || "—"}</li>
            </ul>

            <div className="flex justify-end gap-4 mt-6">
              <button onClick={() => setShowModal(false)} className="text-gray-600">
                Cancel
              </button>
              <button
                onClick={handleConfirm}
                className="bg-blue-600 text-white px-4 py-2 rounded-md"
              >
                Confirm
              </button>
             
            </div>
          </div>
        </div>

        // Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias qui optio, aut assumenda error sint, sed laborum, temporibus in illum veritatis non incidunt. Vero vitae quasi delectus optio provident sit.
      )}
    </main>
  );
};

export default CreateTrackPage;
