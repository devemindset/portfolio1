import { useEffect, useState } from "react";
import api from "@/lib/api";
import {  TimeEntry } from "@/types";

export function useTimeEntry() {
  const [sessions,setSessions] = useState<TimeEntry[] | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    
      api.get(`/time_tracking/project_time_tracking_list/`)
        .then(res => setSessions(res.data))
        .catch(() => setSessions(null))
        .finally(() => setLoading(false));
    
  }, []);

  return { sessions, loading };
}
