import React, { useEffect } from "react"
import BallOne from "../assets/Peça 2 - Bolinha.webp"
import BallThree from "../assets/Peça 3 - Bolinha.webp"
import Selo from "../assets/Peça 1.1 - Selo Natal.png"
import { Box } from "@mui/material"
import { colors } from "../styles/colors"
import { PaperBall } from "../components/PaperBall"
import { ButtonBongrano } from "../components/ButtonBongrano"
import { useNavigate } from "react-router-dom"
import { InputBongrano } from "../components/InputBongrano"

interface VerificationProps {}

export const Verification: React.FC<VerificationProps> = ({}) => {
    const navigate = useNavigate()

    useEffect(() => {
        window.scroll(0, 0)
    }, [])
    return (
        <Box sx={{ width: "100%", height: "100%", overflowY: "auto", gap: "4vw", flexDirection: "column" }}>
            <PaperBall>
                <img src={BallOne} alt="" style={{ width: "45vw" }} />
                <p style={{ textAlign: "center", fontWeight: "600", fontSize: "3.8vw" }}>Atualização de cadastro</p>
                <p style={{ textAlign: "center", color: colors.terciary, fontSize: "2.8vw" }}>
                    Queremos garantir que você não perca nenhuma novidade! Por favor, atualize seus dados para continuar
                    recebendo informações exclusivas e ofertas especiais da Bongrano. É rápido e fácil - apenas confirme seu
                    nome completo, endereço, e-mail e WhatsApp. Lembre-se, suas informações estão seguras conosco!
                </p>
                <p style={{ textAlign: "center", color: colors.terciary, fontSize: "2.8vw", padding: "2vw" }}>
                    Enviamos um código de verificação para o telefone{" "}
                    <span style={{ fontWeight: "bold" }}>(41) 99999-9999</span>. Por favor insira-o abaixo. Caso não tenha
                    recebido, também enviamos o código para o email:{" "}
                    <span style={{ fontWeight: "bold" }}>email@dominio.com.br</span>
                </p>
                <Box sx={{ p: "4vw", gap: "2.5vw" }}>
                    <InputBongrano sx={{ borderRadius: "1vw" }} />
                    <InputBongrano />
                    <InputBongrano />
                    <InputBongrano />
                    <InputBongrano />
                </Box>
            </PaperBall>

            <img src={Selo} alt="" />
            <PaperBall>
                <p style={{ width: "100%", fontWeight: "600", textAlign: "left", fontSize: "3.8vw" }}>
                    Siga os passos abaixo
                </p>
                <p style={{ color: colors.terciary, textAlign: "left", fontSize: "3vw" }}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                    dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                    ex ea commodo consequat.{" "}
                </p>
            </PaperBall>
            <ButtonBongrano sx={{ alignSelf: "end" }} onClick={() => navigate("../indicate")}>
                Próximo
            </ButtonBongrano>
        </Box>
    )
}
