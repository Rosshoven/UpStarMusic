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
    // get all the artists Artist.find({})....  x that - helper function called buildQuery
    const query = Artist.find(buildQuery(criteria))
        // adding sort property variable at run time, give it value of 1 - truthy
      .sort({ [sortProperty]: 1 })
    //   skip by offset number - offset means how many records to skip. 
      .skip(offset)
    //   limit to 
      .limit(limit);

      return Promise.all([query, Artist.count()])
        .then((results) => {
            return {
                // this is all from query, the first thing in the results array
                all: results[0],
                count: results[1],
                offset,
                limit
            };
        });
};

// Define the buildQuery function
    const buildQuery = (criteria) => {
        const query = {};

        if (criteria.name) {
            // add text property to query https://www.mongodb.com/docs/v7.0/reference/operator/query/text/#mongodb-query-op.-text
            query.$text = { $search: criteria.name };
            // have to create an index on the name property
        }
        
        if (criteria.age) {
            // adding .age below automatically puts key it into query variable. only if it's selected
            query.age = { 
                $gte: criteria.age.min,
                $lte: criteria.age.max 
            };
        }

        if (criteria.yearsActive) {
            query.yearsActive = {
                $gte: criteria.yearsActive.min,
                $lte: criteria.yearsActive.max
            };
        }

        return query;
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


