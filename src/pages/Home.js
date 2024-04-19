import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
const Home = () => {
    const [firstName, setFirstName] = useState("peter");

    return(
        <>
        <Navbar />
        <h1>This is Home</h1>

        <div className="profile">
            <h4>FirstName: {firstName}</h4>
        </div>

        <button onClick={()=>setFirstName("Sulaiman")}>Change First Name</button>
        <br />
        <Link to='/about'>Check us out</Link>
        </>
        
    )
}

export default Home;