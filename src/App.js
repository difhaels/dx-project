import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";

// menu import
import Family from "./Menu/Family";
import Graduation from "./Menu/Graduation";
import Group from "./Menu/Group";
import Wedding from "./Menu/Wedding";
import Pet from "./Menu/Pet";
import Etc from "./Menu/Etc";
import OurTeam from "./Menu/Ourteam";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
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
