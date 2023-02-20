const Header = () => {
    return(
        <div>
            <h1 id = "name">Talal Khaled Mahmoudi</h1>
            <div className="header-and-main">
                <header>
                    {/* <h1 id = "name">Talal Khaled Mahmoudi</h1> */}
                    <nav className = "nav"> 
                        <span className = "header"> <a  id ="home" href="index.html">HOME</a> </span>
                        <span className = "header"> <a id="about" href="about.html">ABOUT</a> </span>
                        <span className = "header"> <a id="portfolio" href="portfolio.html">PORTFOLIO</a> </span>
                        {/* <span class = "header">RESUME</span> */}
                    </nav>    
                </header>
            </div>
        </div>    
    )
} 
export default Header;
