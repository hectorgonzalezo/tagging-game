import React from 'react';
import moveIcon from '../assets/moveIcon.svg';
import styled from 'styled-components';

const Icon = styled.img`
  height: 48px;
  width: 48px;
  animation: move 3s;

  @keyframes move {
    0%{
      transform: translateX(0%);
    }
    20%{
      transform: translateX(50%);
    }
    40%{
      transform: translateX(-50%);
    }
    50%{
      transform: translateX(0%);
    }
    60%{
      transform: translateY(-50%);
    }
    80%{
      transform: translateY(50%);
    }
    100%{
      transform: translateY(0%);
    }
  }
`;

const Modal = styled.div`
  animation: fadeOut 4s;
  opacity: 0;
  pointer-events: none;
  
  @keyframes fadeOut {
    0%{
      opacity: 1;
    }
    80%{
      opacity: 1;
    }
    100%{
      opacity: 0;
    }
  }

`;

function ScrollModal() {
  return (
    <Modal id="scroll-modal-outer">
      <div id="scroll-modal-inner">
        <Icon src={moveIcon} alt="" />
        <h1>Scroll around to view the whole image</h1>
      </div>
    </Modal>
  );
}

export default ScrollModal;
