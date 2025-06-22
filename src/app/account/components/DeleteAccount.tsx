import DeletePopup from '@/components/ui/DeletePopup';
import { useAuthState } from '@/context/AuthContext';
import { useState, type FC } from 'react';



const DeleteAccount: FC = () => {
    const {userData} = useAuthState();
    const[deleteAccount,setDeleteAccount] = useState(false);
   
    
        return (
            <>
            <div className='mt-35'>
                <button onClick={() => setDeleteAccount(true)}
                    className='bg-[var(--btn-bg)] hover:bg-red-600 cursor-pointer text-white px-5 py-3 rounded'
                    >
                    Delete the Account
                </button>
            </div>
            {deleteAccount && <DeletePopup source='user' path={`/user/delete/${userData.id}/delete_user_view`} message='Are you sure you want to delete your account?' deletePop={setDeleteAccount} />}
            </>

        );
}
export default DeleteAccount;