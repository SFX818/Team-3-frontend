import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getCurrentUser, logout } from "../../services/auth.service";
import '../../css/Layout.css'
const Layout = (props) => {
  const [showAdminBoard, setShowAdminBoard] = useState(false);
  const [currentUser, setCurrentUser] = useState(undefined);
  useEffect(() => {
    // grab getCurrentuser from the auth service
    const user = getCurrentUser();
    if (user) {
      // Set current user to the currentUser state
      setCurrentUser(user);
      // Check if the user.roles has "ROLE_ADMIN" return either true or false
      setShowAdminBoard(user.roles.includes("ROLE_ADMIN"));
    }
  }, []);
  const logOut = () => {
    logout()
  }
  return (
    <div>
      <nav className="navbar navbar-expand navbar-dark bg-dark">
        <Link to="/" className="navbar-brand">
          Blue Barracudas Boutique
        </Link>
        <div className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link to={"/home"} className="nav-link">
              Home
            </Link>
          </li>
          {showAdminBoard && (
            <li className="nav-item">
              <Link to={"/admin"} className="nav-link">
                Admin Board
              </Link>
            </li>
          )}
          {currentUser && (
            <li className="nav-item">
              <Link to={"/user"} className="nav-link">
                User
              </Link>
            </li>
          )}
        </div>
        {currentUser ? (
          <div className="navbar-nav ml-auto">
            <li className="nav-item">
              <div className="nav-link dropdown">
                {currentUser.username}
                <div className="dropdown-content">
                  <Link to={"/profile"}>
                    Profile
                  </Link>
                  <Link to={"/product"}>
                    Products
                  </Link>
                  <Link to={"/sell"}>
                    Sell
                  </Link>
                  <Link to={"/settings"}>
                    Settings
                  </Link>
                  <a href="/login" onClick={logOut}>
                    Logout
                  </a>
                </div>
              </div>
            </li>

          </div>
        ) : (
          <div className="navbar-nav ml-auto">
              <li className="nav-item">
                  <Link to={"/login"} className="nav-link">
                      Login
                  </Link>
              </li>
            <li className="nav-item">
                <Link to={'/register'} className="nav-link">
                    Sign Up
                </Link>
            </li>
          </div>
        )}
      </nav>
      <div className="container mt-3">{props.children}</div>
    </div>
  );
};
export default Layout;