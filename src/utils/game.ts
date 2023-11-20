import { ShapeType } from "@/types/shape";
import {
  BASIC_SHAPES,
  SHAPE_ROCK,
  SHAPE_PAPER,
  SHAPE_SCISSORS,
} from "@/const/shape";
import { GAME_STATUS } from "@/const/game";

export function getRandomComputerShape(): ShapeType {
  const randomIndex = Math.floor(Math.random() * BASIC_SHAPES.length);
  return BASIC_SHAPES[randomIndex];
}

export function getGameResult(
  playerShape: ShapeType,
  computerShape: ShapeType
) {
  if (playerShape === computerShape) {
    return GAME_STATUS.DRAW;
  }

  if (
    (playerShape === SHAPE_ROCK && computerShape === SHAPE_SCISSORS) ||
    (playerShape === SHAPE_PAPER && computerShape === SHAPE_ROCK) ||
    (playerShape === SHAPE_SCISSORS && computerShape === SHAPE_ROCK)
  ) {
    return GAME_STATUS.PLAYER_WON;
  }

  return GAME_STATUS.COMPUTER_WON;
}
