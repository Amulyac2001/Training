import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import {SideNav} from '../../assets/png/index'

function Nav() {
    const [isCollapsed, setIsCollapsed] = useState(false);
    return (
        <div >
            <div className={`h-screen bg-gray-900 text-white flex flex-col items-center p-2 ${isCollapsed ? "w-53px" : "w-53px"}`}>
                <button onClick={() => setIsCollapsed(!isCollapsed)} className="p-2 rounded-md hover:bg-gray-700">
                    ☰
                </button>
                {isCollapsed === false &&
                    // <div className="flex flex-col">
                    //     <Link to="/">Home</Link>
                    //     <Link to="/signup">Signup</Link>
                    //     <Link to="/Promotion">Page</Link>
                    // </div>}
                    <img src={SideNav} alt="" />
                }
            </div>
        </div>
    )
}

export default Nav;
