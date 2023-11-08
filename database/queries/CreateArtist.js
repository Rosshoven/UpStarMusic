const Artist = require('../models/artist');

/**
 *  Adds a single artist in the artist collection.
 * @param {object} artistProps - Object containing a name, age, yearsActive, and genre
 * @return {promise} A promise that resolves with the Artist that was created
 */
module.exports = (artistProps) => {
    // const { name, age, yearsActive, genre } = artistProps;
    // const newArtist = new Artist({ name, age, yearsActive, genre });
        // artistProps is already recongized as a full object. No destructuring

    const newArtist = new Artist(artistProps);
    return newArtist.save();
};

