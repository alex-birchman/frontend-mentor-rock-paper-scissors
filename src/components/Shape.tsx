import styled from "styled-components";
import { motion } from "framer-motion";

import ShapeIcon from "@/components/ShapeIcon";
import { ShapeType, ShapeSize, ExtendedShapeType } from "@/types/shape";
import { SPRING_ANIMATION } from "@/const/animation";

const StyledUnspecifiedShape = styled.div`
  width: 225px;
  height: 225px;
  border-radius: 50%;
  background-color: hsla(0, 0%, 0%, 0.1);

  @media (max-width: 480px) {
    width: 110px;
    height: 110px;
  }
`;

const StyledWrapper = styled.div<{ $isNotInteractive?: boolean }>`
  width: fit-content;
  height: fit-content;

  position: relative;
  cursor: ${(props) =>
    (props.$isNotInteractive ? "default" : "pointer") || "pointer"};
`;

const StyledWrapperHover = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;

  width: 100%;
  height: 100%;

  opacity: 0;
  scale: 1.2;
  background-color: hsla(0, 0%, 100%, 0.05);
  border-radius: 50%;

  transition: opacity 0.2s ease-in-out;
  transform: translate(-42%, -42%);

  &:hover {
    scale: 1.2;
    opacity: 1;
  }
`;

const StyledBacklightWave = styled.div<{
  $scale: number;
  $transitionX: number;
  $transitionY: number;
}>`
  position: absolute;
  top: 50%;
  left: 50%;

  width: 100%;
  height: 100%;

  background-color: hsla(0, 0%, 100%, 0.02);
  border-radius: 50%;

  scale: ${(props) => props.$scale};
  transform: ${(props) =>
    `translate(${props.$transitionX}%, ${props.$transitionY}%)`};
  z-index: -1;
`;

type ShapeProps = {
  type?: ShapeType | ExtendedShapeType;
  size?: ShapeSize;
  layoutId?: string;
  isNotInteracive?: boolean;
  showBacklightWave?: boolean;
  isExtendedGame?: boolean;
};

function Shape(
  {
    type,
    size,
    layoutId,
    isNotInteracive,
    showBacklightWave,
    isExtendedGame,
  }: ShapeProps = {
    showBacklightWave: false,
    isExtendedGame: false,
  }
) {
  const selectedSize = size || "medium";

  if (!type) {
    return (
      <StyledUnspecifiedShape
        layout
        as={motion.div}
        transition={{
          ease: "easeInOut",
          repeat: Infinity,
          duration: 1.5,
        }}
        animate={{
          scale: [1, 1.3, 1],
        }}
      />
    );
  }

  return (
    <StyledWrapper
      layout
      as={motion.div}
      initial={{ scale: 0.5 }}
      animate={{ scale: 1 }}
      exit={{ scale: 1.5 }}
      transition={SPRING_ANIMATION}
      layoutId={layoutId}
      $isNotInteractive={isNotInteracive}
    >
      <ShapeIcon type={type} size={selectedSize} isExtended={isExtendedGame} />
      {!isNotInteracive && <StyledWrapperHover />}
      {showBacklightWave && (
        <>
          <StyledBacklightWave
            as={motion.div}
            $scale={1.3}
            $transitionX={-39}
            $transitionY={-40}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              delay: 0.2,
            }}
          />
          <StyledBacklightWave
            as={motion.div}
            $scale={1.6}
            $transitionX={-32}
            $transitionY={-33}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              delay: 0.3,
            }}
          />
          <StyledBacklightWave
            as={motion.div}
            $scale={2}
            $transitionX={-25}
            $transitionY={-26}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              delay: 0.4,
            }}
          />
        </>
      )}
    </StyledWrapper>
  );
}

export default Shape;
