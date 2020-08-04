import React, { Component } from 'react';
import FieldLabel from '../../components/label/index';
import CustomTextInput from '../../components/inputfield/index';
import { verifyUser } from './services/index';

class Login extends Component {

    state = {
        email: "",
        password: "",
        isValidUser: null,
        message: "",
        validationResponse: ""
    }

    onChanges = (event) => {
        event.preventDefault();
        const { name, value } = event.target;
        this.setState({ [name]: `${value}` });
    }


    validation = async () => {
        let { email, password } = this.state;

        var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);

        if (!pattern.test(email)) {
            return this.setState({ validationResponse: "Please enter valid email address." });
        }

        if (password.length < 5) {
            return this.setState({ validationResponse: "Please enter password of minimum length 5" });
        }

        let { result, message = "Invalid User" } = await verifyUser({ email, password });
        if (result) {
            this.setState({ isValidUser: true, validationResponse: "" })
            window.location.href = "/home";
        }
        else {
            this.setState({ isValidUser: false, message, validationResponse: "" })
        }
    }

    render() {
        return (
            <div>

                <div>
                    <div class="cotainer">
                        <div class="row justify-content-center">
                            <div class="col-md-8">
                                <div class="card">
                                    <div class="card-header">LOGIN</div>
                                    <div class="card-body">

                                        {/* login form */}
                                        <div>
                                            {/* rendering the email field */}
                                            <div class="form-group row">
                                                <FieldLabel
                                                    classStyle="col-md-4 col-form-label text-md-right"
                                                    textLabel={'E-Mail Address'}
                                                />
                                                <div class="col-md-6">
                                                    <CustomTextInput
                                                        type="email"
                                                        name="email"
                                                        value={this.state.email}
                                                        onChanges={this.onChanges}
                                                    />
                                                </div>
                                            </div>

                                            {/* rendering the password field */}
                                            <div class="form-group row">
                                                <FieldLabel
                                                    classStyle="col-md-4 col-form-label text-md-right"
                                                    textLabel={'Password'}
                                                />
                                                <div class="col-md-6">
                                                    <CustomTextInput
                                                        type="password"
                                                        name="password"
                                                        value={this.state.password}
                                                        onChanges={this.onChanges}
                                                    />
                                                </div>
                                            </div>
                                            {/* front end validation */}
                                            {this.state.validationResponse && <div class="alert alert-success" role="alert">
                                                {`${this.state.validationResponse}`}
                                            </div>}

                                            {/* if valid user */}
                                            {this.state.isValidUser && <div class="alert alert-success" role="alert">
                                                Valid User!
                                                </div>}

                                            {/* if in-valid user */}
                                            {this.state.isValidUser === false && <div class="alert alert-danger" role="alert">
                                                {this.state.message}
                                            </div>}

                                            {/* submit button & forgot password  */}
                                            <div class="col-md-6 offset-md-4">
                                                <button type="submit" class="btn btn-primary" onClick={() => this.validation()}>
                                                    SUBMIT
                                            </button>
                                                <a href="/resetpassword" class="btn btn-link">
                                                    Forgot Your Password?
                                </a>

                                            </div>


                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Login;