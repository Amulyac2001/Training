import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";

function Nav() {
    const [isCollapsed, setIsCollapsed] = useState(false);
    return (
        <div className="w-53px h-1113px">
            <div className={`h-screen bg-gray-900 text-white flex flex-col items-center p-2 ${isCollapsed ? "w-53px" : "w-53px"}`}>
                <button onClick={() => setIsCollapsed(!isCollapsed)} className="p-2 rounded-md hover:bg-gray-700">
                    ☰
                </button>
                {isCollapsed === false &&
                    <div className="flex flex-col">
                        <Link to="/">Home</Link>
                        <Link to="/About">About</Link>
                        <Link to="/Contact">Contact</Link>
                        <Link to="/Dashboard">Dashboard</Link>
                        <Link to="/Rewards">Rewards</Link>
                        <Link to="/Setting">Setting</Link>
                        <Link to="/CompanyPage">CompanyPage</Link>
                        <Link to="/Promotion">Promotion</Link>
                    </div>}
            </div>
        </div>
    )
}

export default Nav;
