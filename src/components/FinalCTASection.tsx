import type { FC } from 'react';
import Link from "next/link";

// interface FinalCTASectionProps {}

const FinalCTASection: FC = () => {
        return (
    <section className="bg-white py-24 px-6 border-t border-gray-100">
      <div className="max-w-3xl mx-auto text-center">
        {/* Titre */}
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
          🎯 Ready to get clear and fast approval?
        </h2>

        {/* Actions */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-4 mt-6">
          <Link
            href="/register"
            className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition font-medium text-sm md:text-base"
          >
            Create my first validation link
          </Link>
          <Link
            href="/demo"
            className="text-blue-600 hover:underline text-sm md:text-base font-medium"
          >
            See an example
          </Link>
        </div>
      </div>
    </section>
  );
  
}
export default FinalCTASection;