import { React, useState } from "react";
import "./LoginForm.css";
import { css } from "@emotion/react";
import ClipLoader from "react-spinners/ClipLoader";
import RegisterForm from "../RegisterForm/RegisterForm";
import { Helmet } from "react-helmet";

function LoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassowrd] = useState("");
  const [loading, setLoading] = useState({ visibility: "hidden" });

  /* <==============> LOGIN SYSTEM <==============>*/
  const loginHandler = (event) => {
    setLoading({ visibility: "visible" });
    event.preventDefault();

    const reqOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Credentials": "true",
        "Access-Control-Allow-Methods": "true",
        "Content-Language": "POST",
        Authorization: "zewytA5QVjqGrRjx",
      },
      body: JSON.stringify({
        username: username,
        password: password,
      }),
    };

    // fetch("", reqOptions)
    //   .then((res) => res.json())
    //   .then((data) => {
    //     console.log(data);
    //   });

    console.log(reqOptions.body);
  };

  /* <==============> USERNAME ON CHANGE SAVE <==============>*/
  const usernameHandler = (event) => {
    setUsername(event.target.value);
  };

  /* <==============> PASSWORD ON CHANGE SAVE<==============>*/
  const passwordHandler = (event) => {
    setPassowrd(event.target.value);
  };

  /* <==============> REGISTER FORM ON <==============>*/
  const [clickRegister, setClickRegister] = useState(false);

  const registerToogleHandler = () => {
    setClickRegister(true);
  };
  return clickRegister ? (
    <div>
      <Helmet>
        <title>{"Account - Sign Up"}</title>
      </Helmet>
      <RegisterForm />
    </div>
  ) : (
    <div className="loginFormPanel">
      <Helmet>
        <title>{"Account - Sign In"}</title>
      </Helmet>
      <div className="loginFormPanelForm">
        <div className="loginFormPanelFormSpinner" style={loading}>
          <ClipLoader
            color={"white"}
            loading={true}
            css={css`
              display: block;
              margin: auto;
            `}
            size={100}
          />
        </div>
        <form>
          <span className="labelTitle">Sing In</span>
          <label>Username: </label>
          <input
            type="text"
            name="username"
            onChange={usernameHandler}
            className=""
            require
          />
          <label>Password: </label>
          <input
            type="password"
            onChange={passwordHandler}
            name="password"
            className=""
            require
          />

          <input type="submit" onClick={loginHandler} />
          <span className="link" onClick={registerToogleHandler}>
            Don't have any account?
          </span>
        </form>
      </div>
    </div>
  );
}

export default LoginForm;