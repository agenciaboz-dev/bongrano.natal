import React, { useEffect } from "react"
import BallOne from "../assets/Peça 1 - Bolinha.webp"
import BallTwo from "../assets/Peça 2 - Bolinha.webp"
import BallThree from "../assets/Peça 3 - Bolinha.webp"
import Selo from "../assets/Peça 1.1 - Selo Natal.png"
import Gift from "../assets/Peça 1 - Presente Fechado.webp"
import { Box } from "@mui/material"
import { colors } from "../styles/colors"
import { PaperBall } from "../components/PaperBall"
import { ButtonBongrano } from "../components/ButtonBongrano"
import { useNavigate } from "react-router-dom"
import { Rules } from "../components/Rules"

interface ResumeProps {}

export const Resume: React.FC<ResumeProps> = ({}) => {
    const navigate = useNavigate()

    useEffect(() => {
        window.scroll(0, 0)
    }, [])
    return (
        <Box sx={{ width: "100%", height: "100%", overflowY: "auto", gap: "4vw", flexDirection: "column", padding: "10vw" }}>
            <PaperBall>
                <img src={BallOne} alt="" style={{ width: "45vw" }} />
                <p style={{ fontWeight: "600", fontSize: "3.8vw", textAlign: "center" }}>Atualize Seus Dados e Fique por Dentro!</p>
                <p style={{ textAlign: "center", color: colors.terciary, fontSize: "2.8vw" }}>
                    Queremos garantir que você não perca nenhuma novidade! Por favor, atualize seus dados para continuar recebendo informações
                    exclusivas e ofertas especiais da Bongrano. É rápido e fácil - apenas confirme seu nome completo, endereço, e-mail e WhatsApp.
                    Lembre-se, suas informações estão seguras conosco!
                </p>
            </PaperBall>
            <PaperBall>
                <img src={BallTwo} alt="" style={{ width: "45vw" }} />
                <p style={{ fontWeight: "600", fontSize: "3.8vw" }}>Compartilhe a Alegria com Amigos!</p>
                <p style={{ textAlign: "center", color: colors.terciary, fontSize: "2.8vw" }}>
                    A Bongrano acredita que a felicidade fica ainda melhor quando compartilhada. Indique três amigos de Curitiba e dê a eles a chance
                    de desfrutar de nossos produtos incríveis! Basta adicionar os números de celular dos seus amigos diretamente da sua lista de
                    contatos - é simples assim. Além disso, vocês todos participarão dos nossos emocionantes sorteios de 2024!
                </p>
            </PaperBall>
            <PaperBall>
                <img src={BallThree} alt="" style={{ width: "45vw" }} />
                <p style={{ fontWeight: "600", fontSize: "3.8vw", textAlign: "center" }}>Escolha o Melhor Dia para Sua Surpresa!</p>
                <p style={{ textAlign: "center", color: colors.terciary, fontSize: "2.8vw" }}>
                    Estamos ansiosos para lhe entregar um presente especial da Bongrano! Por favor, selecione a data que melhor se encaixa na sua
                    agenda. Você pode escolher entre os dias 21, 22 ou 23 de dezembro, e especificar se prefere receber pela manhã ou à tarde. Agende
                    agora e prepare-se para uma doce surpresa!
                </p>
            </PaperBall>
            <img src={Selo} alt="" />
            <PaperBall>
                <p style={{ width: "100%", fontWeight: "600", fontSize: "3.8vw", textAlign: "left" }}>Regras de participação</p>
                <Rules />

                <ButtonBongrano
                    sx={{ alignSelf: "end" }}
                    onClick={() => {
                        navigate("../signup")
                    }}>
                    <img src={Gift} style={{ width: "10vw" }} />
                    Começar
                </ButtonBongrano>
            </PaperBall>
        </Box>
    )
}
