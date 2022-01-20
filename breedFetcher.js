const request = require('request');

const strURL = 'https://api.thecatapi.com/v1/breeds/search?q=';

const fetchBreedDescription = function(breedName, callback) {
  request((strURL + breedName), (error, response, body) => {
    if (error) callback(error);
    let objData = JSON.parse(body)[0];
    if (!objData) objData = { description: 'Breed not found' };
    callback(null, objData.description);
  });
};

module.exports = { fetchBreedDescription };