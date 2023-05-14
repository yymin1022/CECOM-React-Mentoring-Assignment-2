import styled from "styled-components";

const PostItem = () => {
    return (
        <>
            <PostItemContainer>
                <PostImageContainer>
                    Post Image!!
                </PostImageContainer>
                <PostDataContainer></PostDataContainer>
            </PostItemContainer>
        </>
    )
}

const PostItemContainer = styled.div`
    height: 150px;
    width: 450px;
  
    margin: 20px;
  
    flex-direction: row;
`;

const PostImageContainer = styled.div`
    height: 150px;
    width: 150px;
    
    background-color: lightblue;
`;

const PostDataContainer = styled.div`
    height: 150px;
    width: 300px;
`;

export default PostItem;