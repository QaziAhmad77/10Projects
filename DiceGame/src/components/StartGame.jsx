import styled from 'styled-components';
import { dices } from '../assets';
import { Button } from '../styled/Button';

const StartGame = ({ toggle }) => {
  return (
    <Container>
      <div>
        <img src={dices} alt="" />
      </div>
      <div className="content">
        <h1>Dice Game</h1>
        <Button onClick={toggle}>Play Now</Button>
      </div>
    </Container>
  );
};

export default StartGame;
const Container = styled.div`
  height: 100vh;
  max-width: 1180px;
  display: flex;
  margin: 0 auto;
  align-items: center;

  .content {
    // we can use SASS also
    h1 {
      font-size: 96px;
      white-space: nowrap;
    }
  }
`;


