import React from 'react';
import styled from 'styled-components';

const StyledSelection = styled.div`
  padding-top: 3rem;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
`;

const StyledSubSelection = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: baseline;

  h2 {
    margin: none;
  }
  h2,
  span {
    margin: 0rem 1rem;
    cursor: pointer;
    transition: color 200ms ease;
    &:hover {
      color: paleturquoise;
    }
    &::first-letter {
      text-transform: uppercase;
    }
  }
`;

function SubSelection({ activeSet, selectType, activeType, types, label }) {
  const barChart = [
    'mass',
    'height',
    'lifespan',
    'cost',
    'length',
    'speed',
    'passengers',
    'capacity',
  ];
  return (
    <StyledSubSelection>
      <h2
        style={{ color: activeSet === label ? 'turquoise' : '#F2F2F2' }}
        onClick={() => selectType(null, null, label)}
      >
        {label}
      </h2>
      {types.map((type) => (
        <span
          style={{
            color: activeType === type && activeSet === label ? 'turquoise' : '#F2F2F2',
          }}
          onClick={() => selectType(type, barChart.includes(type) ? null : 'pie', label)}
        >
          {type}
        </span>
      ))}
    </StyledSubSelection>
  );
}
function ChartSelection({ selectType, activeSet, activeType }) {
  const peopleTypes = ['eye', 'hair', 'skin', 'gender', 'mass', 'height'];
  const speciesTypes = [
    'eye',
    'hair',
    'skin',
    'classification',
    'designation',
    'lifespan',
    'height',
  ];
  const starshipsTypes = ['cost', 'length', 'speed', 'passengers', 'capacity'];
  return (
    <StyledSelection>
      <SubSelection
        activeSet={activeSet}
        selectType={selectType}
        activeType={activeType}
        types={peopleTypes}
        label="people"
      />
      <SubSelection
        activeSet={activeSet}
        selectType={selectType}
        activeType={activeType}
        types={speciesTypes}
        label="species"
      />
      <SubSelection
        activeSet={activeSet}
        selectType={selectType}
        activeType={activeType}
        types={starshipsTypes}
        label="starships"
      />
    </StyledSelection>
  );
}

export default ChartSelection;
