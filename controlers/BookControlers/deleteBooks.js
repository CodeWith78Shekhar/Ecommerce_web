const Book = require('../../models/BookSchema');

const deleteBook = async (req, res) => {
    try {
        const bookId = req.params.id;
        const book = await Book.findOne({ id: bookId });

        if (!book) return res.status(400).json({ msg: "No Book Found" });

        await Book.findOneAndDelete({ id: bookId });
        res.status(200).json({ message: `${book.book_name} has been deleted successfully` })
    }
    catch (err) {
        console.log(`Error in deleting Book: ${err}`);
        res.status(500).json({ message: "Internal Server error" });
    }
}
module.exports = deleteBook;