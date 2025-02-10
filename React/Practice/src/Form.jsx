import { useState } from "react";
import React from "react";

function Form() {

    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const [error,setError]=useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!email || !password) {
            setError("Both fields are required!");
        } else {
            setError("");
            alert("Login successful!");
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <input type="email" placeholder="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div>
                <input type="password" placeholder="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)} />
            </div>
            <button type="submit">Login</button>
        </form>
    )
}

export default Form;