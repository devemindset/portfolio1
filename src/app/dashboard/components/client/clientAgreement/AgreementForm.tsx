import { useAuthState } from '@/context/AuthContext';
import { useClientAgreements } from '@/hook/useClient';
import api from '@/lib/api';
import { Client } from '@/types';
import { Folder } from 'lucide-react';
import { useState, type FC } from 'react';

interface AgreementFormProps {
    client : Client;
}

const AgreementForm: FC<AgreementFormProps> = ({client}) => {
    const [projectId,setProjectId] = useState<string>("")
    const [title,setTitle] = useState("");
    const [content,setContent] = useState("");
    const [btnStatus,setBtnStatus] = useState(false);
    const [error, setError] = useState("");
    const [success,setSuccess] = useState("");
    const {userData} = useAuthState();
    const {refreshAgreement} = useClientAgreements()

    const clientProjects = userData.projects?.filter(
        (p) => p.client.id.toString() === client.id.toString()
    );

        const handleCreateAgreement = async (e: React.FormEvent) => {
        setBtnStatus(true)
        e.preventDefault();
        setError("");

    
        if(title === ""){
            setError("title is required.");
            setBtnStatus(false)
            return;
        }
        if(projectId === ""){
            setError("Please select a project for this client or create one")
             setBtnStatus(false)
            return;
        }
        try {
                const response = await api.post("/clients/generate_agreement/",{
                    project_id : projectId,
                    content : content,
                    title : title,

                })
                if(response.status === 201){
                    setSuccess("Client Agreement Created Successfully");
                    setBtnStatus(false)
                    setError("");
                   setTitle("")
                    setContent("")
                    refreshAgreement()

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
          <form onSubmit={handleCreateAgreement} className='space-y-4'>
                <input
                    type="text"
                    placeholder="Title"
                    className="w-full p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[var(--btn-bg)]"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                    />
                    <textarea
              
                  name="description"
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  rows={6}
                  className="w-full border px-3 py-2 rounded-md resize-y max-h-48 border-gray-300 focus:outline-none focus:ring-2 focus:ring-[var(--btn-bg)] "
                  placeholder="Description "
                />
                  <div className="relative">
                  <Folder className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <select
                    value={projectId || ""}
                    onChange={(e) => {
                      const id = e.target.value;
                      setProjectId(id)
                      
                    }}
                    className="w-full pl-10 pr-3 py-3 rounded-md border border-gray-300 bg-white text-gray-800 shadow-sm focus:outline-none focus:ring-2 focus:ring-[var(--btn-bg)]"
                  >
                    <option value="" className="text-gray-400">Select a Project</option>
                    {userData.projects && client && clientProjects?.map((project) => (
                      <option key={project.id} value={project.id}>
                        {project.name}
                      </option>
                    ))}
                  </select>
                </div>
                {!btnStatus ? (
              <button
                type="submit"
                className="w-full bg-[var(--btn-bg)] text-white py-3 rounded-md hover:bg-[var(--btn-hover)] transition cursor-pointer"
              >
                Create
              </button>
            ) : (
              <span className="flex justify-center items-center gap-2 text-sm font-medium text-[var(--btn-bg)]">
                    <svg className="animate-spin h-5 w-5 text-[var(--btn-bg)]" viewBox="0 0 24 24">
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
export default AgreementForm;