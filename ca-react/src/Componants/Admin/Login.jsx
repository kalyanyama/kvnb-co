import { useState } from "react";
import "./Admin.css";
import { baseUrl } from "../helpers/helper";
import {useNavigate} from "react-router-dom"

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
const url = baseUrl
const navigator = useNavigate()
  const handleLogin = (e) => {
    e.preventDefault()
    const fetchingLogin = async () => {
      const options = {
        method: "post",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          username: username,
          password: password,
        }),
      };
      await fetch(url + "admin/login", options)
        .then((res) => res.json())
        .then((data) => {
          if (data.success) {
            localStorage.setItem("token", data.token)
            setMessage(data.message);
            navigator('/dashboard')
            window.location.reload(false)
          } else {
            setMessage(data.message);
          }
        });
    };
    fetchingLogin();
  };

  return (
    <div className="login" id="login">
      <div className="container py-5">
        <div className="row py-5">
          <div className="col-md-4 col-lg-4 mx-auto">
            <img src="/login.png" className="img-fluid" />
          </div>
          <div className="col-md-4 col-lg-4 py-5 mx-auto my-auto">
            <p className="text-center text-danger" >{message}</p>
            <form onSubmit={handleLogin}>
              <div className="form-group">
                <label>Username</label>
                <input
                  type="text"
                  className="form-control"
                  onChange={(e) => setUsername(e.target.value)}
                  required
                />
              </div>
              <div className="form-group">
                <label>Password</label>
                <input
                  type="password"
                  className="form-control"
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <div className="text-center">
                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
