import React, { useEffect } from "react"
import Gift from "../assets/Peça 1 - Presente Fechado.webp"
import BallThree from "../assets/Peça 3 - Bolinha.webp"
import Selo from "../assets/Peça 1.1 - Selo Natal.png"
import { Box } from "@mui/material"
import { colors } from "../styles/colors"
import { PaperBall } from "../components/PaperBall"
import { ButtonBongrano } from "../components/ButtonBongrano"
import { useNavigate } from "react-router-dom"
import { Dots } from "../components/Dots"
import { Rules } from "../components/Rules"

interface DeliveryProps {}

export const Delivery: React.FC<DeliveryProps> = ({}) => {
    const navigate = useNavigate()

    useEffect(() => {
        window.scroll(0, 0)
    }, [])
    return (
        <Box sx={{ width: "100%", height: "100%", overflowY: "auto", gap: "4vw", flexDirection: "column" }}>
            <PaperBall>
                <img src={BallThree} alt="" style={{ width: "45vw" }} />
                <p style={{ fontWeight: "600", fontSize: "3.8vw", textAlign: "center" }}>
                    Escolha o Melhor Dia para Sua Surpresa!
                </p>
                <p style={{ textAlign: "center", color: colors.terciary, fontSize: "2.8vw" }}>
                    Estamos ansiosos para lhe entregar um presente especial da Bongrano! Por favor, selecione a data que
                    melhor se encaixa na sua agenda. Você pode escolher entre os dias 21, 22 ou 23 de dezembro, e especificar
                    se prefere receber pela manhã ou à tarde. Agende agora e prepare-se para uma doce surpresa!
                </p>
                <Dots value={3} />
            </PaperBall>
            <img src={Selo} alt="" />
            <PaperBall>
                <p style={{ width: "100%", fontWeight: "600", textAlign: "left", fontSize: "3.8vw" }}>
                    Regras de participação
                </p>
                <Rules />
            </PaperBall>
            <Box sx={{ justifyContent: "space-between" }}>
                <ButtonBongrano sx={{ alignSelf: "end" }} onClick={() => navigate("../indicate")}>
                    Voltar
                </ButtonBongrano>
                <ButtonBongrano
                    type="submit"
                    sx={{ alignSelf: "end" }}
                    onClick={() => {
                        navigate("../finish")
                    }}
                >
                    <img src={Gift} style={{ width: "10vw" }} />
                    Finalizar
                </ButtonBongrano>
            </Box>
        </Box>
    )
}
