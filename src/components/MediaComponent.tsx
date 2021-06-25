import {TwitterTweetEmbed, TwitterShareButton, TwitterFollowButton} from 'react-twitter-embed';
import styled from "styled-components";
import { Typography, Space } from "antd";
import ShareThis from './ShareThisComponent';
import ScoreBasis from './ScoreBasisComponent';
import AboutMe from './AboutMeComponent';

const {Title, Text: Txt} = Typography;
export const MediaComponentContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 30%;
    @media (max-width: 500px) {
        width: 100%;
        margin-top: 10px;
    }
    justify-content:center;
    /* background-color: pink; */
    /* justify-content: space-between; */
`;
const Mediatext = styled(Txt)`
    font-size: 1.5em;
    align-self: center;
    /* background-color: yellow; */
    @media (max-width: 500px) {
        /* font-size: 1.2em; */
        /* display: none; */
    }
`
const MediaComponent = () => {
    return (
        <MediaComponentContainer>
            <ScoreBasis />
            <ShareThis />
            <AboutMe />
        </MediaComponentContainer>
    );
}

export default MediaComponent;