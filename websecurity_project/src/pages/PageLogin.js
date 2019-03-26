import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Tilt from 'react-tilt'

class PageLogin extends Component {
    render() {
        return (
        <div className="page__login">
            <div className="page__login--wrapper">
                <div className="left__areaAuths">
                    <div className="left__areaAuths--logos">
                        <Link to="/login">BookShelf</Link>
                    </div>
                    <div className="left__areaAuths--informations">
                        <h2>Get your <span>Book</span></h2>
                        <p>Login to access the book streaming system</p>
                    </div>
                    <form className="formLogin">
                        <div className="formLogin--forms">
                            <input type="text" placeholder="Your Email" />
                            <input type="password" placeholder="Your Password" />
                        </div>
                        <div className="formLogin--remember-forget">
                            <div className="formgroup__checkbox">
                                <input type="checkbox" id="rememberCheckbox"/>
                                <label htmlFor="rememberCheckbox">Remember Me</label>
                            </div>
                            <Link to="/login">Forgot Password</Link>
                        </div>
                        <div className="formLogin--submit">
                            <button>Login</button>
                        </div>
                    </form>
                    <div className="left__areaAuths--terms-and-conditions">
                        <p>
                            Please have a look over 
                            <Link to="/terms-and-conditions">Terms and Conditions</Link>
                            and 
                            <Link to="/privacy-policy">Privacy Policy</Link>
                        </p>
                        <Link to="/register" className="register__links">Register</Link>
                    </div>
                </div>
                <div className="right__areaAuths">
                    <div className="right__areaAuths--content">
                    <Tilt className="Tilt" options={{ max : 45 }} style={{ height: 250, width: 250 }} >
                        <div className="Tilt-inner">BookShelf</div>
                    </Tilt>
                    </div>
                </div>
            </div>
            {/* PageLogin */}
        </div>
    )
  }
}

export default PageLogin;