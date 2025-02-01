
import React, { useState } from "react"
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function Auth() {
  let [authMode, setAuthMode] = useState("signin");
  let [error ,setError] = useState('');
  const navigate = useNavigate();
  const [credentials,setCredentials] = useState({
    username:"",
    email:"",
    password:""
  });
  
  const changeAuthMode = () => {
     setAuthMode(authMode === "signin" ? "signup" : "signin")
  }

  /* handling the data on submit */
  const handleSubmit = async(event)=>{
    event.preventDefault();

    const data = {
      username: credentials.username,
      email: credentials.email,
      password: credentials.password,
    }

    try {
      const response = await axios.post(`http://127.0.0.1:8000/api/users/`,data);
      navigate('/dashboard')
    } catch (error) {
      window.alert(error.response.data.username[0])
      setError(error);
    }
  }

  

  if (authMode === "signin") {
    return (
      <div className="Auth-form-container">
        <form className="Auth-form" onSubmit={handleSubmit} method="GET">
          <div className="Auth-form-content">
            <h3 className="Auth-form-title">Money Tracker</h3>
            <div className="text-center">
              Not registered yet?{" "}
              <span className="link-primary" onClick={changeAuthMode}>
                Sign Up
              </span>
            </div>
            <div className="form-group mt-3">
              <label>Email address</label>
              <input
                type="email"
                name="email"
                value={credentials.email}
                onChange={(e)=>setCredentials({...credentials,email:e.target.value})}
                className="form-control mt-1"
                placeholder="Enter email"
              />
            </div>
            <div className="form-group mt-3">
              <label>Password</label>
              <input
                type="password"
                name="password"
                value={credentials.password}
                onChange={(e)=>setCredentials({...credentials,password:e.target.value})}
                className="form-control mt-1"
                placeholder="Enter password"
              />
            </div>
            <div className="d-grid gap-2 mt-3">
              
              <button 
                type="submit" 
                className="btn btn-primary"
                >
                Submit
              </button>
            </div>
            <p className="text-center mt-2">
              Forgot <a href="/">password?</a>
            </p>
          </div>
        </form>
      </div>
    )
  }

  return (
    <div className="Auth-form-container">
      <form className="Auth-form"  onSubmit={handleSubmit} method="POST">
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Money Tracker</h3>
          <div className="text-center">
            Already registered?{" "}
            <span className="link-primary" onClick={changeAuthMode}>
              Sign In
            </span>
          </div>
          <div className="form-group mt-3">
            <label>Username</label>
            <input
              type="text"
              name="username"
              value={credentials.username}
              onChange={(e)=>setCredentials({...credentials,username:e.target.value})}
              className="form-control mt-1"
              placeholder="e.g Jane Doe"
            />
          </div>
          <div className="form-group mt-3">
            <label>Email address</label>
            <input
              type="email"
              name="email"
              value={credentials.email}
              onChange={(e)=>setCredentials({...credentials,email:e.target.value})}
              className="form-control mt-1"
              placeholder="Email Address"
            />
          </div>
          <div className="form-group mt-3">
            <label>Password</label>
            <input
              type="password"
              name="password"
              value={credentials.password}
              onChange={(e)=>setCredentials({...credentials,password:e.target.value})}
              className="form-control mt-1"
              placeholder="Password"
            />
          </div>
          <div className="d-grid gap-2 mt-3">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
          <p className="text-center mt-2">
            Forgot <a href="/">password?</a>
          </p>
        </div>
      </form>
    </div>
  )
}