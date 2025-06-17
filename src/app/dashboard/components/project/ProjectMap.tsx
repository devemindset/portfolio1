"use client"
import { useAuthState } from '@/context/AuthContext';
import type { FC } from 'react';
import ProjectCard from './ProjectCard';



const ProjectMap: FC = ({}) => {
        const {userData} = useAuthState()
        return (
            <div className='mt-10'>
          <h3 className='text-center my-5 font-bold text-2xl'>Projects</h3>
          <div className=" flex gap-6 overflow-x-scroll p-5">
            {userData.projects?.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
      </div>
        );
}
export default ProjectMap;