import styled from "styled-components";

import GameProvider from "@/components/GameProvider";
import Header from "@/components/Header";
import Game from "@/components/Game";
import RulesButton from "@/components/RulesButton";

const StyledMain = styled.main`
  width: 100%;
  margin: 0 auto;

  padding: 48px 0;

  @media (max-width: 480px) {
    padding: 32px 0;
  }
`;

function App() {
  return (
    <GameProvider>
      <StyledMain>
        <Header />
        <Game />
      </StyledMain>
      <RulesButton />
    </GameProvider>
  );
}

export default App;
