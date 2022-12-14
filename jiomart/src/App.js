import logo from './logo.svg';
import SignupCard from './Login/signupPage';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from "./navbars/Navbar"
function App() {
  return (
    <div className="App">
        <Route path="/login" element={<SignupCard />} />

      <Navbar/>
    </div>
  );
}

export default App;
