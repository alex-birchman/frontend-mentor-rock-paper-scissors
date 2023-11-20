import React from "react";

import { GAME_STATUS } from "@/const/game";
import { ShapeType } from "@/types/shape";
import { GameStatusType } from "@/types/game";
import { getGameResult, getRandomComputerShape } from "@/utils/game";

type GameContextType = {
  status: GameStatusType;
  score: number;
  playerShape?: ShapeType;
  computerShape?: ShapeType;
  hadleSelectPlayerShape: (shape: ShapeType) => void;
  handleSelectComputerShape: (
    playerShape: ShapeType,
    computerShape: ShapeType
  ) => void;
  handleResetGame: () => void;
};

type GameStateType = {
  status: GameStatusType;
  score: number;
  playerShape?: ShapeType;
  computerShape?: ShapeType;
};

type GameSetStatusActionType = {
  type: "SET_STATUS";
  payload: GameStatusType;
};

type GameIncrementScoreActionType = {
  type: "INCREMENT_SCORE";
  payload: number;
};

type GameDecrementScoreActionType = {
  type: "DECREMENT_SCORE";
  payload: number;
};

type GameSetPlayerShapeActionType = {
  type: "SET_PLAYER_SHAPE";
  payload: ShapeType;
};

type GameSetComputerShapeActionType = {
  type: "SET_COMPUTER_SHAPE";
  payload: ShapeType;
};

type GameResetActionType = {
  type: "RESET_GAME";
};

type GameReducerActionType =
  | GameSetStatusActionType
  | GameIncrementScoreActionType
  | GameDecrementScoreActionType
  | GameSetPlayerShapeActionType
  | GameSetComputerShapeActionType
  | GameResetActionType;

const initialState = {
  status: GAME_STATUS.NOT_STARTED,
  score: 0,
  playerShape: undefined,
  computerShape: undefined,
};

const initialContext = {
  status: GAME_STATUS.NOT_STARTED,
  score: 0,
  playerShape: undefined,
  computerShape: undefined,
  hadleSelectPlayerShape: () => {},
  handleSelectComputerShape: () => {},
  handleResetGame: () => {},
};

export const GameContext = React.createContext<GameContextType>(initialContext);

function reducer(state: GameStateType, action: GameReducerActionType) {
  switch (action.type) {
    case "SET_STATUS": {
      return {
        ...state,
        status: action.payload,
      };
    }
    case "INCREMENT_SCORE": {
      return {
        ...state,
        score: state.score + action.payload,
      };
    }
    case "DECREMENT_SCORE": {
      return {
        ...state,
        score: state.score > 0 ? state.score - action.payload : state.score,
      };
    }
    case "SET_PLAYER_SHAPE": {
      return {
        ...state,
        playerShape: action.payload,
      };
    }
    case "SET_COMPUTER_SHAPE": {
      return {
        ...state,
        computerShape: action.payload,
      };
    }
    case "RESET_GAME": {
      return {
        ...initialState,
        score: state.score,
      };
    }
    default: {
      return state;
    }
  }
}

type GameProviderProps = {
  children: React.ReactNode;
};

function GameProvider({ children }: GameProviderProps) {
  const [state, dispatch] = React.useReducer(reducer, initialState);

  function hadleSelectPlayerShape(shape: ShapeType) {
    dispatch({ type: "SET_STATUS", payload: GAME_STATUS.IN_PROGRESS });
    dispatch({ type: "SET_PLAYER_SHAPE", payload: shape });

    setTimeout(() => {
      const computerShape = getRandomComputerShape();
      handleSelectComputerShape(shape, computerShape);
    }, 1500);
  }

  function handleSelectComputerShape(
    playerShape: ShapeType,
    computerShape: ShapeType
  ) {
    const gameResult = getGameResult(playerShape, computerShape);

    dispatch({ type: "SET_COMPUTER_SHAPE", payload: computerShape });
    dispatch({ type: "SET_STATUS", payload: gameResult });

    if (gameResult === GAME_STATUS.PLAYER_WON) {
      dispatch({ type: "INCREMENT_SCORE", payload: 1 });
      return;
    }

    if (gameResult === GAME_STATUS.COMPUTER_WON) {
      dispatch({ type: "DECREMENT_SCORE", payload: 1 });
      return;
    }
  }

  const handleResetGame = () => {
    dispatch({ type: "RESET_GAME" });
  };

  return (
    <GameContext.Provider
      value={{
        status: state.status,
        score: state.score,
        playerShape: state.playerShape,
        computerShape: state.computerShape,
        hadleSelectPlayerShape,
        handleSelectComputerShape,
        handleResetGame,
      }}
    >
      {children}
    </GameContext.Provider>
  );
}

export default GameProvider;
