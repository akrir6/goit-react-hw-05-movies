import { Outlet } from "react-router-dom"
import { Header, NavItem } from "./SharedLayout.styled"
export const SharedLayout = () => {
    return (
        <>
            <Header>
                <nav>
                    <NavItem to="/">Home</NavItem>
                    <NavItem to="/movies">Movies</NavItem>
                </nav>
            </Header>
            <Outlet />
        </>
    )
}