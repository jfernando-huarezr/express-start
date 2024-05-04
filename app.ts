import express from "express";

//express app
const app = express();

//register view engine
app.set("view engine", "ejs");
//select the folder. default is views
//app.set("views", "myviews");

//listen for requests
app.listen(3000);

//response to requests
//what path to listen, callback function
app.get("/", (req, res) => {
  //res.send("<p>Home page</p>");

  //with sendFile the root by default is the root of the computer
  //we need to tell it where the root of the project is
  //res.sendFile("./views/index.html", { root: __dirname });

  const blogs: object[] = [
    {
      title: "Yoshi finds eggs",
      snippet: "lorem ipsum dolor sit amet consectetur",
    },
    {
      title: "Mario finds stars",
      snippet: "lorem ipsum dolor sit amet consectetur",
    },
    {
      title: "How to defeat Bowser",
      snippet: "lorem ipsum dolor sit amet consectetur",
    },
  ];

  //change to render a view using the view engine
  //as second parameter you can pass data into an object
  res.render("index", { title: "Home", blogs });
});

app.get("/about", (req, res) => {
  //res.send("<p>About page</p>");
  //res.sendFile("./views/about.html", { root: __dirname });
  res.render("about", { title: "About" });
});

app.get("/blogs/create", (req, res) => {
  res.render("create", { title: "Create a new Blog" });
});

//redirects
app.get("/about-us", (req, res) => {
  res.redirect("/about");
});

//404 page
//how does 'use' work?
//well, it will launch for any request, but only if the request reaches this point
//thats why it should be put at the bottom of the file
//this makes it doesnt return an status 404, so we have to put it manually
app.use((req, res) => {
  //res.status(404).sendFile("/views/404.html", { root: __dirname });
  res.status(404).render("404", { title: "404" });
});
