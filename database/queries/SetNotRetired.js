const Artist = require('../models/artist');

/**
 * Sets a group of Artists as not retired
 * @param {array} _ids - An array of the _id's of of artists to update
 * @return {promise} A promise that resolves after the update
 */
module.exports = (_ids) => {
    return Artist.updateMany(
        { _id: { $in: _ids } },
         { retired: false }
    );
};

        // if the _id is in the list of _ids from arugment

// updateMany() needs two arguments, what ids you want to find, and what you want to change.
