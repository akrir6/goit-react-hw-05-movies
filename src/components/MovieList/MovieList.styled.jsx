import styled from "@emotion/styled";
import { Link } from "react-router-dom";

export const MovieWrapper=styled.ul`
    display: grid;  
    grid-template-rows: auto;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    column-gap: 32px;
    row-gap: 16px;
    align-items: center;

`
export const MovieLink=styled(Link)`
    display: block;
    border: 1px solid #e3e3e3;
    color: #0d253f;
    border-radius: 8px;
    box-shadow: 0 2px 8px rgb(0 0 0 / 10%);
    transition: transform 200ms cubic-bezier(0.4, 0, 0.2, 1), 
        color 200ms cubic-bezier(0.4, 0, 0.2, 1), 
        background-color 200ms cubic-bezier(0.4, 0, 0.2, 1);
    
    img {
        width: 100%;
        display: block;
        border-radius: 8px 8px 0 0; 
    }
   
    p {
        padding: 4px 8px;
        font-size: 16px;
        font-weight: 600;
        color: inherit;
    }

    :hover,
    :focus {
        color:#ffffff;
        background-color: #01b4e4;
        transform: scale(1.02);
    }

`
