import React, { useContext, useState } from "react";
import useTitle from "../../Hooks/useTitle";
import LoginImg from "../../assets/images/login-svg/login.svg";
import { Link, ScrollRestoration, useLocation, useNavigate } from "react-router-dom";
import GoogleIcon from '../../assets/images/icons/google.png';
import {BsGithub} from 'react-icons/bs';
import { AuthContext } from "../../providers/AuthProviders";
import Swal from "sweetalert2";

const Login = () => {
  /* -------------Dynamic Title Adding hook---------- */
  useTitle("Login");

  const {signInUserWithEmail, registerWithGoogle, registerWithGitHub} = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  /* ----------Previous location ---------- */
  const redirectLocation = location.state?.from?.pathname || '/home';

  const [errorText, setErrorText] = useState('');

  const loginSuccessAlt = () => {
    Swal.fire(
      'Welcome',
      'Login Successful',
      'success'
    )
  }

  const handleEmailPassLogIn = event => {

    /*----- Reset Error Massage field------- */
    setErrorText('')

    /* ------ Handle default page reload on form submit-------- */
    event.preventDefault();
    /* ------- Data Collection -------------- */
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

  /* ------- Email password Login System Code-------------- */
    signInUserWithEmail(email, password)
    .then( result => {
      const loggedInUser = result.user;
      loginSuccessAlt()
      navigate(redirectLocation)
      
    })
    .catch( error =>{
      setErrorText(error.message.slice(10))
    })
  }
/* ------- Google Login Code-------------- */
  const handleGoogleLogin = () => {
    setErrorText('')
    registerWithGoogle()
    .then( result => {
      const loggedInUser = result.user;
      loginSuccessAlt()
      navigate(redirectLocation)
      
    })
    .catch( error =>{
      setErrorText(error.message.slice(10))
    })
  }

/* ------- GitHub Login Code-------------- */
  const handleGitHubLogin = () => {
    setErrorText('')
    registerWithGitHub()
    .then( result => {
      const loggedInUser = result.user;
      loginSuccessAlt()
      navigate(redirectLocation)
      
    })
    .catch( error =>{
      setErrorText(error.message.slice(10))
    })
  }

  return (
    <div className="bg-pink-200  pb-20">
      <div className="container py-10 md:py-20 mx-auto">
        <div className="w-11/12  lg:w-8/12 bg-white  mx-auto flex flex-col-reverse md:flex-row items-center justify-center shadow-xl rounded">
          <div className="w-full md:w-6/12 lg:w-5/12">
            <div className="card flex-shrink-0 w-full  bg-base-100">
              <div className="card-body">
                <h2 className="text-3xl font-extrabold">Login</h2>
                
                <form onSubmit={handleEmailPassLogIn}>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Email</span>
                    </label>
                    <input
                      type="text"
                      placeholder="email"
                      name="email"
                      className="input input-bordered"
                      required
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Password</span>
                    </label>
                    <input
                      type="password"
                      name="password"
                      placeholder="password"
                      className="input input-bordered"
                      required
                    />
                    <label className="label">
                      <p className="text-sm">
                        New in Queen Toy? Please{" "}
                        <Link
                          className="font-bold text-blue-600 hover:text-blue-700 hover:underline "
                          to="/register"
                          state={{from :location?.state?.from}} 
                        >
                          Register
                        </Link>
                      </p>
                    </label>
                  </div>

                   {/* --------Error Message -------- */}
                   <p className='text-red-500 font-semibold'>{errorText}</p>
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
                  <span className="mx-1 hidden lg:inline font-semibold">Or join with</span>{" "}
                  <span className="mx-1 lg:hidden font-semibold">Join with</span>{" "}
                  <hr className="inline-block border-1 w-2/6 border-pink-500" />
                </div>

                <div className="flex gap-2">
                <button onClick={handleGoogleLogin} className="btn  font-bold  normal-case btn-outline w-1/2"><img className="w-5 me-2" src={GoogleIcon} alt="" />Google</button> 

                <button onClick={handleGitHubLogin} className="btn font-bold normal-case btn-outline w-1/2"><BsGithub className=" text-xl me-2" />GitHub</button> 
                
                </div>
              </div>
            </div>
          </div>

          <div className="w-full md:w-7/12  lg:w-7/12">
            <img src={LoginImg} alt="" />
          </div>
        </div>
      </div>
      <ScrollRestoration />
    </div>
  );
};

export default Login;
