import React from "react";
import { useLocation } from "wouter";
import "./Login.css"

export default function Login() {

    const setLocation = useLocation()[1]

    const handleSubmit = e => {
        e.preventDefault()
        setLocation("/home")
    }
    
    return (
        <section className="container-login">
            <h2>Login</h2>
            <form className="container-login-form" onSubmit={handleSubmit}>
                <input type="text" name="" id="" placeholder="Escribe tu usuario" className="inputField" />
                <input type="password" name="" id="" placeholder="Escribe tu contraseña" className="inputField" />
                <input type="submit" value="Iniciar sesion" />
            </form>
        </section>
    )
}