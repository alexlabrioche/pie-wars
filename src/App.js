import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { getPeopleType, getSpeciesType, getStarshipsType } from './utils/dataSorter';
import AppComponent from './components/Appcomponent';

const StyledApp = styled.div`
  * {
    font-family: 'IBM Plex Mono', monospace;
    color: #f2f2f2;
  }
  width: 100vw;
  display: flex;
  flex-direction: column;
  background-image: linear-gradient(to bottom, #232227, #232128, #24202a, #251f2b, #251e2c);
  .appbar {
    height: 10vh;
  }
  .main {
    display: flex;
    height: 90vh;
    padding: 0rem 2rem;
  }
  .chart {
    width: 75%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
  }
  .result {
    width: 25%;
    height: 100%;
  }
`;

function App() {
  const [data, setData] = useState(null);
  useEffect(() => {
    setData({
      people: getPeopleType(),
      species: getSpeciesType(),
      starships: getStarshipsType(),
    });
  }, []);
  console.info('data', data);
  return <StyledApp>{data && <AppComponent data={data} />}</StyledApp>;
}

export default App;
