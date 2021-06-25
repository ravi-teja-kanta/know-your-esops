import React from 'react';
import { Radio, Select, SubmitButton } from "formik-antd"
import styled from "styled-components"
import { Typography, Space, Card } from "antd";
const {Title, Text: Txt} = Typography;
export const QuestionVertical = styled(Card)`
		/* display: flex; */
        flex-direction: column;
        align-items: center;
        text-align: center;
        @media (max-width: 500px) {
            padding: 10px;
        }
    `
export const QuestionHorizontal = styled(Card)`
        /* display: flex; */
        flex-direction: row;
        /* min-width: 90%; */
        /* max-height: 7%; */
        flex-wrap: wrap;
        /* background-color: pink; */
        justify-content: space-between;
    `
export const Text = styled(Txt)`
        /* font-family: 'Helvetica'; */
        /* font-weight: regular; */
        font-size: 1.4em;
        /* padding: 5px; */
        @media (max-width: 500px) {
            align-self: center;
            /* font-weight: bold; */
            font-size: 1.1em;
        }
`
export const LogoText = styled(Card).attrs(props => ({
    bordered: props.bordered
}))`
    /* font-weight: bold; */
    /* font-size: 1.4em; */
    /* align-self: flex-end; */
    display: flex;
    @media (min-width: 500px) {
        align-self: center;
    }
    @media (max-width: 500px) {
        /* margin-top: 15px; */
        /* margin-left: 15px; */
        padding-left: 20px;
        /* align-self: center; */
        /* font-family: "Times New Roman"; */
        /* text-decoration: underline; */
        /* font-weight: bold; */
        display: flex;
    }
`
export const MultiOptionButton = styled(Radio.Button)`
    /* margin-right: 10px; */
    /* min-width: 30%; */
    min-width: 100px;
    @media (max-width: 500px) {
        /* padding-left: 0; */
        min-width: 100px;
    }
`
export const MultiOption = styled(Radio.Group).attrs(props => ({
    name: props.name,
    size: props.size
}))`
    /* margin-left: 5px; */
    @media (max-width: 500px) {
        /* padding-left: 0; */
        /* min-width: 100px; */
        margin-top: 7px;
    }
`
export const DropDown = styled(Select).attrs(props => ({
    name: props.name,
    size: props.placeholder
}))`
    padding: 5px;
    /* min-width: 90%; */
    /* width: 50%; */
    margin-left: auto; 
    @media (max-width: 500px) {
        /* align-self: flex-end; */
        font-weight: bold;
        display: flex;
        width: 100%;
        margin-left: auto; 
        padding: 8px;
    }
`
export const DropDownOption = styled(Select.Option)`
    
`
export const SubmitButtonSheet = styled.div`
    display: flex;
    flex-direction: row;
    margin: 5px;
    margin-top: 15px;
`
export const ImageContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-top: 7%;
`
export const HeaderImageContainer = styled.div`
    display: none;
    @media (max-width: 500px) {
        /* display: flex; */
        flex-direction: row;
        justify-content: center;
    }
`

export const GetScoreButton = styled(SubmitButton)`
    align-self: center;
    /* width: 30%; */
    height: 5%;
    /* border-radius: 5px; */
    font-size: 18px;
    @media (max-width: 500px) {
        margin-top: 20px;
        /* width: 40%; */
        align-self: center;
        /* width: 30%; */
        /* height: 5%; */
        /* border-radius: 5px; */
        height: 5%;
        /* font-size: 18px; */
    }
    /* font-weight: bold; */
`