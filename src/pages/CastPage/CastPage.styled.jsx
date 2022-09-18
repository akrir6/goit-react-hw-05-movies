import styled from "@emotion/styled";

export const CastWrapper = styled.ul`
    padding: 8px;
    display: grid;  
    grid-template-rows: auto;
    grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
    column-gap: 8px;
    row-gap: 8px;
    align-items: center;


    border: 2px solid #01b4e4;
    border-radius: 0 4px 4px 4px;

`
export const CastItem=styled.li`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
    border: 1px solid #e3e3e3;
    color: #0d253f;
    border-radius: 2px;
    box-shadow: 0 2px 8px rgb(0 0 0 / 10%);
       
    img {
        width: 100%;
        display: block;
        border-radius: 2px 2px 0 0; 
    }
   
    p {
        padding: 4px 8px;
        font-size: 12px;
        color: inherit;
    }

   

`
