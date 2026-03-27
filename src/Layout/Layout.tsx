import { Outlet } from "react-router-dom"
import { Header } from "../components/Header/Header"

export const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <>
            <Header/>
            <Outlet />
        </>
    )
}