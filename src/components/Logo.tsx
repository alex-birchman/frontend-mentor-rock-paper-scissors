import styled from "styled-components";

import LogoIcon from "@/assets/logo.svg?react";
import ExtendedLogoIcon from "@/assets/logo-extended.svg?react";
import { GAME_TYPE, GAME_STATUS } from "@/const/game";
import { useGame } from "@/hooks/useGame";
import { GameType } from "@/types/game";

const StyledBasicGameLogo = styled(LogoIcon)`
  width: 159px;
  height: 96px;
  padding-left: 8px;

  cursor: pointer;

  @media (max-width: 480px) {
    width: 83px;
    height: 48px;
  }
`;

const StyledExtendedGameLogo = styled(ExtendedLogoIcon)`
  width: 109px;
  height: 109px;
  padding-left: 8px;

  cursor: pointer;

  @media (max-width: 480px) {
    width: 49px;
    height: 48px;
  }
`;

function Logo() {
  const { status, gameType, handleChangeGameType } = useGame();

  function handleClick(gameType: GameType) {
    if (status !== GAME_STATUS.NOT_STARTED) {
      return;
    }
    handleChangeGameType(gameType);
  }

  return (
    <>
      {gameType === GAME_TYPE.BASIC ? (
        <StyledBasicGameLogo onClick={() => handleClick(GAME_TYPE.EXTENDED)} />
      ) : (
        <StyledExtendedGameLogo onClick={() => handleClick(GAME_TYPE.BASIC)} />
      )}
    </>
  );
}

export default Logo;
