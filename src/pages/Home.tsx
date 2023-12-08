import React, { useEffect } from "react"
import { ButtonBongrano } from "../components/ButtonBongrano"
import { colors } from "../styles/colors"
import { Box } from "@mui/material"
import { useNavigate, useParams } from "react-router-dom"
import Selo from "../assets/Selo - Presente.webp"
import RibbonH from "../assets/ribbonHorizontal.png"
import RibbonV from "../assets/ribbonVertical.png"
import Lace from "../assets/ribbonLace.png"
import { useUser } from "../hooks/useUser"
import { useIo } from "../hooks/useIo"

interface HomeProps {}

export const Home: React.FC<HomeProps> = ({}) => {
    const navigate = useNavigate()
    const hash = useParams().hash
    const io = useIo()

    const { setUser } = useUser()

    useEffect(() => {
        window.scroll(0, 0)

        if (hash) {
            io.emit("user:hash", hash)
        }

        io.on("user:hash", (user) => {
            setUser(user)
            console.log(user)
        })

        return () => {
            io.off("user:hash")
        }
    }, [])

    return (
        <Box sx={{ width: "100%", height: "90%", display: "flex", alignItems: "end", overflow: "hidden", padding: "10vw" }}>
            <Box sx={{ flexDirection: "column", height: "100%", width: "100%", overflow: "hidden" }}>
                <img src={RibbonH} alt="" style={{ width: "135vw", position: "fixed", left: "-2vw", top: "41vw" }} />
                <img
                    src={RibbonV}
                    alt=""
                    style={{
                        width: "20%",
                        height: "100%",
                        objectFit: "none",
                        position: "absolute",
                        left: "19vw",
                        top: "-0vw",
                        overflow: "hidden",
                    }}
                />
                <img src={Lace} alt="" style={{ width: "60vw", position: "absolute", left: "1vw", top: "20vw" }} />
                <img src={Selo} alt="" style={{ width: "80vw", position: "absolute", top:"50vw", left:"19vw" }} />
            </Box>
            <Box
                sx={{
                    width: "60%",
                    gap: "2vw",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    position: "absolute",
                    top: "132vw",
                    right: "4vw",
                }}
            >
            
                <ButtonBongrano
                    sx={{fontSize:"7vw", p:"0 5vw"}}
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
