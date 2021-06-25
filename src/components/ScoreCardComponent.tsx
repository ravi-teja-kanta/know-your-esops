import styled from "styled-components";
import { Space, Statistic, Typography, Tooltip } from "antd";
import {TwitterShareButton, TwitterMentionButton} from 'react-twitter-embed';
const {Title, Text} = Typography;
interface ScoreCardProps {
    values: any 
}
const ScoreCardContainer = styled.div`
        display: flex;
        flex-direction: column;
        align-items: center;
`;
const TweetScoreContainer = styled.div`
        display: flex;
        flex-direction: row;
        /* align-items: center; */
        padding-top: 20px;
        /* justify-content: space-around; */
`
const ScoreCard = (props: ScoreCardProps) => {
    // @ts-ignore
    const finalScore = Number(Object.values(props.values).reduce((p: number, c: number) => p + c, 0));
    const score = ((finalScore/32)*100).toPrecision(1);
    const isFormIncomplete = Object.keys(props.values).length != 18;
    return (
        <ScoreCardContainer>
            <Title>Final Score</Title>
            
            <Statistic title="ESOP Score" value={score} precision={0} suffix="%"/>
            
            <Text type={"success"} style={{fontSize: 15}}>% match to the best ESOP Policy possible.</Text>
            {
                isFormIncomplete &&
                <Text type={"warning"} style={{fontSize: 12}}>*Fill ALL the fields for more accurate score.</Text>
            }
            <TweetScoreContainer>
                <Space>
                    {/* <Text>Score implies % match to the best ESOP Policy possible</Text> */}
                    <Text>Share your Score: </Text>
                    <TwitterShareButton
                        url={window.location.href}
                        options={{text: `Our ESOP Policy Score is ${score}% match to the best ESOP Policy possible. #esop_score`}}
                    />
                </Space>
            </TweetScoreContainer>
            <TweetScoreContainer>
                <Space>
                    <Text>Feedback: </Text>
                    <TwitterMentionButton
                        screenName={'raviTejaKanta'}
                    />
                </Space>
            </TweetScoreContainer>
        </ScoreCardContainer>
    );

}

export default ScoreCard;