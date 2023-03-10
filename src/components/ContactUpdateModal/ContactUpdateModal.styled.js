import styled from 'styled-components';

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.9);
  z-index: 1200;
  animation: puff-in-left 0.5s cubic-bezier(0.47, 0, 0.745, 0.715) both;
  @keyframes puff-in-left {
    0% {
      -webkit-transform: scale(2);
      transform: scale(2);
      -webkit-transform-origin: 0% 50%;
      transform-origin: 0% 50%;
      -webkit-filter: blur(4px);
      filter: blur(4px);
      opacity: 0;
    }
    100% {
      -webkit-transform: scale(1);
      transform: scale(1);
      -webkit-transform-origin: 0% 50%;
      transform-origin: 0% 50%;
      -webkit-filter: blur(0px);
      filter: blur(0px);
      opacity: 1;
    }
  }
`;

export const ModalBox = styled.div`
  max-width: calc(100vw);
  max-height: calc(100vh);
`;
