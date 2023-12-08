import React, { useEffect } from "react"
import Gift from "../assets/Peça 1 - Presente Fechado.webp"

import Selo from "../assets/Peça 1.1 - Selo Natal.png"
import { Box, IconButton } from "@mui/material"
import { colors } from "../styles/colors"
import { PaperBall } from "../components/PaperBall"
import { ButtonBongrano } from "../components/ButtonBongrano"
import { useNavigate } from "react-router-dom"
import FacebookIcon from "@mui/icons-material/Facebook"
import InstagramIcon from "@mui/icons-material/Instagram"
import PublicSharpIcon from "@mui/icons-material/PublicSharp"
import { Rules } from "../components/Rules"
import { useUser } from "../hooks/useUser"

interface FinishProps {
    user: User
}

export const Finish: React.FC<FinishProps> = ({ user }) => {
    const { setUser } = useUser()
    const navigate = useNavigate()

    const handleFinish = () => {
        setUser(null)
        navigate("../home")
    }

    useEffect(() => {
        window.scroll(0, 0)
    }, [])
    return (
        <Box sx={{ width: "100%", height: "100%", overflowY: "auto", gap: "4vw", flexDirection: "column", padding: "10vw" }}>
            <PaperBall>
                <img src={Gift} alt="" style={{ width: "45vw" }} />
                <p style={{ textAlign: "center", fontWeight: "600", fontSize: "3.8vw" }}>Presente Agendado</p>
                <p style={{ textAlign: "center", color: colors.terciary, fontSize: "2.8vw" }}>
                    Você completou todas as etapas e agora um maravilhoso presente da Bongrano pode está a caminho! Aguarde a
                    confirmação de entrega caso seja sorteado. Enquanto isso, fique ligado em nossas redes sociais e não
                    perca as novidades e ofertas exclusivas. Agradecemos por ser parte da família Bongrano!
                </p>
                <Box sx={{ gap: "2vw" }}>
                    <IconButton
                        onClick={() => {
                            window.open("https://bongrano.com", "_blank")
                        }}
                    >
                        <PublicSharpIcon color="primary" fontSize="large" />
                    </IconButton>
                    <IconButton
                        onClick={() => {
                            window.open("https://www.facebook.com/farinhadonahilda", "_blank")
                        }}
                    >
                        <FacebookIcon color="primary" fontSize="large" />
                    </IconButton>
                    <IconButton
                        onClick={() => {
                            window.open("https://www.instagram.com/bongranoalimentos/", "_blank")
                        }}
                    >
                        <InstagramIcon color="primary" fontSize="large" />
                    </IconButton>
                </Box>
            </PaperBall>

            <img src={Selo} alt="" style={{ width: "100%" }} />
            <PaperBall>
                <p style={{ width: "100%", fontWeight: "600", textAlign: "left", fontSize: "3.8vw" }}>
                    Regras de participação
                </p>
                <Rules />
            </PaperBall>
            <ButtonBongrano sx={{ alignSelf: "end" }} onClick={handleFinish}>
                Voltar para o início
            </ButtonBongrano>
        </Box>
    )
}
