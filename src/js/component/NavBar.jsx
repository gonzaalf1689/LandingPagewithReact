import React from "react";

// a function component 
const NavBar = () =>{
    return (
        <nav className="navbar navbar-expand-lg" style={{ position: 'fixed', top: 0, left: 0, width: '100%', backgroundColor: 'black', zIndex: 1000}}>
            <div className="container-fluid ms-5 me-5">
                <a className="navbar-brand" href="#" style={{ color: 'white' }}>Start Bootstrap</a>
                <button className="navbar-toggler" style={{ color: 'white' }} type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse d-flex" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <a className="nav-link active" aria-current="page" href="#" style={{ color: 'white' }}>Home</a>
                        <a className="nav-link" href="#" style={{ color: 'gray' }}>About</a>
                        <a className="nav-link" href="#" style={{ color: 'gray' }}>Services</a>
                        <a className="nav-link" href="#" style={{ color: 'gray' }}>Contact</a>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default NavBar;
