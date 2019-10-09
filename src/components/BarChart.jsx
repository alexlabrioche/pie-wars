import React from 'react';
import { Bar } from 'react-chartjs-2';
import styled from 'styled-components';

const StyledBar = styled.div`
  padding-bottom: 3rem;
  width: 100%;
`;

function getKey(key, dataset) {
  if (key === 'height' && dataset === 'species') {
    return 'average_height';
  }
  if (key === 'lifespan') {
    return 'average_lifespan';
  }
  if (key === 'cost') {
    return 'cost_in_credits';
  }
  if (key === 'speed') {
    return 'max_atmosphering_speed';
  }
  if (key === 'capacity') {
    return 'cargo_capacity';
  }
  return key;
}

function BarChart({ data, currentData, dataset }) {
  let key = getKey(currentData, dataset);
  const options = {
    legend: {
      display: false,
    },
  };
  return (
    <StyledBar>
      <Bar
        options={options}
        data={{
          labels: data.map((p) => p.name),
          datasets: [
            {
              backgroundColor: 'paleturquoise',
              borderColor: 'paleturquoise',
              borderWidth: 1,
              data: data.map((p) => p[key]),
            },
          ],
        }}
      />
    </StyledBar>
  );
}

export default BarChart;
