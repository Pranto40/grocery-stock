import React, { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AiOutlineGoogle } from 'react-icons/ai';
import { auth } from '../../Firebase/firebase.init';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { toast, ToastContainer } from 'react-toastify';

const Login = () => {

  const [signInWithEmailAndPassword, user, loading, hookError,] = useSignInWithEmailAndPassword(auth);
  const [signInWithGoogle, gooleUser, googlLoading, GoogleError] = useSignInWithGoogle(auth);

  const [userInfo, setUserInfo] = useState({
    email: "",
    password: ""
  })
  const [errors, setErrors] = useState({
    email: "",
    password: ""
  })

  const handleEmailChange = (event) => {
    const emailRegex = /\S+@\S+\.\S+/;
    const validEmail = emailRegex.test(event.target.value);

    if (validEmail) {
      setUserInfo({...userInfo, email: event.target.value})
      setErrors({...errors, email: ""})
    }else {
      setErrors({...errors, email: "Invalid email"})
      setUserInfo({...userInfo, email: ""})
    }
  }

  const handlePasswordChange = (event) => {
    const passwordRegex = /.{6,}/;
    const validPassword = passwordRegex.test(event.target.value);

    if (validPassword) {
      setUserInfo({...userInfo, password: event.target.value});
      setErrors({...errors, password: ""});
    }else {
      setErrors({...errors, password: "minimum 6 characters!"});
      setUserInfo({...userInfo, password: ""});
    }
  }

  const handleLogin = (event) => {
    event.preventDefault();
    signInWithEmailAndPassword(userInfo.email, userInfo.password);
  }

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/singleDetailsitems";

  useEffect(() => {
    if (user) {
      navigate(from);
    }
  }, [user]);

  useEffect(() => {
    const error = hookError || GoogleError;
    if (error) {
      switch(error?.code) {
        case "auth/invalid-emil":
          toast("Invalid email provided, please porvide a valid email");
          break;
          
          case "auth/invalid-password":
            toast("Worng passoword, Intruder!!")
            break;
          default: 
            toast("something went wrong")
      }
    }
  }, [hookError, GoogleError])

  
    return (
        <>
          <div className="container my-5 d-flex justify-content-center">
            <form onSubmit={handleLogin} className='col-md-8 col-lg-8 col-sm-12 border col-xl-6 p-4'>
              <ul className="nav nav-pills nav-justified mb-3" id="" role="tablist">
                <li className="nav-item" role="presentation">
                  <Link className="nav-link active" id="tab-login" data-mdb-toggle="pill" to="/login" role="tab" aria-controls="pills-login" aria-selected="true" >Login</Link>
                </li>
                <li className="nav-item" role="presentation">
                  <Link className="nav-link" id="tab-register" data-mdb-toggle="pill" to="/register" role="tab" aria-controls="pills-register" aria-selected="false">Register</Link>
                </li>
              </ul>
                <div className="form-outline mb-4">
                  <label className="form-label" >Email address</label>
                  <input type="text" onChange={handleEmailChange} className="form-control" />
                  {errors?.email && <p>{errors.email}</p>}
                </div>
                <div className="form-outline mb-4">
                <label className="form-label" >Password</label>
                  <input type="password" onChange={handlePasswordChange} className="form-control" />
                  {errors?.password && <p>{errors.password}</p>}
                </div>
                <div className="row mb-4">
                  <div className="col d-flex justify-content-center">
                    <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" id="" />
                      <label className="form-check-label" > Remember me </label>
                    </div>
                  </div>
                  <div className="col">
                    <Link to="/">Forgot password?</Link>
                  </div>
                </div>
                <button type="submit" className="btn btn-primary btn-block mb-4 w-100">Sign in</button>
                <ToastContainer />
                <div className="text-center">
                  <p>Not a member? <Link to="/register">Register</Link></p>
                  <p>or sign up with:</p>

                  <button onClick={() => signInWithGoogle()} type="button" style={{padding: "4px 18px", fontSize: "20px"}} className="btn-primary btn-floating mx-1">
                  <AiOutlineGoogle /> Google
                  </button>
                </div>
              </form>
        </div>
        </>
    );
};

export default Login;