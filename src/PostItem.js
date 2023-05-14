import styled from "styled-components";

const PostItem = () => {
    return (
        <>
            <PostItemContainer>
                PostItem
            </PostItemContainer>
        </>
    )
}

const PostItemContainer = styled.div`
    height: 150px;
    width: 450px;
  
    margin: 20px;
  
    background-color: blue;
`;

export default PostItem;