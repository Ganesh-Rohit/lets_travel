let Post = require('../models/posts').Post ; 
let express = require('express');
let router = express.Router();   // redirecting routes from onefile to another file


router.get('/', async (req,resp)=>{
    let count = await Post.find().countDocuments();
    let random = Math.floor(Math.random() * count);
    let post = await Post.findOne().skip(random).exec();
    resp.render('sight', {
        title : post.title,
        imageURL : post.imageURL,
        date: post.date,
        cost:post.cost,
        text: post.text})

})
module.exports = router;