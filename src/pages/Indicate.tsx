import React, { useEffect } from "react"
import BallTwo from "../assets/Peça 2 - Bolinha.webp"
import Selo from "../assets/Peça 1.1 - Selo Natal.png"
import { Avatar, Box } from "@mui/material"
import { colors } from "../styles/colors"
import { PaperBall } from "../components/PaperBall"
import { ButtonBongrano } from "../components/ButtonBongrano"
import { useNavigate } from "react-router-dom"
import { InputBongrano } from "../components/InputBongrano"
import { Form, Formik, useFormik } from "formik"
import { Dots } from "../components/Dots"
import { Rules } from "../components/Rules"
import { useUser } from "../hooks/useUser"
import { useArray } from "burgos-array"

interface IndicateProps {}

export const Indicate: React.FC<IndicateProps> = ({}) => {
    const navigate = useNavigate()
    const list = useArray().newArray(3)
    const { user, setUser } = useUser()

    if (!user) return null

    const formik = useFormik<ReferralForm>({
        initialValues: {
            referree_id: user.id,
            referrals: list.map(() => ({ email: "", name: "", whatsapp: "" })),
        },
        onSubmit: (values) => {
            console.log(values)
        },
    })

    useEffect(() => {
        window.scroll(0, 0)
    }, [])
    return (
        <Box sx={{ width: "100%", height: "100%", overflowY: "auto", gap: "4vw", flexDirection: "column" }}>
            <PaperBall>
                <img src={BallTwo} alt="" style={{ width: "45vw" }} />
                <p style={{ textAlign: "center", fontWeight: "600", fontSize: "3.8vw" }}>
                    Compartilhe a Alegria com Amigos!
                </p>
                <p style={{ textAlign: "center", color: colors.terciary, fontSize: "2.8vw" }}>
                    A Bongrano acredita que a felicidade fica ainda melhor quando compartilhada. Indique três amigos de
                    Curitiba e dê a eles a chance de desfrutar de nossos produtos incríveis! Basta adicionar os números de
                    celular dos seus amigos diretamente da sua lista de contatos - é simples assim. Além disso, vocês todos
                    participarão dos nossos emocionantes sorteios de 2024!
                </p>

                <Box sx={{ width: "100%", p: "2vw", gap: "8vw", flexDirection: "column" }}>
                    <form onSubmit={formik.handleSubmit} style={{ display: "contents" }}>
                        {formik.values.referrals.map((item, index) => (
                            <Box sx={{ flexDirection: "column", gap: "3vw", alignItems: "center" }} key={index}>
                                <Avatar sx={{ bgcolor: colors.primary, width: "27vw", height: "27vw" }} />
                                <p style={{ textAlign: "center", fontWeight: "600", fontSize: "3.8vw" }}>
                                    Indicação {index + 1}
                                </p>
                                <InputBongrano
                                    label="Nome Completo"
                                    name={`referrals[${index}].name`}
                                    placeholder="Nome Completo"
                                    value={item.name}
                                    onChange={formik.handleChange}
                                    required
                                />
                                <InputBongrano
                                    label="E-mail"
                                    name={`referrals[${index}].email`}
                                    value={item.email}
                                    onChange={formik.handleChange}
                                    required
                                />
                                <InputBongrano
                                    label="Whatsapp"
                                    name={`referrals[${index}].whatsapp`}
                                    value={item.whatsapp}
                                    onChange={formik.handleChange}
                                    required
                                />
                            </Box>
                        ))}
                    </form>
                </Box>
                <Dots value={2} />
            </PaperBall>

            <img src={Selo} alt="" />
            <PaperBall>
                <p style={{ width: "100%", fontWeight: "600", textAlign: "left", fontSize: "3.8vw" }}>
                    Regras de participação
                </p>
                <Rules />
            </PaperBall>
            <Box sx={{ justifyContent: "space-between" }}>
                <ButtonBongrano sx={{ alignSelf: "end" }} onClick={() => navigate("../verificate")}>
                    Voltar
                </ButtonBongrano>
                <ButtonBongrano sx={{ alignSelf: "end" }} onClick={() => navigate("../delivery")}>
                    Próximo
                </ButtonBongrano>
            </Box>
        </Box>
    )
}
