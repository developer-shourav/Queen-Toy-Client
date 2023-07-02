import React, { useContext, useState } from "react";
import useTitle from "../../Hooks/useTitle";
import RegisterImg from "../../assets/images/register-webp/register.webp";
import { Link, ScrollRestoration, useLocation, useNavigate } from "react-router-dom";
import GoogleIcon from '../../assets/images/icons/google.png';
import {BsGithub} from 'react-icons/bs';
import { AuthContext } from "../../providers/AuthProviders";
import { updateProfile } from "firebase/auth";
import Swal from "sweetalert2";


const Register = () => {
     /* -------------Dynamic Title Adding hook---------- */
     useTitle('Register')

  const { createEmailPassUser, registerWithGoogle, registerWithGitHub } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const redirectLocation = location?.state?.from?.pathname || '/home';
  const [errorMessage, setErrorMessage] = useState('');

  const registerSuccessAlt = () => {
    Swal.fire(
      'Welcome',
      'Register Successful',
      'success'
    )
  }


  const handleRegister = (event) => {
    /*----- Reset Error Massage ------- */
    setErrorMessage('')
      /* ------ Handle default page reload -------- */
    event.preventDefault();
    /* ------- Data Collection -------------- */
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const photo = form.photo.value;
    
 /* -----------Password Validation----------- */
    if( password.length < 6 ){
     
      setErrorMessage('Error: Your Password must be at least 6 character')
      return ;
    }

    else{
    /* ------- Email password User creation -------------- */
    createEmailPassUser(email, password)
    .then((result) => {
      const createdUser = result.user;
      addUserNameAndImage(result.user, name, photo);
      registerSuccessAlt()
    })

    .catch((error) => {
      setErrorMessage(error.message.slice(10))
    });
    }
 

  };
/* ------- User name and Profile picture updating -------------- */
  const addUserNameAndImage = (user, userName, imageUrl) => {
    setErrorMessage('')
    updateProfile(user, { displayName: userName, photoURL: imageUrl })
      .then(() => {
        navigate(redirectLocation);
      })
      .catch((error) => {
        setErrorMessage(error.message.slice(10))
      });
  };

  /* ------- Google Register Function's Code-------------- */
  const handleGoogleRegister = () => {
    setErrorMessage('')
    registerWithGoogle()
    .then( result => {
      const loggedInUser = result.user;
      navigate(redirectLocation)
      registerSuccessAlt()
      
    })
    .catch( error =>{
      setErrorMessage(error.message.slice(10))
    })
  }
/* ------- GitHub Register System Code-------------- */
  const handleGitHubRegister = () => {
    setErrorMessage('')
    registerWithGitHub()
    .then( result => {
      const loggedInUser = result.user;
      navigate(redirectLocation)
      registerSuccessAlt()
      
    })
    .catch( error =>{
      setErrorMessage(error.message.slice(10))
    })
  }


    return (
        <div className="bg-pink-200  pb-20 ">
        <div className="container py-10 md:py-20 mx-auto">
          <div className="w-11/12  lg:w-8/12 bg-white  mx-auto flex flex-col md:flex-row items-center justify-center shadow-xl rounded">
            <div className="w-full hidden md:block md:w-5/12 lg:w-4/12">
             <img className="w-full h-full px-4" src={RegisterImg} alt="" />
            </div>
  
            <div className="w-full md:w-7/12  lg:w-8/12">
             
              <div className="card flex-shrink-0 w-full  bg-base-100">
                <div className="card-body">
                  <h2 className="text-3xl font-extrabold">Register</h2>

                  <form onSubmit={handleRegister}>
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text">Name</span>
                      </label>
                      <input
                        type="text"
                        placeholder="Your Name"
                        name="name"
                        className="input input-bordered"
                        required
                      />
                    </div>
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text">Photo Url</span>
                      </label>
                      <input
                        type="text"
                        placeholder="Photo Url"
                        name="photo"
                        className="input input-bordered"
                        required
                      />
                    </div>
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text">Email</span>
                      </label>
                      <input
                        type="text"
                        placeholder="email"
                        name="email"
                        required
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
                        name="password"
                        required
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
                     {/* --------Error Message -------- */}
                    <p className='text-red-500 font-semibold'>{errorMessage}</p>
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
                  <button onClick={handleGoogleRegister} className="btn  font-bold  normal-case btn-outline w-1/2"><img className="w-5 me-2" src={GoogleIcon} alt="" />Google</button> 
  
                  <button onClick={handleGitHubRegister} className="btn font-bold normal-case btn-outline w-1/2"><BsGithub className=" text-xl me-2" />GitHub</button> 
                  
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <ScrollRestoration />
      </div>
    );
};

export default Register;