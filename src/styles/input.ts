import { SxProps } from "@mui/material"
import { colors } from "./colors"

export const input_style: SxProps = {
    "& .MuiInputLabel-root": {
        color: colors.terciary,
        // fontSize: "0.8vw",

        "@media (max-width: 600px)": {
            // fontSize: "4vw",
        },
    },

    // não funciona
    "& .MuiInputLabel-root:focus": {
        color: "primary.main",
    },

    "& .MuiInput-root": {
        "&::before": {
            // borderColor: colors.primary,
            // fontSize:"2vw"
        },
    },
    "& .MuiInput-root:hover": {
        "&::before": {
            // borderColor: colors.primary,
        },
    },

    "& .MuiInputBase-root": {
        borderRadius: "6vw",

        "@media (max-width: 600px)": {
            borderRadius: "6vw",
            height: "12vw",
        },
    },

    "& .MuiInputBase-root:not(.MuiInputBase-multiline)": {},

    "& .MuiInputLabel-shrink": {
        // fontSize: "1vw", // Tamanho da fonte do label quando dentro do input

        "@media (max-width: 600px)": {
            // fontSize: "4vw",
        },
    },
    "& .MuiOutlinedInput-root": {
        "& fieldset": {
            borderColor: colors.primary, // Cor da borda padrão
        },
        "&:hover fieldset": {
            borderColor: colors.primary, // Cor da borda ao passar o mouse
        },
        "&.Mui-focused fieldset": {
            border: `2px solid ${colors.primary}`, // Cor da borda quando focado
        },
    },
}
