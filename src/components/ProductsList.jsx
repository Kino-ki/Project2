import { useEffect } from "react";
import {useState} from "react";
import SingleProductComp from "./SingleProductComp";

function ProductsList () {

    const [products, setProducts] = useState();
    const [filteredProducts, setFilteredProducts] = useState();
    const [filtered, setFiltered] = useState('All');


    useEffect (() => {
        fetch ('https://ioayoub.fr/api/eshop')
            .then((response) => response.json())
            .then((data) => setProducts(data))
            .catch((err)=>console.error(err))
    }, []);
    // console.log(products);
    useEffect(() => {
        if(filtered !=='All') {
            setFilteredProducts(products&& products.filter((p) =>p.category===filtered));
        } else { 
            setFilteredProducts(products);
        }
    }, [filtered, products]);
 
    const handleFilter = (e) => {
        // console.log(e.target.value);
        setFiltered(e.target.value);
    };
    console.log(products)

    // filteredProducts&&  console.log(filteredProducts);
    // filtered && console.log(filtered);



    return (
        <>
            <div className="flex flex-row justify-center mt-10 mb-10 p-4 border-e-cyan-400">
                Categories: 
            <select className="text-center font-medium border-orange-900 border-2 rounded ml-10" name='select category' onChange={handleFilter}>
                <option value='All' >-All</option>
                <option value='Mode' >-Mode</option>
                <option value='Maison' >-Maison</option>
                <option value='Sports'> -Sport</option>
                <option value='Électronique' >-Électronique</option>
            </select>
            </div>
            <div className="flex flex-wrap gap-8 justify-center mb-56" >
            { 
            filteredProducts && filteredProducts.map((p)=> (<SingleProductComp 
            key={p.id}
            id={p.id}
            category = {p.category} 
            name={p.name}
            description = {p.description}
            rating = {p.rating}
            price = {p.price}
            image = {p.picture_resized}
            product={p} 
            />))
            }
        </div>

        </>
    )
}

export default ProductsList;