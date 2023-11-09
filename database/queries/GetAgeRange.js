const Artist = require('../models/artist');

/**
 * Finds the lowest and highest age of artists in the Artist collection
 * @return {promise} A promise that resolves with an object
 * containing the min and max ages, like { min: 16, max: 45 }.
 VIDEO 89  */
module.exports = () => {
const minQuery = Artist
    .find({})
    .sort({ age: 1 })
    .limit(1)
    // get just the age back, this helps with our result inside the promise
    .then(artists => artists[0].age);
    
    const maxQuery = Artist
      .find({})
      .sort({ age: -1 })
      .limit(1)
      .then(artists => artists[0].age);

    //   once both the above queries resolve, we combine them together with...
      return Promise.all([minQuery, maxQuery])
    //   remember only getting the age back from the queries
        .then((result) => {
            return { min: result[0], max: result[1] };
        });
};

    // Artist.find({})
    // .sort({ age: 1 })
    // .skip(0)
    // .limit(4)
    // .then((artists) => { return artists; }); 

// module.exports = () => {
//     const list = [];
//     Artist.forEach((artist) => {
//         if (artist.age >= 14 && artist.age <= 80) {
//             list.push(artist);
//     }
//     });
//      return list.sort(age: 1);
     
// };      
