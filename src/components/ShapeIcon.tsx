import styled, { css } from "styled-components";

import RockIcon from "@/assets/icon-rock.svg?react";
import PaperIcon from "@/assets/icon-paper.svg?react";
import ScissorsIcon from "@/assets/icon-scissors.svg?react";

import { ShapeSize, ShapeType } from "@/types/shape";
import { SHAPE_PAPER, SHAPE_ROCK, SHAPE_SCISSORS } from "@/const/shape";

const shapeSize = {
  small: {
    width: "130px",
    height: "133px",
  },
  medium: {
    width: "198px",
    height: "203px",
  },
  large: {
    width: "292px",
    height: "300px",
  },
};

const iconStyles = (size: ShapeSize) => {
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

const StyledRockIcon = styled(RockIcon).attrs<{ $size: ShapeSize }>(
  (props) => ({
    $size: props.$size || "medium",
  })
)`
  ${(props) => iconStyles(props.$size)}
`;

const StyledPaperIcon = styled(PaperIcon).attrs<{ $size: ShapeSize }>(
  (props) => ({
    $size: props.$size || "medium",
  })
)`
  ${(props) => iconStyles(props.$size)}
`;

const StyledScissorsIcon = styled(ScissorsIcon).attrs<{ $size: ShapeSize }>(
  (props) => ({
    $size: props.$size || "medium",
  })
)`
  ${(props) => iconStyles(props.$size)}
`;

type ShapeIconProps = {
  type: ShapeType;
  size: ShapeSize;
};

function ShapeIcon({ type, size }: ShapeIconProps) {
  switch (type) {
    case SHAPE_ROCK: {
      return <StyledRockIcon $size={size} />;
    }
    case SHAPE_PAPER: {
      return <StyledPaperIcon $size={size} />;
    }
    case SHAPE_SCISSORS: {
      return <StyledScissorsIcon $size={size} />;
    }
    default: {
      return <StyledRockIcon $size={size} />;
    }
  }
}

export default ShapeIcon;
