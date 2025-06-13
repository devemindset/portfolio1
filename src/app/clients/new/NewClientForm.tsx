import api from '@/lib/api';
import { isValidEmail } from '@/tools/utils';
import { useRouter } from 'next/navigation';
import React, { useState, type FC } from 'react';

interface NewClientFormProps {}

const NewClientForm: FC<NewClientFormProps> = ({}) => {
    const [name,setname] = useState("");
    const [email,setEmail] = useState("");
    const [company,setCompany] = useState("");
    const [phone,setPhone] = useState("");
    const [notes,setNotes] = useState("");
    const [btnStatus,setBtnStatus] = useState(false);
    const [error, setError] = useState("");
    const [success,setSuccess] = useState("");


    const router = useRouter();

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
        }
        if(name === ""){
            setError("Clent name is required.");
            setBtnStatus(false)
        }
        try {
                const response = await api.post("clients/create_client/",{
                    name,
                    email,
                    company,
                    phone,
                    notes,

                })
                if(response.status === 200){
                    setSuccess("Successfully registered!");
                    setBtnStatus(false)
                    setError("");
                }
        }
    }
        return (
            <form onSubmit={handleCreateClient}>


                {!btnStatus ? (
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 transition cursor-pointer"
              >
                Create
              </button>
            ) : (
              <span className="flex justify-center items-center gap-2 text-sm font-medium">
                    <svg className="animate-spin h-5 w-5 text-white" viewBox="0 0 24 24">
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
export default NewClientForm;