import { Card, Space, Typography, Collapse } from "antd";
import styled from "styled-components";
import {TwitterFollowButton} from 'react-twitter-embed';
import TwitterBioScreenShot from "../assets/aboutMe2.png";

const {Text, Title} = Typography;
const {Panel} = Collapse;

const AboutMeContainer = styled(Card).attrs(props=>({
    title: props.title,
    cover: props.cover,
    type: props.type
}))`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 5%;
`;

const FollowMeContainer = styled.div`
    margin-top: 10%;
`;

const AboutMe = () => {
    return (
        <AboutMeContainer 
            title={"About me"}
            // type={"inner"}
            cover={<img src={TwitterBioScreenShot} style={{padding: '2px'}}/>}
        >
            <Space direction={"vertical"}>
                {/* <Text strong>Hi, I am Ravi Teja Kanta</Text> */}
                <Text>I am new to twitter and trying to build a quality Product audience. Consider following me for more relevant stuff like this.</Text>
                {/* <Text>Consider following me for more relevant tweets like this</Text> */}
                <FollowMeContainer>
                    <TwitterFollowButton screenName={"raviTejaKanta"} />
                </FollowMeContainer>
                {/* <Collapse>
                    <Panel header={"More"} key={1}>
                        <Text>asd</Text>  
                    </Panel>
                </Collapse> */}
            </Space>
        </AboutMeContainer>
    );
}
export default AboutMe;