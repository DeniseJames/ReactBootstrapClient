import React from 'react';
import { Link } from 'react-router-dom';  // Importing the Link component
import logoPath from '../img/Logo.png'; 

const Navbar: React.FC = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light">
            <Link className="navbar-brand logo2x" to="/">   {/* Updated to Link */}
                <img src={logoPath} alt="Icon" />
            </Link>
            <button 
                className="navbar-toggler" 
                type="button" 
                data-toggle="collapse" 
                data-target="#navbarNav" 
                aria-controls="navbarNav" 
                aria-expanded="false" 
                aria-label="Toggle navigation"
            >
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarNav">
                <div className="flex-grow-1 d-flex justify-content-between nav-links-container">
                    <Link className="nav-link mr-5 text-decoration-none" to="/">Home</Link>  {/* Updated to Link */}
                    <Link className="nav-link mr-5 text-decoration-none" to="/features">Features</Link>  {/* Updated to Link */}
                    <Link className="nav-link mr-5 text-decoration-none" to="/pricing">Pricing</Link>  {/* Updated to Link */}
                    <Link className="nav-link mr-5 text-decoration-none" to="/support">Support</Link>  {/* Updated to Link */}
                </div>
                <div>
                    <button className="btn btn-outline-primary mr-2 sign-button" type="submit">Log In</button>
                    <button className="btn btn-primary try-button" type="submit">Register</button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
