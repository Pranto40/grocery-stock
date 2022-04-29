import React from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineGoogle } from 'react-icons/ai';

const Register = () => {
    return (
          <>
        <div className="container my-5 d-flex justify-content-center">
        <form className='col-md-8 col-lg-8 col-sm-12 border col-xl-6 p-4'>
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
              <input type="email" id="form3Example3" className="form-control" />
            </div>
            <div className="form-outline mb-4">
            <label className="form-label" >Password</label>
              <input type="password" id="form3Example4" className="form-control" />
            </div>
            <div className="form-outline mb-4">
            <label className="form-label" >Password</label>
              <input type="password" id="form3Example4" className="form-control" />
            </div>
            <div className="form-check d-flex justify-content-center mb-4">
              <input className="form-check-input me-2" type="checkbox" value="" id="form2Example33"  />
              <label className="form-check-label">
                Subscribe to our newsletter
              </label>
            </div>
            <button type="submit" className="btn btn-primary btn-block mb-4 w-100">Sign up</button>
            <div className="text-center">
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

export default Register;