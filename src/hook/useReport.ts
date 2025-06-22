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

export function useReports() {
  const [reports,setReports] = useState<Report[] | null>(null);
  const [loading, setLoading] = useState(true);

  const fetchReports = async () => {
        setLoading(true);
        try{
          const res = await  api.get(`/reports/report_list/`);
          setReports(res.data)
        }catch{
          setReports(null)
        }finally{
          setLoading(false)
        }
      };

  useEffect(() => {
    
     fetchReports();
  }, []);

  return { reports, loading,fetchReports };
}