import { Link } from "react-router-dom";
import '../../App.css';
const Navbar = () => (
  <nav>
     <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
          <div className="container">
            {/* <Link className="navbar-brand logo_name" to="/">Patashala</Link> */}
            <button 
              className="navbar-toggler" 
              type="button" 
              data-bs-toggle="collapse" 
              data-bs-target="#collapsibleNavbar"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse menu-bar" id="collapsibleNavbar">
              <ul className="navbar-nav custom__navbar">
                <li className="nav-item">
                  <Link className="nav-link" to="/schoolList">Schools Near Me</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/addschool">Add Your Schools</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link login_new" to="/login">Login</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link signup_new" to="/signup">Sign Up</Link>
                </li>
              </ul>
              <form className="d-flex">
                <input 
                  className="form-control me-2 form_new" 
                  type="text" 
                  placeholder="Search" 
                />
                <button className="btn btn-primary search_btn" type="button">Search</button>
              </form>
            </div>
          </div>
        </nav>
  </nav>
);

export default Navbar;