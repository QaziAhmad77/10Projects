import styled from 'styled-components';
import { logo } from '../../public';

const Top = ({ searchFood, filterFood, selectedBtn }) => {
  const filterBtns = [
    {
      name: 'All',
      type: 'all',
    },
    {
      name: 'Breakfast',
      type: 'breakfast',
    },
    {
      name: 'Lunch',
      type: 'lunch',
    },
    {
      name: 'Dinner',
      type: 'dinner',
    },
  ];
  return (
    <>
      <TopContainer>
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="search">
          <input onChange={searchFood} type="text" placeholder="Search Food" />
        </div>
      </TopContainer>
      <FilterContainer>
        {filterBtns.map((value) => (
          <Button
            isSelected={selectedBtn === value.type}
            key={value.type}
            onClick={() => filterFood(value.type)}
          >
            {value.name}
          </Button>
        ))}
      </FilterContainer>
    </>
  );
};

export default Top;

const TopContainer = styled.section`
  height: 140px;
  display: flex;
  justify-content: space-between;
  padding: 16px;
  align-items: center;
  .search {
    input {
      background-color: transparent;
      border: 1px solid red;
      color: white;
      border-radius: 5px;
      height: 40px;
      font-size: 16px;
      padding: 0 10px;
      &::placeholder {
        color: white;
      }
    }
  }
  @media (0<width<600px) {
    flex-direction: column;
    height: 120px;
  }
`;

const FilterContainer = styled.section`
  display: flex;
  justify-content: center;
  gap: 12px;
  padding-bottom: 40px;
`;

export const Button = styled.button`
  background: ${({ isSelected }) => (isSelected ? '#f22f2f' : '#ff4343')};
  outline: 1px solid ${({ isSelected }) => (isSelected ? 'white' : '#ff4343')};
  border-radius: 5px;
  padding: 6px 12px;
  border: none;
  color: white;
  cursor: pointer;
  &:hover {
    background-color: #f22f2f;
  }
`;
