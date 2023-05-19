import React from "react";
import useTitle from "../../Hooks/useTitle";
import LoginImg from "../../assets/images/login-svg/login.svg";
import { Link } from "react-router-dom";
import GoogleIcon from '../../assets/images/icons/google.png';
import {BsGithub} from 'react-icons/bs';

const Login = () => {
  /* -------------Dynamic Title Adding hook---------- */
  useTitle("Login");
  return (
    <div className="bg-pink-200  ">
      <div className="container py-20 mx-auto">
        <div className="w-8/12 bg-white  mx-auto flex items-center justify-center shadow-xl rounded">
          <div className="w-5/12">
            <div className="card flex-shrink-0 w-full  bg-base-100">
              <div className="card-body">
                <h2 className="text-3xl font-extrabold">Login</h2>
                <form>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Email</span>
                    </label>
                    <input
                      type="text"
                      placeholder="email"
                      className="input input-bordered"
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Password</span>
                    </label>
                    <input
                      type="text"
                      placeholder="password"
                      className="input input-bordered"
                    />
                    <label className="label">
                      <p className="text-sm">
                        New in Queen Toy? Please{" "}
                        <Link
                          className="font-bold text-blue-600 hover:text-blue-700 hover:underline "
                          to="/register"
                        >
                          Register
                        </Link>
                      </p>
                    </label>
                  </div>
                  <div className="form-control mt-6">
                    <input
                      className="btn btn-primary bg-[#fa578e] border-0 hover:bg-pink-700"
                      type="submit"
                      value="Login"
                    />
                  </div>
                </form>
                <div className="flex justify-center items-center mt-2">
                  <hr className="inline-block w-2/6 border-1 border-pink-500" />{" "}
                  <span className="mx-1 font-semibold">Or join with</span>{" "}
                  <hr className="inline-block border-1 w-2/6 border-pink-500" />
                </div>

                <div className="flex gap-2">
                <button className="btn  font-bold  normal-case btn-outline w-1/2"><img className="w-5 me-2" src={GoogleIcon} alt="" />Google</button> 

                <button className="btn font-bold normal-case btn-outline w-1/2"><BsGithub className=" text-xl me-2" />Google</button> 
                
                </div>
              </div>
            </div>
          </div>

          <div className="w-7/12">
            <img src={LoginImg} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
