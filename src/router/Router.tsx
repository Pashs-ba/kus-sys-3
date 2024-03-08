import { Routes, Route } from "react-router-dom"
import App from "../App"
import Tester from "./Tester";
import LoadingPage from "../pages/core/LoadingPage";
import { Suspense } from "react";
import React from "react";
import NotFoundPage from "../pages/core/NotFoundPage";

function isAuthenticated(): boolean {
    const user: string = JSON.parse(localStorage.getItem("user") as string);
    return !!user
}

export type RouterProps = {}

export default function Router() {
    const Homepage = React.lazy(() => import("../pages/Homepage"))
    const Login = React.lazy(() => import("../pages/auth/Login"))
    const WhyBad = React.lazy(() => import("../pages/auth/WhyBad"))
    const Registration = React.lazy(() => import("../pages/auth/Registration"))
    const RegistartionSuccess = React.lazy(() => import("../pages/auth/RegistartionSuccess"))
    return (
        <Suspense fallback={<LoadingPage />}>
            <Routes>
                <Route path="/" element={<App />} >
                    <Route element={<Tester navigate_in_fail="/login" test_function={isAuthenticated} />}>
                        <Route index element={<Homepage />} />
                    </Route>
                    <Route element={<Tester navigate_in_fail="/" test_function={() => !isAuthenticated()} />}>
                        <Route path="login" element={<Login />} />
                        <Route path="why-bad" element={<WhyBad />} />
                        <Route path="registration_confirmation" element={<Registration />} />
                        <Route path="registration" element={<Registration />} />
                        <Route path="reg-success" element={<RegistartionSuccess />} />
                    </Route>
                    <Route path="*" element={<NotFoundPage />} />
                </Route>
                
            </Routes>
        </Suspense>
    )
}