import React, { ChangeEvent, useEffect, useRef, useState } from "react"
import BallOne from "../assets/Peça 1 - Bolinha.webp"
import BallThree from "../assets/Peça 3 - Bolinha.webp"
import Selo from "../assets/Peça 1.1 - Selo Natal.png"
import { Box, LinearProgress } from "@mui/material"
import { colors } from "../styles/colors"
import { PaperBall } from "../components/PaperBall"
import { ButtonBongrano } from "../components/ButtonBongrano"
import { useLocation, useNavigate } from "react-router-dom"
import { InputBongrano } from "../components/InputBongrano"
import { token_style } from "../styles/input"
import { Rules } from "../components/Rules"
import { useSnackbar } from "burgos-snackbar"
import { useIo } from "../hooks/useIo"

interface VerificationProps {
    user: User
}

export const Verification: React.FC<VerificationProps> = ({ user }) => {
    const io = useIo()
    const navigate = useNavigate()
    const { snackbar } = useSnackbar()

    const validCode = "ABCDE" // Exemplo de código válido
    const inputRefs = useRef<HTMLInputElement[]>([])
    const [code, setCode] = useState<string[]>(Array(5).fill(""))
    const [loading, setLoading] = useState(false)

    const initialValues: VerifyForm = {
        id: user?.id || 0,
        code: ""
    }
    const handleKeyDown = (index: number) => (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === "Backspace" && code[index] === "" && index > 0) {
            const newCode = [...code]
            newCode[index - 1] = ""
            setCode(newCode)
            inputRefs.current[index - 1].focus()
        }
    }

    const handleChange = (index: number) => (event: ChangeEvent<HTMLInputElement>) => {
        const newCode = [...code]
        newCode[index] = event.target.value.toUpperCase()
        if (newCode[index].length === 1 && index < 4) {
            inputRefs.current[index + 1].focus()
        }

        setCode(newCode)
        newCode.join("")

        if (newCode.join("").length === 5) {
            validateCode(newCode.join(""))
        }
    }

    const validateCode = (inputCode: string) => {
        setLoading(true)
        io.emit("user:verify", { id: user?.id, code: inputCode })
    }

    useEffect(() => {
        io.on("application:status:approved", () => {
            snackbar({ severity: "success", text: "Indique seus amigos" })
            navigate("/indicate")
            setLoading(false)
        })
        io.on("application:aproval:error", (data) => {
            const errorMessage = data.error ? data.error : "Falha no cadastro!"
            snackbar({ severity: "error", text: errorMessage[0].toUpperCase() + errorMessage.slice(1) })
            setLoading(false)
        })

        return () => {
            io.off("application:status:approved")
            io.off("application:aproval:error")
        }
    }, [])

    useEffect(() => {
        inputRefs.current[0].focus()
    }, [])

    useEffect(() => {
        window.scroll(0, 0)
    }, [])

    return user ? (
        <Box sx={{ width: "100%", height: "100%", overflowY: "auto", gap: "4vw", flexDirection: "column" }}>
            <PaperBall>
                <img src={BallOne} alt="" style={{ width: "45vw" }} />
                <p style={{ textAlign: "center", fontWeight: "600", fontSize: "3.8vw" }}>Atualize Seus Dados e Fique por Dentro!</p>
                <p style={{ textAlign: "center", color: colors.terciary, fontSize: "2.8vw" }}>
                    Queremos garantir que você não perca nenhuma novidade! Por favor, atualize seus dados para continuar recebendo informações
                    exclusivas e ofertas especiais da Bongrano. É rápido e fácil - apenas confirme seu nome completo, endereço, e-mail e WhatsApp.
                    Lembre-se, suas informações estão seguras conosco!
                </p>
                <p style={{ textAlign: "center", color: colors.terciary, fontSize: "2.8vw", padding: "2vw" }}>
                    Enviamos um código de verificação para o telefone <span style={{ fontWeight: "bold" }}>{user.whatsapp}</span>. Por favor insira-o
                    abaixo. Caso não tenha recebido, também enviamos o código para o email: <span style={{ fontWeight: "bold" }}>{user.email}</span>
                </p>
                <Box sx={{ p: "4vw", gap: "2.5vw" }}>
                    {code.map((_, index) => (
                        <InputBongrano
                            sx={token_style}
                            key={index}
                            inputRef={(el) => (inputRefs.current[index] = el)}
                            type="text"
                            inputProps={{ maxLength: 1 }}
                            value={code[index]}
                            onChange={handleChange(index)}
                            onKeyDown={handleKeyDown(index)}
                        />
                    ))}
                </Box>
                {loading && <LinearProgress color="primary" sx={{ width: "90%", borderRadius: "5vw" }} />}
            </PaperBall>

            <img src={Selo} alt="" />
            <PaperBall>
                <p style={{ width: "100%", fontWeight: "600", textAlign: "left", fontSize: "3.8vw" }}>Regras de participação</p>
                <Rules />
            </PaperBall>
            <Box sx={{ justifyContent: "space-between" }}>
                <ButtonBongrano sx={{ alignSelf: "end" }} onClick={() => navigate("../signup")}>
                    Voltar
                </ButtonBongrano>
            </Box>
        </Box>
    ) : null
}
