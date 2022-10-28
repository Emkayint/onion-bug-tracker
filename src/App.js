import { useEffect } from 'react';
import { useContext } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from "./components/home/home"
import Issue from './components/issues/issue';
import Login from './components/Login/login';
import { AppContext } from './context/AppContext';
function App() {
  const {user, setUser} = useContext(AppContext)
  const token = localStorage.getItem("jwt") 
  useEffect(() => {
    fetch("http://localhost:4000/me", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }).then((r) => {
      if (r.ok) {
        r.json().then((r) => {
          setUser(r);
        });
      }
    });
  }, [token, setUser]);
  return (
    <div className="App">

      <Routes>
        <Route path="/" element={user ? <Home /> : <Login />} />
        <Route path = '/issue/:id' element = {<Issue />} />
      </Routes>
    </div>
  );
}

export default App;
