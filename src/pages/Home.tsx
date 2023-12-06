import { Button } from "@mui/material"
import React from "react"
import { ButtonBongrano } from "../components/ButtonBongrano"

interface HomeProps {}

export const Home: React.FC<HomeProps> = ({}) => {
    return (
        <div className="Home-Component">
            <p style={{ fontFamily: "Montserrat" }}>Home</p>
            <ButtonBongrano sx={{ }}>Pŕoximo</ButtonBongrano>
        </div>
    )
}
