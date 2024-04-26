// // App.js

// import React, { useState } from 'react';
// import styled, { keyframes, css } from 'styled-components';

// // Import One Piece-themed images
// import pirateFlagImg from './images/pirate-flag.png';
// import onePieceLogoImg from './images/one-piece-logo.png';
// // Import sound effects
// import spinSound from './sounds/spin.mp3';
// import winSound from './sounds/win.mp3';
// // Import the roulette wheel image
// import rouletteWheelImg from './images/roulette-wheel-image.png';
// // Import pirate character images
// import luffyImg from './images/luffy.png';
// import zoroImg from './images/zoro.png';
// import namiImg from './images/nami.png';

// // Define keyframes animation for wheel rotation
// const spinAnimation = keyframes`
//   from {
//     transform: rotate(0deg);
//   }
//   to {
//     transform: rotate(360deg);
//   }
// `;

// const Container = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   padding: 20px;
// `;

// const RouletteTable = styled.div`
//   width: 80%;
//   height: 600px;
//   background-color: #2c3e50;
//   border-radius: 10px;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: space-around;
//   padding: 20px;
// `;

// const PirateFlag = styled.img`
//   width: 120px;
//   height: 120px;
// `;

// const PirateLogo = styled.img`
//   width: 200px;
//   height: 200px;
// `;

// // Styled component for the roulette wheel image
// const RouletteWheel = styled.img`
//   width: 400px;
//   height: 400px;
//   animation: ${({ spinning }) => spinning && css`${spinAnimation} 3s ease-in-out forwards`};
// `;

// const BetArea = styled.div`
//   display: flex;
//   justify-content: space-around;
//   align-items: center;
//   width: 80%;
//   margin-bottom: 20px;
// `;

// const BetButton = styled.button`
//   padding: 12px 24px;
//   background-color: ${({ active }) => (active ? '#2ecc71' : '#007bff')};
//   color: white;
//   border: none;
//   border-radius: 5px;
//   cursor: pointer;
//   transition: background-color 0.3s ease;
//   &:hover {
//     background-color: ${({ active }) => (active ? '#27ae60' : '#0056b3')};
//   }
// `;

// const BetInput = styled.input`
//   padding: 10px;
//   border: 1px solid #ccc;
//   border-radius: 5px;
//   width: 80px;
// `;

// const Result = styled.div`
//   font-size: 24px;
//   margin-bottom: 20px;
// `;

// const Balance = styled.div`
//   font-size: 20px;
//   margin-bottom: 20px;
// `;

// const HistoryPanel = styled.div`
//   width: 80%;
//   max-height: 200px;
//   overflow-y: auto;
//   border: 1px solid #ddd;
//   border-radius: 5px;
//   padding: 10px;
//   margin-bottom: 20px;
// `;

// const HistoryItem = styled.div`
//   margin-bottom: 5px;
// `;

// const PirateCharacter = styled.img`
//   width: 80px;
//   height: 80px;
// `;

// const App = () => {
//   const [result, setResult] = useState('');
//   const [spinning, setSpinning] = useState(false);
//   const [history, setHistory] = useState([]);
//   const [betColor, setBetColor] = useState('black');
//   const [betAmount, setBetAmount] = useState(0);
//   const [balance, setBalance] = useState(1000);

//   const spinWheel = () => {
//     // Generate a random number for the result (for demo purpose)
//     const randomNumber = Math.floor(Math.random() * 37);
//     setResult(`Winning number: ${randomNumber}`);
//     // Calculate payout based on bet
//     const payout = calculatePayout(randomNumber);
//     // Play spin sound effect
//     const spinAudio = new Audio(spinSound);
//     spinAudio.play();
//     // Start spinning animation
//     setSpinning(true);
//     setTimeout(() => {
//       setSpinning(false);
//       // Play win sound effect if won
//       if (payout > 0) {
//         const winAudio = new Audio(winSound);
//         winAudio.play();
//       }
//       // Update history
//       setHistory(prevHistory => [...prevHistory, { number: randomNumber, payout }]);
//       // Update balance based on payout
//       setBalance(prevBalance => prevBalance + payout);
//     }, 3000); // Wait for 3 seconds for spinning animation
//   };

//   const calculatePayout = randomNumber => {
//     // Implement payout calculation based on bet
//     // For simplicity, let's assume a 35:1 payout for betting on a single number
//     // and 1:1 payout for betting on black/red
//     if (randomNumber % 2 === 0 && betColor === 'black') {
//       return betAmount * 2;
//     } else if (randomNumber % 2 !== 0 && betColor === 'red') {
//       return betAmount * 2;
//     } else if (randomNumber === 0) {
//       return betAmount * 35;
//     }
//     return 0; // No win
//   };

