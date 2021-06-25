import { Card, Typography } from "antd";
import {TwitterTweetEmbed, TwitterShareButton, TwitterFollowButton} from 'react-twitter-embed';
import styled from "styled-components";

const {Text} = Typography;

const ScoreBasisContainer = styled.div`
        padding-left: 5%;
        padding-right: 5%;
        /* margin-left: 5%; */
        /* margin-right: 5%; */
`
const ScoreBasis = () => {
    return (
        <ScoreBasisContainer>
            <Card
                title={"What is it based on?"}
            >
                {/* <Text>It is based on the viral tweet by @BeingPractical</Text> */}
                <TwitterTweetEmbed
                    tweetId={'1363352214559891456'}
                />
            </Card>
        </ScoreBasisContainer>
    );
}

export default ScoreBasis;