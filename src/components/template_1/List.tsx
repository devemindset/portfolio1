import type { FC } from 'react';
import OkIcon from '../ui/OkIcon';



const List: FC = () => {
        return (
            <div className='flex my-2'>
                            <OkIcon className='w-6 h-6 text-[var(--text-span)]' />
                            <p className='ml-2 text-[var(--text-element-small-black)] text-sm'>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                        </div>
        );
}
export default List;