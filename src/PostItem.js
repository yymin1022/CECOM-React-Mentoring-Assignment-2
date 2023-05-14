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
                    <PostDataDate>May 14, 2023</PostDataDate>
                    <PostDataTag>#CECOM #Mentoring</PostDataTag>
                </PostDataContainer>
            </PostItemContainer>
        </>
    )
}

const PostItemContainer = styled.div`
    height: 150px;
    width: 450px;
  
    margin: 50px 100px;
  
    display: flex;
    flex-direction: row;
`;

const PostImageContainer = styled.div`
    height: 150px;
    width: 150px;
    
    background-color: lightblue;
`;

const PostDataContainer = styled.div`
    height: 130;
    width: 280;
  
    padding: 10px;
  
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

const PostDataTitle = styled.p`
    color: rgb(22, 78, 171);
    font-size: 20px;
    font-weight: 700;
  
    margin: 0 0 20px 0;
    padding: 0;
`;

const PostDataDate = styled.p`
    color: lightgray;
    font-size: 20px;
  
    margin: 0;
    padding: 0;
`;

const PostDataTag = styled.p`
    color: lightgray;
    font-size: 20px;
  
    margin: 0;
    padding: 0;
`;

export default PostItem;