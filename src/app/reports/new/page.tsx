"use client";

import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
// import { useRouter } from "next/navigation";
import api from "@/lib/api";

import { useProject } from "@/hook/useProject";

export default function CreateReportPage() {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [success,setSuccess] = useState(false);
  const [reportId,setReportId] = useState<string>("")
  const [error, setError] = useState("");
  const searchParams = useSearchParams();
  
  const router = useRouter()
  const projectId = searchParams.get("project_id");

  const { project } = useProject(projectId); 

  const handleCreateReport = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("")
    setSuccess(false)
    if (!project || !startDate || !endDate) return;

    try {
      const response = await api.post("/reports/create_report/", {
        client_id: project.client.id,
        project_id: project.id,
        start_date: startDate,
        end_date: endDate,
       
      });

      if (response.status === 201) {
        setSuccess(true)
        setReportId(response.data.report_id)
      }
    } catch {
      setError("Failed to create report.");
    }
  };


  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Create Report</h1>

      
      <h2>{project?.name}</h2>
      <h2>{project?.client.name}</h2>
      <form onSubmit={handleCreateReport} className="space-y-4">
        <div>
          <label className="block text-sm font-medium">Start Date</label>
          <input type="date" value={startDate} onChange={(e) => setStartDate(e.target.value)} required className="w-full border p-2 rounded" />
        </div>

        <div>
          <label className="block text-sm font-medium">End Date</label>
          <input type="date" value={endDate} onChange={(e) => setEndDate(e.target.value)} required className="w-full border p-2 rounded" />
        </div>

        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Generate</button>
      </form>
      {success  && <p className="text-green-600 text-sm mb-4">Report created successfully</p>}
      {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
      {success && <div className="flex items-center  mt-5">
        <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 mr-10" onClick={() => router.push("/dashboard")}>Go to the dashboard</button>
        <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700" onClick={() => window.open(`${process.env.NEXT_PUBLIC_API_URL}/reports/report/${reportId}/preview_template/`,"_blank")}>Preview the report</button>
        </div>}
     
    </div>
  );
}

// pdf backend 
{/* <button
  className="bg-gray-600 text-white px-4 py-2 rounded hover:bg-gray-700"
  onClick={() => window.open(`/reporst/report/${id}/generate_pdf/`, "_blank")}>
  Generate PDF
</button> */}