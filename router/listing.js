const express = require("express");
const router = express.Router();

router.get("/listings", (req, res)=> {
    res.render("listings/index.ejs");
})

router.get("/shop", (req, res)=> {
    res.render("listings/shop.ejs");
});

router.get("/sproduct", (req, res)=> {
    res.render("listings/show.ejs");
})

router.get("/blog", (req, res)=> {
    res.render("listings/blog.ejs");
});

router.get("/about", (req, res)=> {
    res.render("listings/about.ejs");
})

router.get("/contact", (req, res)=> {
    res.render("listings/contact.ejs");
})

router.get("/cart", (req, res)=> {
    res.render("listings/cart.ejs");
})


module.exports = router;