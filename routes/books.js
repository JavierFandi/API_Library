const express = require('express');
const routerBooks = express.Router();
const book = require('./models/Books');

//Router GetBooks
routerBooks.get('/', async (req, res) => {
    try {
        const books = await book.find();
        res.json(books);
    } catch (error) {
        res.status(500).json({
            message: error.message || "Error while getting books"
        });
    }
});

//Router CreateBooks
routerBooks.post('/', async (req, res) => {
    try {
        const newBook = new book(req.body);
        const book = await newBook.save();
        res.json(book);
    } catch (error) {
        res.status(500).json({
            message: error.message || "Error while creating books"
        });
    }
});

//Router AtualizeBooks
routerBooks.put('/:id', async (req, res) => {
    try {
        const book = await book.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(book);
    } catch (error) {
        res.status(500).json({
            message: error.message || "Error while updating books"
        });
    }
});

//Router DeleteBooks

routerBooks.delete('/:id', async (req, res) => {
    try {
        const book = await book.findByIdAndDelete(req.params.id);
        res.json(book);
    } catch (error) {
        res.status(500).json({
            message: error.message || "Error while deleting books"
        });
    }
});

module.exports = routerBooks;