// lancer le script avec Node.
// Il va exporter toutes les données de l'API Swapi au format JSON
const axios = require('axios');
const fs = require('fs');

const BASE_URL = 'https://swapi.co/api/';
const FILMS = 'films';
const PEOPLE = 'people';
const PLANETS = 'planets';
const SPECIES = 'species';
const STARSHIPS = 'starships';
const VEHICLES = 'vehicles';
const RESSOURCES = [FILMS, PEOPLE, PLANETS, SPECIES, STARSHIPS, VEHICLES];

const swapi = axios.create({
  baseURL: BASE_URL,
});

async function fetchPage(ressource, page = 1) {
  try {
    const { data } = await swapi.get(`/${ressource}?page=${page}`);
    return data;
  } catch (err) {
    throw new Error("Oups... la force n'a pas l'air d'être avec toi", err);
  }
}

async function fetchRessources(ressource, maxPages) {
  const allData = [];
  console.info('fetchRessources', ressource);
  for (let i = 1; i <= maxPages; i++) {
    const data = await fetchPage(ressource, i);
    allData.push(...data.results);
    console.info(`    ${i} sur ${maxPages} OK`);
  }
  return allData;
}

function writeData(fileName, data) {
  if (arguments.length !== 2) {
    throw new Error('Entrez un nom de ficher, ou ajoutez un tableau de données');
  }
  return fs.writeFile(`${fileName}.json`, JSON.stringify(data), (err) => {
    if (err) {
      throw new Error('Oups', err);
    }
  });
}

function getLastPage(ressource) {
  return fetchPage(ressource).then((data) => {
    return Math.ceil(data.count / 10);
  });
}
function getIdFromUrls(array) {
  array.match(/(https.+[/])/gi);
}

async function fetchAll() {
  // RESSOURCES.forEach(async (ressource) => {
  //   const lastPage = await getLastPage(ressource);
  //   const results = await fetchRessources(ressource, lastPage);
  //   writeData(ressource, results);
  // });
  const lastPage = await getLastPage(PEOPLE);
  const results = await fetchRessources(PEOPLE, lastPage);
  writeData(PEOPLE, results);
  return console.info('👨‍🚀 All good! 👩‍🚀');
}
fetchAll();
