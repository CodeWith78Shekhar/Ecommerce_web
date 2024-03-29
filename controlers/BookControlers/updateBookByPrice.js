const Book = require('../../models/BookSchema');

const updateBookbyPrice = async (req, res) => {
    try {
        const Bookname = req.params.bookname;
        const updatePrice = req.body.price;
        
        const updatedbook = await Book.findOne({book_name : Bookname} );
        
 //console.log(updatedbook)
        if (!updatedbook) return res.status(400).json({ msg: "No Book Found" });
         updatedbook.price = updatePrice;
         await updatedbook.save();
       
        res.status(200).json({ message: `${updatedbook.book_name} has been updated successfully` })
    }
    catch (err) {
        console.log(`Error in deleting Book: ${err}`);
        res.status(500).json({ message: "Internal Server error" });
    }
}
module.exports = updateBookbyPrice;