import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import "./Login.css";

const Login = () => {
    return (
          <div className="login-container">
            <h1>Login</h1>
            <h3>Not a member yet? <Link to="/signup">Sign Up</Link></h3>
            {/* Form that REQUIRES Email and Password. Submit and Reset button at the end. */}
            <form className="login-form">
                <table>
                    <tbody>
                    <tr>
                        <td><label for="email">E-mail</label></td>
                        <td><input type="email" name="email" id="email" required placeholder="Your e-mail address here" /></td>
                    </tr>
                    <tr>
                        <td><label for="password">Password</label></td>
                        <td><input name="password" id="password" required placeholder="Your password here" /></td>
                    </tr>
                    </tbody>
                </table>

                <div className="login-btn-row">
                    <button type="submit" class="btn1">Submit</button>
                    <button type="reset" class="btn1">Reset</button>
                </div>
            </form>
        </div>
    );
};

export default Login;