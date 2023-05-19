import React from "react";
import useTitle from "../../Hooks/useTitle";
import RegisterImg from "../../assets/images/register-webp/register.webp";
import { Link } from "react-router-dom";
import GoogleIcon from '../../assets/images/icons/google.png';
import {BsGithub} from 'react-icons/bs';


const Register = () => {
     /* -------------Dynamic Title Adding hook---------- */
     useTitle('Register')
    return (
        <div className="bg-pink-200  ">
        <div className="container py-10 md:py-20 mx-auto">
          <div className="w-11/12  lg:w-8/12 bg-white  mx-auto flex flex-col md:flex-row items-center justify-center shadow-xl rounded">
            <div className="w-full hidden md:block md:w-5/12 lg:w-4/12">
             <img className="w-full h-full px-4" src={RegisterImg} alt="" />
            </div>
  
            <div className="w-full md:w-7/12  lg:w-8/12">
             
              <div className="card flex-shrink-0 w-full  bg-base-100">
                <div className="card-body">
                  <h2 className="text-3xl font-extrabold">Register</h2>
                  <form>
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text">Name</span>
                      </label>
                      <input
                        type="text"
                        placeholder="Your Name"
                        className="input input-bordered"
                      />
                    </div>
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text">Photo Url</span>
                      </label>
                      <input
                        type="text"
                        placeholder="Photo Url"
                        className="input input-bordered"
                      />
                    </div>
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
                        type="password"
                        placeholder="password"
                        className="input input-bordered"
                      />
                      <label className="label">
                        <p className="text-sm">
                          Already Registered? Please{" "}
                          <Link
                            className="font-bold text-blue-600 hover:text-blue-700 hover:underline "
                            to="/login"
                          >
                            Login
                          </Link>
                        </p>
                      </label>
                    </div>
                    <div className="form-control mt-2">
                      <input
                        className="btn btn-primary bg-cyan-500 border-0 hover:bg-cyan-600"
                        type="submit"
                        value="Register"
                      />
                    </div>
                  </form>
                  <div className="flex justify-center items-center mt-2">
                    <hr className="inline-block w-2/6 border-1 border-cyan-500" />{" "}
                    <span className="mx-1 hidden lg:inline font-semibold">Or Register with</span>{" "}
                    <span className="mx-1 lg:hidden font-semibold">Join with</span>{" "}
                    <hr className="inline-block border-1 w-2/6 border-cyan-500" />
                  </div>
  
                  <div className="flex gap-2">
                  <button className="btn  font-bold  normal-case btn-outline w-1/2"><img className="w-5 me-2" src={GoogleIcon} alt="" />Google</button> 
  
                  <button className="btn font-bold normal-case btn-outline w-1/2"><BsGithub className=" text-xl me-2" />Google</button> 
                  
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Register;