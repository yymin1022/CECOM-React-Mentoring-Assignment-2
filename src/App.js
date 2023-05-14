import styled from "styled-components";

const App = () => {
    return (
        <>
            <ParentComponent>
                <LeftComponent></LeftComponent>
                <RightComponent></RightComponent>
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
`;

const RightComponent = styled.div`
    height: 100%;
    width: 100%;
`;

export default App;
