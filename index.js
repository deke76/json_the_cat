const { fetchBreedDescription } = require('./breedFetcher');

let strBreedName = process.argv[2];

fetchBreedDescription(strBreedName, (err, desc) => {
  if (err) console.log('Error fetch details:', err);
  else console.log(desc);
});