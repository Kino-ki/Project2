import {Link} from "react-router-dom"

function Navbar () {

    return(
        <nav className="flex flex-row justify-between bg-rose-300 bg-cover py-2
        font-bold">
            <span className="block my-auto, my-6 ml-28 text-5xl py-10 text-yellow-800 ">Ma Boutique</span>
            <ul className=" flex flex-row gap-28 mt-20 pl-48 text-2xl mr-24">
                <li>
                    <Link className=" hover:text-yellow-800 rounded-xl border-2 shadow-2xl p-8" to="/">Accueil</Link>
                </li>
                <li>
                    <Link className=" hover:text-yellow-800 rounded-xl border-2 shadow-xl p-8" to="Products">Products</Link>
                </li>
                <li>
                    <Link className=" hover:text-yellow-800 rounded-xl border-2 shadow-xl p-8" to ="Contact"> Contact</Link>
                </li>
            </ul>
             

        </nav>
    )
}

export default Navbar; 