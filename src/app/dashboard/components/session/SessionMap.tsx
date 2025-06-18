'use client'

import { useAuthState } from '@/context/AuthContext';
import { useState, type FC } from 'react';
import SessionCard from './SessionCard';
import { useTimeEntry } from '@/hook/useTimeEntry';

const SessionMap: FC = () => {
  const { userData } = useAuthState();
  const [selectedProjectId, setSelectedProjectId] = useState("");
  const { sessions } = useTimeEntry();

  const selectedProject = userData?.projects?.find(
    (p) => p.id.toString() === selectedProjectId
  );

  return (
    <div className='mt-10'>
      <h3 className='text-center my-5 font-bold text-2xl'>Sessions</h3>
      <div>
        <select
          value={selectedProjectId}
          onChange={(e) => {
            const id = e.target.value;
            setSelectedProjectId(id);
          }}
          className="bg-[var(--btn-bg)] text-white px-4 py-2 rounded-md border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 mr-5"
        >
          <option value="">
            {sessions && userData?.projects?.[0]?.name || "Select a project"}
          </option>
          {userData?.projects?.map((project) => (
            <option key={project.id} value={project.id.toString()}>
              {project.name}
            </option>
          ))}
        </select>

        <div className="flex gap-6 overflow-x-scroll p-5">
          {selectedProject?.time_entries?.map((session, index) => (
            <div key={index}>
              <SessionCard
                sessionDate={session.date}
                sessionHour={session.hours}
                sessionNote={session.note}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SessionMap;
