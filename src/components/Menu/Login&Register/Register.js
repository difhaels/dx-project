import { useNavigate } from "react-router-dom"

function Register() {
  const navigate = useNavigate();

  return (
    <div className="bg-[#ABC4AA] min-h-screen flex items-center justify-center">
      <form action="login_proses.php" method="post">
        <div className="w-full max-w-lg bg-white rounded-lg shadow-lg">
            <div className="px-6 py-4">
            <h1 className="text-2xl font-bold">Registrasi Member</h1>
            </div>
            <hr />
            <div className="px-6 py-4">
            <input type="text" placeholder="Nama Lengkap" name="nama" required className="w-full px-4 py-2 rounded-lg bg-gray-200 mb-4" />
            <input type="text" placeholder="Nomor Telepon" name="notlp" required className="w-full px-4 py-2 rounded-lg bg-gray-200 mb-4" />
            <input type="text" placeholder="Alamat" name="alamat" required className="w-full px-4 py-2 rounded-lg bg-gray-200 mb-4" />
            <input type="text" placeholder="Email" name="email" required className="w-full px-4 py-2 rounded-lg bg-gray-200 mb-4" />
            <input type="password" placeholder="Password" name="pswd" required className="w-full px-4 py-2 rounded-lg bg-gray-200 mb-4" />
            <input type="password" placeholder="Confirm Password" name="pswd" required className="w-full px-4 py-2 rounded-lg bg-gray-200 mb-4" />
            <label className="flex items-center">
                <input type="checkbox" className="form-checkbox" />
                <span className="ml-2 text-sm">Saya Setuju dengan Syarat dan Ketentuan yang berlaku</span>
            </label>
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-lg w-full mt-4">Daftar</button>
            <hr />
            <p className="text-sm">Sudah Punya Akun? <button onClick={() => navigate('../login')} className="text-blue-500 border-none">Login Disini</button></p>
            </div>
        </div>
      </form>
    </div>
  );
}

export default Register;