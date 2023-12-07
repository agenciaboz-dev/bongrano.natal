import { Box } from "@mui/material"
import React from "react"
import { colors } from "../styles/colors"

interface DotsProps {
    value: number
}

export const Dots: React.FC<DotsProps> = ({ value }) => {
    return (
        <Box sx={{ gap: "1vw" }}>
            <Box
                sx={{
                    bgcolor: value === 1 ? colors.primary : "#D9D9D9",
                    width: "1.5vw",
                    height: "1.5vw",
                    borderRadius: "2vw",
                }}
            />
            <Box
                sx={{
                    bgcolor: value === 2 ? colors.primary : "#D9D9D9",
                    width: "1.5vw",
                    height: "1.5vw",
                    borderRadius: "2vw",
                }}
            />
            <Box
                sx={{
                    bgcolor: value === 3 ? colors.primary : "#D9D9D9",
                    width: "1.5vw",
                    height: "1.5vw",
                    borderRadius: "2vw",
                }}
            />
        </Box>
    )
}
