import React from "react"
import { Button, ButtonProps } from "@mui/material"
import { button_style } from "../styles/button"

export const ButtonBongrano: React.FC<ButtonProps> = (props) => {
    const sx = { ...button_style, ...props.sx }
    return <Button variant="outlined" {...props} sx={sx}></Button>
}
