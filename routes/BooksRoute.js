const express = require('express')
const addBooks = require('../controlers/BookControlers/addBooks');
const deleteBooks = require('../controlers/BookControlers/deleteBooks');
const getBooksByname = require('../controlers/BookControlers/getBooks');
const pricegt10 = require('../controlers/BookControlers/pricegt10');
const updateBook = require('../controlers/BookControlers/updateBook');
const updateBookByAuthor = require('../controlers/BookControlers/UpdateBookByAuthor');
const updateBookbyPrice = require('../controlers/BookControlers/updateBookByPrice');
const router = express.Router();

router.post("/addbooks" , addBooks);

router.delete("/removebook/:id" , deleteBooks)
router.get("/getbooksbyname/:name" , getBooksByname)
router.get("/getbookbypricegt10/", pricegt10)
router.put("/updatebook/:id" , updateBook)
router.put("/updatebookbyauthor/:author" , updateBookByAuthor)
router.patch("/updatebookbyprice/:bookname" , updateBookbyPrice)


module.exports = router;