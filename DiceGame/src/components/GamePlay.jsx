import { styled } from 'styled-components';
import NumberSelector from './NumberSelector';
import TotalScore from './TotalScore';
import RollDice from './RollDice';
import { useState } from 'react';
import { Button, OutlineButton } from '../styled/Button';
import Rules from './Rules';

const GamePlay = () => {
  const [selectedNumber, setSelectedNumber] = useState();
  const [currentDice, setCurrentDice] = useState(1);
  const [score, setScore] = useState(0);
  const [error, setError] = useState('');
  const [showRules, setShowRules] = useState(false);

  const generateRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
  };
  const roleDice = () => {
    if (!selectedNumber) {
      setError('You have not selected any number');
      return;
    }
    const randomNumber = generateRandomNumber(1, 7);
    setCurrentDice(randomNumber);
    if (selectedNumber === randomNumber) {
      setScore((prev) => prev + randomNumber);
    } else {
      setScore((prev) => prev - 2);
    }
    setSelectedNumber(undefined);
  };

  const resetScore = () => {
    setScore(0);
  };

  return (
    <MainContainer>
      <div className="top_section">
        <TotalScore score={score} />
        <NumberSelector
          selectedNumber={selectedNumber}
          setSelectedNumber={setSelectedNumber}
          setError={setError}
          error={error}
        />
      </div>
      <RollDice
        setCurrentDice={setCurrentDice}
        currentDice={currentDice}
        roleDice={roleDice}
      />
      <div className="btns">
        <OutlineButton onClick={resetScore}>Reset</OutlineButton>
        <Button onClick={()=>setShowRules(!showRules)}> {showRules ? 'Hide' : 'Show'} Show Rules</Button>
      </div>
      {showRules && <Rules />}
    </MainContainer>
  );
};

export default GamePlay;

const MainContainer = styled.main`
  padding-top: 17px;
  .top_section {
    display: flex;
    justify-content: space-between;
    align-items: end;
  }
  .btns {
    margin-top: 40px;
    gap: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
  }
`;
