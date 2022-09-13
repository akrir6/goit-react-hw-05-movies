import styled from "@emotion/styled";

export const Wrapper = styled.div`
    margin: 8px 0;
    padding-right: 16px;
    display: flex;
    gap: 16px;
    border-radius: 8px;
    background-color: #01b4e450;
`

export const Poster=styled.img`
    width: 300px;
    border-radius: 8px;
`

export const Details=styled.ul`
    color: #0d253f;
    
    li {
        border-bottom: 1px dotted  #0d253f;
    }
    h2, h3 {
        text-transform: uppercase;
    }
`