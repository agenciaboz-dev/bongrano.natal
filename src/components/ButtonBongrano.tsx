import React from "react"
import { Button, ButtonProps } from "@mui/material"
import { button_style } from "../styles/button"

export const ButtonBongrano: React.FC<ButtonProps> = (props) => {
    return <Button variant="contained" {...props} sx={{ ...button_style }}></Button>
}
