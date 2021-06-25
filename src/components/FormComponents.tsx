import { Card } from "antd";
import styled from "styled-components";

export const MultiChoiceTowerComponent = styled(Card)`
    display: flex;
    flex-direction: column;
    /* width: 50%; */
    @media (min-width: 500px) {
            width: 40%;
    }
    justify-content: space-between;
    /* background-color: yellow; */
    /* align-items: flex-start; */
    /* padding-left: 6%; */
    @media (max-width: 500px) {
        /* padding: 1%; */
        margin: 2%;
    }
`;
 export const RadioButtonTowerComponent = styled(Card)`
        display: flex;
        flex-direction: column;
        /* flex: 6; */
        /* align-items: center; */
        justify-content: space-between;
        @media (min-width: 500px) {
            width: 20%;
            height: 100%;
        }
        @media (max-width: 500px) {
            /* padding-left: 0; */
        }
        /* height: 100%; */
    `;

export const Logo = styled.div`
    display: flex;
    flex-direction: row;
    /* padding: 10px; */
    justify-content: center;
    flex-wrap: wrap;
`;