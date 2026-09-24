import '../styles/navbar.css';

import BatCursor from '../assets/bat.png';
import defaultCursor from '../assets/default_cursor.png'

export default function Navbar({
  batCursorEnabled,
  setBatCursorEnabled
  }) 
  {
  return (
    <nav className="navbar">
      
      <button
          className="cursor_toggle"
          onClick={() => setBatCursorEnabled(!batCursorEnabled)}
        >
          {batCursorEnabled ? "" : ""}
          <img
            src={
              batCursorEnabled
                ? defaultCursor
                : BatCursor
            }
            alt=""
            className="cursor_toggle_icon"
          />
        </button>
      <ul className="navbar-links">

        <li><a href="#about">About</a></li>
        <li><a href="#projects">Projects</a></li>
        {/*<li><a href="#contact">Contact</a></li>*/}
      </ul>
    </nav>
  );
}
