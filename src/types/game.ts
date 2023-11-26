import { GAME_STATUS, GAME_TYPE } from "@/const/game";

export type GameStatusType = (typeof GAME_STATUS)[keyof typeof GAME_STATUS];
export type GameType = (typeof GAME_TYPE)[keyof typeof GAME_TYPE];
