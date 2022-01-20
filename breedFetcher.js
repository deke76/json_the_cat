const request = require('request');

const strURL = 'https://api.thecatapi.com/v1/breeds/search?q=';
let strBreed = process.argv[2];

// console.log(strURL + strBreed);

request((strURL + strBreed), (error, response, body) => {
  if (error) {
    console.log(error);
    return;
  }
  
  const objData = JSON.parse(body)[0];
  if (objData) console.log(objData.description);
  else console.log('Breed not found.');
  // console.log('error:', error);
  // console.log('response:', response);
});