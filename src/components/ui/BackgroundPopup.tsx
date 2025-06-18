import { useAuthState } from '@/context/AuthContext';
import { useRouter } from 'next/navigation';
import type { FC } from 'react';

interface BackgroundPopupProps {
    title: string;
    cancel :string;
    action: string;
    description : string;
    path : string;
}

const BackgroundPopup: FC<BackgroundPopupProps> = ({title,cancel,action,description,path}) => {
    const {setBackgroundPopup} = useAuthState();
    const router = useRouter()

    const handleAction = async () => {
        router.push(`/${path}`)
    }
        return (
            <div className='fixed bg-black/60 z-[999] top-0 flex w-screen h-screen justify-center items-center'>
                <div className='bg-[var(--background-element)] p-5 rounded-xl space-y-2'>
                    <h4 className='font-bold'> {title}</h4>
                    <p>{description}</p>
                    <div>
                        <div>
                            <button onClick={() => setBackgroundPopup(false)} className='border px-5 py-1 rounded-2xl cursor-pointer hover:bg-[var(--btn-hover)] hover:text-[var(--btn-text)]'>{cancel}</button>
                            <button onClick={handleAction}>{action}</button>
                        </div>
                    </div>
                </div>
            </div>
        );
}
export default BackgroundPopup;