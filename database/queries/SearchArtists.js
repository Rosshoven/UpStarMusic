const Artist = require('../models/artist');

/**
 * Searches through the Artist collection
 * @param {object} criteria An object with a name, age, and yearsActive
 * @param {string} sortProperty The property to sort the results by
 * @param {integer} offset How many records to skip in the result set
 * @param {integer} limit How many records to return in the result set
 * @return {promise} A promise that resolves with the artists, count, offset, and limit
 */
module.exports = (criteria, sortProperty, offset = 0, limit = 20) => {
    // write a query that will follow sort, offset, limit ooptions only 
    // do not worry about criteria yet   

    // get all the artists
    const query = Artist.find({})
        // adding sort property variable at run time, give it value of 1 - truthy
      .sort({ [sortProperty]: 1 })
    //   skip by offset number - offset means how many records to skip. 
      .skip(offset)
    //   limit to 
      .limit(limit);



      return Promise.all([query, Artist.count()])
        .then((results) => {
            return {
                // this is all from query, the first thing in the resuls array
                all: results[0],
                count: results[1],
                offset,
                limit
            };
        });
};

// SOLO ATTEMPT 
    // const query = Artist
    //   .find({})
    //   .sort()
    //   .then((artists) => artists.name);

    //   const length = query.length;

    //   return Promise(query)
    //     .then(() => {
    //         return { all: [query], count: length, offset: 0, limit: 20 };
    //     });


