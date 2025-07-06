import { useEffect, useState } from "react";
import api from "@/lib/api";
import { Client,ClientAgreement } from "@/types";

export function useClients() {
  const [clients, setClients] = useState<Client[] | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    
      api.get(`/clients/client_list/`)
        .then(res => setClients(res.data))
        .catch(() => setClients(null))
        .finally(() => setLoading(false));
        
  }, []);

  return { clients, loading };
}

export function useClientAgreements(){
  const [agreements,setAgreements] = useState<ClientAgreement[] | null>(null)
  const [loading,setLoading] = useState(true);

  const fetchAgreements = async () => {
    setLoading(true);
    try{
      const res = await api.get("/clients/client_agreements_list_view/");
      setAgreements(res.data);

    }catch{
      setAgreements(null)
    }finally{
      setLoading(false)
    }
  }
  useEffect(() => {
    
    fetchAgreements();

  },[])

  return { agreements, loading, refreshAgreement : fetchAgreements}
}