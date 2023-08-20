import React, { Component, useState } from "react";
import {useNavigate} from "react-router-dom";
import "./Login.css";
export default function Mess() {

  const [message, setMessage] = useState("");
  const [submittedMessage, setSubmittedMessage] = useState("");
  const navigate = useNavigate(); 
  const topic=localStorage.getItem("topic");
  function handleSubmit(e) {

    e.preventDefault();
    setSubmittedMessage(message); 
    console.log(message);
    fetch("https://iot-2ksh.onrender.com/txte", {
      method: "POST",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        message,
        topic
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "userRegister");
        if (data.status == "ok") {
          alert("sent");
          window.localStorage.setItem("token", data.data);
          window.localStorage.setItem("loggedIn", true);

         // window.location.href = "./userDetails";
        }
      });
  }

  return (
    <div className="auth-wrapper">
      <div className="auth-inner">
        <form onSubmit={handleSubmit}>
          <h3>Enter Data Here</h3>

         <div className="mb-3">
            <label>  <p className="w1"><strong>Enter Data:</strong></p></label>
            <input
              type="text"
              className="form-control"
              placeholder="Data"
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>
          <div>        
  <p className="w1"><strong>Topic</strong></p>
  <div className="submitted-message"><p className="w2">{topic}</p></div>
</div>
          <div>        
  <p className="w1"><strong>Published Data:</strong></p>
  <div className="submitted-message"><p className="w2">{submittedMessage}</p></div>
</div>



          {/* <div className="mb-3">
            <label>Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div> */}

          <div className="mb-3">
            {/* <div className="custom-control custom-checkbox">
              <input
                type="checkbox"
                className="custom-control-input"
                id="customCheck1"
              />
              <label className="custom-control-label" htmlFor="customCheck1">
                Remember me
              </label>
            </div> */}
          </div>

          <div className="d-grid">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
          <p className="forgot-password text-right">
            <a href="/sign-up">Sign Up</a>
          </p>
        </form>
      </div>
    </div>
  );
}
