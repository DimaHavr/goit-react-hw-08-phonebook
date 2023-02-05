import styled from 'styled-components';

export const ContactsContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

export const SubTitle = styled.h2`
  font-weight: bold;
  font-size: 25px;
  text-transform: uppercase;
  text-align: left;
  color: #fff;
`;

export const GlitchWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  background-color: rgba(33, 33, 33, 0);
`;

export const Glitch = styled.h1`
  position: relative;
  font-size: 56px;
  font-weight: 700;
  line-height: 1.2;
  color: #fff;
  letter-spacing: 5px;
  text-transform: uppercase;
  z-index: 1;

  &:before,
  &:after {
    display: block;
    content: attr(data-glitch);
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0.8;
    animation: glitch-color 3s ease-in-out both infinite;
  }

  &:before {
    color: #000000;
    z-index: -1;
  }

  &:after {
    color: darkslategrey;
    z-index: -2;
  }
  @media screen and (max-width: 767px) {
    font-size: 36px;
  }
`;

export const Keyframes = styled.style`
  @keyframes glitch-color {
    0% {
      transform: translate(0);
    }

    20% {
      transform: translate(-3px, 3px);
    }

    40% {
      transform: translate(-3px, -3px);
    }

    60% {
      transform: translate(3px, 3px);
    }

    80% {
      transform: translate(3px, -3px);
    }

    to {
      transform: translate(0);
    }
  }
`;
