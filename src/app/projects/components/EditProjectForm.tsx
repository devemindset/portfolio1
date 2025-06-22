import { useAuthState } from '@/context/AuthContext';
import api from '@/lib/api';
import { Client, Project } from '@/types';
import { User } from 'lucide-react';
import { useState, type FC } from 'react';

interface EditProjectFormProps {
    project : Project | undefined ;
}

const EditProjectForm: FC<EditProjectFormProps> = ({project}) => {
    const {userData} = useAuthState();
    const [client,setClient] = useState<Client>(project!.client)
    const [name, setName] = useState(project!.name);
    const [description,setDescription] = useState(project!.description);
    const [btnStatus,setBtnStatus] = useState(false);
    const [error, setError] = useState("");
    const [success,setSuccess] = useState("");
    const {getUserInfo} = useAuthState();

       const handleEditProject = async (e: React.FormEvent) => {
        setBtnStatus(true)
        e.preventDefault();
        setError("");

    
        if(name === ""){
            setError("Project name is required.");
            setBtnStatus(false)
            return;
        }
        if(!client.id){
            setError("Please select a Client for this project")
             setBtnStatus(false)
            return;
        }
        try {
                const response = await api.patch(`projects/project/${project!.id}/update_project_view/`,{
                    client,
                    name,
                    description
                })
                if(response.status === 201){
                    setSuccess("Project updated Successfully");
                    setBtnStatus(false)
                    setError("");
                    setName("")
                    setDescription("")
                    getUserInfo()

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
        if (axiosError.response?.status === 400) {
          setBtnStatus(false);
          return setError("Something went wrong. Try again");
        }

        // ✅ Check serializer validation errors
        if (data?.errors) {
          // if (data.errors.email?.[0]?.includes("already exists")) {
          //   return "Email is already in use";
          // }
          // if (data.errors.username?.[0]?.includes("already exists")) {
          //   return "Username is already in use";
          // }

          // Optional: combine all validation errors
          // const errorMessages = Object.values(data.errors).flat().join(", ");
          // return errorMessages || "Validation failed.";
        }

        // Default fallback
        setBtnStatus(false)
        return setError(data?.error || data?.detail || "Something went wrong.");
      }
          } 

    }
        return (
            <form onSubmit={handleEditProject} className='space-y-4'>
                <input
                    type="text"
                    placeholder="name"
                    className="w-full p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    />
                    <textarea
              
                  name="description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  rows={3}
                  className="w-full border px-3 py-2 rounded-md resize-y max-h-48 border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Description (optional)"
                />
                  <div className="relative">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <select
                    value={client?.id || ""}
                    onChange={(e) => {
                      const selectedId = parseInt(e.target.value);
                      const selectedClient = userData.clients?.find((c) => c.id === selectedId);
                      if (selectedClient) setClient(selectedClient);
                    }}
                    className="w-full pl-10 pr-3 py-3 rounded-md border border-gray-300 bg-white text-gray-800 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value={client.id} className="text-gray-400">{client.name}</option>
                    {userData.clients?.map((client) => (
                      <option key={client.id} value={client.id}>
                        {client.name}
                      </option>
                    ))}
                  </select>
                </div>
                {!btnStatus ? (
              <button
                type="submit"
                className="w-full bg-[var(--btn-bg)] text-white py-3 rounded-md hover:bg-[var(--btn-hover)] transition cursor-pointer"
              >
                Update
              </button>
            ) : (
              <span className="flex justify-center items-center gap-2 text-sm font-medium text-blue-700">
                    <svg className="animate-spin h-5 w-5 text-blue-700" viewBox="0 0 24 24">
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                        fill="none"
                      />
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8v8H4z"
                      />
                    </svg>
                   Processing...
                  </span>
            )}
                {error && <p className="text-red-500 text-sm text-center">{error}</p>}
                {success && <p className="text-green-600 text-sm text-center">{success}</p>}
                
            </form>
        );
}
export default EditProjectForm;