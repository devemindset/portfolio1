"use client"
import api from '@/lib/api';
import { Client } from '@/types';
import Link from 'next/link';
import { useEffect, useState, type FC } from 'react';



const NewProjectForm: FC = ({}) => {
        const [client, setClient] = useState<Client>({} as Client)
        const [name, setName] = useState("");
        const [description,setDescription] = useState("");
        const [btnStatus,setBtnStatus] = useState(false);
        const [error, setError] = useState("");
        const [success,setSuccess] = useState("");


        useEffect(() => {

        },[])
        const handleCreateProject = async (e: React.FormEvent) => {
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
        }
        try {
                const response = await api.post("projects/create_project/",{
                    name,
                    client_id : client.id,
                    description

                })
                if(response.status === 201){
                    setSuccess("Project Created Successfully");
                    setBtnStatus(false)
                    setError("");
                    setName("")
                    setDescription("")

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
          return "Something went wrong. Try again";
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
            <form onSubmit={handleCreateProject} className='space-y-4'>
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

                {!btnStatus ? (
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 transition cursor-pointer"
              >
                Create
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
                {success && <Link href="/dashboard" className="text-blue-500 underline block italic text-sm text-center mt-5">go to the dashboard</Link>}
            </form>
        );
}
export default NewProjectForm;