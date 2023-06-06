import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";



const Graduation = () => {
  const [coba, setCoba] = useState(0);
  const [sepuluh, setSepuluh] = useState("belum sepuluh")
  useEffect(()=>{
    coba >=  10 ? setSepuluh("sudah sepuluh") : setSepuluh("belum sepuluh");
  }, [coba])

  const navigate = useNavigate();
  return (
    <>
      <div>
        <h1>ini Graduation bro</h1>
        <button onClick={() => navigate("/")} className="bg-green-300 px-4 py-2 mt-5 rounded-md">
          Back to Home
        </button>
        <h1>{coba}</h1>
        <button onClick={() => {setCoba(coba+1)}}>+</button>
        <h1>{sepuluh}</h1>
      </div>
    </>
  );
};
export default Graduation;
