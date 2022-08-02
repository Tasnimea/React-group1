import React from 'react';
import './header.css';
import { Link } from 'react-router-dom'

const Header = () => {
    return (

        <nav className="navbar navbar-expand-lg text-light " style={{ backgroundColor: "#ff5a00", color: "white" }}>
            <div className="container row justify-content-between">

                <Link to="/" className="col-2 navbar-brand text-white display-2" ><h1>talabat</h1></Link>

                <button className="col-1 navbar-toggler " type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                    aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" style={{color:"white" ,backgroundColor:"white"}}></span>
                </button>
                <div className="col-8 collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">


                        <li className="nav-item">
                            <Link to="" className="nav-link  text-white " aria-current="page" >Offers</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-white" to='/AllRestrants'>All Restaurents</Link>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link text-white" href="#" >العربية</a>
                        </li>
                    </ul>
                    <form className="d-flex">
                        <Link to="/Login">
                            <button className="btn btn-outline-light hovering" type="submit">Login</button>
                        </Link>
                    </form>
                </div>
            </div>
        </nav>
    );
}

export default Header;
