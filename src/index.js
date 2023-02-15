import {createRoot} from "react-dom/client"
import '../src/style.css';

const appElement = document.getElementById("app");
const root = createRoot(appElement);
import Header from "./Components/Header";
import Main from "./Components/Main";
import Footer from "./Components/Footer";
//state setup
// import { useState } from "react";


const HomeComponent = () =>{
    //useState goes here
    //Example: const[getter, setter] = useState(DefaultStateValueHere)
    return(
        //callback function.
        //use <tag onlick={callbackFunction}>  
        <section>
            <Header />
            <Main />
            <Footer />
        </section>
   )
}
root.render(<HomeComponent />)
