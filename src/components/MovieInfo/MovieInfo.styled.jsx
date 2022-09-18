import styled from "@emotion/styled";

export const Wrapper = styled.div`
    margin: 8px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 8px;
    background-color: #01b4e450;


    @media screen and (min-width: 768px) {
        flex-direction: row;
        align-items: flex-start;
    }

`

export const Poster=styled.img`
    width: 100%;
    max-width: 768px;
    @media screen and (min-width: 768px) {
        max-width: 250px;
    }

    border-radius: 8px;
`

export const Details=styled.ul`
    color: #0d253f;
    padding: 0 16px;
    
    li:not(:last-child) {
        border-bottom: 1px dotted  #0d253f;
    }
    h2, h3 {
        text-transform: uppercase;
    }
`