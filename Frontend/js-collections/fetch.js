// const fetch = require('node-fetch');

const url = 'https://api.freeapi.app/api/v1/public/randomusers/13';
const options = { method: 'GET', headers: { accept: 'application/json' } };

async function getUsers() {
  try {
    const response = await fetch(url, options);
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

getUsers();