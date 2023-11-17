
import ProductsList from "../components/ProductsList";


function Products () {


    return(
        <div className="flex flex-col justify-center">
            <div className="text-5xl text-center m-10">Nos Produits</div>
            <ProductsList/>
        </div>
    )

}


export default Products;