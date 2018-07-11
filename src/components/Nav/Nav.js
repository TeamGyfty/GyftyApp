import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => (
  <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <Link className="navbar-brand" to="/">
      GYFTY
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
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">

        <li className="requests">
          <Link className="requests" to="/requests">
            Requests
          </Link>
        </li>
      </ul>
    </div>
  </nav>
);

export default Nav;