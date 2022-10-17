import React from 'react';
import styled from 'styled-components';
import Counter from './Counter';

const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  color: white;
  position: sticky;
  top: 0px;
  background-color: var(--prussian-blue);
  height: 70px;
`;

const Title = styled.h1`
  position: sticky;
  left: 10px;
`;

function Header() {
  return (
    <StyledHeader>
      <Title>Hidden picture game</Title>
      <Counter />
    </StyledHeader>
  );
}

export default Header;
