import { useState, type FC } from "react";
import { Project } from "@/types";
import api from "@/lib/api";
import { X } from "lucide-react";
import { useAuthState } from "@/context/AuthContext";
import DatePicker from "react-datepicker";
import { format } from "date-fns";
import Link from "next/link";
import { useTimeEntry } from "@/hook/useTimeEntry";

interface SessionFormProps {
  onClose: () => void;
  project: Project | null | undefined;
}

const SessionForm: FC<SessionFormProps> = ({ onClose, project }) => {
  const { getUserInfo,userData } = useAuthState();
  const [date, setDate] = useState<Date | null>(null);
  const [hours, setHours] = useState("");
  const [note, setNote] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");
  const { refreshSessions } = useTimeEntry();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess("");

    if (!project || !date) {
      setError("Please select a date and project.");
      setLoading(false);
      return;
    }
    if(userData.subscription?.method === "credits" && userData.subscription?.credits === 0){
      setError("Insufficient credit. Please upgrade!")
      return;
    }
    try {
      const response = await api.post("/time_tracking/create_project_time_tracking/", {
        project_id: project.id,
        date: format(date, "yyyy-MM-dd"),
        hours,
        note,
      });

      if (response.status === 201) {
        setSuccess("Session created successfully!");
        setDate(null);
        setHours("");
        setNote("");
        getUserInfo();
        refreshSessions();
      }
    } catch {
      setError("An error occurred while creating the session.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-[var(--btn-bg)]/70 to-slate-900/70 backdrop-blur-sm flex justify-center items-center px-4 w-screen h-auto z-[997]">
      <div className="relative bg-white w-full max-w-md mx-auto rounded-xl shadow-2xl p-8 animate-fade-in overflow-y-auto">
        <button
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 cursor-pointer"
          onClick={onClose}
        >
          <X className="w-6 h-6" />
        </button>

        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold text-slate-800">Add a Work Session</h2>
          <p className="text-sm text-gray-500 italic mt-1">
            Project: <span className="font-semibold text-slate-700">{project?.name}</span>
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <label className="block text-sm text-slate-700 font-medium">Date</label>
          <DatePicker
            selected={date}
            onChange={(date) => setDate(date)}
            dateFormat="yyyy-MM-dd"
            placeholderText="Select a date"
            className="w-full p-3 rounded-md border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[var(--btn-bg)] bg-slate-50"
            required
          />

          <label className="block text-sm text-slate-700 font-medium">Hours</label>
          <input
            type="number"
            step="0.01"
            placeholder="e.g. 2.5"
            className="w-full p-3 rounded-md border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[var(--btn-bg)] bg-slate-50"
            value={hours}
            onChange={(e) => setHours(e.target.value)}
            required
          />

          <label className="block text-sm text-slate-700 font-medium">Note (optional)</label>
          <textarea
            placeholder="Describe your session..."
            className="w-full p-3 rounded-md border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[var(--btn-bg)] bg-slate-50 resize-y max-h-40"
            rows={3}
            value={note}
            onChange={(e) => setNote(e.target.value)}
          />

          <button
            type="submit"
            className="w-full bg-[var(--btn-bg)] text-white py-3 rounded-md hover:bg-[var(--btn-hover)] transition cursor-pointer"
            disabled={loading}
          >
            {loading ? "Processing..." : "Create Session"}
          </button>

          {}
          {error === "Insufficient credit. Please upgrade!" ? (
            <>
            <p className="text-red-500 text-sm text-center">{error}</p>
            <Link href="/pricing" className="text-sm text-center text-blue-600 underline">Upgrade plan</Link>
            </>
          ) : error && <p className="text-red-500 text-sm text-center">{error}</p>}
          {success && <p className="text-green-600 text-sm text-center">{success}</p>}
        </form>
      </div>
    </div>
  );
};

export default SessionForm;
