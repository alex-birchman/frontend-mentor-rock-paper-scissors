import React from "react";
import styled from "styled-components";
import { motion, useAnimationControls } from "framer-motion";

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
  const controls = useAnimationControls();

  function handleClick(gameType: GameType) {
    if (status !== GAME_STATUS.NOT_STARTED) {
      return;
    }
    handleChangeGameType(gameType);
    controls.stop();
  }

  React.useEffect(() => {
    controls.start({
      rotateZ: [0, 6, 0, -6, 0, 6, 0, -6, 0, 6, 0, -6, 0],
    });
  }, [controls]);

  return (
    <motion.div
      transition={{
        repeat: 2,
        repeatDelay: 4,
        ease: "easeOut",
        duration: 0.6,
        delay: 1.5,
      }}
      animate={controls}
    >
      {gameType === GAME_TYPE.BASIC ? (
        <StyledBasicGameLogo onClick={() => handleClick(GAME_TYPE.EXTENDED)} />
      ) : (
        <StyledExtendedGameLogo onClick={() => handleClick(GAME_TYPE.BASIC)} />
      )}
    </motion.div>
  );
}

export default Logo;
