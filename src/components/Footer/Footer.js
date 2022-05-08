import React from 'react';
import { FaFacebookF } from 'react-icons/fa';
import { BsLinkedin, BsFillTelephoneFill } from 'react-icons/bs';
import { MdEmail } from 'react-icons/md';
import { AiOutlineTwitter, AiOutlineGoogle, AiOutlineInstagram, AiFillGithub, AiFillHome } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="text-center text-lg-start bg-light text-muted">
            <section style={{backgroundColor: '#AAFF00', color: 'black'}}>
                <div className="container d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
                    <div className="me-5 d-none d-lg-block">
                    <span>Get connected with us on social networks:</span>
                    </div>
                    <div>
                    <Link to="" className="me-4 text-reset">
                        <FaFacebookF />
                    </Link>
                    <Link to="" className="me-4 text-reset">
                        <AiOutlineTwitter />
                    </Link>
                    <Link to="" className="me-4 text-reset">
                        <AiOutlineGoogle />
                    </Link>
                    <Link to="" className="me-4 text-reset">
                        <AiOutlineInstagram / >
                    </Link>
                    <Link to="" className="me-4 text-reset">
                        <BsLinkedin />
                    </Link>
                    <Link to="" className="me-4 text-reset">
                        <AiFillGithub />
                    </Link>
                    </div>
                </div>
            </section>
            <section className="">
                <div className="container text-center text-md-start mt-5">
                <div className="row mt-3">
                    <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                    <h6 className="text-uppercase fw-bold mb-4">
                        <i className="fas fa-gem me-3"></i>Grocery stock
                    </h6>
                    <p>
                        Here you can use rows and columns to organize your footer content. Lorem ipsum
                        dolor sit amet, consectetur adipisicing elit.
                    </p>
                    </div>
                    <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                    <h6 className="text-uppercase fw-bold mb-4">
                        Products
                    </h6>
                    <p>
                        <Link to="/" className="text-reset">Asparagus</Link>
                    </p>
                    <p>
                        <Link to="/" className="text-reset">Carrots</Link>
                    </p>
                    <p>
                        <Link to="/" className="text-reset">Pulses</Link>
                    </p>
                    <p>
                        <Link to="/" className="text-reset">Flour</Link>
                    </p>
                    </div>
                    <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                    <h6 className="text-uppercase fw-bold mb-4">
                        Useful links
                    </h6>
                    <p>
                        <Link to="/" className="text-reset">Home</Link>
                    </p>
                    <p>
                        <Link to="/InventoryItems" className="text-reset">Inventory Items</Link>
                    </p>
                    <p>
                        <Link to="/manageInventories" className="text-reset">Manage Inventory</Link>
                    </p>
                    <p>
                        <Link to="/blog" className="text-reset">Blogs</Link>
                    </p>
                    </div>
                    <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                    <h6 className="text-uppercase fw-bold mb-4">
                        Contact
                    </h6>
                    <p><AiFillHome />Sherpur, Mymensingh, bangladesh</p>
                    <p><MdEmail /> dulalahammedpranto01@gmail.com
                    </p>
                    <p><BsFillTelephoneFill /> +8801909762840</p>
                    <p><BsFillTelephoneFill /> +8801725808473</p>
                    </div>
                </div>
                </div>
            </section>
            <div className="text-center p-4" style={{backgroundColor: '#AAFF00', color: 'black'}}>
                <span>© 2022 Copyright: </span>
                <Link className="text-reset fw-bold" to='/'>DULAL AHAMMED PRANTO</Link>
            </div>
        </footer>
    );
};

export default Footer;