import styled from "styled-components";
import "./App.css";
import Timer from "./components/timer/Timer";
import { Button } from "./components/common/Button";
import Steps from "./components/steps/Steps";
import { ContextProvider } from "./components/state/Context";

const ButtonBorder = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 18%;
`;

function App() {
  return (
    <ContextProvider>
      <div className="App">
        <div className="wrapper">
          <header>
            <div className="logo">
              <h1>PrepMate</h1>
            </div>
          </header>

          <main>
            <Timer />
            <ButtonBorder>
              <Button size="large">Start</Button>
            </ButtonBorder>
            <Steps />
          </main>

          <footer>
            <div className="footer">
              Made by <a href="http://www.google.com">John Stringer</a>
            </div>
          </footer>
        </div>
      </div>
    </ContextProvider>
  );
}

export default App;
