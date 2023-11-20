import styled from "styled-components";

import Logo from "@/components/Logo";
import Score from "@/components/Score";

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  max-width: 700px;
  margin: 0 auto;

  padding: 18px 24px;
  border-radius: 0.9375rem;
  border: 3px solid hsla(0deg, 0%, 100%, 0.2);
`;

function Header() {
  return (
    <Wrapper>
      <Logo />
      <Score />
    </Wrapper>
  );
}

export default Header;
