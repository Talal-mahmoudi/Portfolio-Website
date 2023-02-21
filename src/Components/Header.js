import { Link } from "react-router-dom";

const Header = () => {
    return(
        <div>
            {/* <h1 id = "name">Talal Khaled Mahmoudi</h1> */}
            <div  id="headerAndMain"className="header-and-main">
                <header>
                    <h1 id = "name">Talal Khaled Mahmoudi</h1>
                    <nav className = "nav"> 
                        <Link to="/" className="header" id="home">HOME</Link>
                        <Link to="/About" className="header" id="about">ABOUT</Link>
                        <Link to="/Portfolio" className="header" id="portfolio">PORTFOLIO</Link>
                        {/* <span className = "header"> <a  id ="home" href="index.html">HOME</a> </span>
                        <span className = "header"> <a id="about" href="about.html">ABOUT</a> </span>
                        <span className = "header"> <a id="portfolio" href="portfolio.html">PORTFOLIO</a> </span> */}
                        {/* <span class = "header">RESUME</span> */}
                    </nav>    
                </header>
            </div>
        </div>    
    )
} 
export default Header;
