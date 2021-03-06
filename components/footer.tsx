import styled from '@emotion/styled';

const StyledFooter = styled.footer`
  text-align: center;
  margin-top: 40px;
  font-size: 12px;
  padding: 20px 0;
  border-top: 1px solid #ccc;
  background-color: #eee;
  a {
    font-weight: bold;
  }
`;

export const Footer = () => {
  return (
    <StyledFooter>
      <p>
        Designed on Youtube - durante{' '}
        <a target="_blank" href="https://www.hackability.dev">
          Hackability.dev
        </a>
      </p>
      <p>Co-design, digital fabrication and technology for disability</p>
      <p>@Hackability 2019 - {new Date().getFullYear()}</p>
    </StyledFooter>
  );
};
