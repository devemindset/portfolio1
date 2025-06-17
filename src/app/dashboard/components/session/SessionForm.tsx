"use client";

import { useState, type FC } from "react";
import {  Project } from "@/types";
import api from "@/lib/api";

import { X } from "lucide-react";
import { useAuthState } from "@/context/AuthContext";

interface SessionFormProps {
  onClose: () => void;
  project : Project | null | undefined;
}

const SessionForm: FC<SessionFormProps> = ({ onClose,project }) => {
  const { getUserInfo } = useAuthState();
  const [date, setDate] = useState("");
  const [hours, setHours] = useState("");
  const [note, setNote] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess("");

    if (!project) {
      setError("Please select a project.");
      setLoading(false);
      return;
    }

    try {
      const response = await api.post("/time_tracking/create_project_time_tracking/", {
        project_id: project.id,
        date,
        hours,
        note,
      });

      if (response.status === 201) {
        setSuccess("Session created successfully!");
        setDate("");
        setHours("");
        setNote("");
        getUserInfo()
      }
    } catch {
      setError("An error occurred while creating the session.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 backdrop-blur-sm flex justify-center items-center z-50">
      <div className="relative bg-white w-full max-w-md mx-auto rounded-xl p-6 shadow-lg">
        <button
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-800"
          onClick={onClose}
        >
          <X className="w-5 h-5" />
        </button>

        <h2 className="text-xl font-bold mb-4 text-center">Add a Session</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="text-center font-bold italic">
           <p>{project?.name}</p>
          </div>

          <input
            type="date"
            className="w-full p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
          />

          <input
            type="number"
            step="0.01"
            placeholder="Hours (e.g. 2.5)"
            className="w-full p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={hours}
            onChange={(e) => setHours(e.target.value)}
            required
          />

          <textarea
            placeholder="Note (optional)"
            className="w-full p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-y max-h-40"
            rows={3}
            value={note}
            onChange={(e) => setNote(e.target.value)}
          />

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 transition"
            disabled={loading}
          >
            {loading ? "Processing..." : "Create Session"}
          </button>

          {error && <p className="text-red-500 text-sm text-center">{error}</p>}
          {success && <p className="text-green-600 text-sm text-center">{success}</p>}
        </form>
      </div>
    </div>
  );
};

export default SessionForm;
