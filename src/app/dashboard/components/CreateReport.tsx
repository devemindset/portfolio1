"use client"
import { useAuthState } from '@/context/AuthContext';
import { useRouter } from 'next/navigation';
import { useState, type FC } from 'react';



const CreateReport: FC = () => {
        const { userData } = useAuthState();
        const router = useRouter();
          
          const [selectedProjectId, setSelectedProjectId] = useState("");
        
          const handleReport = (projectId: string) => {
            const selectedProject = userData?.projects?.find(p => p.id.toString() === projectId);
            if (selectedProject) {
             router.push(`reports/new?project_id=${projectId}`)
                
              
            }
          };
        
  
        return(
            <select
        value={selectedProjectId}
        onChange={(e) => {
          const id = e.target.value;
          setSelectedProjectId(id);
          handleReport(id);
        }}
        className="bg-[var(--btn-bg)] text-white px-4 py-2 rounded-md border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        <option value="">+ Create report</option>
        {userData?.projects?.map((project, index) => (
          <option key={index} value={project.id.toString()}>
            {project.name}
          </option>
        ))}
      </select>
        
        )
          
}
export default CreateReport;