import styled, { css } from "styled-components";

import RockIcon from "@/assets/icon-rock.svg?react";
import PaperIcon from "@/assets/icon-paper.svg?react";
import ScissorsIcon from "@/assets/icon-scissors.svg?react";
import LizardIcon from "@/assets/icon-lizard.svg?react";
import SpockIcon from "@/assets/icon-spock.svg?react";

import { ShapeSize, ShapeType, ExtendedShapeType } from "@/types/shape";
import {
  SHAPE_PAPER,
  SHAPE_ROCK,
  SHAPE_SCISSORS,
  SHAPE_LIZARD,
  SHAPE_SPOCK,
  SHAPE_SIZE,
  SHAPE_EXTENDED_SIZE,
} from "@/const/shape";

const iconStyles = (size: ShapeSize, isExtended: boolean) => {
  const shapeSize = isExtended ? SHAPE_EXTENDED_SIZE : SHAPE_SIZE;
  return css`
    border-radius: 50%;

    width: ${shapeSize[size].width};
    height: ${shapeSize[size].height};

    @media (max-width: 480px) {
      width: ${shapeSize["small"].width};
      height: ${shapeSize["small"].height};
    }
  `;
};

const StyledRockIcon = styled(RockIcon).attrs<{
  $size: ShapeSize;
  $isExtended: boolean;
}>((props) => ({
  $size: props.$size || "medium",
}))`
  ${(props) => iconStyles(props.$size, props.$isExtended)}
`;

const StyledPaperIcon = styled(PaperIcon).attrs<{
  $size: ShapeSize;
  $isExtended: boolean;
}>((props) => ({
  $size: props.$size || "medium",
}))`
  ${(props) => iconStyles(props.$size, props.$isExtended)}
`;

const StyledScissorsIcon = styled(ScissorsIcon).attrs<{
  $size: ShapeSize;
  $isExtended: boolean;
}>((props) => ({
  $size: props.$size || "medium",
}))`
  ${(props) => iconStyles(props.$size, props.$isExtended)}
`;

const StyledLizardIcon = styled(LizardIcon).attrs<{
  $size: ShapeSize;
  $isExtended: boolean;
}>((props) => ({
  $size: props.$size || "medium",
}))`
  ${(props) => iconStyles(props.$size, props.$isExtended)}
`;

const StyledSpockIcon = styled(SpockIcon).attrs<{
  $size: ShapeSize;
  $isExtended: boolean;
}>((props) => ({
  $size: props.$size || "medium",
}))`
  ${(props) => iconStyles(props.$size, props.$isExtended)}
`;

type ShapeIconProps = {
  type: ShapeType | ExtendedShapeType;
  size: ShapeSize;
  isExtended?: boolean;
};

function ShapeIcon({ type, size, isExtended = false }: ShapeIconProps) {
  switch (type) {
    case SHAPE_ROCK: {
      return <StyledRockIcon $size={size} $isExtended={isExtended} />;
    }
    case SHAPE_PAPER: {
      return <StyledPaperIcon $size={size} $isExtended={isExtended} />;
    }
    case SHAPE_SCISSORS: {
      return <StyledScissorsIcon $size={size} $isExtended={isExtended} />;
    }
    case SHAPE_LIZARD: {
      return <StyledLizardIcon $size={size} $isExtended={isExtended} />;
    }
    case SHAPE_SPOCK: {
      return <StyledSpockIcon $size={size} $isExtended={isExtended} />;
    }
    default: {
      return <StyledRockIcon $size={size} $isExtended={isExtended} />;
    }
  }
}

export default ShapeIcon;
