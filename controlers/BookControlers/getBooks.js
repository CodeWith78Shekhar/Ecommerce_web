const Book = require('../../models/BookSchema');


const getBooksByname = async (req, res)=>{
    try{
       const book = await Book.find({genre: req.params.name});
       if(!book) return res.status(404).send("No books found");
       res.json(book);
    } catch(err){
        console.log(`Error in deleting Book: ${err}`);
        res.status(500).json({ message: "Internal Server error" });
    }
}

module.exports = getBooksByname;