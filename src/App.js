import styled from "styled-components";
import PostItem from "./PostItem";

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
                    <RightPostContainer>
                        <PostItem/>
                        <PostItem/>
                        <PostItem/>
                        <PostItem/>
                    </RightPostContainer>
                </RightComponent>
            </ParentComponent>
        </>
    );
}

const ParentComponent = styled.div`
    height: 100vw;
    width: 100%;
    
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
    height: 450px;
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

const RightPostContainer = styled.div`
    width: 100%;
  
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: flex-start;
    justify-content: space-evenly;
`;

export default App;
