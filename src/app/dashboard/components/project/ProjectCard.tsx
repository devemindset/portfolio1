"use client";

import { useState, type FC } from "react";
import { Project, TimeEntry } from "@/types";
import SessionForm from "../session/SessionForm";
import { PlusCircle, FileText } from "lucide-react";
import ProjectSessionsPopup from "@/app/projects/components/ProjectSessionPopup";


interface ProjectCardProps {
  project: Project & {
    time_entries: TimeEntry[];
  };
}

const ProjectCard: FC<ProjectCardProps> = ({ project }) => {
  const [showSessionForm, setShowSessionForm] = useState(false);
  const [showReportPop,setShowReportPop] = useState(false);

  const totalHours = (project.time_entries as TimeEntry[]).reduce(
  (acc, entry) => acc + parseFloat(entry.hours),
  0
);


  return (
    <section className="relative w-72 text-center">
      <div className="bg-white shadow-lg rounded-xl p-6 border border-gray-200 flex flex-col justify-between  space-y-4 w-72 text-center">
        {/* Header */}
        <div>
          <p className="text-lg font-semibold text-gray-800">{project.name}</p>
          <p className="text-sm text-gray-500 mt-1">Client: {project.client.name}</p>
          <p className="text-sm text-gray-600 mt-1">Total hours: {totalHours}h</p>
        </div>

        {/* Actions */}
        <div className="flex justify-end gap-3 mt-4">
          <button
            onClick={() => setShowSessionForm(true)}
            className="flex items-center gap-1 px-4 py-2 bg-[var(--btn-bg)] text-white text-sm rounded-md hover:bg-[var(--btn-hover)] transition cursor-pointer"
          >
            <PlusCircle className="w-4 h-4" />
            Add a session
          </button>
          <button
            onClick={() => setShowReportPop(true)}
            className="flex items-center gap-1 px-4 py-2 border border-gray-300 text-gray-700 text-sm rounded-md hover:bg-gray-100 transition"
          >
            <FileText className="w-4 h-4" />
            See all session 
          </button>
        </div>
      </div>

      {showSessionForm && (
        <SessionForm onClose={() => setShowSessionForm(false)} project={project} />
      )}

      {showReportPop && (
        <ProjectSessionsPopup onClose={() => setShowReportPop(false)} project={project} />
      )}
    </section>
  );
};

export default ProjectCard;
