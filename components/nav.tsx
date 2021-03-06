import styled from '@emotion/styled';
import Link from 'next/link';

const StyledNav = styled.nav`
  height: 60px;
  padding: 20px 10px;

  a {
    padding: 10px;
    border-radius: 5px;
    box-sizing: border-box;
    border: 1px solid rgba(0, 0, 0, 0);
    &:hover {
      border: 1px solid #ccc;
      background-color: #eee;
    }
  }
`;

export const Nav = () => {
  return (
    <StyledNav>
      <Link href="/"> 🚀 Space Hackability 🧑‍💻</Link>
    </StyledNav>
  );
};
