import React from "react"
import { ButtonBongrano } from "../components/ButtonBongrano"
import { colors } from "../styles/colors"
import { Box } from "@mui/material"
import { useNavigate } from "react-router-dom"
import Selo from "../assets/Selo - Presente.webp"
import RibbonH from "../assets/ribbonHorizontal.png"
import RibbonV from "../assets/ribbonVertical.png"
import Lace from "../assets/ribbonLace.png"

interface HomeProps {}

export const Home: React.FC<HomeProps> = ({}) => {
    const navigate = useNavigate()
    return (
        <Box sx={{ width: "100%", height: "100%", display: "flex", alignItems: "end", overflow: "hidden" }}>
            <Box sx={{ flexDirection: "column", height: "100%", width: "100%", overflow: "hidden" }}>
                <img src={RibbonH} alt="" style={{ width: "135vw", position: "fixed", left: "-2vw", top: "41vw" }} />
                <img
                    src={RibbonV}
                    alt=""
                    style={{
                        width: "20%",
                        height: "101%",
                        objectFit: "none",
                        position: "absolute",
                        left: "19vw",
                        top: "-2vw",
                    }}
                />
                <img src={Lace} alt="" style={{ width: "60vw", position: "absolute", left: "1vw", top: "20vw" }} />
            </Box>
            <Box
                sx={{
                    width: "60%",
                    gap: "2vw",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    position: "absolute",
                    top: "48vw",
                    right: "4vw",
                }}
            >
                <img src={Selo} alt="" style={{ width: "65vw" }} />
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
