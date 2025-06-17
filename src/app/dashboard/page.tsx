"use client";


import { NextPage } from 'next';
import ProjectCard from './components/project/ProjectCard';
import { useAuthState } from '@/context/AuthContext';
import Head from 'next/head';
import MainHeader from './components/MainHeader';
import Sidebar from './components/Sidebar';
import LinkButton from '@/components/LinkButton';
import AddSession from './components/session/AddSession';
import CreateReport from './components/CreateReport';
import ProjectMap from './components/project/ProjectMap';
import SessionMap from './components/session/SessionMap';
import ClientMap from './components/client/ClientMap';
import MapReport from './components/report/MapReport';




const Page: NextPage = () => {

  const {userData} = useAuthState();
  console.log(userData)
    return (
      <>
      <Head>
        <title>Dashboard | TimeTallyApp</title>
      </Head>
      <MainHeader />
      {/* <Sidebar /> */}
      <main className='mt-25 ml-25'>

      {/* ----Choice----- */}  
      <section className='flex'>
        <LinkButton name='+ Add new client' path='clients/new' />
        <LinkButton name='+ Add new project' path='projects/new' />
        <AddSession />
        <CreateReport />
        
      </section>
      {/* -----------my project section----------- */}
        <ProjectMap />

        {/* ------------my session------ */}
        <SessionMap />

        {/* clients section  */}
        <ClientMap />

        {/* report section  */}
        <MapReport />
      </main>
      
      
      
      
      
      </>
    );
}
export default Page;