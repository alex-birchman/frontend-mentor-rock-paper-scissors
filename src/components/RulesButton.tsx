import React from "react";
import styled from "styled-components";

import Modal from "@/components/Modal";
import RulesImage from "@/assets/image-rules.svg?react";

const StyledButton = styled.button`
  position: absolute;
  right: 32px;
  bottom: 32px;

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

  @media (max-width: 480px) {
    left: 0;
    right: 0;
    bottom: 56px;
    margin: 0 auto;
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
    <>
      <StyledButton onClick={() => setIsOpen(!isOpen)}>RULES</StyledButton>
      <Modal
        isOpen={isOpen}
        onDismiss={() => setIsOpen(!isOpen)}
        title="RULES"
        content={<StyledRulesImage />}
      />
    </>
  );
}

export default RulesButton;
