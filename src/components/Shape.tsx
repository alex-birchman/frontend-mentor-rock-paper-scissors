import styled from "styled-components";

import ShapeIcon from "@/components/ShapeIcon";
import { ShapeType, ShapeSize } from "@/types/shape";

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

const StyledWrapper = styled.div`
  width: fit-content;
  height: fit-content;

  position: relative;
  cursor: pointer;
`;

const StyledWrapperHover = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;

  width: 100%;
  height: 100%;
  border-radius: 50%;

  opacity: 0;
  scale: 1.2;
  background-color: hsla(0, 0%, 100%, 0.05);

  transition: opacity 0.2s ease-in-out;
  transform: translate(-42%, -42%);

  &:hover {
    scale: 1.2;
    opacity: 1;
  }
`;

type ShapeProps = {
  type?: ShapeType;
  size?: ShapeSize;
};

function Shape({ type, size }: ShapeProps) {
  const selectedSize = size || "medium";

  if (!type) {
    return <StyledUnspecifiedShape />;
  }

  return (
    <StyledWrapper>
      <ShapeIcon type={type} size={selectedSize} />
      <StyledWrapperHover />
    </StyledWrapper>
  );
}

export default Shape;
