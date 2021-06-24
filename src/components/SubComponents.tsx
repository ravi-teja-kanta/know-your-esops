import React from 'react';
import { Radio, Select } from "formik-antd"
import styled from "styled-components"

export const QuestionVertical = styled.div`
		display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
    `
export const QuestionHorizontal = styled.div`
        display: flex;
        flex-direction: row;
        max-width: 100%;
        min-width: 90%;
        max-height: 7%;
        @media (min-width: 500px) {
            max-width: 75%;
        }
        justify-content:center;
    `
export const Text = styled.span`
        font-family: 'helvetica';
        font-size: 1.2em;
        padding: 5px;
    `
export const MultiOptionButton = styled(Radio.Button)`
    /* margin-right: 10px; */
    min-width: 30%;
`
export const MultiOption = styled(Radio.Group).attrs(props => ({
    name: props.name,
    size: props.size
}))`
    margin-left: 5px;
`
export const DropDown = styled(Select).attrs(props => ({
    name: props.name,
    size: props.placeholder
}))`
    padding: 5px;
    /* min-width: 90%; */
    width: 50%;
`
export const DropDownOption = styled(Select.Option)`
    
`
export const SubmitButtonSheet = styled.div`
    display: flex;
    flex-direction: row;
    margin: 5px;
    margin-top: 15px;
`