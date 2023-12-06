import React from "react"
import { ButtonBongrano } from "../components/ButtonBongrano"
import { colors } from "../styles/colors"
import { Box } from "@mui/material"
import { useNavigate } from "react-router-dom"
import selo from "../assets/Selo - Presente.webp"

interface HomeProps {}

export const Home: React.FC<HomeProps> = ({}) => {
    const navigate = useNavigate()
    return (
        <Box sx={{ width: "100%", height: "100%", display: "flex", alignItems: "end" }}>
            <Box
                sx={{
                    width: "60%",
                    // height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    position: "absolute",
                    top: "80vw",
                    right: "2vw",
                }}
            >
                <img src={selo} alt="" style={{ width: "65vw" }} />
                <p
                    style={{
                        width: "100%",
                        alignSelf: "flex-end",
                        color: colors.primary,
                        fontWeight: "400",
                        textAlign: "center",
                        fontSize: "5.5vw",
                        margin: 0,
                    }}
                >
                    Corte o a fita para revelar o seu presente
                </p>
                <ButtonBongrano
                    onClick={() => {
                        navigate("../resume")
                    }}
                >
                    Iniciar
                </ButtonBongrano>
            </Box>
        </Box>
    )
}
