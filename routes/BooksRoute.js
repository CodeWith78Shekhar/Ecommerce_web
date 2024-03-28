const express = require('express')
const addBooks = require('../controlers/BookControlers/addBooks');
const deleteBooks = require('../controlers/BookControlers/deleteBooks');
const router = express.Router();

router.post("/addbooks" , addBooks);

router.delete("/removebook/:id" , deleteBooks)

module.exports = router;