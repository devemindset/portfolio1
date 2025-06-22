"use client"
import { useAuthState } from '@/context/AuthContext';
import type { FC } from 'react';
import ProjectCard from './ProjectCard';



const ProjectMap: FC = ({}) => {
        const {userData} = useAuthState()
        return (
            <div className='mt-10'>
          <h3 className='text-center my-5 font-bold text-2xl b border-b border-gray-300 bg-[var(--title-bg)] text-white py-1 rounded-b-2xl'>Projects</h3>
          
          <div className="flex  gap-6 overflow-x-auto scrollbar-thin scrollbar-thumb-blue-500 scrollbar-track-gray-200 p-5 scrollbar-hide">
            {userData.projects?.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
      </div>
        );
}
export default ProjectMap;