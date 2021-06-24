import styled from "styled-components";

export const MultiChoiceTowerComponent = styled.div`
    display: flex;
    flex-direction: column;
    /* width: 50%; */
    @media (min-width: 500px) {
            width: 40%;
    }
    justify-content: space-between;
    /* background-color: yellow; */
    /* align-items: flex-start; */
    padding-left: 6%;
    @media (max-width: 400px) {
        padding-left: 1%;
    }
`;
 export const RadioButtonTowerComponent = styled.div`
        display: flex;
        flex-direction: column;
        flex: 6;
        /* align-items: center; */
        justify-content: space-between;
        @media (min-width: 500px) {
            width: 20%;
        }
        /* height: 100%; */
    `;
export const MediaComponent = styled.div`
    display: flex;
    flex-direction: column;
    width: 30%;
    @media (max-width: 400px) {
        width: 100%
    }
    justify-content:center;
    /* background-color: pink; */
    /* justify-content: space-between; */
`;

export const Logo = styled.div`
    display: flex;
    flex-direction: row;
    padding: 25px;
    flex-wrap: wrap;
`;