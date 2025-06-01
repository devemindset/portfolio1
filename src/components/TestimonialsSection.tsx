import type { FC } from 'react';
import Image from "next/image";

// interface TestimoniasSectionProps {}

const TestimonialsSection: FC = () => {
        return (
    <section className="bg-white py-24 px-6">
      <div className="max-w-4xl mx-auto text-center">
        {/* Titre */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-16">
          Testimonials
        </h2>

        {/* Témoignages */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Témoignage 1 */}
          <div className="bg-gray-50 p-6 rounded-xl shadow text-left">
            <div className="flex items-center gap-4 mb-4">
              <Image
                src="/testimonials/julie.jpg"
                alt="Julie"
                width={48}
                height={48}
                className="rounded-full object-cover"
              />
              <div>
                <p className="font-semibold text-gray-900">Julie</p>
                <p className="text-sm text-gray-500">Product Manager</p>
              </div>
            </div>
            <p className="text-gray-700 text-base leading-relaxed">
              “We used to approve our designs over email. Now we use SnapValidate for every key step.”
            </p>
          </div>

          {/* Témoignage 2 */}
          <div className="bg-gray-50 p-6 rounded-xl shadow text-left">
            <div className="flex items-center gap-4 mb-4">
              <Image
                src="/testimonials/freelance.jpg"
                alt="Freelancer"
                width={48}
                height={48}
                className="rounded-full object-cover"
              />
              <div>
                <p className="font-semibold text-gray-900">Freelancer</p>
                <p className="text-sm text-gray-500">UI Designer</p>
              </div>
            </div>
            <p className="text-gray-700 text-base leading-relaxed">
              “I use SnapValidate to get my mockups approved by clients. It’s fast and clean. No more chasing people: one link, one approval, done.”
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
export default TestimonialsSection;