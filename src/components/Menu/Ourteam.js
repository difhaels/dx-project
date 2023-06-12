import { useNavigate } from "react-router-dom";

const OurTeam = () => {
  const navigate = useNavigate();
  return (
    <>
      <div>
        <h1>Our Team</h1>
        <button onClick={() => navigate("/")} className="bg-bg px-4 py-2 mt-5 rounded-md hover:text-white">
          Back to Home
        </button>
      </div>
    </>
  );
};
export default OurTeam;