//   const betOnColor = color => {
//     // Implement functionality for betting on a specific color
//     setBetColor(color);
//   };

//   const placeBet = () => {
//     // Implement functionality for placing a bet
//     if (betAmount > balance) {
//       alert('Insufficient balance');
//       return;
//     }
//     setResult(`Placed bet of ${betAmount} on ${betColor}`);
//     setBalance(prevBalance => prevBalance - betAmount);
//   };

//   return (
//     <Container>
//       <RouletteTable>
//         <PirateFlag src={pirateFlagImg} alt="Pirate Flag" />
//         <RouletteWheel src={rouletteWheelImg} spinning={spinning} alt="Roulette Wheel" />
//         <PirateLogo src={onePieceLogoImg} alt="One Piece Logo" />
//         <div style={{ display: 'flex', justifyContent: 'space-around', width: '100%' }}>
//           <PirateCharacter src={luffyImg} alt="Luffy" />
//           <PirateCharacter src={zoroImg} alt="Zoro" />
//           <PirateCharacter src={namiImg} alt="Nami" />
//         </div>
//       </RouletteTable>
//       <BetArea>
//         <BetButton onClick={() => betOnColor('black')} active={betColor === 'black'}>Bet on Black</BetButton>
//         <BetButton onClick={() => betOnColor('red')} active={betColor === 'red'}>Bet on Red</BetButton>
//         <BetInput
//           type="number"
//           value={betAmount}
//           onChange={e => setBetAmount(parseInt(e.target.value))}
//           placeholder="Amount"
//         />
//         <BetButton onClick={placeBet}>Place Bet</BetButton>
//         <BetButton onClick={spinWheel}>Spin</BetButton>
//       </BetArea>
//       <Result>{result}</Result>
//       <Balance>Balance: {balance}</Balance>
//       <HistoryPanel>
//         <h3>Recent Results</h3>
//         {history.map((item, index) => (
//           <HistoryItem key={index}>Result {index + 1}: Number {item.number}, Payout: {item.payout}</HistoryItem>
//         ))}
//       </HistoryPanel>
//     </Container>
//   );
// };

// export default App;


// App.js

import React, { useState } from 'react';
import styled from 'styled-components';
import Header from './Header';
import Footer from './Footer';
import RouletteGame from './RouletteGame'; // Import RouletteGame component

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

const App = () => {
  const [result, setResult] = useState('');
  const [spinning, setSpinning] = useState(false);
  const [history, setHistory] = useState([]);
  const [betColor, setBetColor] = useState('black');
  const [betAmount, setBetAmount] = useState(0);
  const [balance, setBalance] = useState(1000);

  const spinWheel = () => {
    // Generate a random number for the result (for demo purpose)
    const randomNumber = Math.floor(Math.random() * 37);
    setResult(`Winning number: ${randomNumber}`);
    // Calculate payout based on bet
    const payout = calculatePayout(randomNumber);
    // Start spinning animation
    setSpinning(true);
    setTimeout(() => {
      setSpinning(false);
      // Update history
      setHistory(prevHistory => [...prevHistory, { number: randomNumber, payout }]);
      // Update balance based on payout
      setBalance(prevBalance => prevBalance + payout);
    }, 3000); // Wait for 3 seconds for spinning animation
  };

  const calculatePayout = randomNumber => {
    // Implement payout calculation based on bet
    // For simplicity, let's assume a 35:1 payout for betting on a single number
    // and 1:1 payout for betting on black/red
    if (randomNumber % 2 === 0 && betColor === 'black') {
      return betAmount * 2;
    } else if (randomNumber % 2 !== 0 && betColor === 'red') {
      return betAmount * 2;
    } else if (randomNumber === 0) {
      return betAmount * 35;
    }
    return 0; // No win
  };

  const betOnColor = color => {
    // Implement functionality for betting on a specific color
    setBetColor(color);
  };

  const placeBet = () => {
    // Implement functionality for placing a bet
    if (betAmount > balance) {
      alert('Insufficient balance');
      return;
    }
    setResult(`Placed bet of ${betAmount} on ${betColor}`);
    setBalance(prevBalance => prevBalance - betAmount);
  };

  return (
    <Container>
      <Header />
      <RouletteGame
        result={result}
        spinning={spinning}
        betColor={betColor}
        betAmount={betAmount}
        balance={balance}
        history={history}
        spinWheel={spinWheel}
        betOnColor={betOnColor}
        placeBet={placeBet}
        setBetAmount={setBetAmount}
      />
      <Footer />
    </Container>
  );
};

export default App;
