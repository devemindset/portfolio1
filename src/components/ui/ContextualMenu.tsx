import EditProjectPop from '@/app/projects/components/EditProjectPop';
import { Client, Project, TimeEntry } from '@/types';
import { Dispatch, SetStateAction, useEffect, useState, type FC } from 'react';
import DeletePopup from './DeletePopup';
import EditSession from '@/app/dashboard/components/session/EditSession';
import EditClient from '@/app/clients/new/components/EditClient';

interface ContextualMenuProps{
    elements : {
        project : Project |undefined;
        source : string;
        session : TimeEntry | undefined ;
        client : Client | undefined;
        onCloseMenu : Dispatch<SetStateAction<boolean>>;
    }
    
}

const ContextualMenu: FC<ContextualMenuProps> = ({elements}) => {
    const [projectEditPop,setProjectEditPop] = useState(false);
    const [deletePop,setDeletePop] = useState(false);
    const [sourcePath,setSourcePath] = useState<string>()
    const [sessionEditPop,setSessionEditPop] = useState(false);
    const [clientEditPop,setClientEditPop] = useState(false)


    
    
    useEffect(() => {
        if(elements.project && elements.source === "project"){
        
        setSourcePath(`/projects/project/${elements.project?.id}/delete_project_view/`)
       
    } else if(elements.session && elements.source === "session"){
            setSourcePath(`/time_tracking/time_tracking/${elements.session?.id}/delete_project_time_entry_view/`)
        }
        else if (elements.client && elements.source === "client"){
            setSourcePath(`/clients/client/${elements.client.id}/delete_client_view/`)
        }
    },[elements.project, elements.source,elements.session,elements.client])
    const handleEdit = () => {
        if(elements.source === "project"){
            
            setProjectEditPop(true)
            
        }
        else if(elements.source === "session"){
            setSessionEditPop(true);
        }
        else if(elements.source === "client"){
            setClientEditPop(true)
        }
    }

    const handleDelete = () => {
        setDeletePop(true);
    }

    const BtnStyle =
    "flex items-center gap-2 text-base hover:text-blue-600 transition cursor-pointer";

        return (
            <>
            <div className="absolute top-1 right-0 w-[90vw] max-w-[190px]  md:w-25 bg-[var(--color-foreground)] text-black shadow-md z-[800] px-6 py-5 space-y-2 flex flex-col rounded-xl">

                <button className={BtnStyle} onClick={handleEdit}>Edit</button>            
                <button className={BtnStyle} onClick={handleDelete}>Delete</button>            
            </div>
            {/* editing  */}
            {projectEditPop && <EditProjectPop project={elements.project} onClose={() => {setProjectEditPop(false); elements.onCloseMenu(false) }} />}

            {sessionEditPop && <EditSession session={elements.session} onClose={() => {setSessionEditPop(false); elements.onCloseMenu(false)}} />}

            {clientEditPop && <EditClient client={elements.client} onClose={() => {setClientEditPop(false); elements.onCloseMenu(false)}} />}

            {/* delete  */}
            {deletePop && <DeletePopup source={elements.source} message={`Are you sure you want to delete this ${elements.source}`} path={sourcePath} deletePop={setDeletePop} showContextualMenu={elements.onCloseMenu} />}
            </>
        );
}
export default ContextualMenu;