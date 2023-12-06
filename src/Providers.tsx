import React, { Children } from "react"
import { BrowserRouter } from "react-router-dom"
import { useMuiTheme } from "./hooks/useMuiTheme"
import { ThemeProvider } from "@mui/material"
import { SnackbarProvider } from "burgos-snackbar"
import { ConfirmDialogProvider } from "burgos-confirm"
import { IoProvider } from "./contexts/ioContext"

interface ProvidersProps {
    children?: React.ReactNode
}

export const Providers: React.FC<ProvidersProps> = ({ children }) => {
    const mui_theme = useMuiTheme()

    return (
        <BrowserRouter>
            <ThemeProvider theme={mui_theme}>
                <SnackbarProvider>
                    <ConfirmDialogProvider>
                        {/* <IoProvider>{children}</IoProvider> */}
                        {children}
                    </ConfirmDialogProvider>
                </SnackbarProvider>
            </ThemeProvider>
        </BrowserRouter>
    )
}
