import styled from "styled-components";

import LogoIcon from "@/assets/logo.svg?react";
import ExtendedLogoIcon from "@/assets/logo-extended.svg?react";
import { GAME_TYPE } from "@/const/game";
import { useGame } from "@/hooks/useGame";

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
  const { gameType, handleChangeGameType } = useGame();

  return (
    <>
      {gameType === GAME_TYPE.BASIC ? (
        <StyledBasicGameLogo
          onClick={() => handleChangeGameType(GAME_TYPE.EXTENDED)}
        />
      ) : (
        <StyledExtendedGameLogo
          onClick={() => handleChangeGameType(GAME_TYPE.BASIC)}
        />
      )}
    </>
  );
}

export default Logo;
