"use client";
import Link from 'next/link';

import { NextPage } from 'next';
import ProjectCard from './components/ProjectCard';
import { useAuthState } from '@/context/AuthContext';



const Page: NextPage = () => {

  const {userData} = useAuthState();
 
    return (
      <>
      <section className='flex flex-col text-blue-600'>
        <Link href="/clients/new">1. add new client</Link>
        <Link href="/projects/new">2. add new project(lié à un client)</Link>
      </section>
      {/* -----------my project section----------- */}
      <div>
          <h3>My projects</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {userData.projects?.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
      </div>
      
      
      
      
      
      </>
    );
}
export default Page;