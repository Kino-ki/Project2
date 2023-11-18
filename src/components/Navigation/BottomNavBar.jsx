import { Link } from "react-router-dom";

function BottomNav () {

    return (
        <>
        <nav className=" bg-rose-300 font-thin shadow-2xl insert-x-0 bottom-0 flex flex-row fixed min-w-full
        md:hidden">
        {/* <span className="text-right text-3xl text-yellow-800">Ma Boutique</span> */}
            <ul className=" flex flex-row justify-between align-middle p-3 min-w-full">
                <li>
                    <Link className=" hover:text-yellow-800" to="/">Accueil</Link>
                </li>
                <li>
                    <Link className=" hover:text-yellow-800" to="Products">Articles</Link>
                </li>
                <li>
                    <Link className="hover:text-yellow-800" to="Mon Panier"> Mon Panier</Link>
                </li>
                <li>
                    <Link className=" hover:text-yellow-800" to ="Contact"> Contact</Link>
                </li>
            </ul>
             

        </nav>
        </>
    )
}

export default BottomNav;
