import React from 'react';
import { Radio, Select, SubmitButton } from "formik-antd"
import styled from "styled-components"

export const QuestionVertical = styled.div`
		display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        @media (max-width: 400px) {
            padding: 10px;
        }
    `
export const QuestionHorizontal = styled.div`
        display: flex;
        flex-direction: row;
        /* min-width: 90%; */
        /* max-height: 7%; */
        flex-wrap: wrap;
        /* background-color: pink; */
        justify-content: space-between;
    `
export const Text = styled.span`
        font-family: 'Helvetica';
        /* font-weight: regular; */
        font-size: 1.4em;
        /* padding: 5px; */
        @media (max-width: 400px) {
            align-self: center;
            /* font-weight: bold; */
            font-size: 1.1em;
        }
    `
export const LogoText = styled(Text)`
    /* font-weight: bold; */
    font-size: 1.4em;
    align-self: flex-end;
    display: none;
    @media (max-width: 450px) {
        margin-top: 15px;
        /* margin-left: 15px; */
        padding-left: 20px;
        align-self: center;
        font-family: "Times New Roman";
        text-decoration: underline;
        /* font-weight: bold; */
        display: flex;
    }
`
export const Mediatext = styled(Text)`
    font-size: 1.5em;
    align-self: center;
    /* background-color: yellow; */
    @media (max-width: 400px) {
        font-size: 1.2em;
        /* display: none; */
    }
`
export const MultiOptionButton = styled(Radio.Button)`
    /* margin-right: 10px; */
    /* min-width: 30%; */
    min-width: 100px;
    @media (max-width: 400px) {
        /* padding-left: 0; */
        min-width: 100px;
    }
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
    margin-left: auto; 
    @media (max-width: 400px) {
        /* align-self: flex-end; */
        font-weight: bold;
        display: flex;
        width: 60%;
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
export const TweetContainer = styled.div`
    /* min-width: 250px; */
    display: flex;
    /* align-items: center; */
    justify-content: center;
    /* padding-left:20%; */
    /* padding-right:20%; */
    /* background-color: yellow; */
    @media (max-width: 400px) {
        /* align-self: flex-end; */
        width: 20%;
        margin-left: auto; 
        margin-right: auto; 
    }
`
export const ImageContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
`
export const HeaderImageContainer = styled.div`
    display: none;
    @media (max-width: 450px) {
        display: flex;
        flex-direction: row;
        justify-content: center;
    }
`

export const GetScoreButton = styled(SubmitButton)`
    align-self: center;
    width: 30%;
    height: 5%;
    border-radius: 10px;
    font-size: 18px;
    @media (max-width: 400px) {
        margin-top: 20px;
        width: 40%;
    }
    font-weight: bold;
`