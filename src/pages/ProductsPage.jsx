
import ProductsList from "../components/ProductsList";


function Products () {


    return(
        <div className="flex flex-col justify-center mx-1">
            <div className=" text-3xl font-medium mt-10
            md:text-7xl md:mt-24 md:text-center">Articles</div>
            <ProductsList/>
        </div>
    )

}


export default Products;