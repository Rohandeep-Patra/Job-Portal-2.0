import { Routes,Route } from "react-router-dom";
import Home from './Home/Home.jsx'
import Registration from "./Registration/Registration.jsx";
import HomeCandidate from "./Home/Home.candidate.jsx";
import HomeEmployee from "./Home/Home.employee.jsx";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/register" element={<Registration/>} />
        <Route path="/candidate-home" element={<HomeCandidate/>} />
        <Route path="/employee-home" element={<HomeEmployee/>} />

      </Routes>
    </>
  );
}

export default App;
