import {Link} from "react-router-dom"


function Navbar () {

    return(
        <>
        <nav className=" bg-rose-300 font-bold shadow-2xl hidden
        md:flex md:flex-row justify-between">
        <span className="text-right text-3xl text-yellow-800 box-border 
            md:py-10 md:text-left">Ma Boutique</span>
            <ul className=" md:flex flex-row gap-2 mt-20 text-2xl">
                <li>
                    <Link className=" hover:text-yellow-800 rounded-xl border-2 shadow-2xl" to="/">Accueil</Link>
                </li>
                <li>
                    <Link className=" hover:text-yellow-800 rounded-xl border-2 shadow-xl" to="Products">Products</Link>
                </li>
                <li>
                    <Link className="hover:text-yellow-800 rounded-xl border-2 shadow-xl" to="Mon Panier"> Mon Panier</Link>
                </li>
                <li>
                    <Link className=" hover:text-yellow-800 rounded-xl border-2 shadow-xl" to ="Contact"> Contact</Link>
                </li>
            </ul>
             

        </nav>
        </>

    )
}

export default Navbar; 