// Header.js

import React from 'react';
import styled from 'styled-components';
import onePieceHeaderImg from './images/one-piece-header.jpeg';

const HeaderContainer = styled.div`
  width: 100%;
  height: 100px;
  background-image: url(${onePieceHeaderImg});
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const HeaderText = styled.h1`
  color: white;
  font-size: 24px;
`;

const Header = () => {
  return (
    <HeaderContainer>
      <HeaderText>One Piece Roulette Game</HeaderText>
    </HeaderContainer>
  );
};

export default Header;
