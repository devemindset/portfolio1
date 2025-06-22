"use client"
import type { FC } from 'react';
import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { CalendarDays } from "lucide-react";
import DatePicker from "react-datepicker";
import { format } from "date-fns";

import api from "@/lib/api";
import { useProject } from "@/hook/useProject";
import { useAuthState } from "@/context/AuthContext";
import toast from "react-hot-toast";
import MainHeader from "@/app/dashboard/components/MainHeader";
import { useReports } from '@/hook/useReport';


const CreateReport: FC = ({}) => {
        const {getUserInfo,userData} = useAuthState();
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);
  const [success, setSuccess] = useState(false);
  const [reportId, setReportId] = useState<string>("");
  const [error, setError] = useState("");

  const router = useRouter();
  const searchParams = useSearchParams();
  const projectId = searchParams.get("project_id");

  const { project } = useProject(projectId);
  const { fetchReports } = useReports()

  const handleCreateReport = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSuccess(false);

    if (!project || !startDate || !endDate) return;

     if(userData.subscription?.method === "credits" && (userData.subscription?.credits && userData.subscription?.credits < 5) ){
      setError("Insufficient credit. Please upgrade!")
      return;
     }
    try {
      const response = await api.post("/reports/create_report/", {
        client_id: project.client.id,
        project_id: project.id,
        start_date: format(startDate, "yyyy-MM-dd"),
        end_date: format(endDate, "yyyy-MM-dd"),
      });

      if (response.status === 201) {
        setSuccess(true);
        setReportId(response.data.report_id);
        setStartDate(null)
        setEndDate(null)
        getUserInfo()
        fetchReports()
      }
    } catch {
      setError("Failed to create report.");
    }
  };


  const handleCopy = async () => {
    
    try {
      const url = `${process.env.NEXT_PUBLIC_API_URL}/reports/report/${reportId}/preview_template/`;
      await navigator.clipboard.writeText(url);
      toast.success("✅ Link copied!");
      // ferme après copie si tu veux
    } catch (err) {
      console.error("Copy failed:", err);
    }
  };

 
  return (

    <>
    <MainHeader />
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white px-4 py-35 ">
      <div className="max-w-3xl mx-auto bg-white shadow-xl rounded-xl p-8">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">📝 Create a Project Report</h1>

        {project && (
          <div className="text-center text-sm text-gray-500 mb-8">
            <p><strong>Project:</strong> {project.name}</p>
            <p><strong>Client:</strong> {project.client.name}</p>
          </div>
        )}

        <form onSubmit={handleCreateReport} className="space-y-6 ">
          <div className="flex items-center justify-between px-20">
              {/* Start Date */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Start Date</label>
                <div className="relative">
                  <DatePicker
                    selected={startDate}
                    onChange={(date) => setStartDate(date)}
                    dateFormat="yyyy-MM-dd"
                    placeholderText="Select start date"
                    className="w-full px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[var(--btn-bg)] border-slate-300"
                  />
                  <CalendarDays className="absolute right-3 top-2.5 text-gray-400" size={20} />
                </div>
              </div>

              {/* End Date */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">End Date</label>
                <div className="relative">
                  <DatePicker
                    selected={endDate}
                    onChange={(date) => setEndDate(date)}
                    dateFormat="yyyy-MM-dd"
                    placeholderText="Select end date"
                    className="w-full px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[var(--btn-bg)] border-slate-300"
                  />
                  <CalendarDays className="absolute right-3 top-2.5 text-gray-400" size={20} />
                </div>
              </div>
          </div>
          {/* Submit button */}
          {!success && <button
            type="submit"
            className="w-full bg-[var(--btn-bg)] text-white py-3 rounded-md hover:bg-[var(--btn-hover)] transition cursor-pointer"
          >
            Generate Report
          </button>}
        </form>

        {/* Feedback messages */}
        {error === "Insufficient credit. Please upgrade!" ? (
            <>
            <p className="text-red-500 text-sm text-center">{error}</p>
            <div onClick={() => router.push("/pricing")} className="text-sm text-center text-blue-600 underline">Upgrade plan</div>
            </>
          ) : error && <p className="text-red-500 text-sm text-center">{error}</p>}
        {success && (
          <div className="mt-6 text-center space-y-4">
            <p className="text-green-600 text-sm font-semibold">✅ Report created successfully!</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => router.push("/dashboard")}
                className="bg-gray-200 text-gray-800 px-4 py-2 rounded hover:bg-gray-400 cursor-pointer"
              >
                Go to Dashboard
              </button>
              <button
                onClick={() =>
                  window.open(
                    `${process.env.NEXT_PUBLIC_API_URL}/reports/report/${reportId}/preview_template/`,
                    "_blank"
                  )
                }
                className="bg-[var(--btn-bg)] text-white px-4 py-2 rounded hover:bg-[var(--btn-hover)] transition cursor-pointer"
              >
                Preview Report
              </button>
              <button
                onClick={handleCopy}
                className="bg-[var(--btn-bg)] text-white px-4 py-2 rounded hover:bg-[var(--btn-hover)] transition cursor-pointer"
              >
                Copy report link
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
    </>
  );
}
export default CreateReport;