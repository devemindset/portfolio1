import { useEffect, useState } from "react";
import api from "@/lib/api";
import { TimeEntry } from "@/types";

export function useTimeEntry() {
  const [sessions, setSessions] = useState<TimeEntry[] | null>(null);
  const [loading, setLoading] = useState(true);

  const fetchSessions = async () => {
    setLoading(true);
    try {
      const res = await api.get(`/time_tracking/project_time_tracking_list/`);
      setSessions(res.data);
    } catch {
      setSessions(null);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchSessions();
  }, []);

  return { sessions, loading, refreshSessions: fetchSessions };
}
