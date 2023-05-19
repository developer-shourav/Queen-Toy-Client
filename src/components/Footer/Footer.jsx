import React from "react";
import {
  SiJsonwebtokens,
  SiExpress,
  SiMongodb,
  SiNextdotjs,
} from "react-icons/si";
import {
  BsFillDatabaseFill,
  BsFillTelephoneFill,
  BsLinkedin,
  BsYoutube,
  BsFacebook,
} from "react-icons/bs";
import { MdMail, MdLocationOn } from "react-icons/md";
import { FaCopyright, FaInstagramSquare, FaCanadianMapleLeaf, FaStore } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import Logo from "../../assets/images/logo/logo-medium.png";

const Footer = () => {
  return (
    <div className="bg-[#202226]  py-16 mt-60 text-white">
      <div className="container mx-auto px-5">
        <div className=" lg:w-11/12 mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 ">
          <div>
            <h2 className="text-2xl font-bold mb-5 text-[#4acdd5]">About Us</h2>
            <p className="text-stone-300 text-sm mb-4">
              We are the best desny toy seller. You can get all kinds of desny
              toys here. Our main goal is to provide the best quality products
              and get customer satisfaction. We want to spread joy through the
              toy at your home. Help us by staying attached to us.
            </p>
            <p className="font-bold mb-2 flex items-center gap-3">
              <BsFillTelephoneFill className="inline text-[#ff6799] text-xl" />{" "}
              +125 00124 35
            </p>
            <p className="font-bold mb-8 flex items-center gap-3">
              <MdMail className="inline text-2xl text-[#ff6799]" />{" "}
              queen.toy@gmail.com
            </p>
            <input
              className=" py-3 px-4 bg-white bg-opacity-20 rounded-full rounded-e-none"
              placeholder="Enter Your Email"
              type="email "
            />{" "}
            <input
              className="btn ms-0 normal-case rounded-full rounded-l-none bg-[#ff6799] border-[#ff6799]"
              type="submit"
              value="Send"
            />
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-5 text-[#4acdd5]">
              Latest Blog
            </h2>
            <p className="text-stone-300 text-sm mb-3">
              {" "}
              <SiJsonwebtokens className="inline text-xl text-white me-2" />
              What is an access token and refresh token? How do they work and
              where should we store them on the client-side?
            </p>

            <p className="text-stone-300 text-sm mb-3">
              {" "}
              <BsFillDatabaseFill className="inline text-xl text-white me-2" />
              Compare SQL and NoSQL databases?
            </p>

            <p className="text-stone-300 text-sm mb-3">
              {" "}
              <SiExpress className="inline text-xl text-white me-2" />
              What is express js?
            </p>

            <p className="text-stone-300 text-sm mb-4">
              {" "}
              <SiNextdotjs className="inline text-xl text-white me-2" />
              What is Nest js?
            </p>

            <p className="text-stone-300 text-sm mb-3">
              {" "}
              <SiMongodb className="inline text-2xl text-white me-2" />
              What is MongoDB aggregate and how does it work?
            </p>
          </div>

          <div className="ml-0 lg:ml-12">
            <h2 className="text-2xl font-bold mb-2 text-[#4acdd5]">
              Contact Us
            </h2>
            <div className="flex mb-5  items-end gap-2">
              {" "}
              <img src={Logo} alt="" className="w-10 lg:w-12 " />
              <span className="logo-style text-2xl  lg:text-3xl font-extrabold ">
                Queen Toy
              </span>
            </div>
            <div className="flex flex-wrap gap-4">
              <a
                className="p-2 bg-pink-600 rounded-md shadow-lg shadow-pink-700"
                href="https://www.linkedin.com/in/developer-shourav/"
                target="_blank"
              >
                <BsLinkedin className="inline text-2xl" />
              </a>

              <a
                className="p-2 bg-pink-600 rounded-md shadow-lg shadow-pink-700"
                href="https://www.youtube.com/"
                target="_blank"
              >
                <BsYoutube className="inline text-2xl" />
              </a>

              <a
                className="p-2 bg-pink-600 rounded-md shadow-lg shadow-pink-700"
                href="https://www.facebook.com/developer.shourav/"
                target="_blank"
              >
                <BsFacebook className="inline text-2xl" />
              </a>

              <a
                className="p-2 bg-pink-600 rounded-md shadow-lg shadow-pink-700"
                href="https://www.instagram.com/"
                target="_blank"
              >
                <FaInstagramSquare className="inline text-2xl" />
              </a>
            </div>

            <p className="font-bold mt-5 mb-2 flex items-center gap-3">
              <FaStore className="inline text-[#ff6799] text-xl" />{" "}
               Queen Toy Store
            </p>
            <p className="font-bold mb-2 flex items-center gap-3">
              <MdLocationOn className="inline text-[#ff6799] text-xl" />{" "}
              12/45 Québec City Road
            </p>

            <p className="font-bold mb-8 flex items-center gap-3">
              <FaCanadianMapleLeaf className="inline text-2xl text-[#ff6799]" />{" "}
             Canada
            </p>
          </div>
        </div>
        <hr className="w-11/12 mt-14 mb-8 mx-auto  border-stone-600" />

        <div className="w-11/12 mx-auto flex flex-col lg:flex-row justify-between">
          <div className=" flex flex-col text-center lg:text-left  lg:flex-row gap-6 list-none">
          <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "text-[#ff6799] bg-transparent" : "text-[#4acdd5]"
                  }
                  to="/home"
                >
                  Home
                </NavLink>
              </li>

              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "text-[#ff6799] bg-transparent" : "text-[#4acdd5]"
                  }
                  to="/all_toys"
                >
                  All Toys
                </NavLink>
              </li>

              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "text-[#ff6799] bg-transparent" : "text-[#4acdd5]"
                  }
                  to="/my_toys"
                >
                  My Toys
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "text-[#ff6799] bg-transparent" : "text-[#4acdd5]"
                  }
                  to="/add_a_toy"
                >Add A Toy</NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "text-[#ff6799] bg-transparent" : "text-[#4acdd5]"
                  }
                  to="/blog"
                >Blogs</NavLink>
              </li>

              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "text-[#ff6799] bg-transparent" : "text-[#4acdd5]"
                  }
                  to="/register"
                >Register</NavLink>
              </li>
          </div>

          <p className="text-sm flex gap-1 items-center text-center mx-auto lg:mx-0 mt-10  lg:mt-0">
            <FaCopyright className="inline" /> All Copyright{" "}
            <span className="logo-style text-md text-bold text-[#4acdd5]">
              Queen Toy
            </span>{" "}
            reserved
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
