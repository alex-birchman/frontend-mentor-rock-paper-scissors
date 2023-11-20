import React from "react";
import styled from "styled-components";

import Modal from "@/components/Modal";
import RulesImage from "@/assets/image-rules.svg?react";

const StyledWrapper = styled.div`
  position: absolute;
  right: 32px;
  bottom: 32px;

  display: flex;
  justify-content: center;

  @media (max-width: 480px) {
    position: unset;
    margin: auto 0 50px 0;
  }
`;

const StyledButton = styled.button`
  width: 128px;
  padding: 11px;
  padding-bottom: 10px;

  border-radius: 0.5rem;
  border: 1px solid hsl(100, 100%, 100%);
  background: transparent;

  color: hsl(100, 100%, 100%);
  text-align: center;
  font-size: 1rem;
  font-weight: 600;
  letter-spacing: 0.15625rem;

  cursor: pointer;

  &:hover {
    color: hsl(228, 25%, 31%);
    background: linear-gradient(0deg, #f3f3f3 0%, #fff 100%);
  }
`;

const StyledRulesImage = styled(RulesImage)`
  margin-top: 48px;
  padding: 0 12px;

  @media (max-width: 480px) {
    margin: auto;
    margin-top: 115px;
  }
`;

function RulesButton() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <StyledWrapper>
      <StyledButton onClick={() => setIsOpen(!isOpen)}>RULES</StyledButton>
      <Modal
        isOpen={isOpen}
        onDismiss={() => setIsOpen(!isOpen)}
        title="RULES"
        content={<StyledRulesImage />}
      />
    </StyledWrapper>
  );
}

export default RulesButton;
