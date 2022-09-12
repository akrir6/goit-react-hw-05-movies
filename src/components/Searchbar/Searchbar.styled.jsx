import styled from "@emotion/styled";

export const SearchbarStyled=styled.div`
    margin: 16px 0;
    padding: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #90cea1;
    border-radius:8px; 
`

export const SearchForm = styled.form`
    display: flex;
    align-items: center;
    width: 100%;
    max-width: 400px;
    color: #0d253f;
    background-color: #fff;
    border-radius: 4px;
    overflow: hidden;
`

export const SearchButton = styled.button`
    display: inline-block;
    width: 48px;
    height: 48px;
    border: 0;
    color:#ffffff;
    background-color: #0d253f;
    transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
    cursor: pointer;
    outline: none;

    :hover,
    :focus {
        background-color: #01b4e4;
     }
`


export const SearchInput=styled.input`
    display: inline-block;
    padding: 4px;
    width: 100%;
    font: inherit;
    font-size: 18px;
    border: none;
    outline: none;
   
  
`


