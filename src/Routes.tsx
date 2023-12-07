import React from "react"
import { Route, Routes as ReactRoutes } from "react-router-dom"
import { Home } from "./pages/Home"
import { Resume } from "./pages/Resume"
import { Signup } from "./pages/Signup"
import { Indicate } from "./pages/Indicate"
import { Delivery } from "./pages/Delivery"
import { Verification } from "./pages/Verification"
import { Finish } from "./pages/Finish"
import { useUser } from "./hooks/useUser"

interface RoutesProps {}

export const Routes: React.FC<RoutesProps> = ({}) => {
    const { user } = useUser()

    return (
        <ReactRoutes>
            <Route index element={<Home />} />
            <Route path="/*" element={<Home />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/signup" element={<Signup />} />
            {user && <Route path="/verificate" element={<Verification user={user} />} />}
            {user && <Route path="/indicate" element={<Indicate user={user} />} />}
            {user && <Route path="/delivery" element={<Delivery user={user} />} />}
            {user && <Route path="/finish" element={<Finish user={user} />} />}
        </ReactRoutes>
    )
}
