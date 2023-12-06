import React, { useEffect } from "react"
import BallOne from "../assets/Peça 1 - Bolinha.webp"
import Selo from "../assets/Peça 1.1 - Selo Natal.png"
import { Box, InputBase } from "@mui/material"
import { colors } from "../styles/colors"
import { PaperBall } from "../components/PaperBall"
import { ButtonBongrano } from "../components/ButtonBongrano"
import { useNavigate } from "react-router-dom"
import { InputBongrano } from "../components/InputBongrano"
import { Form, Formik } from "formik"

interface SignupProps {}

export const Signup: React.FC<SignupProps> = ({}) => {
    const navigate = useNavigate()

    const initialValues: FormValues = {
        name: "",
        email: "",
        whastapp: "",
        address: "",
        cep: "",
        number: "",
        complement: "" || undefined,
    }

    const handleSubmit = (values: FormValues) => {
        console.log(values)
    }

    useEffect(() => {
        window.scroll(0, 0)
    }, [])
    return (
        <Box sx={{ width: "100%", height: "100%", overflowY: "auto", gap: "4vw", flexDirection: "column" }}>
            <PaperBall sx={{ gap: "8vw" }}>
                <Box sx={{ flexDirection: "column", alignItems: "center", gap: "4vw" }}>
                    <img src={BallOne} alt="" style={{ width: "45vw" }} />
                    <p style={{ fontWeight: "600", fontSize: "3.8vw" }}>Atualização de cadastro</p>
                    <p style={{ textAlign: "center", color: colors.terciary, fontSize: "2.8vw" }}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                        et dolore magna aliqua.
                    </p>
                </Box>

                <Box sx={{ flexDirection: "column", width: "100%" }}>
                    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
                        {({ values, handleChange }) => (
                            <Form>
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
                                    <InputBongrano
                                        label="Número"
                                        name="number"
                                        value={values.number}
                                        onChange={handleChange}
                                        required
                                    />
                                    <InputBongrano
                                        label="CEP"
                                        name="cep"
                                        value={values.cep}
                                        onChange={handleChange}
                                        required
                                    />
                                    <InputBongrano
                                        label="Complemento"
                                        name="complement"
                                        value={values.complement}
                                        onChange={handleChange}
                                    />
                                    <InputBongrano
                                        label="E-mail"
                                        name="email"
                                        value={values.email}
                                        onChange={handleChange}
                                        required
                                    />
                                    <InputBongrano
                                        label="Whatsapp"
                                        name="whatsapp"
                                        value={values.whastapp}
                                        onChange={handleChange}
                                        required
                                    />
                                </Box>
                            </Form>
                        )}
                    </Formik>
                </Box>
            </PaperBall>

            <img src={Selo} alt="" />
            <PaperBall>
                <p style={{ width: "100%", fontWeight: "600", textAlign: "left", fontSize: "3.8vw" }}>
                    Siga os passos ao lado
                </p>
                <p style={{ color: colors.terciary, textAlign: "left", fontSize: "3vw" }}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                    dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                    ex ea commodo consequat.{" "}
                </p>
            </PaperBall>
            <ButtonBongrano sx={{ alignSelf: "end" }} onClick={() => navigate("../verificate")}>
                Próximo
            </ButtonBongrano>
        </Box>
    )
}
