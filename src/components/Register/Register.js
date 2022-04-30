import React, { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AiOutlineGoogle } from 'react-icons/ai';
import { toast, ToastContainer } from 'react-toastify';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { auth } from '../../Firebase/firebase.init';

const Register = () => {
          const [userInfo, setUserInfo] = useState({
            email: "",
            password: "",
            confirmPass: "",
        });
        const [errors, setErrors] = useState({
            email: "",
            password: "",
            general: "",
        });

        const [createUserWithEmailAndPassword, user, loading, hookError] =
            useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

        const handleEmailChange = (e) => {
            const emailRegex = /\S+@\S+\.\S+/;
            const validEmail = emailRegex.test(e.target.value);

            if (validEmail) {
                setUserInfo({ ...userInfo, email: e.target.value });
                setErrors({ ...errors, email: "" });
            } else {
                setErrors({ ...errors, email: "Invalid email" });
                setUserInfo({ ...userInfo, email: "" });
            }

            // setEmail(e.target.value);
        };
        const handlePasswordChange = (e) => {
            const passwordRegex = /.{6,}/;
            const validPassword = passwordRegex.test(e.target.value);

            if (validPassword) {
                setUserInfo({ ...userInfo, password: e.target.value });
                setErrors({ ...errors, password: "" });
            } else {
                setErrors({ ...errors, password: "Minimum 6 characters!" });
                setUserInfo({ ...userInfo, password: "" });
            }
        };

        const handleConfirmPasswordChange = (e) => {
            if (e.target.value === userInfo.password) {
                setUserInfo({ ...userInfo, confirmPass: e.target.value });
                setErrors({ ...errors, password: "" });
            } else {
                setErrors({ ...errors, password: "Password's don't match" });
                setUserInfo({ ...userInfo, confirmPass: "" });
            }
        };

        const handleLogin = (e) => {
            e.preventDefault();
            console.log(userInfo);
            createUserWithEmailAndPassword(userInfo.email, userInfo.password);
        };

        useEffect(() => {
            if (hookError) {
                switch (hookError?.code) {
                    case "auth/invalid-email":
                        toast("Invalid email provided, please provide a valid email");
                        break;
                    case "auth/invalid-password":
                        toast("Wrong password. Intruder!!");
                        break;
                    default:
                        toast("something went wrong");
                }
            }
        }, [hookError]);

        const navigate = useNavigate();
        const location = useLocation();
        const from = location.state?.from?.pathname || "/";

        useEffect(() => {
            if (user) {
                navigate(from);
            }
        }, [user]);
    return (
          <>
        <div className="container my-5 d-flex justify-content-center">
        <form onSubmit={handleLogin} className='col-md-8 col-lg-8 col-sm-12 border col-xl-6 p-4'>
        <ul className="nav nav-pills nav-justified mb-3" id="ex1" role="tablist">
                <li className="nav-item" role="presentation">
                  <Link className="nav-link" id="tab-login" data-mdb-toggle="pill" to="/login" role="tab" aria-controls="pills-login" aria-selected="true" >Login</Link>
                </li>
                <li className="nav-item" role="presentation">
                  <Link className="nav-link active" id="tab-register" data-mdb-toggle="pill" to="/register" role="tab" aria-controls="pills-register" aria-selected="false" >Register</Link>
                </li>
              </ul>
            <div className="form-outline mb-4">
            <label className="form-label" >Email address</label>
              <input type="email" onChange={handleEmailChange} className="form-control" />
              {errors?.email && <p>{errors.email}</p>}
            </div>
            <div className="form-outline mb-4">
            <label className="form-label" >Password</label>
              <input type="password" onChange={handlePasswordChange}className="form-control" />
              {errors?.password && <p>{errors.password}</p>}
            </div>
            <div className="form-outline mb-4">
            <label className="form-label" >Confirm Password</label>
              <input type="password" onChange={handleConfirmPasswordChange} className="form-control" />
            </div>
            <div className="form-check d-flex justify-content-center mb-4">
              <input className="form-check-input me-2" type="checkbox" value="" id="form2Example33"  />
              <label className="form-check-label">
                Subscribe to our newsletter
              </label>
            </div>
            <button type="submit" className="btn btn-primary btn-block mb-4 w-100">Sign up</button>
            <ToastContainer />
            <div className="text-center">
              <p>or sign up with:</p>
              <button type="button" style={{padding: "4px 18px", fontSize: "20px"}} className="btn-primary btn-floating mx-1">
              <AiOutlineGoogle /> Google
              </button>
            </div>
        </form>
       </div>
       </>
    );
};

export default Register;