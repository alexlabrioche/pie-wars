import React, { useState } from 'react';
import Appbar from './Appbar';
import PieChart from './PieChart';
import BarChart from './BarChart';
import ChartSelection from './ChartSelection';
import DisplayPieSorting from './DisplayPieSorting';
import WelcomeCmp from './WelcomeCmp';

function App({ data }) {
  const [dataset, setDataset] = useState('people');
  const [displayedData, setDisplayedData] = useState({
    type: null,
    pieChart: false,
    display: data[dataset].all.map((p) => p),
  });
  function onChartClick(color) {
    setDisplayedData((s) => ({
      ...s,
      display: data[dataset][displayedData.type]
        .filter((e) => e.backgroundColor === color)
        .map((e) => e.people)[0],
    }));
  }
  function onTypeSelect(type, chartType, dataset) {
    setDataset(dataset);
    setDisplayedData((s) => ({
      ...s,
      type,
      pieChart: chartType === 'pie' ? true : false,
      display: data[dataset].all.map((p) => p),
    }));
  }
  return (
    <>
      <div className="appbar">
        <Appbar />
      </div>
      <div className="main">
        <div className="chart">
          <ChartSelection
            selectType={onTypeSelect}
            activeSet={dataset}
            activeType={displayedData.type}
          />
          {displayedData.type ? (
            displayedData.pieChart ? (
              <PieChart
                data={data[dataset][displayedData.type]}
                onChartClick={onChartClick}
                currentData={displayedData}
              />
            ) : (
              <BarChart
                data={data[dataset][displayedData.type]}
                currentData={displayedData.type}
                dataset={dataset}
              />
            )
          ) : (
            <WelcomeCmp />
          )}
        </div>
        <div className="result">
          <DisplayPieSorting data={displayedData.display} />
        </div>
      </div>
    </>
  );
}

export default App;
