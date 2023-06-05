import { useState, useRef } from "react";
import { useOnClickOutside } from "../useOnClickOutside";
import { NavLink } from "react-router-dom";
const links = [
  { path: '/', text: 'Home' },
  { path: 'about', text: 'About' },
  { path: 'profile', text: 'Profile' },
  { path: 'login', text: 'Login' },
];
const Navbar = () => {
  const [dropdown, setDropdown] = useState(false);
  const ref = useRef();
  useOnClickOutside(ref, dropdown, () => setDropdown(false));
  return (
    <nav>
      <ul>
        {links.map((link) => {
          return (
            <li key={link.text}>
              <NavLink to={link.path}>{link.text}</NavLink>
            </li>
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
  );
};
export default Navbar;
