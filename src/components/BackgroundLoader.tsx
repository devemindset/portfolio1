"use client"
import { useEffect, useState, type FC } from 'react';

const BackgroundLoader: FC = () => {
  const [loading, setLoading] = useState(true)
    useEffect(() => {
    // Simule le chargement ou attends que le composant soit monté
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500); // 1.5s

    return () => clearTimeout(timer);
  }, []);

 
  return (
    <>
    { loading && <div className="fixed inset-0 z-[9999] bg-white flex justify-center items-center">
      <div className="w-16 h-16 border-4 border-[var(--source-1)] border-t-transparent rounded-full animate-spin"></div>
    </div>}
    </>
  );
};

export default BackgroundLoader;
