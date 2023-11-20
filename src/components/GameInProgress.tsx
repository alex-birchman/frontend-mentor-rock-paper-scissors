import styled from "styled-components";

import Shape from "@/components/Shape";
import GameResult from "@/components/GameResult";
import { useGame } from "@/hooks/useGame";

const StyledWrapper = styled.div`
  display: grid;
  justify-content: center;
  grid-template-areas: "player result computer";
  grid-template-columns: repeat(3, max-content);
  grid-column-gap: 55px;
  margin-top: 72px;

  @media (max-width: 480px) {
    grid-template-areas:
      "player computer"
      "result result";
    grid-template-columns: repeat(2, max-content);
    grid-column-gap: 30px;
    grid-row-gap: 60px;
  }
`;

const StyledSide = styled.div<{ $side: string }>`
  grid-area: ${(props) => props.$side};

  display: flex;
  flex-direction: column;
  gap: 63px;

  @media (max-width: 480px) {
    flex-direction: column-reverse;
    gap: 17px;
  }
`;

const StyledSideTitle = styled.h2`
  font-size: 1.5rem;
  line-height: 2rem;
  font-weight: 700;
  letter-spacing: 0.1875rem;
  text-align: center;
  white-space: nowrap;

  @media (max-width: 480px) {
    font-size: 0.9375rem;
    letter-spacing: 0.11719rem;
  }
`;

const StyledSideShape = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto 0;
`;

const StyledGameResultWrapper = styled.div`
  grid-area: result;
  margin: auto;
`;

function GameInProgress() {
  const { playerShape, computerShape } = useGame();

  return (
    <StyledWrapper>
      <StyledSide $side="player">
        <StyledSideTitle>YOU PICKED</StyledSideTitle>
        <StyledSideShape>
          <Shape type={playerShape} size="large" />
        </StyledSideShape>
      </StyledSide>
      <StyledGameResultWrapper>
        <GameResult />
      </StyledGameResultWrapper>
      <StyledSide $side="computer">
        <StyledSideTitle>THE HOUSE PICKED</StyledSideTitle>
        <StyledSideShape>
          <Shape type={computerShape} size="large" />
        </StyledSideShape>
      </StyledSide>
    </StyledWrapper>
  );
}

export default GameInProgress;
