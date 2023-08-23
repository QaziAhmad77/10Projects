import styled from 'styled-components';
import { logo } from '../public';
import { useEffect, useState } from 'react';
import Cards from './components/Cards';
import Top from './components/Top';

export const BASE_URL = 'http://localhost:9000';

const App = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [fileterData, setFilterData] = useState(null);
  const [selectedBtn, setSelectedBtn] = useState('all');

  const fetchFoodData = async () => {
    try {
      setLoading(true);
      const response = await fetch(BASE_URL);
      const jsonData = await response.json();
      setData(jsonData);
      setFilterData(jsonData);
      setLoading(false);
    } catch (err) {
      setError('Unable to fetch data');
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchFoodData();
  }, []);

  const searchFood = (e) => {
    const searchValue = e.target.value;
    // if (searchValue === '') {
    //   setFilterData(null);
    // }
    const filter = data?.filter((food) =>
      food.name.toLowerCase().includes(searchValue.toLowerCase())
    );
    setFilterData(filter);
  };

  const filterFood = (type) => {
    if (type === 'all') {
      setFilterData(data);
      setSelectedBtn('all');
      return;
    }
    //else
    const filter = data?.filter((food) =>
      food.type.toLowerCase().includes(type.toLowerCase())
    );
    setFilterData(filter);
    setSelectedBtn(type);
  };
  
  if (error) return <div>{error}</div>;
  if (loading) return <div>Loading.....</div>;

  return (
    <>
      <Container>
        <Top
          searchFood={searchFood}
          filterFood={filterFood}
          selectedBtn={selectedBtn}
        />
      </Container>
      <Cards fileterData={fileterData} />
    </>
  );
};

export default App;

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;
