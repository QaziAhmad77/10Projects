import styled from 'styled-components';
import { dice_1, dice_2, dice_3, dice_4, dice_5, dice_6 } from '../assets';

const RollDice = ({setCurrentDice,currentDice,roleDice}) => {
  const diceImages = [dice_1, dice_2, dice_3, dice_4, dice_5, dice_6];

  return (
    <DiceContainer>
      <div className="dice" onClick={roleDice}>
        {/* <img src={`/Images/dice/${currentDice}.png`} alt="" /> */}
        <img src={diceImages[currentDice - 1]} alt={`Dice ${currentDice}`} />
      </div>
      <p>Click on Dice to roll</p>
    </DiceContainer>
  );
};

export default RollDice;

const DiceContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 48px;
  .dice {
    cursor: pointer;
  }
  p {
    font-size: 24px;
  }
`;
