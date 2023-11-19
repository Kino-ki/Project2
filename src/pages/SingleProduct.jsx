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
        <div className="flex items-center justify-center align-middle">
        {/* div du titre pour la version mobile */}
            <div className="text-2xl font-medium mt-10 md:hidden">{products && products[id].name}</div>
            {/* div en flex row pour image d'un coté et texte de l'autre aka BIG CARD DIV */}
            <figure className=" mx-1
            md:flex md:flex-row-reverse md:align-middle md:rounded-lg
            md:border-gray-300 md:border md:shadow-2xl md:max-w-4xl md:max-h-96 md:mt-32">
                <img className=" rounded-lg mt-16
                md:w-2/4 md:mt-0  " src={products && products[id].picture_resized}/>
                {/* div de la partie texte en flex-col */}
                <figcaption className="flex flex-col justify-center mx-auto gap-10
                md:mx-5 mb-16">
                    <div className="md:text-4xl md:font-medium md:mt-10 hidden">{products && products[id].name}</div>
                    <div className=" mt-14 text-lg
                    md:text-xl md:mr-10 md:mt-20"> { products&& products[id].description} </div>
                    {/* div pour le prix et CART */}
                    <div className="flex flex-col gap-5
                    md:gap-10">
                        <div className="text-end text-3xl
                        "> $ {products&& products[id].price} </div>

                        <div className="text-start
                        md">ADD TO CART</div>

                    </div>

                </figcaption>


            </figure>

        </div>

    )
}

export default SingleProduct; 