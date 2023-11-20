import React from "react";

import { GameContext } from "@/components/GameProvider";

export const useGame = () => React.useContext(GameContext);
