import { MoreHorizontal } from 'lucide-react';
import { useState,useEffect,useRef, type FC } from 'react';
import ContextualMenu from './ContextualMenu';
import { Client, Project, TimeEntry } from '@/types';

interface KebabMenuProps {
    project : Project |undefined;
    source : string
    session : TimeEntry | undefined ;
    client : Client | undefined;

}

const KebabMenu: FC<KebabMenuProps> = ({project,source,session,client}) => {
    const [showMenu,setShowMenu] = useState(false);
    
    const menuRef = useRef<HTMLDivElement>(null)

    // close the menu when user click outside 
    useEffect(() => {
        const handleClickOutside = (event : MouseEvent) => {
            if(menuRef.current && !menuRef.current.contains(event.target as Node)){
                setShowMenu(false);
            }
        };

        document.addEventListener("mousedown",
            handleClickOutside
        );
        return () => {
            document.removeEventListener("mousedown",handleClickOutside);
        }
    },[])

        return (
            <div ref={menuRef}>
            <MoreHorizontal
                size={20}
                className='cursor-pointer absolute top-1 right-2 text-gray-700'
                onClick={ () => setShowMenu(!showMenu)}
            />
            { showMenu && <ContextualMenu elements={{ project : project, source : source, onCloseMenu : setShowMenu ,session : session ,client : client}}  />}
            </div>
        );
}
export default KebabMenu;