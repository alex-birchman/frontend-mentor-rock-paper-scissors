export const SHAPE_ROCK = "rock";
export const SHAPE_PAPER = "paper";
export const SHAPE_SCISSORS = "scissors";
export const SHAPE_LIZARD = "lizard";
export const SHAPE_SPOCK = "spock";

export const BASIC_SHAPES = [SHAPE_ROCK, SHAPE_PAPER, SHAPE_SCISSORS] as const;
export const EXTENDED_SHAPES = [
  SHAPE_ROCK,
  SHAPE_PAPER,
  SHAPE_SCISSORS,
  SHAPE_LIZARD,
  SHAPE_SPOCK,
] as const;

export const SHAPE_SIZE = {
  small: {
    width: "130px",
    height: "133px",
  },
  medium: {
    width: "198px",
    height: "203px",
  },
  large: {
    width: "292px",
    height: "300px",
  },
};

export const SHAPE_EXTENDED_SIZE = {
  small: {
    width: "96px",
    height: "97px",
  },
  medium: {
    width: "145px",
    height: "148px",
  },
  large: {
    width: "292px",
    height: "300px",
  },
};
