import close from "./cancel.png"
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Login() {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = () => {
    const url = "http://localhost/determinix/login.php";

    let fdata = new FormData();
    fdata.append("username", username);
    fdata.append("password", password);

    axios
      .post(url, fdata)
      .then(response => {
        const data = response.data;
        if (data === "Success!") {
          // Login berhasil, navigasikan pengguna ke halaman beranda
          navigate("/");
        } else {
          // Login gagal, tampilkan pesan kesalahan
          setErrorMessage("Username atau password salah");
        }
      })
      .catch(error => {
        // Kesalahan dalam permintaan
        setErrorMessage("An error occurred. Please try again later.");
      });
  };

  return (
    <>
      <div className="bg-[#ABC4AA] min-h-screen flex items-center justify-center px-5">
        <form>
          <div className="w-full max-w-lg bg-white rounded-lg shadow-lg">
            <div className="flex justify-between items-center px-4 py-2">
              <h1 className="text-2xl font-bold">Login</h1>
              <button
                onClick={() => navigate("/")}
                className="px-2 py-1 w-10"
              >
                <img alt="close" className="hover:opacity-75" src={close}></img>
              </button>
            </div>
            <hr />
            <div className="px-6 py-4">
              <input
                type="text"
                placeholder="Username"
                name="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="logister-input"
              />
              <input
                type="password"
                placeholder="Password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="logister-input"
              />
              <button
                type="button"
                name="send"
                id="send"
                value="SEND"
                onClick={handleSubmit}
                className="bg-blue-500 text-white px-4 py-2 rounded-lg w-full mb-4"
              >
                Login
              </button>
              {errorMessage && <p className="text-red-500">{errorMessage}</p>}
              <p className="text-sm">
                Belum punya akun?{" "}
                <button onClick={() => navigate("/register")} className="text-blue-500">
                  Daftar Disini
                </button>
              </p>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default Login;
