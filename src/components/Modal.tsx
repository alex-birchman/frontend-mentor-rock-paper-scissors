import React from "react";
import styled from "styled-components";
import * as Dialog from "@radix-ui/react-dialog";

import CloseIcon from "@/assets/icon-close.svg?react";

const StyledOverlay = styled(Dialog.Overlay)`
  position: fixed;
  inset: 0;
  display: grid;
  place-items: center;
  background: hsla(0, 0%, 0%, 0.5);
`;

const StyledContent = styled(Dialog.Content)`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  padding: 32px;

  border-radius: 0.5rem;
  background: hsl(0, 0%, 100%);
  box-shadow: 0px 3px 3px 0px hsla(0, 0%, 0%, 0.2);

  @media (max-width: 480px) {
    inset: 0;
    transform: none;
    border-radius: 0;

    padding: 35px;
  }
`;

const StyledHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 480px) {
    justify-content: center;
  }
`;

const StyledTitle = styled(Dialog.Title)`
  font-size: 2rem;
  font-weight: 700;
  line-height: 2rem;
  color: hsl(228, 25%, 31%);
`;

const StyledDescription = styled.div`
  margin: auto;
`;

const StyledCloseButton = styled(Dialog.Close)`
  width: fit-content;
  height: fit-content;

  padding: 0;
  border: none;
  background: transparent;
  cursor: pointer;

  @media (max-width: 480px) {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 65px;
    margin: 0 auto;
  }
`;

type ModalProps = {
  isOpen: boolean;
  onDismiss: () => void;
  title: string;
  content: React.ReactNode;
};

function Modal({ isOpen, onDismiss, title, content }: ModalProps) {
  return (
    <Dialog.Root open={isOpen} onOpenChange={onDismiss}>
      <Dialog.Portal>
        <StyledOverlay />
        <StyledContent>
          <StyledHeader>
            <StyledTitle>{title}</StyledTitle>
            <StyledCloseButton>
              <CloseIcon />
            </StyledCloseButton>
          </StyledHeader>
          <StyledDescription>{content}</StyledDescription>
        </StyledContent>
      </Dialog.Portal>
    </Dialog.Root>
  );
}

export default Modal;
