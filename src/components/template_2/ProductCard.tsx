'use client'
import Image from 'next/image'
import Link from 'next/link'
import {motion} from "framer-motion"

interface ProductCardProps {
  imageSrc: string
  description: string
  path: string
}

const ProductCard: React.FC<ProductCardProps> = ({ imageSrc, description, path }) => {
  return (
    <motion.div className="bg-[var(--background-element-3)] flex flex-col justify-between rounded-3xl shadow-2xl overflow-hidden mx-3 max-w-[300px] w-full sm:max-w-[320px] md:max-w-[340px] xl:max-w-[400px] 2xl:max-w-[450px] h-[350px]"
    initial= {{ opacity:0, y: 40 }}
              
                transition={{ duration:1, delay:0.3}}
                whileInView={{ opacity: 1, y: 0 }}
          whileHover={{ scale: 1.03 }}
          viewport={{ once: true }}
    >
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
        <p className="text-sm text-[var(--text-element-small-black)]">{description.length > 45 ? `${description.slice(0,150)}...` : description}</p>
      </div>

      {/* Button */}
      <div className="bg-[var(--btn-bg)] py-2 text-[var(--btn-text)] text-center font-bold w-full">
        <Link href={path}>Learn More</Link>
      </div>
    </motion.div>
  )
}

export default ProductCard
