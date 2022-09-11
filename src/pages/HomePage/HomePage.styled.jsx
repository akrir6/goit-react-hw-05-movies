import styled from "@emotion/styled";
import { Link } from "react-router-dom";

export const Container=styled.section`
    margin: 0 16px;
    padding: 16px;
    
    background-color: #ffffff;

    display: grid;  
    grid-template-rows: auto;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    column-gap: 32px;
    row-gap: 16px;
    align-items: center;

`
export const FilmLink=styled(Link)`
    width: 100%;
    display: block;
    border-radius: 4px 4px 0 0;
    /* height: 320px; */
    /* background-color: red; */
`
