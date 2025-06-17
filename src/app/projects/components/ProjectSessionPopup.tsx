// components/ProjectSessionsPopup.tsx
"use client";

import { FC } from "react";
import { TimeEntry, Project } from "@/types";
import { X } from "lucide-react";
import { useRouter } from "next/navigation";

interface Props {
  onClose: () => void;
  project: Project & { time_entries: TimeEntry[] };
}

const ProjectSessionsPopup: FC<Props> = ({ onClose, project }) => {
  const router = useRouter();

  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 backdrop-blur-sm flex justify-center items-center z-50">
      <div className="relative bg-white w-full max-w-2xl mx-auto rounded-xl p-6 shadow-lg">
        <button
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-800"
          onClick={onClose}
        >
          <X className="w-5 h-5" />
        </button>

        <h2 className="text-xl font-bold mb-4 text-center">Sessions for {project.name}</h2>

        <div className="max-h-80 overflow-y-auto divide-y">
          {project.time_entries.map((entry) => (
            <div key={entry.id} className="py-2">
              <p className="text-sm font-medium">Date: {entry.date}</p>
              <p className="text-sm">Hours: {entry.hours}h</p>
              {entry.note && <p className="text-sm italic text-gray-600">Note: {entry.note}</p>}
            </div>
          ))}
        </div>

        <div className="mt-6 text-center">
          <button
            onClick={() => router.push(`/reports/new?project_id=${project.id}`)}
            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
          >
            Create Report
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectSessionsPopup;
