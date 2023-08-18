import { useState } from 'react';
import styled from 'styled-components';

const NumberSelector = ({
  setSelectedNumber,
  selectedNumber,
  error,
  setError,
}) => {
  const numbersArr = [1, 2, 3, 4, 5, 6];

  const numberSelectorHandler = (number) => {
    setSelectedNumber(number);
    setError('');
  };
  return (
    <NumberSelectorContainer>
      <p className="error">{error}</p>
      <div className="flex">
        {numbersArr.map((number, i) => {
          return (
            <Box
              isSelected={number === selectedNumber}
              onClick={() => numberSelectorHandler(number)}
              key={i}
            >
              {number}
            </Box>
          );
        })}
      </div>
      <p>Select Number</p>
    </NumberSelectorContainer>
  );
};

export default NumberSelector;

const NumberSelectorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;
  .flex {
    display: flex;
    gap: 24px;
  }
  p {
    font-size: 24px;
    font-weight: 700px;
  }
  .error {
    color: red;
  }
`;

const Box = styled.div`
  height: 72px;
  width: 72px;
  border: 1px solid black;
  display: grid;
  place-items: center;
  font-size: 24px;
  font-weight: 700;
  cursor: pointer;
  background-color: ${(props) => (props.isSelected ? 'black' : 'white')};
  color: ${(props) => (props.isSelected ? 'white' : 'black')};
`;
