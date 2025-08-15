// Following code has been commented with appropriate comments for your reference.
import React, { useState } from 'react';
import './Sign_Up.css'
import { Link, useNavigate } from 'react-router-dom';
import { API_URL } from '../../config';

// Function component for Sign Up form
const Sign_Up = () => {
    // State variables using useState hook
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const [showerr, setShowerr] = useState(''); // State to show error messages
    const navigate = useNavigate(); // Navigation hook from react-router

    // Function to handle form submission
    const register = async (e) => {
        e.preventDefault(); // Prevent default form submission

        // API Call to register user
        const response = await fetch(`${API_URL}api/auth/register`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                name: name,
                email: email,
                password: password,
                phone: phone,
            }),
        });

        const json = await response.json(); // Parse the response JSON

        if (json.authtoken) {
            // Store user data in session storage
            sessionStorage.setItem("auth-token", json.authtoken);
            sessionStorage.setItem("name", name);
            sessionStorage.setItem("phone", phone);
            sessionStorage.setItem("email", email);

            // Redirect user to home page
            navigate("/");
            window.location.reload(); // Refresh the page
        } else {
            if (json.errors) {
                for (const error of json.errors) {
                    setShowerr(error.msg); // Show error messages
                }
            } else {
                setShowerr(json.error);
            }
        }
    };

    // JSX to render the Sign Up form
    return (
        <div className="signup-container">
            <h1>Sign Up</h1>
            <h3>Already a member? <Link to="/login">Login</Link></h3>
            {showerr && <div className="err" style={{ color: 'red' }}>{showerr}</div>}
            {/* Form that REQUIRES Role, Name, Phone No., Email, and Password. Submit and Reset button at the end. */}
            <form className="signup-form" method="POST" onSubmit={register}>
                <table>
                    <tbody>
                    <tr>
                        <td>Role</td>
                        <td>
                        <div className="signup-radio-row">
                            <input type="radio" name="role" id="patient" required /><label htmlFor="patient">Patient</label>
                            <input type="radio" name="role" id="doctor" /><label htmlFor="doctor">Doctor</label>
                        </div>
                        </td>
                    </tr>
                    <tr>
                        <td><label htmlFor="name">Name</label></td>
                        <td><input value={name} onChange={(e) => setName(e.target.value)} type="text" name="name" id="name" required placeholder="Your name here" aria-describedby="helpId" /></td>
                    </tr>
                    <tr>
                        <td><label htmlFor="phone">Phone #</label></td>
                        <td><input value={phone} onChange={(e) => setPhone(e.target.value)} type="tel" name="phone" id="phone" required placeholder="1234567890" maxLength="10" aria-describedby="helpId" /></td>
                    </tr>
                    <tr>
                        <td><label htmlFor="email">E-mail</label></td>
                        <td><input value={email} onChange={(e) => setEmail(e.target.value)} type="email" name="email" id="email" required placeholder="Your e-mail address here" aria-describedby="helpId" /></td>
                    </tr>
                    <tr>
                        <td><label htmlFor="password">Password</label></td>
                        <td><input value={password} onChange={(e) => setPassword(e.target.value)} name="password" id="password" required placeholder="Your password here" aria-describedby="helpId" /></td>
                    </tr>
                    </tbody>
                </table>

                <div className="signup-btn-row">
                    <button type="submit" className="btn1">Submit</button>
                    <button type="reset" className="btn1">Reset</button>
                </div>
            </form>
        </div>
    );
};

export default Sign_Up; // Export the Sign_Up component for use in other components