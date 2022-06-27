import React from 'react';
import './login.scss'
import { Link } from "react-router-dom";
import shoes from '../../image/shoes.png'
import {FaFacebook, FaGoogle, FaLinkedin, FaLock, FaTwitter, FaUser} from "react-icons/fa";

const Login = () => {
    return (
        <>
            <div className="container">
                <div className="forms-container">
                    <div className="signin-signup">
                        <form action="#" className="sign-in-form">
                            <h1 className="fw-bold " style={{color:'#069A8E'}}>Welcome to Shoes Shop</h1>
                            <h2 className="title">Sign in</h2>
                            <div className="input-field text-start">
                                <i><FaUser/></i>
                                <input type="text" placeholder="Username"/>
                            </div>
                            <div className="input-field text-start">
                                <i><FaLock/></i>
                                <input type="password" placeholder="Password"/>
                            </div>
                            <Link to="/" style={{ textDecoration: "none" }}>
                                <input type="submit" value="Login" className="btn solid"/>
                            </Link>
                            <p className="social-text">Or Sign in with social platforms</p>
                            <div className="social-media">
                                <a href="#" className="social-icon">
                                    <FaFacebook/>
                                </a>
                                <a href="#" className="social-icon">
                                   <FaTwitter/>
                                </a>
                                <a href="#" className="social-icon">
                                    <FaGoogle/>
                                </a>
                                <a href="#" className="social-icon">
                                    <FaLinkedin/>
                                </a>
                            </div>
                        </form>
                    </div>
                    <div className="panels-container">
                        <div className="panel left-panel">
                            <div className="content">
                                <h3>Choose your fav!</h3>
                                <p>
                                    Buy your favorite shoes what you like. In here is a more  selection of shoes
                                </p>
                            </div>
                           <img src={shoes} className="image" alt=""/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;