import React, { useEffect, useState } from "react"
import BallOne from "../assets/Peça 1 - Bolinha.webp"
import Selo from "../assets/Peça 1.1 - Selo Natal.png"
import { Box, CircularProgress } from "@mui/material"
import { colors } from "../styles/colors"
import { PaperBall } from "../components/PaperBall"
import { ButtonBongrano } from "../components/ButtonBongrano"
import { useNavigate } from "react-router-dom"
import { InputBongrano } from "../components/InputBongrano"
import { Form, Formik } from "formik"
import { Rules } from "../components/Rules"
import MaskedInput from "../components/MaskedInput"
import masks from "../styles/masks"
import { useDataHandler } from "../hooks/useDataHandler"
import { useIo } from "../hooks/useIo"
import { useSnackbar } from "burgos-snackbar"
import { useUser } from "../hooks/useUser"

interface SignupProps {}

export const Signup: React.FC<SignupProps> = ({}) => {
    const io = useIo()
    const navigate = useNavigate()
    const { unmask } = useDataHandler()
    const { snackbar } = useSnackbar()
    const { user, setUser } = useUser()

    const [loading, setLoading] = useState(false)

    const initialValues: NewUser = {
        name: "",
        email: "",
        whatsapp: "",
        address: "",
        cep: "",
        number: "",
        adjunct: "",
    }

    const handleSubmit = async (values: NewUser) => {
        if (loading) return
        
        const data = {
            ...values,
            cep: unmask(values.cep),
            whatsapp: unmask(values.whatsapp),
        }

        io.emit("user:create", data)
        setLoading(true)
    }

    useEffect(() => {
        window.scroll(0, 0)
    }, [])

    useEffect(() => {
        io.on("user:registration:success", (user: User) => {
            setLoading(false)
            if (user) {
                setUser(user)
                snackbar({ severity: "success", text: "Complete suas informações" })
                navigate("/verificate")
            }
        })
        io.on("user:registration:failed", (data) => {
            const errorMessage = data.error ? data.error : "Falha no cadastro!"
            snackbar({ severity: "error", text: errorMessage })
            setLoading(false)
        })

        return () => {
            io.off("user:registration:success")
            io.off("user:registration:failed")
        }
    }, [])
    return (
        <Box sx={{ width: "100%", height: "100%", overflowY: "auto", gap: "4vw", flexDirection: "column" }}>
            <Formik initialValues={initialValues} onSubmit={(values) => handleSubmit(values)} enableReinitialize>
                {({ values, handleChange }) => (
                    <Form>
                        <PaperBall sx={{ gap: "8vw" }}>
                            <Box sx={{ flexDirection: "column", alignItems: "center", gap: "4vw" }}>
                                <img src={BallOne} alt="" style={{ width: "45vw" }} />
                                <p style={{ fontWeight: "600", fontSize: "3.8vw", textAlign: "center" }}>Atualize Seus Dados e Fique por Dentro!</p>
                                <p style={{ textAlign: "center", color: colors.terciary, fontSize: "2.8vw" }}>
                                    Queremos garantir que você não perca nenhuma novidade! Por favor, atualize seus dados para continuar recebendo
                                    informações exclusivas e ofertas especiais da Bongrano. É rápido e fácil - apenas confirme seu nome completo,
                                    endereço, e-mail e WhatsApp. Lembre-se, suas informações estão seguras conosco!
                                </p>
                            </Box>

                            <Box sx={{ flexDirection: "column", width: "100%" }}>
                                <Box sx={{ flexDirection: "column", gap: "4vw" }}>
                                    <InputBongrano
                                        label="Nome Completo"
                                        name="name"
                                        placeholder="Nome Completo"
                                        value={values.name}
                                        onChange={handleChange}
                                        required
                                    />
                                    <InputBongrano
                                        label="Endereço para entrega"
                                        name="address"
                                        value={values.address}
                                        onChange={handleChange}
                                        required
                                    />
                                    <InputBongrano label="Número" name="number" value={values.number} onChange={handleChange} required />
                                    <InputBongrano
                                        label="CEP"
                                        name="cep"
                                        InputProps={{
                                            inputMode: "numeric",
                                            inputComponent: MaskedInput,
                                            inputProps: { mask: masks.cep }
                                        }}
                                        value={values.cep}
                                        onChange={handleChange}
                                        required
                                    />
                                    <InputBongrano label="Complemento" name="adjunct" value={values.adjunct} onChange={handleChange} />
                                    <InputBongrano label="E-mail" name="email" value={values.email} onChange={handleChange} required />
                                    <InputBongrano
                                        label="Whatsapp"
                                        name="whatsapp"
                                        value={values.whatsapp}
                                        onChange={handleChange}
                                        InputProps={{
                                            inputMode: "numeric",
                                            inputComponent: MaskedInput,
                                            inputProps: { mask: masks.phone }
                                        }}
                                        required
                                    />
                                </Box>
                            </Box>
                        </PaperBall>

                        <img src={Selo} alt="" />
                        <PaperBall>
                            <p style={{ width: "100%", fontWeight: "600", textAlign: "left", fontSize: "3.8vw" }}>Regras de participação</p>
                            <Rules />
                        </PaperBall>
                        <Box sx={{ justifyContent: "space-between" }}>
                            <ButtonBongrano sx={{ alignSelf: "end" }} onClick={() => navigate("../resume")}>
                                Voltar
                            </ButtonBongrano>
                            <ButtonBongrano sx={{ alignSelf: "end" }} type="submit">
                                {loading ? <CircularProgress size="1.5rem" color="primary" /> : "Próximo"}
                            </ButtonBongrano>
                        </Box>
                    </Form>
                )}
            </Formik>
        </Box>
    )
}
