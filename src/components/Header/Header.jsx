import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProviders";
import { HiOutlineMenu } from "react-icons/hi";

const Header = () => {
  const { user } = useContext(AuthContext);
  return (
    <nav className="container mx-auto ">
      <div className="navbar shadow-lg bg-base-100">
        <div className="flex-1">
          <span className="text-2xl font-bold logo-style">Queen Toy</span>
        </div>
        <div className="flex-none">
          <div>
            <ul className="flex font-bold gap-x-8">

              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "text-red-500 bg-transparent" : ""
                  }
                  to="/home"
                >
                  Home
                </NavLink>
              </li>

              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "text-red-500 bg-transparent" : ""
                  }
                  to="/register"
                >
                  Register
                </NavLink>
              </li>

              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "text-red-500 bg-transparent" : ""
                  }
                  to="/login"
                >
                  Login
                </NavLink>
              </li>

            </ul>
          </div>

          <div className="dropdown dropdown-end">
            <div className="flex items-center justify-center">
              <span className="d-block lg:hidden">
                <HiOutlineMenu tabIndex={0}></HiOutlineMenu>
              </span>
              {/* -----------User Image ---------- */}
              <div
                className="hidden lg:block tooltip tooltip-bottom tooltip-success "
                data-tip="Shourav"
              >
                <div className="avatar online mx-2">
                  <div className="w-12 rounded-full">
                    <img src="https://rb.gy/3o5sr" />
                  </div>
                </div>
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow-lg bg-base-100 rounded-box w-52"
            >
              <div className="avatar online mx-auto">
                <div className="w-12 rounded-full">
                  <img src="https://rb.gy/3o5sr" />
                </div>
              </div>
              <li>
                <a className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </a>
              </li>
              <li>
                <Link to="/register">Register</Link>
              </li>
              <li>
                <a>Logout</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
