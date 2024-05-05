"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.blog_delete = exports.blog_create_post = exports.blog_create_get = exports.blog_details = exports.blog_index = void 0;
const blog_1 = require("../models/blog");
// blog_index, blog_details, blog_create_get, blog_create_post, blog_delete
const blog_index = (req, res) => {
    blog_1.Blog.find()
        .sort({ createAt: -1 }) //newest to oldest
        .then((result) => {
        res.render("index", { title: "All ", blogs: result });
    })
        .catch((err) => {
        console.log(err);
    });
    //change to render a view using the view engine
    //as second parameter you can pass data into an object
};
exports.blog_index = blog_index;
const blog_details = (req, res) => {
    const id = req.params.id;
    blog_1.Blog.findById(id)
        .then((result) => {
        res.render("details", { blog: result, title: "Blog Details" });
    })
        .catch((err) => {
        res.render("404", { title: "Blog not found" });
    });
};
exports.blog_details = blog_details;
const blog_create_get = (req, res) => {
    res.render("create", { title: "Create a new Blog" });
};
exports.blog_create_get = blog_create_get;
const blog_create_post = (req, res) => {
    const blog = new blog_1.Blog(req.body);
    blog
        .save()
        .then((result) => {
        res.redirect("/");
    })
        .catch((err) => {
        console.log(err);
    });
};
exports.blog_create_post = blog_create_post;
const blog_delete = (req, res) => {
    const id = req.params.id;
    blog_1.Blog.findByIdAndDelete(id)
        .then((result) => {
        res.json({ redirect: "/" });
    })
        .catch((err) => console.log(err));
};
exports.blog_delete = blog_delete;
