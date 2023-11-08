// Todo: Create Artist Model
// Model is based on the info you have coming in from the DB?

const mongoose = require('mongoose');

const Schema = mongoose.Schema; 

const AlbumSchema = require('./album');


const ArtistSchema = new Schema({

    name: String, 
    age: Number,
    yearsActive: Number,
    image: String,
    genre: String,
    website: String,
    netWorth: Number,
    labelName: String,
    retired: Boolean, 
    albums: [AlbumSchema] 

});

// Turn the schema into a model. a mongoose model
const Artist = mongoose.model('artist', ArtistSchema);

module.exports = Artist;

