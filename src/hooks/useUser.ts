import { useContext } from "react"
import { useIo } from "./useIo"
import { useNavigate } from "react-router-dom"
import { useSnackbar } from "burgos-snackbar"
import UserContext from "../contexts/userContext"

export const useUser = () => {
    const userContext = useContext(UserContext)
    const { user, setUser } = userContext
    const io = useIo()

    const navigate = useNavigate()
    const { snackbar } = useSnackbar()

    // const logout = () => {
    //     io.emit("user:logout")
    //     navigate("/login")
    //     setUser(null)
    //     snackbar({ severity: "info", text: "Desconectado!" })
    // }

    return { user, setUser }
}
