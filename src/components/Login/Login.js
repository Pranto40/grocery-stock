import React from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineGoogle } from 'react-icons/ai';

const Login = () => {
    return (
        <>
          <div className="container my-5 d-flex justify-content-center">
            <form className='col-md-8 col-lg-8 col-sm-12 border col-xl-6 p-4'>
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
                  <input type="email" id="" className="form-control" />
                </div>
                <div className="form-outline mb-4">
                <label className="form-label" >Password</label>
                  <input type="password" id="" className="form-control" />
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
                <div className="text-center">
                  <p>Not a member? <Link to="/register">Register</Link></p>
                  <p>or sign up with:</p>

                  <button type="button" style={{padding: "4px 18px", borderRadius: "14%", fontSize: "20px"}} className="btn-primary btn-floating mx-1">
                  <AiOutlineGoogle />
                  </button>

                </div>
              </form>
        </div>
        </>
    );
};

export default Login;