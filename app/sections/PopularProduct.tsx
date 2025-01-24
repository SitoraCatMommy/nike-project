import PopularProroductCard from "../components/PopularProroductCard";
import { popularProductProps, popularProducts } from "../constants/Index";


const PopularProroduct: React.FC = () => {
    return (
        <section id='popularProducts' className="max-container max-sm:mt-12">
            <div className="flex flex-col justify-start gap-5">
                <h2 className="text-4xl font-sans font-bold">Our <span className="text-red-700">Popular</span>  Products</h2>
                <p className='lg:max-w-lg mt-2 font-sans text-gray-700'>
          Experience top-notch quality and style with our sought-after
          selections. Discover a world of comfort, design, and value
                </p>
            </div>
            <div className="mt-16 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-6 gap-14">
                {popularProducts.map((product:popularProductProps) => (
                    <PopularProroductCard 
                    key={product.name}
                    {...product}/>
                ))}
            </div>
        </section>
    );
};

export default PopularProroduct;