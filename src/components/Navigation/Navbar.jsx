import {Link} from "react-router-dom"


function Navbar () {

    return(
        <>
        <nav className=" bg-red-200 font-bold shadow-2xl hidden
        md:flex md:flex-row justify-between">

        <span className="text-3xl text-yellow-50 box-border mx-3
        md:my-0">Crewsti Boutique</span>

            <ul className=" md:flex flex-row gap-2 mt-10 text-2xl text-yellow-50
            md:gap-12 md:text3xl md:mb-4 mr-10">
                <li>
                    <Link className=" hover:text-lime-950  rounded-xl shadow-2xl" to="/">Accueil</Link>
                </li>
                <li>
                    <Link className=" hover:text-lime-950  rounded-xl" to="Products">Articles</Link>
                </li>
                <li>
                    <Link className="hover:text-lime-950  rounded-xl" to="Mon Panier"> Mon Panier</Link>
                </li>
                <li>
                    <Link className=" hover:text-lime-950 rounded-xl" to ="Contact"> Contact</Link>
                </li>
            </ul>
             

        </nav>
        </>

    )
}

export default Navbar; 