import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProviders";
import { HiOutlineMenu } from "react-icons/hi";
import Logo from "../../assets/images/logo/logo-medium.png";
import Swal from "sweetalert2";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);


  const handleLogOut = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You Want to logout!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
    cancelButtonColor: "#007700",
      confirmButtonText: "Yes, Logout",
    }).then((result) => {
      if (result.isConfirmed) {
        logOut()
          .then((result) => {})
          .catch((error) => {
            console.log(error);
          });
          Swal.fire({
            title: "Done !",
            text: "Log out successful",
            icon: "success",
          });
      }
    });
  };
  return (
    <div className="bg-[#5bd9d9]  sticky top-0 left-0 z-50 shadow-xl rounded-0 lg:rounded-full">
      <nav className="container mx-auto ">
        <div className="navbar  ">
          <div className="flex-1">
            <div className="flex  items-end gap-2">
              {" "}
              <img src={Logo} alt="" className="w-10 lg:w-12 drop-shadow-lg" />
              <span className="logo-style text-2xl lg:text-3xl font-extrabold ">
                Queen Toy
              </span>
            </div>
          </div>
          <div className="flex-none">
            <div className=" hidden lg:block">
              <ul className="flex font-bold gap-x-6">
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
                    to="/all_toys"
                  >
                    All Toys
                  </NavLink>
                </li>

                {user && (
                  <li>
                    <NavLink
                      className={({ isActive }) =>
                        isActive ? "text-[#ff6799] bg-transparent" : ""
                      }
                      to="/my_toys"
                    >
                      My Toys
                    </NavLink>
                  </li>
                )}
                {user && (
                  <li>
                    <NavLink
                      className={({ isActive }) =>
                        isActive ? "text-[#ff6799] bg-transparent" : ""
                      }
                      to="/add_a_toy"
                    >
                      Add A Toy
                    </NavLink>
                  </li>
                )}
                <li>
                  <NavLink
                    className={({ isActive }) =>
                      isActive ? "text-[#ff6799] bg-transparent" : ""
                    }
                    to="/blog"
                  >
                    Blogs
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

                {user ? (
                  <li>
                    <span
                      onClick={handleLogOut}
                      className="py-3 bg-[#fff047] text-black shadow-md rounded-full px-5 uppercase cursor-pointer "
                    >
                      Log Out
                    </span>
                  </li>
                ) : (
                  <li>
                    <Link
                      to="/login"
                      className="py-3 bg-[#ff6799] shadow-md  rounded-full px-5 uppercase   text-white"
                    >
                      Login
                    </Link>
                  </li>
                )}
              </ul>
            </div>

            <div className="dropdown dropdown-end">
              <div className="flex items-center justify-center">
                <span className="d-block lg:hidden">
                  <HiOutlineMenu
                    className="text-2xl"
                    tabIndex={0}
                  ></HiOutlineMenu>
                </span>
                {/* -----------User Image ---------- */}
                {user && (
                  <div
                    className="hidden lg:block tooltip tooltip-bottom tooltip-secondary "
                    data-tip={user?.displayName}
                  >
                    <div className="avatar online mx-2">
                      <div className="w-12 rounded-full">
                        <img src={user?.photoURL} />
                      </div>
                    </div>
                  </div>
                )}
              </div>
              <ul
                tabIndex={0}
                className="menu menu-compact dropdown-content mt-3 p-2 shadow-lg shadow-cyan-400 bg-[#202226fa] rounded-box w-52"
              >
                {/* -----------User Image ---------- */}
                {user && (
                  <div
                    className="tooltip tooltip-bottom tooltip-secondary "
                    data-tip={user?.displayName}
                  >
                    <div className="avatar online mx-2">
                      <div className="w-12 rounded-full">
                        <img src={user?.photoURL} />
                      </div>
                    </div>
                  </div>
                )}

                <li>
                  <NavLink
                    className={({ isActive }) =>
                      isActive
                        ? "text-[#ff6799] bg-transparent"
                        : "text-[#4acdd5]"
                    }
                    to="/home"
                  >
                    Home
                  </NavLink>
                </li>

                <li>
                  <NavLink
                    className={({ isActive }) =>
                      isActive
                        ? "text-[#ff6799] bg-transparent"
                        : "text-[#4acdd5]"
                    }
                    to="/all_toys"
                  >
                    All Toys
                  </NavLink>
                </li>

                {user && (
                  <li>
                    <NavLink
                      className={({ isActive }) =>
                        isActive
                          ? "text-[#ff6799] bg-transparent"
                          : "text-[#4acdd5]"
                      }
                      to="/my_toys"
                    >
                      My Toys
                    </NavLink>
                  </li>
                )}
                {user && (
                  <li>
                    <NavLink
                      className={({ isActive }) =>
                        isActive
                          ? "text-[#ff6799] bg-transparent"
                          : "text-[#4acdd5]"
                      }
                      to="/add_a_toy"
                    >
                      Add A Toy
                    </NavLink>
                  </li>
                )}
                <li>
                  <NavLink
                    className={({ isActive }) =>
                      isActive
                        ? "text-[#ff6799] bg-transparent"
                        : "text-[#4acdd5]"
                    }
                    to="/blog"
                  >
                    Blogs
                  </NavLink>
                </li>

                <li>
                  <NavLink
                    className={({ isActive }) =>
                      isActive
                        ? "text-[#ff6799] bg-transparent"
                        : "text-[#4acdd5]"
                    }
                    to="/register"
                  >
                    Register
                  </NavLink>
                </li>

                {user ? (
                  <li
                    onClick={handleLogOut}
                    className="text-center bg-[#fff047] rounded"
                  >
                    <button className="py-3 text-black mx-auto shadow-md  px-5  uppercase">
                      Log Out
                    </button>
                  </li>
                ) : (
                  <li className="text-center rounded">
                    <Link to="/login">
                      <button className="py-3 bg-[#ff6799] w-full rounded text-white  mx-auto shadow-md  px-5  uppercase">
                        Login
                      </button>
                    </Link>
                  </li>
                )}
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
