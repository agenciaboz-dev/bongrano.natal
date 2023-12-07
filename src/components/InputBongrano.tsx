import React from "react"
import { TextField, TextFieldProps } from "@mui/material"
import { input_style } from "../styles/input"

interface InputBongranoProps {}

export const InputBongrano: React.FC<TextFieldProps> = (props) => {
    const sx = { ...input_style, ...props.sx }
    return <TextField {...props} sx={sx} />
}
