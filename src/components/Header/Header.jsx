import "../Header/Header.scss";
import { Link } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";

const Header = () => {
  return (
    <>
    <section className="header">
    <div className="tabs">
    <Link to={"/"}>
        <div className="tabs__item" onclick="" id="defaultOpen">
          Browse
        </div >
      </Link>

      <Link to={"/library"}>
        <div  className="tabs__item" onclick="">
          Library
        </div >
      </Link>

      <Link to={"/analysis"}>
      <div className="tabs__item" onclick="">
        Analysis
      </div>

      </Link>
      <div className="tabs__searchbar">
  
    </div>
    </div>

 
   
    </section>
    
    </>
  );
};

export default Header;
