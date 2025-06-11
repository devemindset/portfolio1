"use client";
import Link from 'next/link';
import type { FC } from 'react';
import ProjectCard from './components/ProjectCard';

interface pageProps {}

const page: FC<pageProps> = ({}) => {
    return (
      <>
      <section className='flex flex-col text-blue-600'>
        <Link href="/clients/new">1. add new client</Link>
        <Link href="/projects/new">2. add new project(lié à un client)</Link>
      </section>
      {/* -----------my project section----------- */}
      <div>
          <h3>My projects</h3>
          <ProjectCard />
      </div>
      
      
      
      
      
      </>
    );
}
export default page;