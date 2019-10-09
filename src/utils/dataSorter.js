import peopleData from '../data/people.json';
import vehiclesData from '../data/vehicles.json';
import filmsData from '../data/films.json';
import planetsData from '../data/planets.json';
import starshipsData from '../data/starships.json';
import speciesData from '../data/species.json';
import colors from './colorTheme';

function extractValue(arr, key) {
  return arr.reduce((acc, nextVal) => {
    let words = nextVal[key].split(', ');
    words.forEach((word) => {
      if (!acc.includes(word)) {
        acc.push(word);
      }
    });
    return acc;
  }, []);
}

function extractMassOrHeight(arr, key) {
  const values = arr.reduce((acc, next) => {
    if (!next[key].includes('unknown')) {
      acc.push(Math.round(Number(next[key].replace(',', ''))));
    }
    return acc;
  }, []);
  const max = Math.max(...values);
  const high = Math.round((max * 66) / 100);
  const low = Math.round((max * 33) / 100);
  const min = Math.min(...values);
  return { max, high, low, min };
}

function sortData(sortKeys, data, keyName) {
  return sortKeys.map((s) => {
    const people = data.filter((d) => d[keyName].includes(s));
    return {
      type: s,
      backgroundColor: colors[s],
      number: people.length,
      people,
    };
  });
}
function sortIntegerData(data, key) {
  return data
    .filter((p) => {
      if (!p[key].includes('unknown')) {
        p[key] = Math.round(Number(p[key].replace(',', '')));
        return p;
      }
      return null;
    })
    .sort((a, b) => b[key] - a[key]);
}

function getPeopleType() {
  const eye = sortData(extractValue(peopleData, 'eye_color'), peopleData, 'eye_color');
  const hair = sortData(extractValue(peopleData, 'hair_color'), peopleData, 'hair_color');
  const skin = sortData(extractValue(peopleData, 'skin_color'), peopleData, 'skin_color');
  const gender = sortData(extractValue(peopleData, 'gender'), peopleData, 'gender');
  const mass = sortIntegerData(peopleData, 'mass');
  const height = sortIntegerData(peopleData, 'height');
  return {
    all: peopleData,
    eye,
    hair,
    skin,
    gender,
    mass,
    height,
  };
}

function getSpeciesType() {
  const eye = sortData(extractValue(speciesData, 'eye_colors'), speciesData, 'eye_colors');
  const hair = sortData(extractValue(speciesData, 'hair_colors'), speciesData, 'hair_colors');
  const skin = sortData(extractValue(speciesData, 'skin_colors'), speciesData, 'skin_colors');
  const classification = sortData(
    extractValue(speciesData, 'classification'),
    speciesData,
    'classification',
  );
  const designation = sortData(
    extractValue(speciesData, 'designation'),
    speciesData,
    'designation',
  );
  const height = sortIntegerData(speciesData, 'average_height');
  const lifespan = sortIntegerData(speciesData, 'average_lifespan');
  return {
    all: speciesData,
    eye,
    hair,
    skin,
    classification,
    designation,
    lifespan,
    height,
  };
}

function getStarshipsType() {
  const cost = sortIntegerData(starshipsData, 'cost_in_credits');
  const length = sortIntegerData(starshipsData, 'length');
  const speed = sortIntegerData(starshipsData, 'max_atmosphering_speed');
  const passengers = sortIntegerData(starshipsData, 'passengers');
  const capacity = sortIntegerData(starshipsData, 'cargo_capacity');

  return {
    all: starshipsData,
    cost,
    length,
    speed,
    passengers,
    capacity,
  };
}
export { getPeopleType, getSpeciesType, getStarshipsType };
