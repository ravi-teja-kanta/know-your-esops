import styled from "styled-components";
import {TwitterTweetEmbed, TwitterShareButton, TwitterFollowButton} from 'react-twitter-embed';
import { Typography, Space, Card } from "antd";
import Meta from "antd/lib/card/Meta";
const {Title, Text: Txt} = Typography;
const ShareThisContainer = styled(Card)`
    /* display: flex; */
    flex-direction: column;
    align-items: center;
    margin-left: 5%;
    margin-right: 5%;
    
`;
const TweetBox = styled.div`
    display: flex;
    flex-direction: row;
`
const ShareThis = () => {
    return (
        <ShareThisContainer>
                    <Space direction={"vertical"}>

                        {/* <FollowMe> */}
                            <Title level={5}>Liked this tool? </Title>
                            <TweetBox>
                                <Space>
                                    <Txt strong>Share it with others.</Txt>
                                    <TwitterShareButton
                                        url={window.location.href}
                                        options={{text: "Check how good your Company's ESOP Policy is."}}
                                    />
                                </Space>
                            </TweetBox>
                        {/* </FollowMe> */}
                        
                    </Space>
        </ShareThisContainer>
    )
}
export default ShareThis;