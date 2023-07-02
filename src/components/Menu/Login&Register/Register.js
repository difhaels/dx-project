import close from "../../img/icon/cancel.png"
import { useNavigate } from "react-router-dom"

function Register() {
  const navigate = useNavigate();

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
              <input type="text" placeholder="Username" name="username" required className="w-full px-4 py-2 rounded-lg bg-gray-200 mb-4" />
              <input type="text" placeholder="Nomor Telepon" name="notlp" required className="w-full px-4 py-2 rounded-lg bg-gray-200 mb-4" />
              <input type="text" placeholder="Email" name="email" required className="w-full px-4 py-2 rounded-lg bg-gray-200 mb-4" />
              <input type="password" placeholder="Password" name="password" required className="w-full px-4 py-2 rounded-lg bg-gray-200 mb-4" />
              <input type="password" placeholder="Confirm Password" name="password2" required className="w-full px-4 py-2 rounded-lg bg-gray-200 mb-4" />
              <button type="submit" name="regis" className="bg-blue-500 text-white px-4 py-2 rounded-lg w-full mb-4">Daftar</button>
              <p className="text-sm">Sudah Punya Akun? <button onClick={() => navigate('../login')} className="text-blue-500">Login Disini</button></p>
              </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default Register;