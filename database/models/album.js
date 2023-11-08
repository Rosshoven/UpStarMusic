// Todo: create Album Schema 
// Do NOT create model because this schema will be embedded into artist model

const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const AlbumSchema = new Schema({

    title: String,
    date: Date,
    copiesSold: Number,
    numberTracks: Number,
    image: String,
    revenue: Number 

});


// export it...artist model is taking it 
module.exports = AlbumSchema;

