import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";

// menu import
import Family from "../components/Menu/Family";
import Graduation from "../components/Menu/Graduation";
import Group from "../components/Menu/Group";
import Wedding from "../components/Menu/Wedding";
import Pet from "../components/Menu/Pet";
import Etc from "../components/Menu/Etc";
import OurTeam from "../components/Menu/Ourteam";
import Login from "../components/Menu/Login&Register/Login";
import Reg from "../components/Menu/Login&Register/Register";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* Login & Register start*/}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Reg />} />
        {/* Login & Register end*/}

        {/* Section 2 pindah halaman start */}
        <Route path="/family" element={<Family />} />
        <Route path="/graduation" element={<Graduation />} />
        <Route path="/group" element={<Group />} />
        <Route path="/wedding" element={<Wedding />} />
        <Route path="/pet" element={<Pet />} />
        <Route path="/etc" element={<Etc />} />
        {/* Section 2 pindah halaman end */}

        {/* Section 5 pindah halaman start */}
        <Route path="/our-team" element={<OurTeam />} />
        {/* Section 5 pindah halaman end */}
      </Routes>
    </Router>
  );
};
export default App;
