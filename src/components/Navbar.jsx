import { useState, useRef } from "react";
import { useOnClickOutside } from "../useOnClickOutside";
import { NavLink } from "react-router-dom";
import { useAuthContext } from '../context/AuthContext';
import React from 'react';
import { useNavigate } from 'react-router-dom';


const links = [
  { path: '/', text: 'Home' },
  { path: 'about', text: 'About' },
  { path: 'profile', text: 'Profile' },
  { path: 'login', text: 'Login' },
];
const Navbar = () => {
  const { user, logout } = useAuthContext();
  const navigate = useNavigate();
  const handleLogout = () => {
    logout();
    navigate('/login');
  };
  const [dropdown, setDropdown] = useState(false);
  const ref = useRef();
  useOnClickOutside(ref, dropdown, () => setDropdown(false));
  return (
    <>
    <nav className="navbar">
      <ul>
      {links.map((link) => {
        return (
          <React.Fragment key={link.text}>
            {link.path === 'login' ? (
              !user && (
                <li>
                  <NavLink to={link.path}>{link.text}</NavLink>
                </li>
              )
            ) : (
              <li>
                <NavLink to={link.path}>{link.text}</NavLink>
              </li>
            )}
          </React.Fragment>
        );
      })}
        <li ref={ref}>
          <button onClick={() => setDropdown((prev) => !prev)}>
            Services <span>&#8595;</span>
          </button>
          {dropdown && (
            <ul>
              <li>Design</li>
              <li>Development</li>
            </ul>
          )}
        </li>
      </ul>
    </nav>
    {user && (
      <div className="logout">
        <p>{user}</p>
        {<button onClick={handleLogout}>Logout</button>}
      </div>
    )}
    </>
  );
};
export default Navbar;
