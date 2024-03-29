const Book = require('../../models/BookSchema');

const updateBookByAuthor = async (req, res) => {
    try {
        const Author = req.params.author;
        const updateBook = req.body;
        
        const updatedbookByAuthor = await Book.findOneAndUpdate({author : Author} , updateBook , {
            new:true,
        });
        
 //console.log(updatedbook)
        if (!updatedbookByAuthor) return res.status(400).json({ msg: "No Book Found" });

       
        res.status(200).json({ message: `${updatedbookByAuthor.book_name} has been updated successfully` })
    }
    catch (err) {
        console.log(`Error in deleting Book: ${err}`);
        res.status(500).json({ message: "Internal Server error" });
    }
}
module.exports = updateBookByAuthor;