import DXlogo3 from './img/logo/Logo.png';
import { useNavigate } from "react-router-dom"
function Navbar() {
  const navigate = useNavigate();
  return (<>
      <div className="px py-3 bg-bg flex items-center justify-between">
          <img src={DXlogo3} alt="Logo" width="60"></img>
          <div className="flex">
              <button onClick={() => navigate("login")} className="text-white px-5 py-2 bg-emerald-800 shadow-xl hover:bg-emerald-700 rounded-lg text-sm font-medium">Login</button>
          </div>
      </div>
    </>
  );
}
export default Navbar;
