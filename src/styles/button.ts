import { SxProps } from "@mui/material"
import { colors } from "./colors"

export const button_style: SxProps = {
    fontFamily: "Benchmark",
    color: colors.primary,
    fontSize: "6vw",
    borderRadius: "10vw",
    bgcolor: colors.secondary,
    border: `2px solid ${colors.primary}`,
    p: "0vw 4vw 0 4vw",
    maxWidth: "max-content",
    display: "flex"
}
