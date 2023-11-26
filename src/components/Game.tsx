import styled from "styled-components";

import GameInProgress from "@/components/GameInProgress";
import ShapeSelector from "@/components/ShapeSelector";
import { useGame } from "@/hooks/useGame";
import { GAME_STATUS } from "@/const/game";

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

function Game() {
  const { status } = useGame();

  if (status !== GAME_STATUS.NOT_STARTED) {
    return <GameInProgress />;
  }

  return (
    <StyledWrapper>
      <ShapeSelector />
    </StyledWrapper>
  );
}

export default Game;
