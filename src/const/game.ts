export const GAME_STATUS = {
  NOT_STARTED: "NOT_STARTED",
  IN_PROGRESS: "IN_PROGRESS",
  PLAYER_WON: "PLAYER_WON",
  COMPUTER_WON: "COMPUTER_WON",
  DRAW: "DRAW",
} as const;

export const GAME_TYPE = {
  BASIC: "BASIC",
  EXTENDED: "EXTENDED",
} as const;
