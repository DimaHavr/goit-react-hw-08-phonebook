import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { CgCopyright } from 'react-icons/cg';

export const CopyIcon = styled(CgCopyright)`
  width: 35px;
  height: 35px;
  color: #fff;
  margin-right: 5px;
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
  font-size: 76px;
  font-weight: 700;
  line-height: 1.2;
  color: #fff;
  letter-spacing: 5px;
  z-index: 1;

  &:before,
  &:after {
    display: block;
    content: attr(data-glitch);
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0.8;
    animation: glitch-color 2s ease-in-out both infinite;
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
    font-size: 46px;
  }
`;

export const Keyframes = styled.style`
  @keyframes glitch-color {
    0% {
      transform: translate(0);
    }

    20% {
      transform: translate(-5px, 5px);
    }

    40% {
      transform: translate(-5px, -5px);
    }

    60% {
      transform: translate(5px, 5px);
    }

    80% {
      transform: translate(5px, -5px);
    }

    to {
      transform: translate(0);
    }
  }
`;

export const LinkItem = styled(Link)`
  padding: 8px 16px;
  border-radius: 4px;
  text-transform: uppercase;
  text-decoration: none;
  color: white;
  font-weight: 500;
  font-size: 26px;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1),
    color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover,
  &:focus {
    transform: scale(1.05);
    color: orangered;
  }

  &.active {
    color: white;
    background: linear-gradient(#1b1b1b, #111);
    border: 1px solid #000;
    box-shadow: inset 0 0 0 1px #272727;
    transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
    &:hover,
    &:focus {
      transform: scale(1.05);
    }
  }
`;

export const Text = styled.p`
  max-width: 600px;
  font-weight: bold;
  font-size: 15px;
  padding: 10px;
  text-align: center;
  color: #e0e0e0;
  letter-spacing: 1px;
`;

export const TextLink = styled.a`
  font-weight: bold;
  font-size: 15px;
  text-align: center;
  color: #e0e0e0;
  letter-spacing: 1px;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1),
    color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover,
  &:focus {
    transform: scale(1.05);
    color: orangered;
  }
`;
