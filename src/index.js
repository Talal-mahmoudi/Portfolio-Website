import {createRoot} from "react-dom/client"
import '../src/style.css';
import { BrowserRouter, Routes, Route, Link} from "react-router-dom"

const appElement = document.getElementById("app");
const root = createRoot(appElement);
import Header from "./Components/Header";
// import Main from "./Components/Main";
import Footer from "./Components/Footer";
import {Main, About, Portfolio} from "./Components";

//state setup
// import { useState } from "react";


const HomeComponent = () =>{
    //useState goes here
    //Example: const[getter, setter] = useState(DefaultStateValueHere)
    
    return(
        <BrowserRouter>
            <section id="parent-element-section">
                <Header />
                <Routes>
                    <Route path="/" element={<Main />} />
                    <Route path="/About" element={<About />}/>
                    <Route path="/Portfolio" element={<Portfolio />} />
                    {/* <Main /> */}
                </Routes>
                <Footer />
            </section>
        </BrowserRouter>
    )
}

root.render(<HomeComponent />)