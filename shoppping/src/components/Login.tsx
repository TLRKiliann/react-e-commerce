import React, { Component, useState, useEffect, useContext } from "react";
import axios from "axios";
import "./styles.css";
import { useAuthLogin } from "../context/AuthContextProvider"


type props = {
    email: string
    password: string
    success: boolean
}

const Login = ({ props, children }) => {

    const [password, setPassword] = useState("")
    const [success, setSuccess] = useState(false)
    const [post, setPost] = React.useState(null)
    const [errMsg, setErrMsg] = React.useState(null)

    console.log("It's my password", password)

    const { toggle, switchLogin, email, setEmail } = useAuthLogin();

    useEffect(() => {
        const storageEmail = JSON.parse(localStorage.getItem('Email'));
        setEmail(storageEmail)
        const storePass = JSON.parse(localStorage.getItem('Passwd'));
        setPassword(storePass)
    }, []);

    useEffect(() => {
        localStorage.setItem('Email', JSON.stringify(email));
        localStorage.setItem('Passwd', JSON.stringify(password));
    }, [email, password]);

    const emailLogin = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value)
    };

    const passwordLogin = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value)
    };

    const onHandleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setSuccess(false)
        const logedIn = {
            email: email,
            password: password
        }

        const res = await axios.post("http://localhost:4000/app/login", logedIn)
            .then((res) => {
                toggle()
                setSuccess(true)
                console.log(res.data)
            })
            .catch((err) => console.log("error"))

        setPassword("")
    };

    return (
        <form className="form--logsign" onSubmit={(e) => onHandleSubmit(e)}>
            <h1>Login</h1>

            <input type="email" className="input--logsign" value={email}
                placeholder="e-mail" onChange={(e) => emailLogin(e)} />

            <input type="password" className="input--logsign" value={password}
                placeholder="password" onChange={(e) => passwordLogin(e)} />

            <button type="submit" className="btn--submit">
                Login
            </button>

            {!switchLogin && success ? (
                <h5 style={{marginTop: "10px", padding: "5px 10px", 
                    background: "green", borderRadius: "15px", color: "white"}}
                >
                    Success Login !
                </h5>

                ) : (

                <h5 
                    style={{marginTop: "10px", padding: "5px 10px", 
                    background: "lightpink", borderRadius: "15px", color: "red"}}
                >
                    No logged in !
                </h5>

            )}
        </form>
    )
}

export default Login;


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
