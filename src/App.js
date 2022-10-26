import GlobalStyle from "./GlobalStyle";
import styled from "styled-components";

const Parent = styled.div`
  height: 100vh;
  background-color: aliceblue;
`;

const Child = styled.div`
  font-size: 18px;
  text-align: center;
  height: 150px;
  width: 150px;
  margin: 10px;
  padding: 5px;
  box-sizing: border-box;
  color: white;
  background-color: dodgerblue;
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <Parent>
        <Child>child 1</Child>
        <Child>chile 2</Child>
        <Child>child 3</Child>
      </Parent>
    </>
  );
}

export default App;
