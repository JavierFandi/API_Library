const express = require('express');
const routerBooks = express.Router();
const Book = require('../models/Book');

//Router GetBooks
routerBooks.get('/', async (req, res) => {
    try {
        const books = await Book.find();
        res.json(books);
    } catch (err) {
        res.status(500).json({
            message: err.message || "Error getting books",
        });
    }
});

//Router CreateBooks
routerBooks.post('/', async (req, res) => {
    try {
        const books = new Book(req.body);
        await books.save();
        res.json(books);
    } catch (err) {
        res.status(500).json({
            message: err.message || "Error creating book",
        });
    }
});

//Router UpdateBooks
routerBooks.put('/:id', async (req, res) => {
    try {
        const books = await Book.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(books);
    } catch (err) {
        res.status(500).json({
            message: err.message || "Error updating book",
        });
    }
});

//Router DeleteBooks

routerBooks.delete('/:id', async (req, res) => {
    try {
        const books = await Book.findByIdAndDelete(req.params.id);
        res.json({message: "Book deleted successfully"});
    } catch (err) {
        res.status(500).json({
            message: err.message || "Error deleting book",
        });
    }
});

module.exports = routerBooks;