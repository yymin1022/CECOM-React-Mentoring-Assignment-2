import styled from "styled-components";
import PostList from "./PostList";

const App = () => {
    return (
        <>
            <ParentComponent>
                <LeftComponent>
                    <LeftTitleContainer>
                        <LeftTitleItem>블로그</LeftTitleItem>
                        <LeftTitleItem>제목</LeftTitleItem>
                    </LeftTitleContainer>
                </LeftComponent>
                <RightComponent>
                    <PostList />
                </RightComponent>
            </ParentComponent>
        </>
    );
}

const ParentComponent = styled.div`
    height: 100vh;
    width: 100vw;
    
    display: flex;
    flex-direction: row;
`;

const LeftComponent = styled.div`
    height: 100%;
    width: 400px;
  
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
  
    background-color: rgb(22, 78, 171);
`;

const RightComponent = styled.div`
    height: 100%;
    width: 100%;
`;

const LeftTitleContainer = styled.div`
    height: 200px;
    width: 100%;
  
    padding: 30px;
  
    display: flex;
    flex-direction: column;
`;

const LeftTitleItem = styled.p`
    color: white;
    font-size: 60px;
  
    margin: 0;
    padding: 0;
`;


export default App;
