import { useAuthState } from '@/context/AuthContext';
import { useState, type FC } from 'react';
import SessionCard from './SessionCard';



const SessionMap: FC = ({}) => {
        const {userData} = useAuthState();
        const [selectedProjectId, setSelectedProjectId] = useState("");
        
        return (
                <div className='mt-10'>
          <h3 className='text-center my-5 font-bold text-2xl'>Sessions</h3>
          <div className=''>
                <select
                        value={selectedProjectId}
                        onChange={(e) => {
                        const id = e.target.value;
                        setSelectedProjectId(id);
                        
                        }}
        className="bg-[var(--btn-bg)] text-white px-4 py-2 rounded-md border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 mr-5"
      >
        <option value="">{userData?.projects && userData?.projects[0]?.name}</option>
        {userData?.projects?.map((project, index) => (
          <option key={index} value={project.id.toString()}>
            {project.name}
          </option>
        ))}
      </select>
                <div className=" flex gap-6 overflow-x-scroll p-5">
                        {userData?.projects && userData?.projects[Number(selectedProjectId)].time_entries.map((session,index) => (
                                <div key={index}>
                                        <SessionCard sessionDate={session.date} sessionHour={session.hours} sessionNote={session.note} />
                                </div>
                        ))}
                </div>
          </div>
          
      </div>
        );
}
export default SessionMap;