import styled from "styled-components";

import LogoIcon from "@/assets/logo.svg?react";

const StyledLogo = styled(LogoIcon)`
  width: 159px;
  height: 96px;
  padding-left: 8px;

  @media (max-width: 480px) {
    width: 83px;
    height: 48px;
  }
`;

function Logo() {
  return <StyledLogo />;
}

export default Logo;
