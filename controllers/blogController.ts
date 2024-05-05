import { Blog } from "../models/blog";
import { Request, Response } from "express";
// blog_index, blog_details, blog_create_get, blog_create_post, blog_delete

const blog_index = (req: Request, res: Response) => {
  Blog.find()
    .sort({ createAt: -1 }) //newest to oldest
    .then((result) => {
      res.render("index", { title: "All ", blogs: result });
    })
    .catch((err: Error) => {
      console.log(err);
    });

  //change to render a view using the view engine
  //as second parameter you can pass data into an object
};

const blog_details = (req: Request, res: Response) => {
  const id = req.params.id;
  Blog.findById(id)
    .then((result) => {
      res.render("details", { blog: result, title: "Blog Details" });
    })
    .catch((err) => {
      console.log(err);
    });
};

const blog_create_get = (req: Request, res: Response) => {
  res.render("create", { title: "Create a new Blog" });
};

const blog_create_post = (req: Request, res: Response) => {
  const blog = new Blog(req.body);
  blog
    .save()
    .then((result) => {
      res.redirect("/");
    })
    .catch((err) => {
      console.log(err);
    });
};

const blog_delete = (req: Request, res: Response) => {
  const id = req.params.id;
  Blog.findByIdAndDelete(id)
    .then((result) => {
      res.json({ redirect: "/" });
    })
    .catch((err) => console.log(err));
};

export {
  blog_index,
  blog_details,
  blog_create_get,
  blog_create_post,
  blog_delete,
};
