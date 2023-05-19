import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProviders";
import { HiOutlineMenu } from "react-icons/hi";

const Header = () => {
  const { user } = useContext(AuthContext);
  return (
    <div className="bg-[#5bd9d9] sticky top-0 left-0 z-50 shadow">
      <nav className="container mx-auto ">
      <div className="navbar  ">
        <div className="flex-1">
         <span className="logo-style text-2xl lg:text-3xl font-extrabold ">Queen Toy</span>
        </div>
        <div className="flex-none">
          <div className=" hidden lg:block">
            <ul className="flex font-bold gap-x-8">

              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "text-[#ff6799] bg-transparent" : ""
                  }
                  to="/home"
                >
                  Home
                </NavLink>
              </li>

              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "text-[#ff6799] bg-transparent" : ""
                  }
                  to="/register"
                >
                  Register
                </NavLink>
              </li>

              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "text-[#ff6799] bg-transparent" : ""
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
                <HiOutlineMenu className="text-2xl" tabIndex={0}></HiOutlineMenu>
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
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "text-[#ff6799] bg-transparent" : ""
                  }
                  to="/home"
                >
                  Home
                </NavLink>
              </li>

              <li>
                <Link to='/profile'className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </Link>
              </li>

              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "text-[#ff6799] bg-transparent" : ""
                  }
                  to="/register"
                >
                  Register
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "text-[#ff6799] bg-transparent" : ""
                  }
                  to="/login"
                >
                  Login
                </NavLink>
              </li>
              <li>
                <a>Logout</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
    </div>
  );
};

export default Header;
