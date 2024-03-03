import { Routes, Route } from "react-router-dom"
import App from "../App"
import Homepage from "../pages/Homepage"
import Tester from "./Tester";
import Login from "../pages/auth/Login";
import Registration from "../pages/auth/Registration";
import RegistartionSuccess from "../pages/auth/RegistartionSuccess";
import WhyBad from "../pages/auth/WhyBad";

function isAuthenticated(): boolean {
    const user: string = JSON.parse(localStorage.getItem("user") as string);
    return !!user
}

export type RouterProps = {}

export default function Router() {
    return (
        <Routes>
            <Route path="/" element={<App />} >
                <Route element={<Tester navigate_in_fail="/login" test_function={isAuthenticated} />}>
                    <Route index element={<Homepage />} />
                </Route>
                <Route element={<Tester navigate_in_fail="/" test_function={() => !isAuthenticated()} />}>
                    <Route path="login" element={<Login />} />
                    <Route path="why-bad" element={<WhyBad/>}/>
                    <Route path="registration_confirmation" element={<Registration />} />
                    <Route path="registration" element={<Registration />} />
                    <Route path="reg-success" element={<RegistartionSuccess/>}/>
                    
                </Route>
            </Route>
        </Routes>
    )
}