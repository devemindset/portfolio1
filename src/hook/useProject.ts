import { useEffect, useState } from "react";
import api from "@/lib/api";
import { FullProject } from "@/types";

export function useProject(projectId: string | null) {
  const [project, setProject] = useState<FullProject | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (projectId) {
      api.get(`/projects/projects/${projectId}/`)
        .then(res => setProject(res.data))
        .catch(() => setProject(null))
        .finally(() => setLoading(false));
    }
  }, [projectId]);

  return { project, loading };
}

