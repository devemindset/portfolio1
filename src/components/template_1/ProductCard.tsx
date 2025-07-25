import Image from 'next/image'
import Link from 'next/link'

interface ProductCardProps {
  imageSrc: string
  description: string
  path: string
}

const ProductCard: React.FC<ProductCardProps> = ({ imageSrc, description, path }) => {
  return (
    <div className="bg-[var(--background-element-3)] flex flex-col justify-between rounded-3xl shadow-2xl overflow-hidden mx-3">
      {/* Image */}
      <div className="w-full h-[250px] relative">
        <Image
          src={imageSrc}
          alt="product"
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
      </div>

      {/* Description */}
      <div className="p-4 flex-1">
        <p className="text-sm text-[var(--text-span-2)]">{description}</p>
      </div>

      {/* Button */}
      <div className="bg-[var(--btn-bg)] py-2 text-[var(--btn-text)] text-center font-bold w-full">
        <Link href={path}>Learn More</Link>
      </div>
    </div>
  )
}

export default ProductCard
