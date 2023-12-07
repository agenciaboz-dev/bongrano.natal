import React, { useEffect } from "react"
import Gift from "../assets/Peça 1 - Presente Fechado.webp"

import Selo from "../assets/Peça 1.1 - Selo Natal.png"
import { Box } from "@mui/material"
import { colors } from "../styles/colors"
import { PaperBall } from "../components/PaperBall"
import { ButtonBongrano } from "../components/ButtonBongrano"
import { useNavigate } from "react-router-dom"
import FacebookIcon from "@mui/icons-material/Facebook"
import TwitterIcon from "@mui/icons-material/Twitter"
import InstagramIcon from "@mui/icons-material/Instagram"
import PublicSharpIcon from "@mui/icons-material/PublicSharp"
import { Rules } from "../components/Rules"

interface FinishProps {}

export const Finish: React.FC<FinishProps> = ({}) => {
    const navigate = useNavigate()

    useEffect(() => {
        window.scroll(0, 0)
    }, [])
    return (
        <Box sx={{ width: "100%", height: "100%", overflowY: "auto", gap: "4vw", flexDirection: "column" }}>
            <PaperBall>
                <img src={Gift} alt="" style={{ width: "45vw" }} />
                <p style={{ textAlign: "center", fontWeight: "600", fontSize: "3.8vw" }}>Presente Agendado</p>
                <p style={{ textAlign: "center", color: colors.terciary, fontSize: "2.8vw" }}>
                    Você completou todas as etapas e agora um maravilhoso presente da Bongrano pode está a caminho! Aguarde a
                    confirmação de entrega caso seja sorteado. Enquanto isso, fique ligado em nossas redes sociais e não
                    perca as novidades e ofertas exclusivas. Agradecemos por ser parte da família Bongrano!
                </p>
                <Box sx={{ gap: "3vw" }}>
                    <TwitterIcon fontSize="large" onClick={() => {}} />
                    <PublicSharpIcon fontSize="large" onClick={() => {}} />
                    <FacebookIcon fontSize="large" onClick={() => {}} />
                    <InstagramIcon fontSize="large" onClick={() => {}} />
                </Box>
            </PaperBall>

            <img src={Selo} alt="" />
            <PaperBall>
                <p style={{ width: "100%", fontWeight: "600", textAlign: "left", fontSize: "3.8vw" }}>
                    Regras de participação
                </p>
                <Rules/>
            </PaperBall>
            <ButtonBongrano sx={{ alignSelf: "end" }} onClick={() => navigate("../home")}>
                Voltar para o início
            </ButtonBongrano>
        </Box>
    )
}
