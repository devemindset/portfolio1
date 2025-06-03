"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import type { NextPage } from "next";
import Image from "next/image";
import api from "@/lib/api";
import { CreateTrack } from "@/types";
import { platforms } from "@/constant";


const CreateTrackPage: NextPage = () => {
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const togglePlatform = (name: string) => {
    if (platformMode === "one" && !selectedPlatforms.includes(name)) {
      setSelectedPlatforms([name]); // allow only one
    } else {
      setSelectedPlatforms((prev) =>
        prev.includes(name) ? prev.filter((p) => p !== name) : [...prev, name]
      );
    }
  };

  const addCustomField = () => setCustomPlatforms((prev) => [...prev, ""]);
  const updateCustomPlatform = (index: number, value: string) => {
    const list = [...customPlatforms];
    list[index] = value;
    setCustomPlatforms(list);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    // ✅ Validation pour le mode "one"
    if (platformMode === "one" && selectedPlatforms.length > 1) {
      setError("Only one platform can be selected in 'One' mode.");
      return;
    }

    // ✅ Pas d'erreur → afficher aperçu
    setShowModal(true);
  };

  const handleConfirm = async () => {
    setLoading(true);
    setError("");
    setShowModal(false);

    const all_source =
      platformMode === "all"
        ? platforms.map((p) => p.name).concat(customPlatforms.filter(Boolean))
        : selectedPlatforms.concat(customPlatforms.filter(Boolean));

    const dataToSubmit = { ...form, all_source: all_source.join(",") };

    try {
      const response = await api.post("track_user/create_track_users", dataToSubmit);
      if (response.status === 201 || response.status === 200) {
        setCreationSuccess(true);
      }
    } catch (err: any) {
      setError(err.response?.data?.error || "Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="flex justify-center items-start bg-gray-100 min-h-screen py-12 px-4">
      <section className="bg-white py-10 px-6 md:px-10 rounded-lg max-w-3xl w-full shadow-md">
        <h1 className="text-2xl font-semibold text-center mb-2">Create a validation link</h1>
        <p className="text-center text-gray-500 mb-8">
          Collect clear feedback, track approvals, and make better decisions.
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Title */}
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

          {/* Description */}
          <div>
            <label className="block font-medium">Description</label>
            <textarea
              name="description"
              value={form.description}
              onChange={handleChange}
              className="w-full border px-3 py-2 rounded-md"
              placeholder="Add details or context"
            />
          </div>

          {/* File URL */}
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

          {/* Platform selection */}
          <div>
            <label className="block font-medium mb-2">Sharing platforms</label>
            <div className="flex gap-4 mb-4">
              {["one", "multiple", "all"].map((mode) => (
                <button
                  key={mode}
                  type="button"
                  onClick={() => {
                    setPlatformMode(mode as any);
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

            {/* Platform list */}
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

            {/* Custom platforms */}
            <div className="mt-4 space-y-2">
              {customPlatforms.map((value, i) => (
                <input
                  key={i}
                  value={value}
                  onChange={(e) => updateCustomPlatform(i, e.target.value)}
                  placeholder="Other platform"
                  className="w-full border px-3 py-2 rounded-md"
                />
              ))}
              <button type="button" onClick={addCustomField} className="text-blue-600 text-sm">
                + Add another
              </button>
            </div>
          </div>

          {/* Collect mode */}
          <div>
            <label className="block font-medium mb-2">What should validators provide?</label>
            <div className="space-y-2">
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="collect"
                  value="anonymous"
                  checked={form.collect === "anonymous"}
                  onChange={handleChange}
                />
                Anonymous (no info required)
              </label>
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="collect"
                  value="name"
                  checked={form.collect === "name"}
                  onChange={handleChange}
                />
                Name only
              </label>
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="collect"
                  value="email"
                  checked={form.collect === "email"}
                  onChange={handleChange}
                />
                Email
              </label>
            </div>
          </div>

          {/* Receivers */}
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

          {error && <p className="text-red-500 text-sm">{error}</p>}

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700"
          >
            Create validation link
          </button>

          {creationSuccess && (
            <div className="text-center mt-4">
              <p className="text-green-600 text-sm">Validation link created successfully!</p>
              <button
                onClick={() => router.push("/dashboard")}
                className="mt-2 text-blue-600 hover:underline text-sm"
              >
                Go to dashboard
              </button>
            </div>
          )}
        </form>
      </section>

      {/* MODAL */}
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
      )}
    </main>
  );
};

export default CreateTrackPage;
