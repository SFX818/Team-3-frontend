import React, { useState, useEffect } from "react";
import M from "materialize-css/dist/js/materialize.min.js";
import { Link } from "react-router-dom";
import { getCurrentUser, logout } from "../../services/auth.service";
import '../../css/Layout.css'
const Layout = (props) => {

  const [showAdminBoard, setShowAdminBoard] = useState(false);
  const [currentUser, setCurrentUser] = useState(undefined);

  useEffect(() => {
    // allows for dropdown to work either when logged in or logged out (has to be in useEffect)
    const dropdowns = document.querySelectorAll('.dropdown-trigger')
    for (let i = 0; i < dropdowns.length; i++){
      M.Dropdown.init(dropdowns[i])
    }
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
      <nav>
        {currentUser ? (
          <div>
            <ul id="dropdown1" className="dropdown-content">
              <li><a href="/profile">Profile</a></li>
              <li><a href="/product">Products</a></li>
              <li><a href="/sell">Sell</a></li>
              <li><a href="/settings">Settings</a></li>
              <li className="divider"></li>
              <li><a href="/login" onClick={logOut}>Logout</a></li>
            </ul>
            <nav>
              <div className="nav-wrapper cyan darken-3">
                  <a href="/" className="brand-logo center">Blue Barracudas Boutique</a>
                <ul className="right hide-on-med-and-down">
                  <li><a href="/">Home</a></li>
                  {/* commenting out user for now as it was messing up materialize dropdown navbar - if we need the /user route, we can add it under the dropdown options */}
                  {/* <li><a href="/user">User</a></li> */}
                  
                  <li><a className="dropdown-trigger" href="/profile" data-target="dropdown1">{currentUser.username}<i className="material-icons right">arrow_drop_down</i></a></li>
                </ul>
              </div>
            </nav>
          </div>
        ) : (
          <div>
            <ul id="dropdown2" className="dropdown-content">
              <li><a href="/login">Login</a></li>
              <li><a href="/register">Sign Up</a></li>
            </ul>
          <nav>
            <div className="nav-wrapper cyan darken-3">
              <a href="/" className="brand-logo center">Blue Barracudas Boutique</a>
              <ul className="right hide-on-med-and-down">
                <li><a href="/">Home</a></li>
                {/* <li><a href="/user">User</a></li> */}
                
                <li><a className="dropdown-trigger" href="/login" data-target="dropdown2">Get Started<i className="material-icons right">arrow_drop_down</i></a></li>
              </ul>
            </div>
          </nav>
        </div>
        )}
      </nav>
    <div className="container mt-3">{props.children}</div>
    </div>
  );
};
export default Layout;