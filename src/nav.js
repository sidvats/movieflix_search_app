import React, { useState } from "react";
const Nav = (props) => {
  let [searchval,setsearchval]=useState("");
  const triggersearch=(event)=>{
    props.parentCallback(searchval);
    event.preventDefault();
  }
  return (
    <nav className="navbar navbar-expand-lg bg-dark ">
      <div className="container-fluid ">
        <a className="navbar-brand text-white mx-3" href="#">
          Movieflix
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse " id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a
                className="nav-link active text-white"
                aria-current="page"
                href="#"
              >
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="#">
                Link
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle text-white"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Dropdown
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <a className="dropdown-item " href="#">
                    Action
                  </a>
                </li>
                <li>
                  <a className="dropdown-item " href="#">
                    Another action
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider " />
                </li>
                <li>
                  <a className="dropdown-item " href="#">
                    Something else here
                  </a>
                </li>
              </ul>
            </li>
          </ul>
          <form className="d-flex" onSubmit={triggersearch} role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              value={searchval}
              onChange={(e)=>{
                setsearchval(e.target.value);
              }}
            />
            <button className="btn btn-outline-success" type="submit"            >
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
};
export default Nav;
