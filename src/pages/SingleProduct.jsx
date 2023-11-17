import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";




function SingleProduct () {

    const {id} = useParams();
    const [products, setProducts] = useState()


    useEffect (() => {
        fetch ('https://ioayoub.fr/api/eshop')
            .then((response) => response.json())
            .then((data) => setProducts(data))
            .catch((err)=>console.error(err))
    }, []);

    return(
        <div className="flex flex-row-reverse justify-center align-middle border-2 shadow-xl m-52">
            <img className="max-w-32 mx-auto my-28 mt-48" src={products && products[id].picture_resized}/>
            <div className="flex flex-col justify-center mx-auto gap-10">
                <div className="text-4xl font-medium mx-auto mt-48">{products && products[id].name}</div>
                <div className=" text-2xl mr-10 mt-28"> { products&& products[id].description} </div>
                <div className="flex flex-col gap-10">
                    <div className="mt-28 text-end text-3xl"> $ {products&& products[id].price} </div>
                    <div className="mb-20 text-end">ADD TO CART</div>

                </div>

            </div>


        </div>

    )
}

export default SingleProduct; 