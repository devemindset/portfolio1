import EditProjectPop from '@/app/projects/components/EditProjectPop';
import { Project } from '@/types';
import { Dispatch, SetStateAction, useEffect, useState, type FC } from 'react';
import DeletePopup from './DeletePopup';

interface ContextualMenuProps{
    elements : {
        project : Project |undefined;
        source : string;
        onCloseMenu : Dispatch<SetStateAction<boolean>>;
    }
    
}

const ContextualMenu: FC<ContextualMenuProps> = ({elements}) => {
    const [projectEditPop,setProjectEditPop] = useState(false);
    const [deletePop,setDeletePop] = useState(false);
    const [sourcePath,setSourcePath] = useState<string>()

    

    useEffect(() => {
        if(elements.project && elements.source === "project"){
        
        setSourcePath(`/projects/project/${elements.project?.id}/delete_project_view/`)
    }
    },[elements.project, elements.source])
    const handleEdit = () => {
        if(elements.source === "project"){
            
            setProjectEditPop(true)
            
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
            {projectEditPop && <EditProjectPop project={elements.project} onClose={() => {setProjectEditPop(false); elements.onCloseMenu(false) }} />}
            {deletePop && <DeletePopup source={elements.source} message={`Are you sure you want to delete this ${elements.source}`} path={sourcePath} deletePop={setDeletePop} />}
            </>
        );
}
export default ContextualMenu;