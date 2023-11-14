import PostItem from "./PostItem";
import styled from "styled-components";

const PostList = () => {
    return (
        <RightPostContainer>
            <PostItem/>
            <PostItem/>
            <PostItem/>
            <PostItem/>
        </RightPostContainer>
    );
}

const RightPostContainer = styled.div`
    width: 100%;
  
    padding: 100px;
  
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: flex-start;
    justify-content: space-evenly;
`;

export default PostList;