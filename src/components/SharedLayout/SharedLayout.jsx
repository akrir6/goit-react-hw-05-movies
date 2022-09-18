import { Loader } from "components/Loader/Loader";
import { Suspense } from "react";
import { Outlet } from "react-router-dom";

import { Header, NavItem } from "./SharedLayout.styled";
export const SharedLayout = () => {
    return (
        <>
            <Header>
                <nav>
                    <NavItem to="/">Home</NavItem>
                    <NavItem to="/movies">Movies</NavItem>
                </nav>
            </Header>
            <Suspense fallback={<Loader/>}>
                <Outlet />
            </Suspense>
        </>
    )
}