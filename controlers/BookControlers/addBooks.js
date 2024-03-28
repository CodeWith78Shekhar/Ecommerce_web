const Book = require("../../models/BookSchema");

const addBooks = async (req, res) => {
    try {
        const {
            id,
            book_name,
            book_description,
            author,
            year_of_publication,
            genre,
            price,
            language,
            ISBN,
        } = req.body;

        const newBook = new Book({
            id,
            book_name,
            book_description,
            author,
            year_of_publication,
            genre,
            price,
            language,
            ISBN,
        });

        const savedbook = await newBook.save();
        res.status(200).json({ meassage: `Book added successfully` });
    }

    catch (err) {
        console.log(`Error in adding Book: ${err}`);
        res.status(500).json({ message: "Internal Server error" });
    }
};

module.exports = addBooks;