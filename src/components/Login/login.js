import "./login.css"
import {BsGoogle, BsGithub, BsLinkedin} from "react-icons/bs"
import { useContext, useState } from "react"
import { AppContext } from "../../context/AppContext"


export default function Login () {
  const { setUser } = useContext(AppContext)
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const handleSubmit = (e) => {
    e.preventDefault()
    const data = {
      username: username,
      password: password
    }

    fetch("http://localhost:4000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify(data)
    })
    .then(r => {
      if(r.ok){
        r.json() 
        .then(r => {
          setUser({username: r.username, email: r.email})
          localStorage.setItem("jwt", r.jwt)
          setUsername("")
          setPassword("")
        })
      } else {
        alert("Error")
      }
    })

  } 
  return (
    <div className="container-main Login d-flex align-items-center">
      <form className="col-sm-10 col-md-8 col-lg-3 form p-4" onSubmit={handleSubmit}>
        <header className="header">
          <h3 className="text-center">WELCOME BACK</h3>
        </header>
        <div className="form-group pt-4">
          <label htmlFor="Username">Username</label>
          <input
            type="text"
            id="Username"
            className="form-contro"
            required
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="passord"
            id="passord"
            className="form-contro"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="form-group py-3">
          <input
            type="submit"
            value="submit"
            className="btn btn-secondary button"
          />
        </div>
        <br />
        <hr />
        <div className="container-main p-3">
          <p className="text-center">
            <span className="mr-3 google">
              <BsGoogle />
            </span>
            <span className="mr-3 github">
              <BsGithub />
            </span>
            <span className="text-primary">
              <BsLinkedin />
            </span>
          </p>
        </div>
      </form>
    </div>
  );
}