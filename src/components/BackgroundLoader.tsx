import type { FC } from 'react';

const BackgroundLoader: FC = () => {
  return (
    <div className="fixed inset-0 z-[9999] bg-white flex justify-center items-center">
      <div className="w-16 h-16 border-4 border-[var(--source-1)] border-t-transparent rounded-full animate-spin"></div>
    </div>
  );
};

export default BackgroundLoader;
