import React, { Component, useContext } from "react";
import axios from "axios";
import "../styles.css";
//import AuthContext from "../context/AuthProvider"




class Login extends Component<props> {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            success: false
        }
    }
    //const setAuth = useContext(AuthContext);


    emailLogin = (e: Input.Event) => {
        e.preventDefault();
        this.setState({email: e.target.value});
    };

    passwordLogin = (e: Input.Event) => {
        e.preventDefault();
        this.setState({password: e.target.value});
    };

    onSubmit = async (e: Form.Event) => {
        e.preventDefault();

        const logedIn = {
            email: this.state.email,
            password: this.state.password
        }

        /*try {
            const response = await axios.post("http://localhost:4000/app/login", 
                JSON.stringify({logedIn}),
                {
                    headers: { "Content-Type": "application/json" },
                    withCredentials: true
                }
            )
            //const accessToken = response?.data?.accessToken
            console.log(JSON.stringify(response?.data))
            const roles = response?.data?.roles
            //setAuth({email, password, roles});
            setEmail("")
            setPassword("")
            setSuccess(true)

        } catch (err) {
            if (!err?.response) {
                setErrorMsg("No server response")
            } else if (err.response?.status === 400) {
                setErrorMsg("Missing e-mail or password")

            } else if (err.response?.status === 401) {
                setErrorMsg("Unauthorized !")
            } else {
                setErrorMsg("Login failed")
            }
        }*/

        axios.post("http://localhost:4000/app/login", logedIn)
            .then(res => console.log(res.data))
            .catch(err => console.log(err));

            this.setState({password:"", email:"", success: true});
    };

    render() {
        return (
            <form className="form--logsign" onSubmit={(e) => this.onSubmit(e)}>
                <h1>Login</h1>

                <input type="email" className="input--logsign" value={this.state.email}
                    placeholder="e-mail" onChange={(e) => this.emailLogin(e)} />

                <input type="password" className="input--logsign" value={this.state.password}
                    placeholder="password" onChange={(e) => this.passwordLogin(e)} />

                <button type="submit" className="btn--submit">
                    Login
                </button>
                {this.state.success ? (
                    <h5 style={{marginTop: "10px", padding: "5px 10px", 
                        background: "lightpink", borderRadius: "15px", color: "green"}}
                    >
                        Success Login !
                    </h5>
                ) : (
                    <h5 style={{marginTop: "10px", padding: "5px 10px", 
                        background: "lightpink", borderRadius: "15px", color: "red"}}
                    >
                        Login failed !
                    </h5>
                )}

            </form>
        )
    }
}

export default Login;