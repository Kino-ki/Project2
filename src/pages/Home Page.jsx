import {Link} from 'react-router-dom';


function HomePage () {



    return(
        <>
        <div className="flex flex-col justify-center text-center mt-20 p-50 border-2 mx-6 md:ml-56 md:mr-56 shadow-xl border-fuchsia-200 border-round box-content"> 
            <div className="mt-16 mb-40  text-3xl"> Bienvenue dans la première boutique en ligne </div>
            <div className="text-2xl mb-16"> Cliquez {<Link className='hover:text-blue-600 font-semibold' to="/products">ici</Link>} pour choisir un produit</div>
        </div>
        </>
    )
}


export default HomePage;
