import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

import urls from "../../utils/urls.json";

import { saveUserCredentials } from "../../utils/helpers";
import { DOMAIN } from "../../utils/config";

export default function Login() {
  const [email, setEmail] = useState("joshirajesh448@gmail.com");
  const [password1, setPassword1] = useState("Rajeshj3");
  const [password2, setPassword2] = useState("Rajeshj3");

  const [loading, setLoading] = useState(false);
  const [errorEmail, setErrorEmail] = useState(null);
  const [errorErrorPassword1, setErrorPassword1] = useState(null);
  const [errorErrorPassword2, setErrorPassword2] = useState(null);
  const [error, setError] = useState(null);

  const navigator = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setErrorEmail(null);
    setErrorPassword1(null);
    setErrorPassword2(null);
    setLoading(true);

    try {
      const response = await axios({
        url: `${DOMAIN}/auth/registration/`,
        method: "POST",
        data: {
          email,
          password1,
          password2,
        },
      });
      saveUserCredentials(response.data);
      navigator(urls.dashboard.path);
    } catch (err) {
      setLoading(false);
      try {
        console.log(err.request);
        let error_object = JSON.parse(err.request.response);
        setErrorEmail(error_object.email && error_object.email[0]);
        setErrorPassword1(error_object.password1 && error_object.password1[0]);
        setErrorPassword2(error_object.password2 && error_object.password2[0]);
        setError(
          error_object.non_field_errors && error_object.non_field_errors[0]
        );
      } catch {
        setError(["Unable to signup"]);
      }
    }
  };

  const handleChange = (func, value) => {
    setError(null);
    setErrorEmail(null);
    setErrorPassword1(null);
    setErrorPassword2(null);
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
          value={password1}
          onChange={(e) => handleChange(setPassword1, e.target.value)}
        />
        <input
          placeholder="confirm password"
          type="password"
          value={password2}
          onChange={(e) => handleChange(setPassword2, e.target.value)}
        />
        {errorEmail || errorErrorPassword1 || errorErrorPassword2 || error ? (
          <p
            style={{
              color: "red",
            }}
          >
            {errorEmail || errorErrorPassword1 || errorErrorPassword2 || error}
          </p>
        ) : null}
        <Link to={urls.login.path}>Already Have an Account?</Link>
        <button disabled={loading} type="submit">
          Signup
        </button>
      </form>
    </div>
  );
}
