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
            <section className='my-20 py-10' >
                <div className=' text-center'>
                    <h2 className='font-bold text-6xl py-5'>Portfolio</h2>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
                </div>
                {/* list  */}
                <div className='grid grid-cols-3 my-10 gap-5 mx-auto'>

                
                {productList.map((product,index) => (
                    <ProductCard key={ index} imageSrc={product.imageSrc} description={product.description} path={product.path} />
                ))

                }
                </div>
            </section>
        );
}
export default ProductList;