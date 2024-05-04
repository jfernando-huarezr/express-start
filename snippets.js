"use strict";
// //mongoose and mongo sandbox routes
// app.get("/add-blog", (req, res) => {
//   const blog = new Blog({
//     title: "test new blog",
//     snippet: "about my new blog",
//     body: "more about my new blog",
//   });
//   blog
//     .save()
//     .then((result) => {
//       res.send(result);
//     })
//     .catch((err: Error) => {
//       console.log(err);
//     });
// });
// app.get("/all-blogs", (req, res) => {
//   //get all of the blogs
//   Blog.find()
//     .then((result) => res.send(result))
//     .catch((err: Error) => {
//       console.log(err);
//     });
// });
// app.get("/single-blog", (req, res) => {
//   //find specific by id
//   Blog.findById("6636968e719ec97f4c5be10b")
//     .then((result) => res.send(result))
//     .catch((err: Error) => {
//       console.log(err);
//     });
// });
