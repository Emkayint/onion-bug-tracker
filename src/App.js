import { useEffect } from 'react';
import { useContext } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from "./components/home/home"
import Issue from './components/issues/issue';
import { Authentication } from './components/Login/Login1';
import Profile from './components/profile/Profile';
import { AppContext } from './context/AppContext';
function App() {
  const {user, setUser} = useContext(AppContext)
  const token = localStorage.getItem("jwt") 
  useEffect(() => {
    fetch("https://tracker-production.up.railway.app/me", {
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
        <Route path="/" element={user ? <Home /> : <Authentication />} />
        <Route path="/issue/:id" element={user ? <Issue /> : <Authentication />} />
        <Route path="/profile" element={user ? <Profile /> : <Authentication />} />
      </Routes>
    </div>
  );
}

export default App;
