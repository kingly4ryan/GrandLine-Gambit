// Footer.js

import React from 'react';
import styled from 'styled-components';
import onePieceFooterImg from './images/one-piece-footer.jpeg';

const FooterContainer = styled.div`
  width: 100%;
  height: 100px;
  background-image: url(${onePieceFooterImg});
  background-size: cover;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const FooterText = styled.p`
  color: white;
  font-size: 14px;
  text-align: center;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterText>© 2024 One Piece Roulette. All rights reserved.</FooterText>
    </FooterContainer>
  );
};

export default Footer;
