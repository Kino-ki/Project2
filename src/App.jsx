import { Outlet } from "react-router-dom";
import Navbar from "./components/Navigation/Navbar";
import Footer from "./components/Footer";
import BottomNav from "./components/Navigation/BottomNavBar";


function App() {


  return (
    <div className="flex flex-col min-h-screen">
    <Navbar/>
    <main className="flex-grow min-w-full">
     <Outlet/>
    </main>

    <BottomNav/>

    <Footer/>
    </div>
  )
}

export default App;
