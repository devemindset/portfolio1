"use client";

import { useRouter } from "next/navigation";
import { FC } from "react";
import { Project, TimeEntry } from "@/types";
import { X } from "lucide-react";

interface ReportPopupProps {
  onClose: () => void;
  project: Project & { time_entries: TimeEntry[] };
}

const ReportPopup: FC<ReportPopupProps> = ({ onClose, project }) => {
  const router = useRouter();

  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 backdrop-blur-sm flex justify-center items-center z-50">
      <div className="bg-white w-full max-w-lg rounded-xl p-6 relative space-y-6 shadow-lg">
        <button className="absolute top-3 right-3" onClick={onClose}>
          <X className="w-5 h-5 text-gray-600" />
        </button>

        <h2 className="text-xl font-semibold">Sessions for {project.name}</h2>

        <ul className="space-y-2 max-h-60 overflow-y-auto">
          {project.time_entries.map((entry) => (
            <li key={entry.id} className="border p-3 rounded-md text-sm text-gray-800">
              <p><strong>Date:</strong> {entry.date}</p>
              <p><strong>Hours:</strong> {entry.hours}</p>
              <p><strong>Note:</strong> {entry.note || "No note"}</p>
            </li>
          ))}
        </ul>

        <div className="flex flex-wrap justify-between gap-2">
          <button
            onClick={() => router.push(`/reports/new?project_id=${project.id}`)}
            className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
          >
            Create Report
          </button>

          <button className="border border-gray-300 px-4 py-2 rounded-md hover:bg-gray-100">
            Generate PDF
          </button>

          <button className="border border-gray-300 px-4 py-2 rounded-md hover:bg-gray-100">
            Send via Email
          </button>

          <button
            onClick={() => router.push("/dashboard")}
            className="text-sm text-blue-600 underline mt-2"
          >
            Go to dashboard
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReportPopup;
