import ProductsList from "./ProductsList";
import {Link} from 'react-router-dom';

function SingleProductComp
 ({category, name, description, rating, price, image,id}) {


    return (
        
        <Link to={`/products/${id-1}`} >
            <div className=" border-2 rounded-lg shadow-lg pb-9  ">
                <img className=' shadow-lg' src={image} ></img> 
                <div className="mt-10 mb-5 text-2xl font-semibold ml-3 "> {name}</div>
                <div className="ml-4 text-lg md:text-xl font-thin" >{description}</div>
                <div className="flex flex-row justify-between ml-5 mr-10 mt-10
                md:mt-20">
                    <div className="underline text-gray-500">#{category}</div>
                    <div className="font-medium text-lg
                    md:text-xl">$ {price} </div>
                </div>

            </div>
        </Link>
    )
}

export default SingleProductComp
;