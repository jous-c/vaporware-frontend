import "../Header/Header.scss";
import { Link } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";

const Header = () => {
  return (
    <>
    <section className="header">
    <div className="tabs">
    <Link to={"/"} style={{ textDecoration: 'none' }}>
        <div className="tabs__item" id="defaultOpen">
          Browse
        </div >
      </Link>

      <Link to={"/library"} style={{ textDecoration: 'none' }} >
        <div  className="tabs__item" >
          Library
        </div >
      </Link>

      <div className="tabs__searchbar">
  
    </div>
    </div>

 
   
    </section>
    
    </>
  );
};

export default Header;
