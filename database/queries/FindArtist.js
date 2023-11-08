const Artist = require('../models/artist');

// Our quesries will all: Take in some arguments, manipulate the db, return the data
/**
 * Finds a single artist in the artist collection.
 * @param {string} _id - The ID of the record to find.
 * @return {promise} A promise that resolves with the Artist that matches the id
 */
module.exports = (_id) => Artist.findById({ _id });