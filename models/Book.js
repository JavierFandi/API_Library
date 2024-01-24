const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/Library');

const BookSchema = new mongoose.Schema({
    title: String,
    author: String,
}, {collection: 'Books'});

const Book = mongoose.model('Book', BookSchema);

module.exports = Book;