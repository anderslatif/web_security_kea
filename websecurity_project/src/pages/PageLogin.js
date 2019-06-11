/*eslint-disable*/
import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Tilt from 'react-tilt';
// import { loginAuthAction } from "../actions/authActions";
// import axios from "axios";
import { connect } from "react-redux";
import { actionLoginUser } from '../actions/userActions';

const emailRegex = RegExp(
    /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
);
  
const scriptPrevent = (string) => {
    return string.replace(/&/, "&amp").replace(/</, "&lt")
};

class PageLogin extends Component {
    constructor(props) {
        super(props)
        this.state = {
            emailLogin: "",
            passwordLogin: "",
            error: {
                emailLogin: "",
                passwordLogin: ""
            }
        }
        this.onChangeStoreDatas = this.onChangeStoreDatas.bind(this);
        this.onSubmitStoreDatas = this.onSubmitStoreDatas.bind(this);
    }

    onChangeStoreDatas = (ev) => {
        const { name, value } = ev.target;
        let error = this.state.error;

        switch(name) {
            case "emailLogin":
              error.emailLogin = emailRegex.test(value)
              ? ""
              : "invalid email address";
              break;
            case "passwordLogin":
              error.passwordLogin = value.length < 9
              ? "minimum 9 characters required"
              : ""
            break;
        }

        this.setState({[name]: value});
    }

    onSubmitStoreDatas = (ev) => {
        ev.preventDefault();
        if (this.formValid(this.state)) {
            const login = {
                email: this.state.emailLogin,
                password: this.state.passwordLogin
            }
            // scriptPrevent(login);
            this.props.onLoginUser(login)
        }
    }

    formValid = ({ error, ...rest }) => {
        let valid = true;
    
      // validate form error being empty
        Object.values(this.state.error).forEach(val => {
          val.length > 0 && (valid = false);
        });
    
        // validate the form was filled out
        Object.values(rest).forEach(val => {
          val === null && (valid = false);
        });
        return valid;
    }

    componentDidUpdate() {
        if (this.props.isLoggedIn) {
            this.props.history.push('/profile')
        }
    }
    render(props) {
    let { error } = this.state;
    return (
        <div className="page__login">
            <div className="page__login--wrapper">
                <div className="left__areaAuths">
                    <div className="left__areaAuths--logos">
                        <Link to="/login">BookShelf</Link>
                    </div>
                    <div className="left__areaAuths--informations">
                        <h2>Get your <span>Book</span></h2>
                        <p>Login to access the Bookz streaming system</p>
                        {/* {this.props.isLoggedIn} */}
                    </div>
                    <form className="formLogin" onSubmit={this.onSubmitStoreDatas}>
                        <div className="formLogin--forms">
                            <input 
                                type="text" 
                                placeholder="Your Email" 
                                name="emailLogin" 
                                onChange={this.onChangeStoreDatas}
                                className={error.emailLogin.length > 0 ? "inputErrorHighlight" : null}
                            />
                            {
                              error.emailLogin.length > 0 &&
                              <p className="errorDisplayMessage">{error.emailLogin}</p>
                            }
                            <input 
                                type="password" 
                                placeholder="Your Password" 
                                name="passwordLogin" 
                                onChange={this.onChangeStoreDatas}
                                className={error.passwordLogin.length > 0 ? "inputErrorHighlight" : null} 
                            />
                            {
                              error.passwordLogin.length > 0 &&
                              <p className="errorDisplayMessage">{error.passwordLogin}</p>
                            }
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

const mapDispatchToProps = dispatch => {
    return {
      onLoginUser: user => {
        dispatch(actionLoginUser(user))
      }
    }
}

const mapStateToProps = (state) => {
    return {
        isLoggedIn: state.user.isLoggedIn
    }
}
// const mapStateToProps = (state) => {
//     return {
//         login: state.login
//     }
// }
export default connect(mapStateToProps, mapDispatchToProps)(PageLogin);
