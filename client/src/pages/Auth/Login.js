import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

import urls from "../../utils/urls.json";

import { saveUserCredentials } from "../../utils/helpers";
import { DOMAIN } from "../../utils/config";

export default function Login() {
  const [email, setEmail] = useState("joshirajesh448@gmail.com");
  const [password, setPassword] = useState("Rajeshj3");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const navigator = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    try {
      const response = await axios({
        method: "POST",
        url: `${DOMAIN}/auth/login/`,
        data: {
          email,
          password,
        },
      });
      saveUserCredentials(response.data);
      navigator(urls.dashboard.path);
    } catch (err) {
      setLoading(false);
      try {
        let error_object = JSON.parse(err.request.response);
        setError(error_object.non_field_errors[0]);
      } catch {
        setError(["Unable to log in with provided credentials"]);
      }
    }
  };

  const handleChange = (func, value) => {
    setError(null);
    func(value);
  };

  return (
    <div>
      <h1>Login</h1>
      <form
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
        onSubmit={handleSubmit}
      >
        <input
          placeholder="email"
          type="email"
          value={email}
          onChange={(e) => handleChange(setEmail, e.target.value)}
        />
        <input
          placeholder="password"
          type="password"
          value={password}
          onChange={(e) => handleChange(setPassword, e.target.value)}
        />
        {error ? (
          <p
            style={{
              color: "red",
            }}
          >
            {error}
          </p>
        ) : null}
        <Link to={urls.forgotPassword.path}>Forgot password?</Link>
        <Link to={urls.signup.path}>Don't Have an Account?</Link>

        <button disabled={loading} type="submit">
          Login
        </button>
      </form>
    </div>
  );
}
