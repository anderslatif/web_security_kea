import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Tilt from 'react-tilt';
import { loginAuthAction } from "../actions/authActions";
import { connect } from "react-redux";

class PageLogin extends Component {
    constructor(props) {
        super(props)
        this.state = {
            emailLogin: "",
            passwordLogin: ""
        }
        this.onChangeStoreDatas = this.onChangeStoreDatas.bind(this);
        this.onSubmitStoreDatas = this.onSubmitStoreDatas.bind(this);
    }

    onChangeStoreDatas = (ev) => {
        let inputType = ev.target.name;
        let inputValue = ev.target.value;
        this.setState({[inputType]:inputValue});
    }

    onSubmitStoreDatas = (ev) => {
        ev.preventDefault();
        console.log(this.state)
    }
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
                        <p>Login to access the Books streaming system</p>
                    </div>
                    <form className="formLogin" onSubmit={this.onSubmitStoreDatas}>
                        <div className="formLogin--forms">
                            <input type="text" placeholder="Your Email" name="emailLogin" onChange={this.onChangeStoreDatas} />
                            <input type="password" placeholder="Your Password" name="passwordLogin" onChange={this.onChangeStoreDatas} />
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

// const mapStateToProps = (state) => {
//     return {
//         login: state.login
//     }
// }
export default PageLogin;