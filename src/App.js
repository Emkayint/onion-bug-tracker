import { useEffect } from 'react';
import { useContext } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from "./components/home/home"
import Login from './components/Login/login';
import { AppContext } from './context/AppContext';
function App() {
  const {user, setUser} = useContext(AppContext)
  const token = localStorage.getItem("jwt") 
  useEffect(() => {
    fetch("http://localhost:4000/me", {
      method: "GET",
      Authorization: `Bearer ${token}`
    })
    .then(r => {
      if(r.ok){
        r.json().then(r => {
          setUser(user)
        })
      }
    })
  })
  return (
    <div className="App">

      <Routes>
        <Route path="/" element={user ? <Home /> : <Login />} />
      </Routes>
    </div>
  );
}

export default App;
