// ParentComponent.js

import React, { useState } from 'react';
import RouletteGame from './RouletteGame';

const ParentComponent = () => {
  // State for bet color, bet amount, balance, and betting history
  const [betColor, setBetColor] = useState('');
  const [betAmount, setBetAmount] = useState(0);
  const [balance, setBalance] = useState(1000); // Initial balance
  const [history, setHistory] = useState([]);

  // Function to handle betting on black/red
  const betOnColor = (color) => {
    setBetColor(color);
  };

  // Function to handle placing bet
  const placeBet = () => {
    // Place bet logic goes here
    // For demonstration, deduct bet amount from balance and add to history
    setBalance(prevBalance => prevBalance - betAmount);
    setHistory([...history, { color: betColor, amount: betAmount }]);
  };

  // Function to handle spinning the wheel
  const spinWheel = () => {
    // Spin wheel logic goes here
    // For demonstration, generate a random result and update balance based on bet outcome
    const result = Math.random() < 0.5 ? 'black' : 'red'; // Random result, you can implement your own logic here
    const payout = betColor === result ? betAmount * 2 : 0; // Assuming 2x payout for correct bet
    setBalance(prevBalance => prevBalance + payout);
    setHistory([...history, { result, payout }]);
  };

  return (
    <div>
      <RouletteGame
        result={history.length > 0 ? history[history.length - 1].result : ''}
        spinning={false} // Set to true when spinning
        betColor={betColor}
        betAmount={betAmount}
        balance={balance}
        history={history}
        spinWheel={spinWheel}
        betOnColor={betOnColor}
        placeBet={placeBet}
        setBetAmount={setBetAmount}
      />
    </div>
  );
};

export default ParentComponent;
