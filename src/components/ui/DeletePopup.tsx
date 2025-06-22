"use client"
import { useAuthState } from '@/context/AuthContext';
import api from '@/lib/api';
import { signOut } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { Dispatch, SetStateAction, useState, type FC } from 'react';

interface DeletePopupProps {
    path : string | undefined;
    message : string;
    deletePop : Dispatch<SetStateAction<boolean>>;
    source : string;
}

const DeletePopup: FC<DeletePopupProps> = ({path,message,deletePop,source}) => {
    const {getUserInfo,setIsAuthAuthenticated,isAuthAuthenticated,setIsAuthenticated} = useAuthState();
    

    const router = useRouter();

    
    const [loading,setLoading] = useState(false);
    
   
    const handleDelete = async () => {
        setLoading(true);
        try{
            const res = await api.delete(`${path}`)
          
            if(res.status === 204 && source === "user"){
                document.cookie = "auth_status=; path=/; max-age=0";
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
                setLoading(false)
               
            }else if(res.status === 204){
                if(source === "project"){
                    getUserInfo()
                }
            }
            
            deletePop(false)

        }catch{
            console.log("error")
        }
    }
        return (
            <>
            <div className="fixed inset-0 bg-gradient-to-br from-red-600/70 to-slate-900/70 backdrop-blur-sm flex justify-center items-center px-4 w-screen h-auto z-[997]">
      <div className="relative bg-white w-full max-w-md mx-auto rounded-xl shadow-2xl p-8 animate-fade-in overflow-y-auto space-y-5">

           
            <div className='text-center font-bold p'>{message}</div>

            <div className='flex '>
                <button onClick={() => deletePop(false)}  className='mr-5 cursor-pointer hover:text-[var(--text-hover)]'>
                cancel
            </button>
          <button
            type="submit"
            className="w-full bg-[var(--btn-bg)] text-white py-3 rounded-md hover:bg-red-500 transition cursor-pointer"
            onClick={handleDelete}
          >
          {loading ? "Processing..." : " Delete"}
          </button>
            </div>
        

          
         
      
      </div>
    </div>
   
    </>
        );
}
export default DeletePopup;