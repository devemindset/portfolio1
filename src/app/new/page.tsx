"use client";

import type { NextPage } from "next";
import { useState } from "react";
import api from "@/lib/api";
import { useRouter } from "next/navigation";
import { CreateTrack } from "@/types";
import Image from "next/image";

const AVAILABLE_SOURCES = ["general","whatsapp", "reddit", "facebook", "telegram", "email"];

const CreateTrackPage: NextPage = () => {
  const router = useRouter();

  const [form, setForm] = useState<CreateTrack>({
    title: "",
    description: "",
    file_url: "",
    all_receiver: "",
  });

  const [selectedSources, setSelectedSources] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const toggleSource = (source: string) => {
    setSelectedSources((prev) =>
      prev.includes(source) ? prev.filter((s) => s !== source) : [...prev, source]
    );
  };

  const toggleSelectAll = () => {
    if (selectedSources.length === AVAILABLE_SOURCES.length) {
      setSelectedSources([]);
    } else {
      setSelectedSources([...AVAILABLE_SOURCES]);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    const dataToSubmit = {
      ...form,
      all_source: selectedSources.join(","),
    };

    try {
      const response = await api.post("track_user/create_track_users", dataToSubmit);

      if (response.status === 201 || response.status === 200) {
        console.log("Track created:", response.data);
        router.push("/dashboard");
      }
    } catch (err: any) {
      console.error("Error:", err);
      setError(err.response?.data?.error || "Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4">Create Track</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          name="title"
          type="text"
          placeholder="Title"
          value={form.title}
          onChange={handleChange}
          required
          className="w-full border p-2 rounded"
        />

        <textarea
          name="description"
          placeholder="Description"
          value={form.description}
          onChange={handleChange}
          className="w-full border p-2 rounded"
          required
        />

        <input
          name="file_url"
          type="url"
          placeholder="File URL"
          value={form.file_url}
          onChange={handleChange}
          className="w-full border p-2 rounded"
        />

        <div>
          <label className="font-medium">All Sources</label>
          <div className="flex items-center mt-2">
            <label>
              <input
                type="checkbox"
                checked={selectedSources.length === AVAILABLE_SOURCES.length}
                onChange={toggleSelectAll}
              />{" "}
              Select All
            </label>

            {AVAILABLE_SOURCES.map((source) => (
              <label key={source} >
                <input
                  type="checkbox"
                  checked={selectedSources.includes(source)}
                  onChange={() => toggleSource(source)}
                />{" "}
                {source}
              </label>
            ))}
          </div>
        </div>
            <Image 
              src="https://cdn.simpleicons.org/whatsapp"
              alt="test"
              width={20}
              height={20}
            />
        <input
          name="all_receiver"
          type="text"
          placeholder="All receiver"
          value={form.all_receiver}
          onChange={handleChange}
          className="w-full border p-2 rounded"
        />

        
        {error && <div className="text-red-500">{error}</div>}

        <button
          type="submit"
          disabled={loading}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          {loading ? "Creating..." : "Create Track"}
        </button>
      </form>
      
    </div>
    

    
  );
};

export default CreateTrackPage;
