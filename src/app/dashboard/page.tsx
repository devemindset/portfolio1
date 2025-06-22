"use client";


import { NextPage } from 'next';

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
import BackgroundLoader from '@/components/BackgroundLoader';
import { useTimeEntry } from '@/hook/useTimeEntry';
import { useReports } from '@/hook/useReport';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import InfoPopup from '@/components/ui/InfoPopup';







const Page: NextPage = () => {

  const {userData,setPopBranding,popbranding} = useAuthState();
  
  const {sessions} = useTimeEntry()
  const {reports} = useReports()

  // -----------popup info------------ 
  const [showInfoPop,setShowInfoPop] = useState(false);
  const [close,setClose] = useState(false)
    

    const showPopHandle = () =>{
        setShowInfoPop(true)
    }
    const closePop = () =>{
        setShowInfoPop(false)
        setClose(true)
        setPopBranding(true)
        localStorage.setItem("pop_branding",JSON.stringify(true))
    }
    useEffect(() => {
        if(!showInfoPop && !close && userData.full_name && userData.branding_name === null ){
            const timeout = setTimeout(() => {
                
            showPopHandle()
        },5000)
        return () => clearTimeout(timeout)
    }
        
    },[showInfoPop,userData,close])
  // ----------------- end ---------------------


  const router = useRouter()

  if(!userData.projects) return <BackgroundLoader />

  
    return (
      <>
      <Head>
        <title>Dashboard | TimeTallyApp</title>
      </Head>
      <MainHeader />
      <Sidebar />
      <main className='pt-25 min-h-screen px-5 lg:px-20 w-full  '>

      {/* ----Choice----- */}  
      <section className='hidden lg:flex'>
        <LinkButton name='+ Add new client' path='clients/new' />
        {userData.clients?.length !== 0 && <LinkButton name='+ Add new project' path='projects/new' />}
        {userData.projects?.length !== 0 && <AddSession />}
        {sessions?.length !== 0 &&  <CreateReport />}
        
      </section>
      
      {/* ----------------for new user--------------- */}
        {userData.clients?.length === 0 && (
          <section className="text-center mt-20">
          <h3 className="font-semibold text-2xl italic  ">Add your first client</h3>
          <div
            onClick={() => router.push("/clients/new")}
            className="bg-[var(--btn-bg)] mt-10 text-white px-4 py-2 rounded hover:bg-[var(--btn-hover)] whitespace-nowrap cursor-pointer"
          >
            + Add new client 
          </div>
        </section>
        )}

        {userData.clients?.length !== 0 && userData.projects?.length === 0 && (
          <section className="text-center mt-20">
          <h3 className="font-semibold text-2xl italic  ">Create your first project</h3>
          <div
            onClick={() => router.push("/projects/new")}
            className="bg-[var(--btn-bg)] mt-10 text-white px-4 py-2 rounded hover:bg-[var(--btn-hover)] whitespace-nowrap cursor-pointer"
          >
            + Add new project 
          </div>
        </section>
        )}
       
        
      {/* -----------my project section----------- */}
       {userData?.projects.length !== 0 && <ProjectMap />}

        {/* ------------my session------ */}
        {userData?.projects.length !== 0 && sessions?.length !== 0 && <SessionMap />}

        {/* clients section  */}
        {userData?.projects.length !== 0 && userData.clients?.length !== 0 && <ClientMap />}

        {/* report section  */}
        {userData?.projects.length !== 0 && reports?.length !== 0 && <MapReport />}

        
        {showInfoPop && !popbranding && <InfoPopup info="Complete your branding information" value="Complete" cancel="Later" link="account/edit_branding" closePop={closePop} />} 

      </main>
      {/* <BackgroundPopup title='Message' description='Please create a session first!' cancel='Ok' action='' path='' /> */}
      
     
      
      
      
      </>
    );
}
export default Page;