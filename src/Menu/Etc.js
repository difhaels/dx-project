import { useNavigate } from "react-router-dom"

import img3 from "./img/etc/img3.jpg"

const Etc = () => {
    const navigate = useNavigate();
    return (<>
        <div className="px">
            <h1>ini Etc bro</h1>
            <button onClick={() => navigate('/')} className="bg-green-300 px-4 py-2 mt-5 rounded-md">Back to Home</button>
        </div>
    </>)
}
export default Etc