import type { FC } from 'react';
import ProductCard from './ProductCard';

const productList = [
    {
    imageSrc : "/product1.jpg",
    description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, deserunt.Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, deserunt.",
    path : "/"
    },
    {
    imageSrc : "/product2.jpg",
    description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, deserunt.",
    path : "/"
    },
    {
    imageSrc : "/hero-bg.jpg",
    description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, deserunt.",
    path : "/"
    },
    {
    imageSrc : "/hero-bg.jpg",
    description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, deserunt.",
    path : "/"
    },
    {
    imageSrc : "/hero-bg.jpg",
    description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, deserunt.",
    path : "/"
    },
]

const ProductList: FC = () => {
        return (
            <section className='my-5 sm:my-20 py-10' >
                <div className=' text-center'>
                    <h2 className='text-center py-5 my-5  text-3xl sm:py-10 font-bold sm:text-4xl'>Portfolio</h2>
                    <p className='text-sm sm:text-2xl md:text-4xl px-5'>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
                </div>
                {/* list  */}
                <div className='mt-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5  sm:px-20  justify-items-center'>

                
                {productList.map((product,index) => (
                    <ProductCard key={ index} imageSrc={product.imageSrc} description={product.description} path={product.path} />
                ))

                }
                </div>
            </section>
        );
}
export default ProductList;