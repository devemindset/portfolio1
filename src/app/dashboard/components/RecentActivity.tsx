import type { FC } from 'react';

interface RecentActivityProps {}

const RecentActivity: FC<RecentActivityProps> = ({}) => {
        return (
            <>
            <section>
                <h3>Recent activity</h3>
                <p>session 1</p>
                <p>session 2</p>
                <p>session 3</p>
            </section>
            </>
        );
}
export default RecentActivity;