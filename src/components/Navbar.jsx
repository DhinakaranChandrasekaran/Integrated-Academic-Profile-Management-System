import React, { useState } from "react";

const Navbar = () => {
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleDropdown = (menu) => {
    setOpenDropdown(openDropdown === menu ? null : menu);
  };

  const handleMouseLeave = () => {
    setOpenDropdown(null);
  };

  return (
    <>
      <nav className="navbar" onMouseLeave={handleMouseLeave}>
        <ul className="navList">
          <li className="navItem">
            <a href="#" className="link">Home</a>
          </li>

          <li className="navItem" onMouseEnter={() => toggleDropdown("about")}>
            <a href="#" className="link">
              About Us {openDropdown === "about" ? <span>&#9650;</span> : <span>&#9660;</span>}
            </a>
            {openDropdown === "about" && (
              <ul className="dropdown">
                <li className="dropdownItem"><a href="#">Chairman</a></li>
                <li className="dropdownItem"><a href="#">Principal</a></li>
              </ul>
            )}
          </li>

          <li className="navItem">
            <a href="#" className="link">Departments</a>
          </li>

          <li className="navItem">
            <a href="#" className="link">Placement</a>
          </li>

          <li className="navItem" onMouseEnter={() => toggleDropdown("student")}>
            <a href="#" className="link">
              Student Profile {openDropdown === "student" ? <span>&#9650;</span> : <span>&#9660;</span>}
            </a>
            {openDropdown === "student" && (
              <ul className="dropdown">
                <li className="dropdownItem"><a href="#">View Profile</a></li>
                <li className="dropdownItem"><a href="#">Toppers</a></li>
                <li className="dropdownItem"><a href="#">Update Profile</a></li>
                <li className="dropdownItem"><a href="#">Search Students</a></li>
              </ul>
            )}
          </li>
        </ul>
      </nav>

      <style>{`
        .navbar {
          background-color: #f0f8f0;
          border-bottom: 1px solid #ddd;
          padding: 0 20px;
          font-family: Arial, sans-serif;
        }

        .navList {
          list-style: none;
          display: flex;
          margin: 0;
          padding: 0;
          flex-wrap: wrap;
        }

        .navItem {
          position: relative;
          padding: 20px 25px;
          cursor: pointer;
          display: flex;
          align-items: center;
        }

        .link {
          text-decoration: none;
          color: #333;
          font-weight: 600;
          text-transform: uppercase;
          font-size: 14px;
        }

        .dropdown {
          position: absolute;
          top: 60px;
          left: 0;
          background-color: #fff;
          border: 1px solid #ddd;
          box-shadow: 0 2px 8px rgba(0,0,0,0.1);
          list-style: none;
          margin: 0;
          padding: 10px 0;
          min-width: 180px;
          z-index: 1000;
        }

        .dropdownItem {
          padding: 10px 20px;
        }

        /* Responsive styles */
        @media (max-width: 768px) {
          .navList {
            flex-direction: column;
          }

          .navItem {
            width: 100%;
            justify-content: space-between;
            padding: 15px 10px;
          }

          .dropdown {
            position: static;
            box-shadow: none;
            border: none;
            padding: 0;
          }

          .dropdownItem {
            padding: 10px 20px;
            background: #f9f9f9;
            border-top: 1px solid #ddd;
          }
        }
      `}</style>
    </>
  );
};

export default Navbar;
