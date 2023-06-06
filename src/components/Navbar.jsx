import React, { useState, useRef } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import useOnClickOutside from '../useOnClickOutside';
import { useAuthContext } from '../context/AuthContext';

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
          {links.map((link) => (
            <React.Fragment key={link.text}>
              {(() => {
                if (link.path === 'login' && !user) {
                  return (
                    <li>
                      <NavLink to={link.path}>{link.text}</NavLink>
                    </li>
                  );
                } if (link.path === 'profile' && user) {
                  return (
                    <li>
                      <NavLink to={link.path}>{link.text}</NavLink>
                    </li>
                  );
                }
                return (
                  <li>
                    <NavLink to={link.path}>{link.text}</NavLink>
                  </li>
                );
              })()}
            </React.Fragment>
          ))}
          <li ref={ref}>
            <button type="button" onClick={() => setDropdown((prev) => !prev)}>
              Services
              {' '}
              <span>&#8595;</span>
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
        <button type="button" onClick={handleLogout}>Logout</button>
      </div>
      )}
    </>
  );
};
export default Navbar;
