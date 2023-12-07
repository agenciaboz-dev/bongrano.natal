import React, { Children } from "react"
import { BrowserRouter } from "react-router-dom"
import { useMuiTheme } from "./hooks/useMuiTheme"
import { ThemeProvider } from "@mui/material"
import { SnackbarProvider } from "burgos-snackbar"
import { ConfirmDialogProvider } from "burgos-confirm"
import { IoProvider } from "./contexts/ioContext"
import { UserProvider } from "./contexts/userContext"
import { MantineProvider } from "@mantine/core"
import "@mantine/core/styles.css"
import "@mantine/dates/styles.css"
import { useMantineTheme } from "./hooks/useMantineTheme"

interface ProvidersProps {
    children?: React.ReactNode
}

export const Providers: React.FC<ProvidersProps> = ({ children }) => {
    const mui_theme = useMuiTheme()
    const mantine_theme = useMantineTheme()

    return (
        <BrowserRouter>
            <IoProvider>
                <UserProvider>
                    <ThemeProvider theme={mui_theme}>
                        <SnackbarProvider>
                            <ConfirmDialogProvider>
                                <MantineProvider theme={mantine_theme}>{children}</MantineProvider>
                            </ConfirmDialogProvider>
                        </SnackbarProvider>
                    </ThemeProvider>
                </UserProvider>
            </IoProvider>
        </BrowserRouter>
    )
}
