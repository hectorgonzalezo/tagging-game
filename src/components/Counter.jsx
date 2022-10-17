import React from 'react';
import { string } from 'prop-types';
import styled from 'styled-components';

const Display = styled.h1`
 position: sticky;
 left: 200px;
`;

function Counter() {
  return (
    <Display>0:00:00</Display>
  );
}

export default Counter;
