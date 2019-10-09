import React from 'react';
import { Pie, defaults } from 'react-chartjs-2';
import styled from 'styled-components';

const StyledPie = styled.div`
  padding-bottom: 3rem;
  width: 100%;
`;

defaults.global.defaultFontFamily = 'IBM Plex Mono';

function PieChart({ onChartClick, data }) {
  const options = {
    legend: {
      position: 'left',
      labels: {
        boxWidth: 20,
        fontSize: 18,
        fontColor: '#666',
      },
    },
  };
  return (
    <StyledPie>
      <Pie
        options={options}
        data={{
          labels: data.map((d) => d.type),
          datasets: [
            {
              data: data.map(({ number }) => number),
              backgroundColor: data.map(({ backgroundColor }) => backgroundColor),
            },
          ],
        }}
        onElementsClick={(elems) =>
          elems.length > 0 ? onChartClick(elems[0]._options.backgroundColor) : null
        }
      />
    </StyledPie>
  );
}

export default PieChart;
