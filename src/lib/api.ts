import axios from "axios"; 

const api = axios.create({
    baseURL : process.env.NEXT_PUBLIC_API_URL,
     withCredentials: true, // Ensures session cookies are handled

});

export const pubic_api = axios.create({
    baseURL : process.env.NEXT_PUBLIC_API_URL,

});

// Function to extract csrftoken from cookies
export const getCsrfToken = (): string | null => {
  const match = document.cookie.match(/csrftoken=([^;]+)/);
  return match ? match[1] : null;
};


// Add CSRF token to headers
api.interceptors.request.use(config => {
    const csrfToken = getCsrfToken();
    if (csrfToken) {
        config.headers['X-CSRFToken'] = csrfToken;
    }
    return config;
});

export default api;


export const userAction = async (action : string, object : string ) =>{

    const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/user/track-action/`, {
                action,object
    });

    if (response.status === 201){
        console.log("user action success")
        
    }else{
        console.log("use action failed");
    }

    
}

