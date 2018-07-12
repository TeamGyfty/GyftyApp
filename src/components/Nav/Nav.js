import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => (
  <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <Link className="navbar-brand" to="/">
      GYFTY
    </Link>

    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">

        <li className="requests">
          <Link className="requests" to="/requests">
            Requests
          </Link>
        </li>
        <li className="new-request">
          <Link className="new-request" to="/home">
            Make a Request
          </Link>
        </li>
      </ul>
    </div>
  </nav>
);

export default Nav;