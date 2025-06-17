"use client"
import { useAuthState } from '@/context/AuthContext';
import { useState, type FC } from 'react';
import SessionForm from './SessionForm';
import { Project } from '@/types';

const AddSession: FC = () => {
  const { userData } = useAuthState();
  const [showSessionForm, setShowSessionForm] = useState(false);
  const [project, setProject] = useState<Project>();
  const [selectedProjectId, setSelectedProjectId] = useState("");

  const handleSession = (projectId: string) => {
    const selectedProject = userData?.projects?.find(p => p.id.toString() === projectId);
    if (selectedProject) {
      setProject(selectedProject);
      setShowSessionForm(true);
      
    }
  };

  const handleClose = () => {
    setShowSessionForm(false);
    setSelectedProjectId(""); // ✅ Réinitialiser la sélection
    setProject(undefined);    // ✅ Réinitialiser le projet
  };

  return (
    <>
      <select
        value={selectedProjectId}
        onChange={(e) => {
          const id = e.target.value;
          setSelectedProjectId(id);
          handleSession(id);
        }}
        className="bg-[var(--btn-bg)] text-white px-4 py-2 rounded-md border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 mr-5"
      >
        <option value="">+ Add new session</option>
        {userData?.projects?.map((project, index) => (
          <option key={index} value={project.id.toString()}>
            {project.name}
          </option>
        ))}
      </select>

      {showSessionForm && project && (
        <SessionForm onClose={handleClose} project={project} />
      )}
    </>
  );
};

export default AddSession;
