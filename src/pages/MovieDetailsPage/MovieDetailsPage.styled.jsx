import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";

export const Container=styled.div`
    margin: 0 32px;
    background-color: #ffffff;

`
export const MovieNavInfo = styled.ul`
    display: flex;
    gap: 8px;
   
 `

export const NavItem = styled(NavLink)`
    display: block;
    padding: 8px 16px;
    background-color: #0d253f;
    border-radius: 4px;
    color: #ffffff;
    font-size: 18px;
    font-weight: 600;
    transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);

    :hover,
    :focus {
       background-color: #01b4e4;
    }

    &.active {
        background-color: #01b4e4;
        border-radius: 4px 4px 0 0;
        border-bottom: 2px solid #01b4e4;
    }
`