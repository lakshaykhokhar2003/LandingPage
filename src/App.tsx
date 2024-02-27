import NavBar from "./components/NavBar/NavBar.tsx";
import Heading from "./components/Heading/Heading.tsx";
import Products from "./components/Products/Products.tsx";
import RelatedDeal from "./components/RelatedDeal/RelatedDeal.tsx";
import Signup from "./components/Signup/Signup.tsx";
import Footer from "./components/Footer/Footer.tsx";
import {ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


function App() {

    return (
        <div className='HeroWrapper'>
            <NavBar/>
            <div className="Hero">
                <Heading/>
                <Products/>
                <RelatedDeal/>
                <Signup/>
            </div>
            <Footer/>
            <ToastContainer position="top-right" limit={2} closeOnClick={true} draggable={true} pauseOnHover={true}/>
        </div>
    )
}

export default App
