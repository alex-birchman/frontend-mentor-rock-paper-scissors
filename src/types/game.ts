import { GAME_STATUS } from "@/const/game";

export type GameStatusType = (typeof GAME_STATUS)[keyof typeof GAME_STATUS];
