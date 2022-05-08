import React, { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate} from 'react-router-dom';
import { AiOutlineGoogle } from 'react-icons/ai';
import { toast, ToastContainer } from 'react-toastify';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { auth } from '../../Firebase/firebase.init';
import Loading from '../Loading/Loading';

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

        // checkbox
        const [agree, setAgree] = useState(false)

        const [createUserWithEmailAndPassword, user, loading, hookError] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
        const [signInWithGoogle, gooleUser, googlLoading, GoogleError] = useSignInWithGoogle(auth);

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

        const handleRegister = (e) => {
            e.preventDefault();
            if (agree) {
                createUserWithEmailAndPassword(userInfo.email, userInfo.password);
            }
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
        const from = location.state?.from?.pathname || '/';

        useEffect(() => {
            if (user) {
                navigate(from, {replace: true});
            }
        }, [user]);

        if (gooleUser) {
            navigate(from, {replace: true})
        };

        if (loading || googlLoading) {
            return <Loading />
        }

    return (
          <>
        <div className="container my-5 d-flex justify-content-center">
        <form onSubmit={handleRegister} className='col-md-8 col-lg-8 col-sm-12 border col-xl-6 p-4'>
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
              <input type="email" onChange={handleEmailChange} className="form-control" required />
              {errors?.email && <p style={{color: 'red'}}>{errors.email}</p>}
            </div>
            <div className="form-outline mb-4">
            <label className="form-label" >Password</label>
              <input type="password" onChange={handlePasswordChange}className="form-control" required />
              {errors?.password && <p style={{color: 'red'}}>{errors.password}</p>}
            </div>
            <div className="form-outline mb-4">
            <label className="form-label" >Confirm Password</label>
              <input type="password" onChange={handleConfirmPasswordChange} className="form-control" required />
            </div>
            <div className="form-check d-flex justify-content-center mb-4">
              <input onClick={() => setAgree(!agree)} className="form-check-input me-2" name='terms' type="checkbox" value="" id="form2Example33"  />
              <label className={agree ? 'text-primary' : 'text-danger'}>
                Subscribe to our newsletter
              </label>
            </div>
            <button disabled={!agree} type="submit" className="btn btn-block mb-4 w-100">Sign up</button>
            <ToastContainer />
            <div className="text-center">
              <p>or sign up with:</p>
              <button  onClick={() => signInWithGoogle()} type="button" style={{padding: "4px 18px", fontSize: "20px"}} className="btn-primary btn-floating mx-1">
              <AiOutlineGoogle /> Google
              </button>
            </div>
        </form>
       </div>
       </>
    );
};

export default Register;