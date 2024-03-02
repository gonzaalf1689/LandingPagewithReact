import React, { useState } from "react";

const NavBar = () => {
  const [isCollapsed, setIsCollapsed] = useState(true);

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <nav
      className="navbar navbar-expand-lg"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        backgroundColor: "#555",
        zIndex: 1000,
      }}
    >
      <div className="container-fluid ms-5 me-5">
        <a className="navbar-brand col-9" href="#" style={{ color: "white" }}>
          Start Bootstrap
        </a>
        <button
          className="navbar-toggler"
          style={{ color: "white" }}
          type="button"
          onClick={toggleCollapse}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`collapse navbar-collapse ${isCollapsed ? "" : "show"}`}>
          <div className="navbar-nav col-3"> {/* Applied ml-auto class here */}
            <a
              className="nav-link active"
              aria-current="page"
              href="#"
              style={{ color: "white" }}
            >
              Home
            </a>
            <a className="nav-link" href="#" style={{ color: "white" }}>
              About
            </a>
            <a className="nav-link" href="#" style={{ color: "white" }}>
              Services
            </a>
            <a className="nav-link" href="#" style={{ color: "white" }}>
              Contact
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
