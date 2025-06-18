"use client"
import { useAuthState } from '@/context/AuthContext';
import api from '@/lib/api';
import { isValidEmail } from '@/tools/utils';
import Link from 'next/link';
import React, { useState, type FC } from 'react';

// interface NewClientFormProps {}

const NewClientForm: FC = ({}) => {
    const [name,setname] = useState("");
    const [email,setEmail] = useState("");
    const [company,setCompany] = useState("");
    const [phone,setPhone] = useState("");
    const [notes,setNotes] = useState("");
    const [btnStatus,setBtnStatus] = useState(false);
    const [error, setError] = useState("");
    const [success,setSuccess] = useState("");
    const {getUserInfo} = useAuthState();


    

    const handleCreateClient = async (e: React.FormEvent) => {
        setBtnStatus(true)
        e.preventDefault();
        setError("");

        if(!isValidEmail(email)){
            setError("Please enter a valid email address.")
            setBtnStatus(false)
            return;
        }
        if(name.length > 20){
            setError("Username cannot exceed 20 characters.");
            setBtnStatus(false)
            return;
        }
        if(name === ""){
            setError("Clent name is required.");
            setBtnStatus(false)
            return;
        }
        try {
                const response = await api.post("clients/create_client/",{
                    name,
                    email,
                    company,
                    phone,
                    notes,

                })
                if(response.status === 201){
                    setSuccess("Client Created Successfully");
                    setBtnStatus(false)
                    setError("");
                    setNotes("")
                    setCompany("")
                    setname("")
                    setEmail("")
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
            <form onSubmit={handleCreateClient} className="space-y-4">

                <input
              type="text"
              placeholder="name"
              className="w-full p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={name}
              onChange={(e) => setname(e.target.value)}
              required
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
                <input
              type="text"
              placeholder="Company name (optional)"
              className="w-full p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={company}
              onChange={(e) => setCompany(e.target.value)}
            />
                <input
              type="text"
              placeholder="Phone Number (optional)"
              className="w-full p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />

            
                <textarea
              
                  name="description"
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
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
export default NewClientForm;