import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Tilt from 'react-tilt';
// import { ErrorEmptyInput } from "../frontend__errors/errorsComponents";
// import { connect } from "redux";

class PageRegister extends Component {
  constructor(props) {
    super(props)
    this.state = {
      registerEmail: "",
      registerPassword: "",
      registerRepeatPassword: "",
      error: {}
    }
    this.onChangeStoreRegisterDatas = this.onChangeStoreRegisterDatas.bind(this);
    this.onSubmitStoreDatas = this.onSubmitStoreDatas.bind(this);
  }

  onChangeStoreRegisterDatas = (ev) => {
    let inputRegisterName = ev.target.name;
    let inputRegisterValue = ev.target.value;
    this.setState({[inputRegisterName]: inputRegisterValue})
  }
  
  onSubmitStoreDatas = (ev) => {
    ev.preventDefault();

    const registeredUser = {
      email: this.state.registerEmail,
      password: this.state.registerPassword,
      passwordRepeat: this.state.registerRepeatPassword
    }
    console.log(registeredUser);
  }
    render() {
      return (
        <div className="page__register">
            <div className="page__register--wrapper">
                <div className="left__areaAuths">
                    <div className="left__areaAuths--logos">
                        <Link to="/register">BookShelf</Link>
                    </div>
                    <div className="left__areaAuths--informations">
                        <h2>Get your <span>Book</span></h2>
                        <p>Login to access the book streaming system</p>
                    </div>
                    <form className="formRegister" onSubmit={this.onSubmitStoreDatas}>
                        <div className="formRegister--forms">
                            <input 
                              type="text" 
                              placeholder="Your Email" 
                              name="registerEmail" 
                              value={this.state.registerEmail} 
                              onChange={this.onChangeStoreRegisterDatas} 
                            />
                            <input 
                              type="password" 
                              placeholder="Your Password" 
                              name="registerPassword" 
                              value={this.state.registerPassword} 
                              onChange={this.onChangeStoreRegisterDatas} 
                            />
                            <input 
                              type="password" 
                              placeholder="Repeat Password" 
                              name="registerRepeatPassword" 
                              value={this.state.registerRepeatPassword} 
                              onChange={this.onChangeStoreRegisterDatas} 
                            />
                        </div>
                        {/* {this.state.error && <ErrorEmptyInput/>} */}
                        <div className="formRegister--remember-forget">
                            <div className="formgroup__checkbox">
                                <input type="checkbox" id="rememberCheckbox"/>
                                <label htmlFor="rememberCheckbox">Remember Me</label>
                            </div>
                            <Link to="/register">Forgot Password</Link>
                        </div>
                        <div className="formRegister--submit">
                            <button>Register</button>
                        </div>
                    </form>
                    <div className="left__areaAuths--terms-and-conditions">
                        <p>
                            Please have a look over 
                            <Link to="/terms-and-conditions">Terms and Conditions</Link>
                            and 
                            <Link to="/privacy-policy">Privacy Policy</Link>
                        </p>
                        <Link to="/login" className="login__links">Login</Link>
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

export default PageRegister;