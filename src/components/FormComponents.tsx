import styled from "styled-components";

export const MultiChoiceTowerComponent = styled.div`
    display: flex;
    flex-direction: column;
    @media (min-width: 500px) {
            width: 50%;
    }
    justify-content: space-between;
    align-items: flex-start;
    padding-left: 10px;
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
        height: 100%;
    `;
export const MediaComponent = styled.div`
    display: flex;
    flex-direction: column;
    width: 30%;
    /* justify-content: space-between; */
`;