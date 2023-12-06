import React from "react"
import { Route, Routes as ReactRoutes } from "react-router-dom"
import { Home } from "./pages/Home"
import { Resume } from "./pages/Resume"
import { Signup } from "./pages/Signup"
import { Indicate } from "./pages/Indicate"
import { Delivery } from "./pages/Delivery"
import { Verification } from "./pages/Verification"
import { Finish } from "./pages/Finish"

interface RoutesProps {}

export const Routes: React.FC<RoutesProps> = ({}) => {
    return (
        <ReactRoutes>
            <Route index element={<Home />} />
            <Route path="/*" element={<Home />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/verificate" element={<Verification />} />
            <Route path="/indicate" element={<Indicate />} />
            <Route path="/delivery" element={<Delivery />} />
            <Route path="/finish" element={<Finish />} />
        </ReactRoutes>
    )
}
