import { useNavigate } from "react-router-dom";

function Section5() {
  const navigate = useNavigate();

  return (
    <button className="px text-center my-5 px-3 py-2 bg-bg text-text rounded-lg hover:text-white " onClick={() => navigate("our-team")}>
      Our Team
    </button>
  );
}
export default Section5;
