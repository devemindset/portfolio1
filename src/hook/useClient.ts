import { useEffect, useState } from "react";
import api from "@/lib/api";
import { Client } from "@/types";

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
