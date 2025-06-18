"use client";
import api, { userAction } from "@/lib/api";
import {LimitBrowserPostData, UserData} from "@/types";
import { signIn, signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

import { createContext, Dispatch, ReactNode,  SetStateAction,  useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";

interface AuthContextProps{
    userData : UserData;
    setUserData : Dispatch<SetStateAction<UserData>>;
    siteLogin : (email: string,password: string) => Promise<boolean>;
    socialLogin : (auth: string,redirect : string) => Promise<void>;
    logout : () => Promise<void>;
    getUserInfo : () => Promise<void>;
    userAction : (action : string, object : string) => Promise<void>;
    register : (email: string, username:string, password:string) => Promise<string | boolean | undefined>;
    
    redirectPath : string;
    loginRegisterForm : boolean;
    setLoginRegisterForm : Dispatch<SetStateAction<boolean>>;
    btnstatus : string;
    setBtnStatus : Dispatch<SetStateAction<string>>;
    logStatus : string;
    setLogStatus : Dispatch<SetStateAction<string>>;
    browserLimitValue : LimitBrowserPostData | null; 
    setBrowserLimitValue : Dispatch<SetStateAction<LimitBrowserPostData | null>>;
    isAuthenticated: boolean;
    loadingBtn : boolean;
    setLoadingBtn : Dispatch<SetStateAction<boolean>>;
    loadingBackground : boolean;
    setLoadingBackground : Dispatch<SetStateAction<boolean>>;
    backgroundPopup : boolean;
    setBackgroundPopup : Dispatch<SetStateAction<boolean>>;
    


   
}



const AuthContext = createContext<AuthContextProps | undefined>(undefined);
export default AuthContext;

export const AuthProvider = ({ children } : { children : ReactNode}) => {
    const [isInitialized,setIsInitialized] = useState(false);
    const [userData,setUserData] = useState<UserData>({} as UserData);
   
    const [logStatus,setLogStatus] = useState<string>("");
    const [btnstatus,setBtnStatus] = useState<string>("");
    const [loadingBtn,setLoadingBtn] = useState<boolean>(false);
    const [loadingBackground,setLoadingBackground] = useState<boolean>(false);
    const [redirectPath, setRedirectPath] = useState<string>("");
    
    const [loginRegisterForm,setLoginRegisterForm] = useState(false);
    const [isAuthenticated,setIsAuthenticated] = useState<boolean>(false);
    const [isAuthAuthenticated,setIsAuthAuthenticated] =useState<boolean>(false);
    const [browserLimitValue, setBrowserLimitValue] = useState<LimitBrowserPostData | null>(null);
    const [backgroundPopup,setBackgroundPopup] = useState(false);
    const todayDateWithoutTime = new Date().toISOString().split("T")[0];
    


    const { data: session, status } = useSession();

    

    const router = useRouter();

    // data initialization 
    useEffect(() => {
    if (typeof window !== "undefined" && !isInitialized) {
      const redirectPathStorage = localStorage.getItem("redirect_user");
      const isAuthenticated = localStorage.getItem("isGoogleAuthenticated");
      const userAuthenticated = localStorage.getItem("isAuthenticated");
      const storedData = localStorage.getItem("limite_actions");
      

      // Initialize browserLimitValue
      if (storedData) {
        setBrowserLimitValue(JSON.parse(storedData));
      } else {
        const defaultValue = { date: todayDateWithoutTime, contact: 0, newsletterSub: 0};
        setBrowserLimitValue(defaultValue);
        localStorage.setItem("limite_actions", JSON.stringify(defaultValue));
      }
     
      // Initialize redirectPath
      if (redirectPathStorage) {
        setRedirectPath(JSON.parse(redirectPathStorage));
      } else {
        setRedirectPath("");
        localStorage.setItem("redirect_user", JSON.stringify(""));
      }

      // Initialize isAuthAuthenticated
      if (isAuthenticated) {
        setIsAuthAuthenticated(JSON.parse(isAuthenticated)); // Convert string to boolean
      } else {
        setIsAuthAuthenticated(false);
        localStorage.setItem("isGoogleAuthenticated", JSON.stringify(false)); // Set default value
      }
      // initialize user authentication
      if(userAuthenticated){
        setIsAuthenticated(JSON.parse(userAuthenticated))
      }else{
        setIsAuthenticated(false)
        localStorage.setItem("isAuthenticated",JSON.stringify(false))
      }
      

      setIsInitialized(true); // Mark as initialized
    }
    
  }, []);

  //Update date if needed (after state is set)
useEffect(() => {
    if (!isInitialized || browserLimitValue === null) return;
  
    if (browserLimitValue.date !== todayDateWithoutTime) {
      const updatedValue = {
        ...browserLimitValue, 
        date: todayDateWithoutTime,
        contact: 0, // Reset for a new day
        newsletterSub : 0, // Reset for a new day
        
      };
      setBrowserLimitValue(updatedValue);
      localStorage.setItem("limite_actions", JSON.stringify(updatedValue));
    }
  }, [browserLimitValue,isInitialized]); // This runs once after browserLimitValue is set


useEffect(() => {
        if (session && status === "authenticated") {
          setLoadingBtn(false);
          setLoadingBackground(true);
          // Attendre 2 secondes avant de vérifier isGoogleAuthenticated
          const timeoutId = setTimeout(async () => {
            if (!isAuthAuthenticated) {
              // Si isGoogleAuthenticated est false, envoyer une requête au backend
              try {
                const response = await api.post(`${process.env.NEXT_PUBLIC_API_URL}/user/google_auth/`, {
                  email: session.user?.email,
                  username: session.user?.name,
                  social_id: session.socialId,
                  social_image : session.user?.image,
                });
      
                if (response.status === 200) {
                  localStorage.setItem("isGoogleAuthenticated", JSON.stringify(true)); // Marquer comme authentifié
                  setIsAuthAuthenticated(true);
                  router.push(`/dashboard`)
                  setBtnStatus("");
                  authenticatedAndLocalStorage()

                }
              } catch (error) {
                console.error("Error during Google authentication:", error);
              }
            } else {
              console.log("User already authenticated via Google");
            }
          }, 2000); // Attendre 2 secondes
      
          // Nettoyer le timeout si le composant est démonté
          return () => clearTimeout(timeoutId);
        }
      }, [session, isAuthAuthenticated]);

  // get user info 
  useEffect(() =>{
      if(isAuthenticated){
        getUserInfo(); // Fetch user info

      }else{
        console.log("user is not authenticated")
      }

    },[isAuthenticated])


  


// ------------function implementations---------------
// register user function
const register = async (email: string, full_name: string,password:string) => {
  
  try{

      const response = await api.post("/user/register_user/", {
          full_name,
          email,
          password,
      });
      if (response.status === 200) {

        authenticatedAndLocalStorage()
          
          setBtnStatus("");
          return true

        }

  }catch (err: unknown) {
      if (typeof err === "object" && err !== null && "response" in err) {
        const axiosError = err as {
          response?: {
            status?: number;
            data?: {
              error?: string;
              detail?: string;
              errors?: Record<string, string[]>;
            };
          };
        };

        const data = axiosError.response?.data;

        // Check for known custom error
        if (axiosError.response?.status === 409) {
          return "Email is already in use";
        }

        // ✅ Check serializer validation errors
        if (data?.errors) {
          if (data.errors.email?.[0]?.includes("already exists")) {
            return "Email is already in use";
          }
          if (data.errors.username?.[0]?.includes("already exists")) {
            return "Username is already in use";
          }

          // Optional: combine all validation errors
          const errorMessages = Object.values(data.errors).flat().join(", ");
          return errorMessages || "Validation failed.";
        }

        // Default fallback
        return data?.error || data?.detail || "Something went wrong.";
      }
          } 
      
}

// login user funtion 
const siteLogin = async (email: string,password: string) => {
  setLogStatus("Processing...");

   try{
      const response = await api.post("/user/login_user/",{ email, password 

      });
      
      if (response.status === 200) {
        authenticatedAndLocalStorage()
          
          return true
        }else{  
            
        return false;
        
      }
  }catch{
      return false
  }
}

// social login 
const socialLogin = async (auth: string, redirectPath?: string) => {
  
  setLoadingBtn(true)

  try{
      // Sign in with Google using NextAuth.js
      await signIn(auth, { callbackUrl: `${process.env.NEXT_PUBLIC_APP_URL}/dashboard` });
      console.log(redirectPath)

  }catch (error) {
      console.error("Error during login:", error);
      throw error;
  }
  
};

// logout 
const logout = async () => {

  try {
      
          // Déconnexion Django (session, csrftoken)
            const response = await api.post("/user/logout/");

            if(response.status === 200){

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


               toast.success("Successfully logged out")
               router.push("/login")
            }
            

      
  }catch(error){
      console.log("Error during logout", error);
      toast.error("Logout error");
      throw error; // Throw error for better error handling
  }
  
  

  
  
}

// user information 
const getUserInfo = async () => {
  try {
      const response = await api.get<UserData>('/user/user_info/');
      if(response.status === 200){
          setUserData(response.data)
          setLoadingBackground(false)
      }
  } catch (error) {
      console.error('Error fetching user info:', error);
      
  }
}

const authenticatedAndLocalStorage = () => {
  setIsAuthenticated(true)
  localStorage.setItem("isAuthenticated",JSON.stringify(true))
}




    return(
        <AuthContext.Provider value={{ 
        isAuthenticated,
        register,
        siteLogin,
        socialLogin,
        getUserInfo,
        userData,
        setUserData,
        redirectPath,
        // setRedirectPath,
        btnstatus,
        setBtnStatus,
        // setLogBackground,
        setLoginRegisterForm,
        logStatus,
        setLogStatus,
        loginRegisterForm,
        userAction,
        browserLimitValue, 
        setBrowserLimitValue,
        logout,
        loadingBtn,
        setLoadingBtn,
        loadingBackground,
        setLoadingBackground,
        backgroundPopup,
        setBackgroundPopup,
        
        }} >
            { children }
        </AuthContext.Provider>
    )
}

export const useAuthState = () => {
    const context = useContext(AuthContext);

    if(!context){
        throw new Error("Use useAuthState must be used within a AuthContextProps ")
    }
    return context;
}