import { useState } from "react";
import close from "./cancel.png"
import { useNavigate } from "react-router-dom"
import axios from "axios";

function Register() {
  const navigate = useNavigate();

  const [username, setUsername] = useState('');
  const [notlp, setNotlp] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [password2, setPassword2] = useState('');

  const handleSubmit = () => {
    if(username.length === 0){
      alert("Username tidak boleh kosong!");
    } else  if (notlp.length === 0){
      alert("Nomer tidak boleh kosong!");
    } else  if (email.length === 0){
      alert("Email tidak boleh kosong!");
    } else  if (password.length === 0){
      alert("Password tidak boleh kosong!");
    } else if (password !== password2) { 
      alert ("Kesalahan dalam konfirmasi password");
    } else {
      const url = "http://localhost/enquiry.php";

      let fdata = new FormData();
      fdata.append('username',username);
      fdata.append('notlp',notlp);
      fdata.append('email',email);
      fdata.append('password',password);
      
      axios.post(url, fdata)
      .then(response => alert(response.data))
      .catch(error=> alert(error));
    }
  }
  return (
    <>
      <div className="bg-[#ABC4AA] min-h-screen flex items-center justify-center px-5">
        <form action="" method="post">
          <div className="w-full max-w-lg bg-white rounded-lg shadow-lg">
              <div className="flex justify-between items-center px-4 py-2">
              <h1 className="text-2xl font-bold">Registrasi Member</h1>
              <button onClick={() => navigate('/')} className="px-2 py-1 w-10"><img alt="close" className="hover:opacity-75" src={close}></img></button>
              </div>
              <hr />
              <div className="px-6 py-4">
              <input type="text" placeholder="Username" name="username" required value={username} onChange={(e) => setUsername(e.target.value)} className="w-full px-4 py-2 rounded-lg bg-gray-200 mb-4" />
              <input type="text" placeholder="Nomor Telepon" name="notlp" required value={notlp} onChange={(e) => setNotlp(e.target.value)} className="w-full px-4 py-2 rounded-lg bg-gray-200 mb-4" />
              <input type="text" placeholder="Email" name="email" required value={email} onChange={(e) => setEmail(e.target.value)} className="w-full px-4 py-2 rounded-lg bg-gray-200 mb-4" />
              <input type="password" placeholder="Password" name="password" required value={password} onChange={(e) => setPassword(e.target.value)} className="w-full px-4 py-2 rounded-lg bg-gray-200 mb-4" />
              <input type="password" placeholder="Confirm Password" name="password2" required value={password2} onChange={(e) => setPassword2(e.target.value)} className="w-full px-4 py-2 rounded-lg bg-gray-200 mb-4" />
              <button type="button" name="send" id="send" value="SEND" onClick={handleSubmit} className="bg-blue-500 text-white px-4 py-2 rounded-lg w-full mb-4">Daftar</button>
              <p className="text-sm">Sudah Punya Akun? <button onClick={() => navigate('../login')} className="text-blue-500">Login Disini</button></p>
              </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default Register;