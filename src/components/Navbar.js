import DXlogo3 from './img/logo/Logo.png';
import { useNavigate } from "react-router-dom"
import { useLocation } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const username = location?.state?.username;

  return (<>
      <div className="px py-3 bg-bg flex items-center justify-between">
          <img src={DXlogo3} alt="Logo" width="60"></img>
          <div className="flex">
            {username !== undefined? <h1 className="halo text-lg text-slate-50 font-semibold">Halo, {username}</h1>:<button onClick={() => navigate("login")} className="login-btn text-white px-5 py-2 bg-emerald-800 shadow-xl hover:bg-emerald-700 rounded-lg text-sm font-medium">Login</button>}
          </div>
      </div>
    </>
  );
}
export default Navbar;
