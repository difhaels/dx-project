import { useEffect, useState } from "react";
import close from "./cancel.png"
import { useNavigate } from "react-router-dom"

function Login() {
  const navigate = useNavigate();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [msg, setMsg] = useState('');

  useEffect(() => {
    let login = localStorage.getItem("login");
    if(login){
        navigate("/");
    }
    let loginStatus = localStorage.getItem("loginStatus");
    if(loginStatus){
        setError(loginStatus);
        setTimeout(function(){
            localStorage.clear();
            window.location.reload();
        }, 3000);
    }
    setTimeout(function(){
        setMsg("");
    }, 5000);
}, [msg]);

const handleInputChange = (e, type) => {
  switch(type){
      case "username":
          setError("");
          setUsername(e.target.value);
          if(e.target.value === ""){
              setError("Username tidak boleh kosong!");
          }
          break;
      case "password":
          setError("");
          setPassword(e.target.value);
          if(e.target.value === ""){
              setError("Password tidak boleh kosong!");
          }
          break;
      default:
  }
}

function loginSubmit(){
  if(username !== "" && password != ""){
      var url = "http://localhost/determinix/login.php";
      var headers = {
          "Accept": "application/json",
          "Content-type": "application/json"
      };
      var Data = {
          username: username,
          nama: password
      };
      fetch(url, {
          method: "POST",
          headers: headers,
          body: JSON.stringify(Data)
      }).then((response) => response.json())
      .then((response) => {
          if(response[0].result === "Invalid username!" || response[0].result === "Invalid password!"){
              setError(response[0].result);
          }
          else{
              setMsg(response[0].result);
              setTimeout(function(){
                  localStorage.setItem("login", true);
                  navigate("/");
              }, 5000);
          }
      }).catch((err) => {
          setError(err);
          console.log(err);
      })
  }
  else{
      setError("All field are required!")
  }
}

  return (
    <>
      <div className="bg-[#ABC4AA] min-h-screen px-5 flex items-center justify-center">
        <form action="" method="post">
          <div className="w-full max-w-lg bg-white rounded-lg shadow-lg">
            <div className="flex justify-between items-center px-4 py-2">
              <h1 className="text-2xl font-bold">Login</h1>
              <button onClick={() => navigate('/')} className="px-2 py-1 w-10"><img alt="close" className="hover:opacity-75" src={close}></img></button>
            </div>
            <hr />
            <p>
              {
                error !== ""?
                <span>{error}</span>:
                <span>{msg}</span>
              }
            </p>
            <div className="px-6 py-4">
              <input type="text" placeholder="Username" name="username" value={username} onChange={(e) => handleInputChange(e, "username")} className="logister-input" />
              <input type="password" placeholder="Password" name="password" value={password} onChange={(e) => handleInputChange(e, "password")} className="logister-input" />
              <button type="submit" name="login" defaultValue="Login" onClick={loginSubmit} className="bg-blue-500 text-white hover:bg-blue-400 px-4 py-2 rounded-lg w-full mb-4">Login</button>
              <p className="text-sm">Belum punya akun? <button onClick={() => navigate('../register')} className="text-blue-500 border-none">Daftar Disini</button></p>
            </div>
          </div>
        </form>
      </div>
    </>
    
  );
}

export default Login;