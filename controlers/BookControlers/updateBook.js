const Book = require('../../models/BookSchema');

const updateBook = async (req, res) => {
    try {
        const bookId = req.params.id;
        const updateBook = req.body;
        
        const updatedbook = await Book.findByIdAndUpdate(bookId , updateBook , {
            new:true,
        });
        
 //console.log(updatedbook)
        if (!updatedbook) return res.status(400).json({ msg: "No Book Found" });

       
        res.status(200).json({ message: `${updatedbook.book_name} has been updated successfully` })
    }
    catch (err) {
        console.log(`Error in deleting Book: ${err}`);
        res.status(500).json({ message: "Internal Server error" });
    }
}
module.exports = updateBook;