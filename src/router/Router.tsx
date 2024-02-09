import { Routes, Route } from "react-router-dom"
import App from "../App"
import Homepage from "../pages/Homepage"
import Tester from "./Tester";
import Login from "../pages/Login";

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
                <Route path="login" element={<Tester navigate_in_fail="/" test_function={() => !isAuthenticated()} />}>
                    <Route index element={<Login />} />
                </Route>
            </Route>
        </Routes>
    )
}