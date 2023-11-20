import styled from "styled-components";
import { motion } from "framer-motion";

import { useGame } from "@/hooks/useGame";
import { GAME_STATUS } from "@/const/game";

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;
`;

const StyledTitle = styled.h2`
  font-size: 3.5rem;
  font-weight: 700;
  text-align: center;
  text-shadow: 0px 3px 3px rgba(0, 0, 0, 0.2);
`;

const StyledButton = styled.button`
  padding: 15px;
  padding-bottom: 14px;
  border-radius: 0.5rem;
  width: 220px;
  border: none;

  text-align: center;
  color: hsl(228, 25%, 31%);
  font-size: 1rem;
  font-weight: 600;
  letter-spacing: 0.15625rem;

  box-shadow: 0px 3px 3px 0px rgba(0, 0, 0, 0.2);
  background: linear-gradient(0deg, #f3f3f3 0%, #fff 100%);
  cursor: pointer;

  &:hover {
    color: hsl(349, 71%, 52%);
  }
`;

function GameResult() {
  const { status, handleResetGame } = useGame();

  if (status === GAME_STATUS.IN_PROGRESS) {
    return null;
  }

  return (
    <StyledWrapper
      layout
      as={motion.div}
      transition={SPRING}
      initial={{ scale: 0.5 }}
      animate={{ scale: 1 }}
    >
      {status === GAME_STATUS.PLAYER_WON && <StyledTitle>YOU WIN</StyledTitle>}
      {status === GAME_STATUS.COMPUTER_WON && (
        <StyledTitle>YOU LOSE</StyledTitle>
      )}
      {status === GAME_STATUS.DRAW && <StyledTitle>DRAW</StyledTitle>}
      <StyledButton onClick={handleResetGame}>PLAY AGAIN</StyledButton>
    </StyledWrapper>
  );
}

export default GameResult;

const SPRING = {
  type: "spring",
  stiffness: 400,
  damping: 40,
};
