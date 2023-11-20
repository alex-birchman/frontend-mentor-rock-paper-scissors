import styled from "styled-components";

import Shape from "@/components/Shape";
import GameInProgress from "@/components/GameInProgress";
import { useGame } from "@/hooks/useGame";

import { GAME_STATUS } from "@/const/game";
import { SHAPE_ROCK, SHAPE_PAPER, SHAPE_SCISSORS } from "@/const/shape";
import { ShapeType } from "@/types/shape";

import TriangleIcon from "@/assets/bg-triangle.svg?react";

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledShapeWrapper = styled.div`
  position: relative;
  width: 476px;
  height: 430px;

  margin: 0 auto;
  margin-top: 72px;

  display: flex;
  flex-direction: column;

  @media (max-width: 480px) {
    width: 312px;
    height: 282px;
  }
`;

const StyledTriangleIcon = styled(TriangleIcon)`
  position: absolute;
  inset: 0;
  margin: auto;

  @media (max-width: 480px) {
    width: 166px;
    height: 188px;
  }
`;

const StyledShapePaper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
`;

const StyledShapeScissors = styled.div`
  position: absolute;
  top: 0;
  right: 0;
`;

const StyledShapeRock = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;

  width: fit-content;
  margin: auto;
`;

function Game() {
  const { status, hadleSelectPlayerShape } = useGame();

  const handleClickShape = (shape: ShapeType) => {
    hadleSelectPlayerShape(shape);
  };

  if (status !== GAME_STATUS.NOT_STARTED) {
    return <GameInProgress />;
  }

  return (
    <StyledWrapper>
      <StyledShapeWrapper>
        <StyledTriangleIcon />
        <StyledShapePaper onClick={() => handleClickShape(SHAPE_PAPER)}>
          <Shape type={SHAPE_PAPER} />
        </StyledShapePaper>
        <StyledShapeScissors onClick={() => handleClickShape(SHAPE_SCISSORS)}>
          <Shape type={SHAPE_SCISSORS} />
        </StyledShapeScissors>
        <StyledShapeRock onClick={() => handleClickShape(SHAPE_ROCK)}>
          <Shape type={SHAPE_ROCK} />
        </StyledShapeRock>
      </StyledShapeWrapper>
    </StyledWrapper>
  );
}

export default Game;
