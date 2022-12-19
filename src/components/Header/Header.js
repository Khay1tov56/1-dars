import "./header.css"
import { NavLink, Link, useParams } from "react-router-dom";

const Header = () => {
    return <header>
      <div className="container">
        <div className="d-flex justify-content-between align-items-center">
     <h1>
     <Link className="logo text-decoration-none" to="/">Where in the world?</Link>
      </h1> 
      <button type="button" className="btn btns text-black fw-bold fs-5">Dark Mode</button>
      </div>
        </div>
      </header>
  }

  export default Header;