import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";

export const Header = styled.header`
    padding: 8px 32px;
    background-color: #0d253f;
    
    nav {
        display: flex;
        gap: 8px;
    }

`

export const NavItem = styled(NavLink)`
    padding: 8px 16px;
    border: 1px solid #0d253f;
    border-radius: 4px;
    color: #ffffff;
    font-size: 18px;
    font-weight: 600;
    transition: border 250ms cubic-bezier(0.4, 0, 0.2, 1);

    :hover,
    :focus {
        border: 1px solid #01b4e4;
    }

    &.active {
        background-color: #01b4e4;
    }
`