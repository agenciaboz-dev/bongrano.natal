import React from "react"
import { Route, Routes as ReactRoutes } from "react-router-dom"
import { Home } from "./pages/Home"

interface RoutesProps {}

export const Routes: React.FC<RoutesProps> = ({}) => {
    return (
        <ReactRoutes>
            <Route index element={<Home />} />
            <Route path="/*" element={<Home />} />
        </ReactRoutes>
    )
}
