import { useState } from "react"
import "./App.css"
import { Providers } from "./Providers"
import { Routes } from "./Routes"
import { Snackbar } from "burgos-snackbar"
import { ConfirmDialog } from "burgos-confirm"

function App() {
    const [count, setCount] = useState(0)

    return (
        <Providers>
            <Routes />
            <Snackbar />
            <ConfirmDialog />
        </Providers>
    )
}

export default App
