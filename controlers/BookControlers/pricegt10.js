const Book = require('../../models/BookSchema');


const pricegt10 = async (req, res)=>{
    try{
       const book = await Book.find({price : { $gt: 10 , $lt: 40 }});
       res.json(book)
       //js way((
    //    const book = await Book.find();
    //    const oneitem = book.filter((onebook)=> onebook.price > 50)
    //    if(!book) return res.status(404).send("No books found");
    //    res.json(oneitem);
    } catch(err){
        console.log(`Error in deleting Book: ${err}`);
        res.status(500).json({ message: "Internal Server error" });
    }
}

module.exports = pricegt10;