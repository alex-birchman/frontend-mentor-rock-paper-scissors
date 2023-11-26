import { ShapeType } from "@/types/shape";
import {
  BASIC_SHAPES,
  EXTENDED_SHAPES,
  SHAPE_ROCK,
  SHAPE_PAPER,
  SHAPE_SCISSORS,
  SHAPE_LIZARD,
  SHAPE_SPOCK,
} from "@/const/shape";
import { GAME_STATUS } from "@/const/game";

export function getRandomComputerShape(isExtended: boolean = false): ShapeType {
  const selectedShapes = isExtended ? EXTENDED_SHAPES : BASIC_SHAPES;
  const randomIndex = Math.floor(Math.random() * selectedShapes.length);
  return selectedShapes[randomIndex];
}

export function getGameResult(
  playerShape: ShapeType,
  computerShape: ShapeType
) {
  if (playerShape === computerShape) {
    return GAME_STATUS.DRAW;
  }

  if (
    // Classic game
    (playerShape === SHAPE_ROCK && computerShape === SHAPE_SCISSORS) ||
    (playerShape === SHAPE_PAPER && computerShape === SHAPE_ROCK) ||
    (playerShape === SHAPE_SCISSORS && computerShape === SHAPE_PAPER) ||
    // Extended game
    (playerShape === SHAPE_SCISSORS && computerShape === SHAPE_LIZARD) ||
    (playerShape === SHAPE_PAPER && computerShape === SHAPE_SPOCK) ||
    (playerShape === SHAPE_ROCK && computerShape === SHAPE_LIZARD) ||
    (playerShape === SHAPE_LIZARD && computerShape === SHAPE_PAPER) ||
    (playerShape === SHAPE_LIZARD && computerShape === SHAPE_SPOCK) ||
    (playerShape === SHAPE_SPOCK && computerShape === SHAPE_ROCK) ||
    (playerShape === SHAPE_SPOCK && computerShape === SHAPE_SCISSORS)
  ) {
    return GAME_STATUS.PLAYER_WON;
  }

  return GAME_STATUS.COMPUTER_WON;
}
