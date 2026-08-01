// import React from "react";
// import { Link } from "react-router-dom";

// function Navbar() {
//   return (
//     <nav className="navbar">
//       <Link className="logo" to="/">
//         🎬 Movie Explorer
//       </Link>

//       <div className="nav-links">
//         <Link to="/">Home</Link>
//         <Link to="/favorites">Favorites</Link>
//       </div>
//     </nav>
//   );
// }

// export default Navbar;


// import { Link, NavLink } from "react-router-dom";

// function Navbar() {
//   return (
//     <header className="navbar">
//       <div className="nav-container">
//         <Link to="/" className="logo">
//           🎬 <span>Movie Explorer</span>
//         </Link>

//         <nav className="nav-links">
//           <NavLink
//             to="/"
//             className={({ isActive }) => (isActive ? "active" : "")}
//           >
//             Home
//           </NavLink>

//           <NavLink
//             to="/favorites"
//             className={({ isActive }) => (isActive ? "active" : "")}
//           >
//             ❤️ Favorites
//           </NavLink>
//         </nav>

//         <a
//           href="https://github.com/"
//           target="_blank"
//           rel="noreferrer"
//           className="github-btn"
//         >
//           GitHub
//         </a>
//       </div>
//     </header>
//   );
// }

// export default Navbar;



import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <header className="navbar">
      <div className="nav-container">
        <div className="logo">
          🎬 <span>Movie Explorer</span>
        </div>

        <nav className="nav-links">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/favorites">❤️ Favorites</NavLink>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;