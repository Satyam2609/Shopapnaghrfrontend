'use client'
import axios from "axios";
import { useState, ChangeEvent, FormEvent } from "react";

type FormDataType = {
    username: string;
    email: string;
    password: string;
}

export default function SignUp() {
    const [formdata, setFormdata] = useState<FormDataType>({
        username: "",
        email: "",
        password: "",
    });

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormdata(prev => ({ ...prev, [name]: value }));
    }

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        try {
            const res = await axios.post("http://localhost:4000/api/SignUp", formdata, {
                headers: {
                    "Content-Type": "application/json"
                }
            });
            console.log("Register success:", res.data);
        } catch (err) {
            console.error("Error:", err);
        }
    }

    return (


        <div>
        <form onSubmit={handleSubmit}>
            <input type="text" name="username" placeholder="Username" onChange={handleChange}  />
            <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
            <input type="password" name="password" placeholder="Password" onChange={handleChange} required />
            <button type="submit">Sign Up</button>
        </form>
        </div>
    )
}
