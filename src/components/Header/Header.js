import "./header.css"
const Header = () => {
    return <header>
      <div className="container">
        <div className="d-flex justify-content-between align-items-center">
     <h1>
     <a className="logo text-decoration-none" href="#">Where in the world?</a>
      </h1> 
      <button type="button" className="btn btns text-black fw-bold fs-5">Dark Mode</button>
      </div>
        </div>
      </header>
  }

  export default Header;