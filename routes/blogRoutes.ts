import express from "express";
import { Blog } from "../models/blog";
import {
  blog_index,
  blog_details,
  blog_create_get,
  blog_create_post,
  blog_delete,
} from "../controllers/blogController";

const router = express.Router();

//blog routes
router.get("/", blog_index);

//see details of a blog
router.get("/:id", blog_details);

//create a new blog
router.post("/", blog_create_post);

//go to /create page
router.get("/create", blog_create_get);

//delete
router.delete("/:id", blog_delete);

export { router };
