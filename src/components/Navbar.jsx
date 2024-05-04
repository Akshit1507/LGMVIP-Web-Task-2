import React from "react";
const Navbar = ({ handleClick }) => {
  return (
    <nav className="navbar bg-body-tertiary">
      <div className="container-fluid">
        <span className="navbar-brand mb-0 h1">Lets Grow More</span>
        <center>
          <span className="navbar-brand mb-0 h1">Web Task 2</span>
        </center>
        <button
          className="btn btn-outline-success"
          onClick={() => {
            handleClick();
          }}
          type="button"
        >
          Get Users
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
