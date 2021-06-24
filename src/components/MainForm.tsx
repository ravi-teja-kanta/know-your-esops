import { Formik } from "formik"
import { Form, SubmitButton } from "formik-antd"
import styled from "styled-components"
import { handleSubmit } from "../Utils"
import { MultiChoiceTowerComponent, RadioButtonTowerComponent, MediaComponent, Logo } from "./FormComponents"
import { QuestionHorizontal, DropDown, DropDownOption, QuestionVertical, MultiOption, MultiOptionButton, Text, TweetContainer, ImageContainer, GetScoreButton, LogoText, Mediatext } from "./SubComponents"
import {TwitterTweetEmbed, TwitterShareButton} from 'react-twitter-embed';
import asset from "../assets/asset1.png"
import logo from "../assets/logo_1.png"

const MainForm =  () => {
    const MainForm = styled.div`
        display: flex;
        flex-direction: row;
        padding: 5px;
        width: 100%;
        height:100%;
        justify-content:space-around;
        @media (max-width: 500px) {
            flex-direction: column;
        }
    `;

    return(
        <Formik
            initialValues={{}}
            onSubmit={handleSubmit}
        >
            <Form>
                <Logo>
                    <ImageContainer>
                        <img src={logo}/>
                    </ImageContainer>
                    <LogoText>Evaluate your company's ESOPs Policy</LogoText>
                    <Text>Share this tool: </Text>
                    <TwitterShareButton
                        url={window.location.href}
                        options={{ text: 'Check out this tool to evaluate ESOP Policies', via: 'beingPractical' }}
                    />
                </Logo>
            <MainForm>
                <MultiChoiceTowerComponent>
                    <QuestionHorizontal>
                        <Text>1. ESOPs are for</Text>
                        <DropDown
                            name="esops_for"
                            placeholder="Choose"
                        >
                            <DropDownOption value={0}>Adhoc</DropDownOption>
                            <DropDownOption value={1}>Key People</DropDownOption>
                            <DropDownOption value={2}>Well Defined Policy</DropDownOption>
                            <DropDownOption value={3}>Everyone</DropDownOption>
                        </DropDown>
                    </QuestionHorizontal>
                    <QuestionHorizontal>
                        <Text>2. Vesting Period is </Text>
                        <DropDown
                            name="vesting_period"
                            placeholder="Choose"
                        >
                            <DropDownOption value={0}>5 years or beyond</DropDownOption>
                            <DropDownOption value={1}>4 years</DropDownOption>
                        </DropDown>
                    </QuestionHorizontal>
                    <QuestionHorizontal>
                        <Text>3. ESOPs pool size</Text>
                        <DropDown
                            name="pool_size"
                            placeholder="Choose"
                        >
                            <DropDownOption value={0}>~5%</DropDownOption>
                            <DropDownOption value={1}>~7.5%</DropDownOption>
                            <DropDownOption value={2}>~10%</DropDownOption>
                            <DropDownOption value={3}>~15%</DropDownOption>
                        </DropDown>
                    </QuestionHorizontal>
                    <QuestionHorizontal>
                        <Text>4. Vesting Schedule %</Text>
                        <DropDown
                            name="vesting_schedule"
                            // style={{padding: 5, minWidth: '70%'}}
                            placeholder="Choose"
                        >
                            <DropDownOption value={0}>10 + 15 + 20 + 25 + 30</DropDownOption>
                            <DropDownOption value={1}>10 + 15 + 20 + 25 + 30</DropDownOption>
                            <DropDownOption value={2}>25 + 25 + 25 + 25</DropDownOption>
                            <DropDownOption value={3}>25 + then every month</DropDownOption>
                        </DropDown>
                    </QuestionHorizontal>
                    <QuestionHorizontal>
                        <Text>5. Vesting starts on</Text>
                        <DropDown
                            name="vesting_start"
                            // style={{padding: 5, minWidth: '70%'}}
                            placeholder="Choose"
                        >
                            <DropDownOption value={0}>1 Year after joining</DropDownOption>
                            <DropDownOption value={1}>On Allotment Date</DropDownOption>
                            <DropDownOption value={2}>From Joining Date</DropDownOption>
                        </DropDown>
                    </QuestionHorizontal>
                    <QuestionHorizontal>
                        <Text>6. Vesting on leaving startup</Text>
                        <DropDown
                            name="vesting_on_leave"
                            // style={{padding: 5, minWidth: '70%'}}
                            placeholder="Choose"
                        >
                            <DropDownOption value={0}>Clawback Terms</DropDownOption>
                            <DropDownOption value={1}>Vested Options</DropDownOption>
                        </DropDown>
                    </QuestionHorizontal>
                    <QuestionHorizontal>
                        <Text>7. Vesting on Startup's exit</Text>
                        <DropDown
                            name="vesting_on_exit"
                            // style={{padding: 5, minWidth: '70%'}}
                            placeholder="Choose"
                        >
                            <DropDownOption value={0}>Only Vested</DropDownOption>
                            <DropDownOption value={1}>Accelerated Vesting</DropDownOption>
                        </DropDown>
                    </QuestionHorizontal>
                    <QuestionHorizontal>
                        <Text>8. Vesting on death/disability</Text>
                        <DropDown
                            name="vesting_on_death"
                            // style={{padding: 5, minWidth: '70%'}}
                            placeholder="Choose"
                        >
                            <DropDownOption value={0}>Clawback</DropDownOption>
                            <DropDownOption value={1}>Only Vested</DropDownOption>
                            <DropDownOption value={2}>Accelerated Vesting</DropDownOption>
                            
                        </DropDown>
                    </QuestionHorizontal>
                    <QuestionHorizontal>
                        <Text>9. Strike / Exercise Price</Text>
                        <DropDown
                            name="strike"
                            // style={{padding: 5, minWidth: '70%'}}
                            placeholder="Choose"
                        >
                            <DropDownOption value={0}>At share price</DropDownOption>
                            <DropDownOption value={1}>At reasonable price</DropDownOption>
                            <DropDownOption value={2}>{"< Rs 1"}</DropDownOption>
                        </DropDown>
                    </QuestionHorizontal>
                    <QuestionHorizontal>
                        <Text>10. Exercise period on leaving org</Text>
                        <DropDown
                            name="exercise_period"
                            // style={{padding: 5, minWidth: '70%'}}
                            placeholder="Choose"
                        >
                            <DropDownOption value={0}>30 to 90 days</DropDownOption>
                            <DropDownOption value={1}>up to 1 year</DropDownOption>
                            <DropDownOption value={2}>1 to 3 years</DropDownOption>
                            <DropDownOption value={3}>upto 10years</DropDownOption>
                        </DropDown>
                    </QuestionHorizontal>
                    <QuestionHorizontal>
                        <Text>11. ESOPs Communication</Text>
                        <DropDown
                            name="esops_com"
                            // style={{padding: 5, minWidth: '70%'}}
                            placeholder="Choose"
                        >
                            <DropDownOption value={0}>Verbal</DropDownOption>
                            <DropDownOption value={1}>Signed/ Written Docs</DropDownOption>
                            <DropDownOption value={2}>ESOPs Portal</DropDownOption>
                        </DropDown>
                    </QuestionHorizontal>
                    <QuestionHorizontal>
                        <Text>12. Holding Period </Text>
                        <DropDown
                            name="holding"
                            // style={{padding: 5, minWidth: '70%'}}
                            placeholder="Choose"
                        >
                            <DropDownOption value={0}>{"< 1 year"}</DropDownOption>
                            <DropDownOption value={1}>1 to 3 years</DropDownOption>
                            <DropDownOption value={2}>Up to 5 years</DropDownOption>
                            <DropDownOption value={3}>Infinite</DropDownOption>
                        </DropDown>
                    </QuestionHorizontal>
                </MultiChoiceTowerComponent>
                <RadioButtonTowerComponent >
                    <QuestionVertical>
                        <Text>Is Top-up of Esops defined ?</Text>
                        <MultiOption name="esops_topup" size="large">
                            <MultiOptionButton value={1}>Yes</MultiOptionButton>
                            <MultiOptionButton value={0}> No</MultiOptionButton >
                        </MultiOption>
                    </QuestionVertical>
                    <QuestionVertical>
                        <Text>Is Buyback option available?</Text>
                        <MultiOption name="buyback" size="large">
                            <MultiOptionButton value={1}>Yes</MultiOptionButton>
                            <MultiOptionButton value={0}>No</MultiOptionButton >
                        </MultiOption>
                    </QuestionVertical>
                    <QuestionVertical>
                        <Text>Is Sale of ESOPs facilitated?</Text>
                        <MultiOption name="esop_sale" size="large">
                            <MultiOptionButton value={1}>Yes</MultiOptionButton>
                            <MultiOptionButton value={0}> No</MultiOptionButton >
                        </MultiOption>
                    </QuestionVertical>
                    <QuestionVertical>
                        <Text>Is permission required for such a sale?</Text>
                        <MultiOption name="permission" size="large">
                            <MultiOptionButton value={0}>Yes</MultiOptionButton>
                            <MultiOptionButton value={1}> No</MultiOptionButton >
                        </MultiOption>
                    </QuestionVertical>
                    <QuestionVertical>
                        <Text>Allotment is linked with?</Text>
                        <MultiOption name="allotment" size="large">
                            <MultiOptionButton value={0}>Performance</MultiOptionButton>
                            <MultiOptionButton value={1}>Time</MultiOptionButton >
                        </MultiOption>
                    </QuestionVertical>
                    <QuestionVertical>
                        <Text>Flexible esops against salary?</Text>
                        <MultiOption name="flexible" size="large">
                            <MultiOptionButton value={1}>Yes</MultiOptionButton>
                            <MultiOptionButton value={2}> No</MultiOptionButton >
                        </MultiOption>
                    </QuestionVertical>
                    <GetScoreButton>Get Score</GetScoreButton>
                </RadioButtonTowerComponent>
                <MediaComponent>
                    <Mediatext>This score is based on the viral tweet: </Mediatext>
                    <TweetContainer>
                        <TwitterTweetEmbed
                            tweetId={'1363352214559891456'}
                        />
                    </TweetContainer>
                    <ImageContainer>
                        <img src={asset}/>
                    </ImageContainer>
                </MediaComponent>
                </MainForm>
            </Form>
        </Formik>
    )
}

export default MainForm;