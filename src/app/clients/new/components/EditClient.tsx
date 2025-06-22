import { useAuthState } from '@/context/AuthContext';
import api from '@/lib/api';
import { isValidEmail } from '@/tools/utils';
import { Client } from '@/types';
import { X } from 'lucide-react';
import { useState, type FC } from 'react';

interface EditClientProps {
    client : Client | undefined;
    onClose : () => void;
}

const EditClient: FC<EditClientProps> = ({client,onClose}) => {
    const [name,setname] = useState(client!.name);
        const [email,setEmail] = useState(client!.email);
        const [company,setCompany] = useState(client!.company);
        const [phone,setPhone] = useState(client!.phone);
        const [notes,setNotes] = useState(client!.notes);
        const [btnStatus,setBtnStatus] = useState(false);
        const [error, setError] = useState("");
        const [success,setSuccess] = useState("");
        const {getUserInfo} = useAuthState();
    
        const handleUpdateClient = async (e: React.FormEvent) => {
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
                const response = await api.patch(`clients/client/${client?.id}/update_client_view/`,{
                    name,
                    email,
                    company,
                    phone,
                    notes,

                })
                if(response.status === 200){
                    setSuccess("Client Updated Successfully");
                    setBtnStatus(false)
                    setError("");
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
            <div className="fixed inset-0 bg-gradient-to-br from-[var(--btn-bg)]/70 to-slate-900/70 backdrop-blur-sm flex justify-center items-center px-4 w-screen h-auto z-[997]">
                <div className="relative bg-white w-full max-w-md mx-auto rounded-xl shadow-2xl p-8 animate-fade-in overflow-y-auto">
                    <button
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 cursor-pointer"
          onClick={onClose}
        >
          <X className="w-6 h-6" />
        </button>

                <form onSubmit={handleUpdateClient} className="space-y-4 mt-2">

                <input
              type="text"
              placeholder="name"
              className="w-full p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[var(--btn-bg)]"
              value={name}
              onChange={(e) => setname(e.target.value)}
              required
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[var(--btn-bg)]"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              
            />
                <input
              type="text"
              placeholder="Company name (optional)"
              className="w-full p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[var(--btn-bg)]"
              value={company}
              onChange={(e) => setCompany(e.target.value)}
            />
                <input
              type="text"
              placeholder="Phone Number (optional)"
              className="w-full p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[var(--btn-bg)]"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />

            
                <textarea
              
                  name="description"
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  rows={3}
                  className="w-full border px-3 py-2 rounded-md resize-y max-h-48 border-gray-300 focus:outline-none focus:ring-2 focus:ring-[var(--btn-bg)]"
                  placeholder="Description (optional)"
                />
             

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

                </div>
            </div>
        );
}
export default EditClient;