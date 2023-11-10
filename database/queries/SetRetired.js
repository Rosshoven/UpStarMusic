const Artist = require('../models/artist');

/**
 * Sets a group of Artists as retired
 * @param {array} _ids - An array of the _id's of of artists to update
 * @return {promise} A promise that resolves after the update
 */
module.exports = (_ids) => {
    return Artist.updateMany(
        // if the _id is in the list of _ids from arugment
        { _id: { $in: _ids } },
        { retired: true }, 
    );
};

// updateMany() needs two arguments, what ids you want to find, and what you want to change
