import { useClientAgreements } from '@/hook/useClient';
import { ClientAgreement } from '@/types';
import { useState, type FC } from 'react';
import AgreementCard from './AgreementCard';

const AgreementMap: FC = () => {
  const [selectedProjectId, setSelectedProjectId] = useState("");
  const { agreements } = useClientAgreements();

  // ✅ Éviter les doublons de projets dans la liste déroulante
  const seenProjects = new Set<string>();
  const uniqueProjectAgreements = agreements?.filter((agreement) => {
    if (seenProjects.has(agreement.project_id)) return false;
    seenProjects.add(agreement.project_id);
    return true;
  });

  // ✅ Tous les accords pour le projet sélectionné
  const selectedProject: ClientAgreement[] | undefined = agreements?.filter(
    (p) => p.project_id === selectedProjectId
  );

  return (
    <div className="mt-10">
      <h3 className="text-center my-5 font-bold text-2xl border-b border-gray-300 bg-[var(--title-bg)] text-white py-1 rounded-b-2xl">
        Client Agreements
      </h3>

      <div>
        <select
          value={selectedProjectId}
          onChange={(e) => setSelectedProjectId(e.target.value)}
          className="bg-[var(--btn-bg)] text-white px-4 py-2 rounded-md border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 mr-5"
        >
          <option value="">Select a project</option>
          {uniqueProjectAgreements?.map((agreement) => (
            <option key={agreement.project_id} value={agreement.project_id}>
              {agreement.project}
            </option>
          ))}
        </select>

        <div className="flex gap-6 overflow-x-auto p-5">
          {selectedProject?.length ? (
            selectedProject.map((agreement) => (
              <div key={agreement.id}>
                <AgreementCard clientAgreement={agreement} />
              </div>
            ))
          ) : (
            <p className="text-gray-500 italic">Select a project</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default AgreementMap;
