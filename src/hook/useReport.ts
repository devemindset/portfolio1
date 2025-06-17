import api from "@/lib/api";
import { ReportPreview } from "@/types";
import { useEffect, useState } from "react";


export function useReport(reportId: string | null | undefined ){
    const [report, setReport] = useState<ReportPreview | null>(null);

    const [loading, setLoading] = useState(true);

    useEffect(() => {
    if (reportId) {
      api.get(`/reports/report/${reportId}/`)
        .then(res => setReport(res.data))
        .catch(() => setReport(null))
        .finally(() => setLoading(false));
    }
  }, [reportId]);

  return { report, loading };
}