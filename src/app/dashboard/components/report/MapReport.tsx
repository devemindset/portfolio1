"use client"
import { useAuthState } from '@/context/AuthContext';
import { useState, type FC } from 'react';
import ReportCard from './ReportCard';



const MapReport: FC = () => {
  const { userData } = useAuthState();
  const [selectedProjectId, setSelectedProjectId] = useState("");

  

  return (
    <section className="mt-10">
      <h3 className="text-center my-5 font-bold text-2xl">Report</h3>
      <div>
        <select
          value={selectedProjectId}
          onChange={(e) => setSelectedProjectId(e.target.value)}
          className="bg-[var(--btn-bg)] text-white px-4 py-2 rounded-md border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 mr-5"
        >
          <option value="">
            {userData?.projects && userData?.projects[0]?.name}
          </option>
          {userData?.projects?.map((project, index) => (
            <option key={index} value={project.id.toString()}>
              {project.name}
            </option>
          ))}
        </select>

        <div className="flex gap-6 overflow-x-scroll p-5">
          {userData?.projects && userData?.projects[Number(selectedProjectId)]?.reports?.map((report, index) => (
            <div key={index}>
              <ReportCard report={report} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MapReport;