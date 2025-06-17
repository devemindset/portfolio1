"use Client"
import LogoutUser from '@/app/logout/LogoutUser';
import { Contact, CreditCard, HelpCircle,HelpingHand, LogOut, User } from 'lucide-react';
import Link from 'next/link';
import { useState, type FC } from 'react';



const PopupUserInfo: FC = ({}) => {
      const [logout, setLogout] = useState(false);
     
      const logoutHandle = () => setLogout(true);
      const Linkstyle = "flex items-center gap-2 hover:text-blue-600 cursor-pointer"

        return (
            <section className='fixed right-0 text-white top-14 bg-[#1d2125] space-y-3 py-5 px-10 rounded-2xl z-[999]'>
                <Link className={Linkstyle} href="/account">
                <User size={18} />
                <span>Account</span>
                </Link>
                <Link className={Linkstyle}  href="/contact"><HelpCircle size={18} /><span>Help</span></Link>
                <Link className={Linkstyle}  href="pricing"><CreditCard size={18} /><span>Pricing</span></Link>
                <Link className={Linkstyle}  href="/contact"><Contact size={18} /><span>Contact</span></Link>
                <Link className={Linkstyle}  href="/feedback"><HelpingHand size={18} /><span>Feedback</span></Link>
                <div onClick={logoutHandle} className={Linkstyle} >
                    <LogOut size={18} />
                    <span>Logout</span>
                    </div>
                
                {logout && <LogoutUser />}

            </section>
        );
}
export default PopupUserInfo;