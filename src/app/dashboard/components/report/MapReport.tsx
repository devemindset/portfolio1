'use client'

import { useAuthState } from '@/context/AuthContext';
import { useState, type FC } from 'react';
import ReportCard from './ReportCard';

const MapReport: FC = () => {
  const { userData } = useAuthState();
  const [selectedProjectId, setSelectedProjectId] = useState("");

  // ✅ Trouver le projet sélectionné
  const selectedProject = userData?.projects?.find(
    (p) => p.id.toString() === selectedProjectId
  );

  return (
    <section className="mt-10">
      <h3 className="text-center my-5 font-bold text-2xl b border-b border-gray-300 bg-[var(--title-bg)] text-white py-1 rounded-b-2xl">Reports</h3>
      <div>
        <select
          value={selectedProjectId}
          onChange={(e) => setSelectedProjectId(e.target.value)}
          className="bg-[var(--btn-bg)] text-white px-4 py-2 rounded-md border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 mr-5"
        >
          <option value="">
            Select a project
          </option>
          {userData?.projects?.map((project) => (
            <option key={project.id} value={project.id.toString()}>
              {project.name}
            </option>
          ))}
        </select>

        <div className="flex gap-6 overflow-x-auto p-5 ">
          {selectedProject?.reports?.length ? (
            selectedProject.reports.map((report, index) => (
              <div key={index}>
                <ReportCard report={report} />
              </div>
            ))
          ) : (
            <p className="text-gray-500 italic">{selectedProject?.name ? `No reports available for ${selectedProject?.name}` : "Select a project"}</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default MapReport;
