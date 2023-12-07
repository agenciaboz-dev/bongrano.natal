import React, { useEffect } from "react"
import BallTwo from "../assets/Peça 2 - Bolinha.webp"
import Selo from "../assets/Peça 1.1 - Selo Natal.png"
import { Avatar, Box } from "@mui/material"
import { colors } from "../styles/colors"
import { PaperBall } from "../components/PaperBall"
import { ButtonBongrano } from "../components/ButtonBongrano"
import { useNavigate } from "react-router-dom"
import { InputBongrano } from "../components/InputBongrano"
import { Form, Formik } from "formik"

interface IndicateProps {}

export const Indicate: React.FC<IndicateProps> = ({}) => {
    const navigate = useNavigate()

    const values: FormIndicate = {
        name: "",
        email: "",
        whatsapp: "",
    }
    const handleSubmit = (values: FormIndicate) => {
        console.log(values)
    }

    useEffect(() => {
        window.scroll(0, 0)
    }, [])
    return (
        <Box sx={{ width: "100%", height: "100%", overflowY: "auto", gap: "4vw", flexDirection: "column" }}>
            <PaperBall>
                <img src={BallTwo} alt="" style={{ width: "45vw" }} />
                <p style={{ textAlign: "center", fontWeight: "600", fontSize: "3.8vw" }}>Indicação de amigos</p>
                <p style={{ textAlign: "center", color: colors.terciary, fontSize: "2.8vw" }}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                    dolore magna aliqua.
                </p>

                <Box sx={{ p: "4vw", gap: "5vw", flexDirection: "column" }}>
                    <Formik initialValues={values} onSubmit={handleSubmit}>
                        {({ values, handleChange }) => (
                            <Form>
                                <Box sx={{ flexDirection: "column", gap: "4vw", alignItems: "center" }}>
                                    <Avatar sx={{ bgcolor: colors.primary, width: "27vw", height: "27vw" }} />
                                    <p style={{ textAlign: "center", fontWeight: "600", fontSize: "3.8vw" }}>Indicação 1</p>
                                    <InputBongrano
                                        label="Nome Completo"
                                        name="name"
                                        placeholder="Nome Completo"
                                        value={values.name}
                                        onChange={handleChange}
                                        required
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
                                        value={values.whatsapp}
                                        onChange={handleChange}
                                        required
                                    />
                                </Box>
                                <Box sx={{ flexDirection: "column", gap: "4vw",alignItems: "center"  }}>
                                    <Avatar sx={{ bgcolor: colors.primary, width: "27vw", height: "27vw" }} />
                                    <p style={{ textAlign: "center", fontWeight: "600", fontSize: "3.8vw" }}>Indicação 2</p>
                                    <InputBongrano
                                        label="Nome Completo"
                                        name="name"
                                        placeholder="Nome Completo"
                                        value={values.name}
                                        onChange={handleChange}
                                        required
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
                                        value={values.whatsapp}
                                        onChange={handleChange}
                                        required
                                    />
                                </Box>
                                <Box sx={{ flexDirection: "column", gap: "4vw",alignItems: "center"  }}>
                                    <Avatar sx={{ bgcolor: colors.primary, width: "27vw", height: "27vw" }} />
                                    <p style={{ textAlign: "center", fontWeight: "600", fontSize: "3.8vw" }}>Indicação 3</p>
                                    <InputBongrano
                                        label="Nome Completo"
                                        name="name"
                                        placeholder="Nome Completo"
                                        value={values.name}
                                        onChange={handleChange}
                                        required
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
                                        value={values.whatsapp}
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
                    Siga os passos abaixo
                </p>
                <p style={{ color: colors.terciary, textAlign: "left", fontSize: "3vw" }}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                    dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                    ex ea commodo consequat.{" "}
                </p>
            </PaperBall>
            <ButtonBongrano sx={{ alignSelf: "end" }} onClick={() => navigate("../delivery")}>
                Próximo
            </ButtonBongrano>
        </Box>
    )
}
