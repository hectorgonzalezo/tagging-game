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
  & > div{
    position: sticky;
    left: 2%;
    display: flex;
    width: 100vw;
    justify-content: space-around;
    align-items: center
  }
`;

const Title = styled.h1`
  font-size: clamp(1.5rem, 4vw, 2.5rem);
`;

function Header() {
  return (
    <StyledHeader>
      <div>
        <Title>Hidden picture game</Title>
        <Counter />
      </div>
    </StyledHeader>
  );
}

export default Header;
