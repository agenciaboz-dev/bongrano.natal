import React, { useEffect, useState } from "react"
import BallTwo from "../assets/Peça 2 - Bolinha.webp"
import Selo from "../assets/Peça 1.1 - Selo Natal.png"
import { Avatar, Box, LinearProgress, TextField } from "@mui/material"
import { colors } from "../styles/colors"
import { PaperBall } from "../components/PaperBall"
import { ButtonBongrano } from "../components/ButtonBongrano"
import { useNavigate } from "react-router-dom"
import { InputBongrano } from "../components/InputBongrano"
import { useFormik } from "formik"
import { Rules } from "../components/Rules"
import { useArray } from "burgos-array"
import { useIo } from "../hooks/useIo"
import { useSnackbar } from "burgos-snackbar"
import { input_style } from "../styles/input"
import MaskedInput from "../components/MaskedInput"
import masks from "../styles/masks"

interface IndicateProps {
    user: User
}

export const Indicate: React.FC<IndicateProps> = ({ user }) => {
    const io = useIo()
    const navigate = useNavigate()
    const { snackbar } = useSnackbar()
    const list = useArray().newArray(3)
    const [loading, setLoading] = useState(false)

    if (!user) return null

    const formik = useFormik<ReferralForm>({
        initialValues: {
            referree_id: user.id,
            referrals: list.map(() => ({ email: "", name: "", whatsapp: "" }))
        },
        onSubmit: (values) => {
            handleSubmit(values)
            console.log(values)
        }
    })

    const handleSubmit = async (values: ReferralForm) => {
        io.emit("user:referral", values)
        setLoading(true)
    }

    useEffect(() => {
        io.on("referral:registration:success", () => {
            console.log("deu certo")
            setLoading(false)
            navigate("/delivery")
        })
        io.on("referral:registration:failed", (data) => {
            const errorMessage = data.error ? data.error : "Falha no cadastro!"
            snackbar({ severity: "error", text: errorMessage })
            setLoading(false)
        })
    }, [])

    useEffect(() => {
        window.scroll(0, 0)
        if (!user) {
            navigate("/home")
        } else {
            console.log(user)
        }
    }, [])
    return (
        <Box sx={{ width: "100%", height: "100%", overflowY: "auto", gap: "4vw", flexDirection: "column", padding: "10vw" }}>
            <form onSubmit={formik.handleSubmit} style={{ display: "contents" }}>
                <PaperBall>
                    <img src={BallTwo} alt="" style={{ width: "45vw" }} />
                    <p style={{ textAlign: "center", fontWeight: "600", fontSize: "3.8vw" }}>Compartilhe a Alegria com Amigos!</p>
                    <p style={{ textAlign: "center", color: colors.terciary, fontSize: "2.8vw" }}>
                        A Bongrano acredita que a felicidade fica ainda melhor quando compartilhada. Indique três amigos de Curitiba e dê a eles a
                        chance de desfrutar de nossos produtos incríveis! Basta adicionar os números de celular dos seus amigos diretamente da sua
                        lista de contatos - é simples assim. Além disso, vocês todos participarão dos nossos emocionantes sorteios de 2024!
                    </p>

                    <Box sx={{ width: "100%", p: "2vw", gap: "8vw", flexDirection: "column" }}>
                        {formik.values.referrals.map((item, index) => (
                            <Box sx={{ flexDirection: "column", gap: "3vw", alignItems: "center" }} key={index}>
                                <Avatar sx={{ bgcolor: colors.primary, width: "27vw", height: "27vw" }} />
                                <p style={{ textAlign: "center", fontWeight: "600", fontSize: "3.8vw" }}>Indicação {index + 1}</p>
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
                                <TextField
                                    label="Whatsapp"
                                    name={`referrals[${index}].whatsapp`}
                                    value={item.whatsapp}
                                    onChange={formik.handleChange}
                                    sx={input_style}
                                    InputProps={{
                                        inputComponent: MaskedInput,
                                        inputProps: { mask: masks.phone, inputMode: "numeric" }
                                    }}
                                    required
                                />
                            </Box>
                        ))}
                    </Box>
                </PaperBall>

                <img src={Selo} alt="" />
                <PaperBall>
                    <p style={{ width: "100%", fontWeight: "600", textAlign: "left", fontSize: "3.8vw" }}>Regras de participação</p>
                    <Rules />
                </PaperBall>

                <ButtonBongrano sx={{ alignSelf: "end" }} type="submit">
                    Próximo
                </ButtonBongrano>
                {loading && <LinearProgress color="primary" sx={{ width: "100%", borderRadius: "5vw" }} />}
            </form>
        </Box>
    )
}
