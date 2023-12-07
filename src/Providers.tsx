import React, { Children } from "react"
import { BrowserRouter } from "react-router-dom"
import { useMuiTheme } from "./hooks/useMuiTheme"
import { ThemeProvider } from "@mui/material"
import { SnackbarProvider } from "burgos-snackbar"
import { ConfirmDialogProvider } from "burgos-confirm"
import { IoProvider } from "./contexts/ioContext"
import { UserProvider } from "./contexts/userContext"

interface ProvidersProps {
    children?: React.ReactNode
}

export const Providers: React.FC<ProvidersProps> = ({ children }) => {
    const mui_theme = useMuiTheme()

    return (
        <BrowserRouter>
            <IoProvider>
                <UserProvider>
                    <ThemeProvider theme={mui_theme}>
                        <SnackbarProvider>
                            <ConfirmDialogProvider>{children}</ConfirmDialogProvider>
                        </SnackbarProvider>
                    </ThemeProvider>
                </UserProvider>
            </IoProvider>
        </BrowserRouter>
    )
}
