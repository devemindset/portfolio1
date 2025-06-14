"use client";
import { useState, type FC } from "react";
import { X } from "lucide-react";
import { Project, TimeEntry } from "@/types";
import api from "@/lib/api";

interface ReportPopupProps {
  project: Project;
  onClose: () => void;
}

const ReportPopup: FC<ReportPopupProps> = ({ project, onClose }) => {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [entries, setEntries] = useState<TimeEntry[]>([]);
  const [totalHours, setTotalHours] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const generateReport = async () => {
    if (!startDate || !endDate) {
      setError("Please select both start and end dates.");
      return;
    }

    setLoading(true);
    setError("");

    try {
      const res = await api.get(`/projects/project_report/${project.id}/`, {
        params: { start_date: startDate, end_date: endDate },
      });

      setEntries(res.data.entries);
      const total = res.data.entries.reduce((sum: number, e: TimeEntry) => sum + parseFloat(e.hours), 0);
      setTotalHours(total);
    } catch {
      setError("Failed to fetch report.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 backdrop-blur-sm flex justify-center items-center z-50">
      <div className="relative bg-white w-full max-w-lg mx-auto rounded-xl p-6 shadow-lg">
        <button onClick={onClose} className="absolute top-3 right-3 text-gray-500 hover:text-gray-800">
          <X className="w-5 h-5" />
        </button>

        <h2 className="text-xl font-bold mb-4 text-center">Time Report: {project.name}</h2>

        <div className="flex gap-4 mb-4">
          <input type="date" value={startDate} onChange={(e) => setStartDate(e.target.value)} className="flex-1 p-2 border rounded" />
          <input type="date" value={endDate} onChange={(e) => setEndDate(e.target.value)} className="flex-1 p-2 border rounded" />
        </div>

        <button
          onClick={generateReport}
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
        >
          {loading ? "Generating..." : "Generate Report"}
        </button>

        {error && <p className="text-red-500 text-sm mt-2 text-center">{error}</p>}

        {entries.length > 0 && (
          <div className="mt-6 max-h-60 overflow-y-auto border-t pt-4">
            {entries.map((entry, index) => (
              <div key={index} className="border-b py-2 text-sm">
                <p className="font-semibold">{entry.date}</p>
                <p>{entry.hours}h — {entry.note}</p>
              </div>
            ))}
            <p className="mt-4 text-right font-bold">Total: {totalHours}h</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ReportPopup;
