import styled from "styled-components";

const PostItem = () => {
    return (
        <>
            <PostItemContainer>
                <PostImageContainer>
                    Post Image!!
                </PostImageContainer>
                <PostDataContainer>
                    <PostDataTitle>POST Title</PostDataTitle>
                </PostDataContainer>
            </PostItemContainer>
        </>
    )
}

const PostItemContainer = styled.div`
    height: 150px;
    width: 450px;
  
    margin: 20px;
  
    display: flex;
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
  
    padding: 10px;
  
    display: flex;
    flex-direction: row;
`;

const PostDataTitle = styled.p`
    color: rgb(22, 78, 171);
    font-size: 20px;
    font-weight: 700;
  
    margin: 0;
    padding: 0;
`;

export default PostItem;