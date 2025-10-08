import { NavLink } from "react-router";
import Logo from "../assets/logo.png";
import { FaGithub } from "react-icons/fa";

const Header = () => {
  return (
    <div className="shadow">
      <div className="navbar w-11/12 mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn text-white bg-gradient-to-br from-[#632EE3] to-[#9F62F2] lg:hidden"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content text-white font-semibold bg-gradient-to-br from-[#632EE3] to-[#9F62F2] rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/apps">Apps</NavLink>
              </li>
              <li>
                <NavLink to="/installation">Installation</NavLink>
              </li>
            </ul>
          </div>
          <NavLink
            to="/"
            className="text-xl flex items-center gap-2 ml-2 lg:ml-0"
          >
            <img className="w-[40px]" src={Logo} alt="" />{" "}
            <span className="text-xl font-extrabold bg-gradient-to-br from-[#632EE3] to-[#9F62F2] text-transparent bg-clip-text">
              HERO.IO
            </span>
          </NavLink>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="flex items-center gap-2 px-1">
            <li className="px-2 py-1 hover:bg-gradient-to-br from-[#632EE3] to-[#9F62F2] hover:rounded-md hover:text-white">
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "font-bold bg-gradient-to-br from-[#632EE3] to-[#9F62F2] text-transparent bg-clip-text hover:text-white  "
                    : ""
                }
                to="/"
              >
                Home
              </NavLink>
            </li>
            <li className="px-2 py-1 hover:bg-gradient-to-br from-[#632EE3] to-[#9F62F2] hover:rounded-md hover:text-white">
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "font-bold bg-gradient-to-br from-[#632EE3] to-[#9F62F2] text-transparent bg-clip-text hover:text-white  "
                    : ""
                }
                to="/apps"
              >
                Apps
              </NavLink>
            </li>
            <li className="px-2 py-1 hover:bg-gradient-to-br from-[#632EE3] to-[#9F62F2] hover:rounded-md hover:text-white">
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "font-bold bg-gradient-to-br from-[#632EE3] to-[#9F62F2] text-transparent bg-clip-text hover:text-white  "
                    : ""
                }
                to="/installation"
              >
                Installation
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <NavLink
            target="_blank"
            to="https://github.com/devTechware"
            className="btn text-white bg-gradient-to-br from-[#632EE3] to-[#9F62F2]"
          >
            <FaGithub />
            Contribute
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Header;
