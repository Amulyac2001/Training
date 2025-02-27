"use client"
import { useRouter } from "next/navigation";

const Login=()=>{
    const router=useRouter();

    return(
        <div>
            Login Page
            <br />
            <br />
            <div>
                <button onClick={()=>router.push("/login/employeelogin")}>EmployeeLogin</button>
                <br />
                <button onClick={()=>router.push("/login/adminlogin")}>AdminLogin</button>
            </div>
        </div>
    )
}

export default Login;