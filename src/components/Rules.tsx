import { Box } from "@mui/material"
import React from "react"
import { colors } from "../styles/colors"

interface RulesProps {}

export const Rules: React.FC<RulesProps> = ({}) => {
    return (
        <Box sx={{ flexDirection: "column", gap: "2vw" }}>
            <span style={{ fontWeight: "bold", color: colors.terciary, fontSize: "3vw" }}>
                Elegibilidade para Participação:
            </span>
            <p style={{ color: colors.terciary, textAlign: "left", fontSize: "3vw" }}>
                Deve-se destacar que a campanha é aberta apenas para residentes de Curitiba, para garantir que os
                participantes sejam elegíveis para receber o presente e participar dos sorteios futuros.
            </p>
            <span style={{ fontWeight: "bold", color: colors.terciary, fontSize: "3vw" }}>
                Prazos de Inscrição e Entrega:
            </span>
            <p style={{ color: colors.terciary, textAlign: "left", fontSize: "3vw" }}>
                Especificar claramente que o período de inscrição fica aberto até o dia 18 de dezembro às 23:59h. Informar as
                datas de entrega dos presentes, que serão realizadas nos dias 21, 22 e 23 de dezembro.
            </p>
            <span style={{ fontWeight: "bold", color: colors.terciary, fontSize: "3vw" }}>
                Completo Preenchimento do Cadastro:
            </span>
            <p style={{ color: colors.terciary, textAlign: "left", fontSize: "3vw" }}>
                Indicar que a atualização completa dos dados no cadastro é obrigatória para a participação, destacando os
                campos obrigatórios em negrito.
            </p>
            <span style={{ fontWeight: "bold", color: colors.terciary, fontSize: "3vw" }}>Indicação de Amigos:</span>
            <p style={{ color: colors.terciary, textAlign: "left", fontSize: "3vw" }}>
                Os participantes devem indicar o número de celular de três pessoas residentes de Curitiba. É importante
                mencionar que essas indicações são parte da elegibilidade para receber o presente.
            </p>
            <span style={{ fontWeight: "bold", color: colors.terciary, fontSize: "3vw" }}>Agendamento de Entrega:</span>
            <p style={{ color: colors.terciary, textAlign: "left", fontSize: "3vw" }}>
                Os participantes devem escolher uma das datas disponíveis (21, 22 ou 23 de dezembro) e preferência de período
                (manhã ou tarde) para a entrega do presente.
            </p>
            <span style={{ fontWeight: "bold", color: colors.terciary, fontSize: "3vw" }}>Confirmação de Participação:</span>
            <p style={{ color: colors.terciary, textAlign: "left", fontSize: "3vw" }}>
                Após a conclusão de todas as etapas, os participantes receberão uma confirmação de sua participação e
                detalhes da entrega.
            </p>
        </Box>
    )
}
