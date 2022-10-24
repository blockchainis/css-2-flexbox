import GlobalStyle from "./GlobalStyle";
import styled from "styled-components";

const ParentBox = styled.div`
  display: flex;
  height: 300px;
  justify-content: center;
  align-items: flex-start;
  background-color: aliceblue;
`;

const ChildBox = styled.div`
  font-size: 18px;
  text-align: center;
  width: 150px;
  height: 150px;
  margin: 10px;
  padding: 5px;
  box-sizing: border-box;
  color: white;
  background-color: dodgerblue;
`;

const GrowBox = styled(ChildBox)`
  flex-grow: 1;
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <ParentBox>
        <ChildBox>child 1</ChildBox>
        <GrowBox>child 2</GrowBox>
        <ChildBox>child 3</ChildBox>
      </ParentBox>
    </>
  );
}

export default App;
