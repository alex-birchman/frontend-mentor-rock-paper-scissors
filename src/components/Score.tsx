import styled from "styled-components";

import { useGame } from "@/hooks/useGame";

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 150px;
  padding: 16px;
  padding-bottom: 15px;

  border-radius: 0.5rem;
  background: linear-gradient(0deg, hsl(0, 0%, 95%) 0%, hsl(0, 0%, 100%) 100%);

  @media (max-width: 480px) {
    width: 80px;
    padding: 10px;
  }
`;

const StyledTitle = styled.h2`
  font-size: 1rem;
  font-weight: 600;
  letter-spacing: 0.15625rem;
  color: hsl(230, 64%, 46%);

  @media (max-width: 480px) {
    font-size: 0.625rem;
    letter-spacing: 0.09769rem;
  }
`;

const StyledScore = styled.h1`
  font-size: 4rem;
  line-height: 4rem;
  font-weight: 700;
  color: hsl(247, 10%, 37%);

  @media (max-width: 480px) {
    font-size: 2.5rem;
    line-height: 2.5rem;
  }
`;

function Score() {
  const { score } = useGame();

  return (
    <StyledContainer>
      <StyledTitle>SCORE</StyledTitle>
      <StyledScore>{score}</StyledScore>
    </StyledContainer>
  );
}

export default Score;
