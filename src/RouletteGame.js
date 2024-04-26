// RouletteGame.js

import React from 'react';
import styled, { keyframes, css } from 'styled-components';
import rouletteWheelImage from './images/roulette-wheel-image.png';

const RouletteGameContainer = styled.div`
  width: 100%;
  max-width: 600px;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const SpinButton = styled.button`
  padding: 10px 20px;
  background-color: #4caf50;
  color: white;
  font-size: 18px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #45a049;
  }
`;

const BetButton = styled.button`
  padding: 10px 20px;
  font-size: 18px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  ${props => props.color === 'black' && css`
    background-color: ${props => props.selected ? '#000' : '#222'};
    color: white;
  `}

  ${props => props.color === 'red' && css`
    background-color: ${props => props.selected ? '#f00' : '#c00'};
    color: white;
  `}

  &:hover {
    background-color: ${props => props.selected ? 'inherit' : '#ddd'};
  }
`;

const ResultContainer = styled.div`
  margin-top: 20px;
  padding: 10px;
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const HistoryContainer = styled.div`
  margin-top: 20px;
`;

const HistoryItem = styled.div`
  margin-bottom: 5px;
`;

const RouletteWheel = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: center;
`;

const rotateWheel = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const WheelImage = styled.img`
  width: 200px;
  height: 200px;
  animation: ${props => props.spinning && css`${rotateWheel} 2s linear infinite`};
`;

const BetControls = styled.div`
  margin-top: 20px;
`;

const RouletteGame = ({
  result,
  spinning,
  betColor,
  betAmount,
  balance,
  history,
  spinWheel,
  betOnColor,
  placeBet,
  setBetAmount,
}) => {
  return (
    <RouletteGameContainer>
      <SpinButton onClick={spinWheel} disabled={spinning}>Spin</SpinButton>
      <ResultContainer>{result !== '' ? `Result: ${result}` : 'Spin the wheel!'}</ResultContainer>
      <HistoryContainer>
        <h2>History</h2>
        {history.map((item, index) => (
          <HistoryItem key={index}>{item.number}</HistoryItem>
        ))}
      </HistoryContainer>
      <RouletteWheel>
        <WheelImage
          src={rouletteWheelImage}
          alt="Roulette Wheel"
          spinning={spinning}
        />
      </RouletteWheel>
      <BetControls>
        <h2>Place Bet</h2>
        <input
          type="number"
          value={betAmount}
          onChange={e => setBetAmount(e.target.value)}
        />
        <BetButton color="black" selected={betColor === 'black'} onClick={() => betOnColor('black')}>
          Bet on Black
        </BetButton>
        <BetButton color="red" selected={betColor === 'red'} onClick={() => betOnColor('red')}>
          Bet on Red
        </BetButton>
        <button onClick={placeBet}>Place Bet</button>
        <p>Balance: {balance}</p>
      </BetControls>
    </RouletteGameContainer>
  );
};

export default RouletteGame;
