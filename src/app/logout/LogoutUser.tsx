"use client"

import BackgroundLoader from '@/components/BackgroundLoader';
import { useAuthState } from '@/context/AuthContext';
import { useRouter } from 'next/navigation';
import { useEffect,  type FC } from 'react';
import { signOut,  } from "next-auth/react";
import toast from 'react-hot-toast';
import api from '@/lib/api';



const LogoutUser: FC = () => {
    const {setIsAuthenticated,isAuthAuthenticated,setIsAuthAuthenticated,loadingBackground,
        setLoadingBackground,} = useAuthState();
    
    const router = useRouter()

       const logout = async () => {
              setLoadingBackground(true)
              try {
      
          // Déconnexion Django (session, csrftoken)
         
            const response = await api.post("/user/logout/");

            if(response.status === 200){

              // Supprime l'état local
              localStorage.removeItem("isAuthenticated")
              setIsAuthenticated(false);
          
              // Déconnexion NextAuth (Google)
              if(isAuthAuthenticated === true){
                localStorage.removeItem("isGoogleAuthenticated"); // Reset Google authentication state
              setIsAuthAuthenticated(false);
                await signOut({ callbackUrl: "/login" });
              }


              
              router.push("/login")
               toast.success("Successfully logged out")
               setLoadingBackground(false)
            }
            

      
  }catch(error){
      console.log("Error during logout", error);
      toast.error("Logout error");
      setLoadingBackground(false)
      throw error; // Throw error for better error handling
  }finally{
    setLoadingBackground(false)
  }
  
  

  
  
}
        useEffect(() => {  
        logout()
    },[])
        return (
          <>
            {loadingBackground && <BackgroundLoader />}
            </>
        );
}

export default LogoutUser;