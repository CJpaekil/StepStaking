import { Routes, Route, useLocation } from 'react-router-dom';
import HomePage from "./pages/Home";
import ClaimPage from "./pages/Claim";
import Navbar from "./component/Layout/Navbar";
import Footer from "./component/Layout/Footer";
import './App.css';

function App() {
  const location = useLocation();
  return (
    <div className="App">
      <Navbar />
      <div>
        <Routes location={location}>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/Home" element={<HomePage />}></Route>
          <Route path="/Claim" element={<ClaimPage />}></Route>
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
