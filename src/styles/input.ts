import { SxProps } from "@mui/material"
import { colors } from "./colors"

export const input_style: SxProps = {
    "& .MuiInputLabel-root": {
        color: colors.primary,
        fontSize: "3.3vw",

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
export const token_style: SxProps = {
    "& .MuiInputLabel-root": {
        color: colors.primary,
        fontSize: "3.3vw",

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
        borderRadius: "4vw",

        "@media (max-width: 600px)": {
            borderRadius: "4vw",
            height: "11vw",
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
