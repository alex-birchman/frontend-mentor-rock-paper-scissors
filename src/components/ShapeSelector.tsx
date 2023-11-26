import styled, { css } from "styled-components";
import { LayoutGroup } from "framer-motion";

import Shape from "@/components/Shape";
import TriangleIcon from "@/assets/bg-triangle.svg?react";
import PentagonIcon from "@/assets/bg-pentagon.svg?react";
import {
  SHAPE_ROCK,
  SHAPE_PAPER,
  SHAPE_SCISSORS,
  SHAPE_LIZARD,
  SHAPE_SPOCK,
} from "@/const/shape";
import { GAME_TYPE } from "@/const/game";
import { useGame } from "@/hooks/useGame";
import { ShapeType } from "@/types/shape";
import { GameType } from "@/types/game";

const StyledSelectorWrapper = styled.div<{ $gameType: GameType }>`
  position: relative;
  width: ${(props) => (props.$gameType === GAME_TYPE.BASIC ? 476 : 472)}px;
  height: ${(props) => (props.$gameType === GAME_TYPE.BASIC ? 430 : 463)}px;

  margin: 0 auto;
  margin-top: ${(props) => (props.$gameType === GAME_TYPE.BASIC ? 72 : 48)}px;

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

const StyledPentagonIcon = styled(PentagonIcon)`
  position: absolute;
  inset: 0;
  margin: auto;

  @media (max-width: 480px) {
    width: 216px;
    height: 205px;
  }
`;

const StyledShapePaper = styled.div<{ $isExtendedGame?: boolean }>`
  ${(props) =>
    props.$isExtendedGame
      ? css`
          position: absolute;
          top: 25%;
          right: 5%;
        `
      : css`
          position: absolute;
          top: 0;
          left: 0;
        `}
`;

const StyledShapeScissors = styled.div<{ $isExtendedGame?: boolean }>`
  ${(props) =>
    props.$isExtendedGame
      ? css`
          position: absolute;
          top: 0;
          right: 0;
          left: 0;
          width: fit-content;
          margin: auto;
        `
      : css`
          position: absolute;
          top: 0;
          right: 0;
        `}
`;

const StyledShapeRock = styled.div<{ $isExtendedGame?: boolean }>`
  ${(props) =>
    props.$isExtendedGame
      ? css`
          position: absolute;
          right: 15%;
          bottom: 0;
        `
      : css`
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          width: fit-content;
          margin: auto;
        `}
`;

const StyledShapeLizard = styled.div`
  position: absolute;
  left: 15%;
  bottom: 0;
`;

const StyledShapeSpock = styled.div`
  position: absolute;
  top: 25%;
  left: 5%;
`;

function ShapeSelector() {
  const { gameType, hadleSelectPlayerShape } = useGame();

  const isExtendedGame = gameType === GAME_TYPE.EXTENDED;

  const handleClickShape = (shape: ShapeType) => {
    hadleSelectPlayerShape(shape);
  };

  return (
    <LayoutGroup>
      <StyledSelectorWrapper $gameType={gameType}>
        {gameType === GAME_TYPE.BASIC ? (
          <StyledTriangleIcon />
        ) : (
          <StyledPentagonIcon />
        )}
        <StyledShapePaper
          $isExtendedGame={isExtendedGame}
          onClick={() => handleClickShape(SHAPE_PAPER)}
        >
          <Shape
            layoutId={SHAPE_PAPER}
            type={SHAPE_PAPER}
            isExtendedGame={isExtendedGame}
          />
        </StyledShapePaper>
        <StyledShapeScissors
          $isExtendedGame={isExtendedGame}
          onClick={() => handleClickShape(SHAPE_SCISSORS)}
        >
          <Shape
            layoutId={SHAPE_SCISSORS}
            type={SHAPE_SCISSORS}
            isExtendedGame={isExtendedGame}
          />
        </StyledShapeScissors>
        <StyledShapeRock
          $isExtendedGame={isExtendedGame}
          onClick={() => handleClickShape(SHAPE_ROCK)}
        >
          <Shape
            layoutId={SHAPE_ROCK}
            type={SHAPE_ROCK}
            isExtendedGame={isExtendedGame}
          />
        </StyledShapeRock>
        {isExtendedGame && (
          <>
            <StyledShapeLizard onClick={() => handleClickShape(SHAPE_LIZARD)}>
              <Shape
                layoutId={SHAPE_LIZARD}
                type={SHAPE_LIZARD}
                isExtendedGame={isExtendedGame}
              />
            </StyledShapeLizard>
            <StyledShapeSpock onClick={() => handleClickShape(SHAPE_SPOCK)}>
              <Shape
                layoutId={SHAPE_SPOCK}
                type={SHAPE_SPOCK}
                isExtendedGame={isExtendedGame}
              />
            </StyledShapeSpock>
          </>
        )}
      </StyledSelectorWrapper>
    </LayoutGroup>
  );
}

export default ShapeSelector;
