import mongoose, { Schema } from "mongoose";

const blogSchema: Schema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    snippet: {
      type: String,
      required: true,
    },
    body: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

//can add schema validations?

const Blog = mongoose.model("Blog", blogSchema);

export { Blog };
