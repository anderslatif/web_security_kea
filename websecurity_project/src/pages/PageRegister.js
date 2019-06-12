/*eslint-disable*/
import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Tilt from 'react-tilt';
import { connect } from "react-redux";
import { actionRegisterUser } from "../actions/userActions";

const emailRegex = RegExp(
  /^[a-zA-Z0-9.!#%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
);

const xssPrevent = (string) => {
  return string.replace(/&/, "&amp").replace(/</, "&lt")
};

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
  }

  handleSubmit = ev => {
    ev.preventDefault();

    if (this.formValid(this.state)) {
      let { email, password, passwordRepeated } = this.state;
      let register = {
        email: email,
        password: password,
        passwordRepeated: passwordRepeated
      }


      this.props.onRegisterUser(register);
      console.log(this.props.isRegistered);
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

    this.setState({error, [name]: value}, () => console.log(""))
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
    console.log(this.props.isRegistered)
    if (this.props.isRegistered) {
        this.props.history.push('/login')
        // browserHistory.push("/profile")
    }
}
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
                            {/* {this.props.user.isRegistered} */}
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

const mapStateToProps = state => {
  return {
    isRegistered: state.user.isRegistered
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PageRegister);
