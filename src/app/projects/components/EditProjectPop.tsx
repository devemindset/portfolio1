import { Project } from '@/types';
import type { FC } from 'react';

import { X } from 'lucide-react';
import EditProjectForm from './EditProjectForm';

interface EditProjectPopProps {
    project : Project |undefined;
     onClose: () => void;
}

const EditProjectPop: FC<EditProjectPopProps> = ({project,onClose}) => {


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
          <h3 className="text-3xl font-bold text-center">Edit Project</h3>
          <p className="text-sm text-gray-500 italic mt-1">
            Project: <span className="font-semibold text-slate-700">{project?.name}</span>
          </p>
        </div>
        
        <EditProjectForm project={project} />

        
      </div>
    </div>
        );
}
export default EditProjectPop;