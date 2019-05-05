import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Tilt from 'react-tilt';
import axios from 'axios';
import { connect } from "react-redux";
import { actionRegisterUser } from "../actions/userActions";
// import { ErrorEmptyInput } from "../frontend__errors/errorsComponents";
// import { connect } from "redux";

const emailRegex = RegExp(
  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
);

// const formValid = error => {
//     let valid = true;

//   // validate form error being empty
//   Object.values(this.state.error).forEach(val => {
//     val.length > 0 && (valid = false);
//   });

//   // validate the form was filled out
//   Object.values(this.state.error).forEach(val => {
//     val === null && (valid = false);
//   });


//     return valid;
// }

class PageRegister extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: "",
      password: "",
      passwordRepeated: "",
      error: {
        email: "",
        password: "",
        passwordRepeated: ""
      }
    }
    this.onChangeStoreRegisterDatas = this.onChangeStoreRegisterDatas.bind(this);
    this.handleSubmitRegister = this.handleSubmitRegister.bind(this)
    // this.onSubmitStoreDatas = this.onSubmitStoreDatas.bind(this);
  }

  onChangeStoreRegisterDatas = (ev) => {
    let inputRegisterName = ev.target.name;
    let inputRegisterValue = ev.target.value;
    this.setState({[inputRegisterName]: inputRegisterValue})
  }
  
  handleSubmitRegister = (ev) => {
    ev.preventDefault();
    let { email, password, passwordRepeated } = this.state; 
    let register = {
      email: email,
      password: password,
      passwordRepeated: passwordRepeated
    }
    this.props.onRegisterUser(register);
  }

  handleSubmit = ev => {
    ev.preventDefault();

    if(this.formValid(this.state)) {
      let { email, password, passwordRepeated } = this.state; 
      let register = {
        email: email,
        password: password,
        passwordRepeated: passwordRepeated
      }
      this.props.onRegisterUser(register);
      // console.log(`
      //   email: ${this.state.email} \n 
      //   password: ${this.state.password} \n 
      //   passwordRepeated: ${this.state.passwordRepeated}
      // `)
    } else {
      console.error("display error")
    }
  }

  handleChange = ev => {
    ev.preventDefault();
    const { name, value } = ev.target;
    let error = this.state.error;

    // console.log(`name: ${name} \n value: ${value}`)

    switch(name) {
      case "email":
        error.email = emailRegex.test(value)
        ? ""
        : "invalid email address";
        break;
        case "password":
          error.password = value.length < 9
          ? "minimum 9 characters required" 
          : "" 
        break;
        case "passwordRepeated":
          error.passwordRepeated = value.length < 9
          ? "minimum 9 characters required" 
          : "" 
        break;
    }

    this.setState({error, [name]: value}, () => console.log(this.state))
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
  // validateFormRegister = (ev) => {
  //   let formValid = true;
  //   let inputType = ev.target.name;
  //   if (/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(this.state.email)) {
  //      /* return true */ 
  //      console.log("correct__email")
  //   } else {
  //     console.log("incorrect__email")
  //   }
  // }
    //Email
    // if(inputType === "email" && !inputType){
    //   formValid = false;
      // this.setState({errors[email]: "empty email"})
  //  }

  //  if(typeof fields["email"] !== "undefined"){
  //     let lastAtPos = fields["email"].lastIndexOf('@');
  //     let lastDotPos = fields["email"].lastIndexOf('.');

  //     if (!(lastAtPos < lastDotPos && lastAtPos > 0 && fields["email"].indexOf('@@') == -1 && lastDotPos > 2 && (fields["email"].length - lastDotPos) > 2)) {
  //        formIsValid = false;
  //        errors["email"] = "Email is not valid";
  //      }
  //   }  

  //   this.setState({errors: errors});
  //   return formIsValid;
  // }
    render() {
      let { error } = this.state;
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
                    <form className="formRegister" onSubmit={this.handleSubmit}>
                        <div className="formRegister--forms">
                            <input 
                              type="text" 
                              placeholder="Your Email" 
                              name="email" 
                              value={this.state.registerEmail} 
                              onChange={this.handleChange}
                              className={error.email.length > 0 ? "inputErrorHighlight" : null} 
                            />
                            {
                              error.email.length > 0 &&
                              <p className="errorDisplayMessage">{error.email}</p>
                            }
                            <input 
                              type="password" 
                              placeholder="Your Password" 
                              name="password" 
                              value={this.state.registerPassword} 
                              onChange={this.handleChange}
                              className={error.password.length > 0 ? "inputErrorHighlight" : null} 
                            />
                            {
                              error.password.length > 0 &&
                              <p className="errorDisplayMessage">{error.password}</p>
                            }
                            <input 
                              type="password" 
                              placeholder="Repeat Password" 
                              name="passwordRepeated" 
                              value={this.state.registerRepeatPassword} 
                              onChange={this.handleChange}
                              className={error.passwordRepeated.length > 0 ? "inputErrorHighlight" : null}  
                            />
                            {
                              error.passwordRepeated.length > 0 &&
                              <p className="errorDisplayMessage">{error.passwordRepeated}</p>
                            }
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

const mapDispatchToProps = dispatch => {
  return {
    onRegisterUser: user => {
      dispatch(actionRegisterUser(user))
    }
  }
}

export default connect(null, mapDispatchToProps)(PageRegister);