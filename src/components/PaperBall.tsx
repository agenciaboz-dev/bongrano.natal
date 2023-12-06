import { Paper, PaperProps } from "@mui/material"
import React from "react"
import { colors } from "../styles/colors"

interface PaperBallProps {}

export const PaperBall: React.FC<PaperProps> = (props) => {
    return (
        <Paper
            {...props}
            elevation={0}
            sx={{
                height: "max-content",
                bgcolor: colors.background.paper,
                width: "100%",
                overflow: "hidden",
                borderRadius: "5vw",
                p: "6vw 4vw",
                flexDirection: "column",
                gap: "4vw",
                alignItems: "center",
                ...props.sx,
            }}
        >
            {props.children}
        </Paper>
    )
}
