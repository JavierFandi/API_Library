const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/library');

const BookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    }
}, {collection: 'books'});

const Book = mongoose.model('Book', BookSchema);

module.exports = Book;