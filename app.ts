import express from "express";
import morgan from "morgan";
import mongoose from "mongoose";
import { router as blogRoutes } from "./routes/blogRoutes";

//express app
const app = express();

//connect to mongoDB
const databaseURI =
  "mongodb+srv://tester:dishonored19@node-basics.oxexicp.mongodb.net/nodetuts?retryWrites=true&w=majority&appName=node-basics";
mongoose
  .connect(databaseURI)
  .then((result) => {
    console.log("connected to databse");
    //listen for requests
    app.listen(3000);
  })
  .catch((err) => {
    console.log(err);
  });

//register view engine
app.set("view engine", "ejs");
//select the folder. default is views
//app.set("views", "myviews");

//third party middlewares - example morgan
app.use(morgan("tiny"));

//middleware & static files
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true })); //takes url encoded an passes it

// //custom middleware
// app.use((req, res, next) => {
//   console.log("**** new request made: ");
//   console.log(`host: ${req.hostname}`);
//   console.log(`path: ${req.path}`);
//   console.log(`method: ${req.method}`);
//   //if i let it end here, the browser hangs there, gets stuck, doesnt know where to go.

//   //i need to use next() so the server knows it can move on
//   next();
// });

// //second middleware
// app.use((req, res, next) => {
//   console.log("**** second middleware");
//   next();
// });

//response to requests
//what path to listen, callback function
app.get("/", (req, res) => {
  //res.send("<p>Home page</p>");

  //with sendFile the root by default is the root of the computer
  //we need to tell it where the root of the project is
  //res.sendFile("./views/index.html", { root: __dirname });
  res.redirect("/blogs");
});

app.get("/about", (req, res) => {
  //res.send("<p>About page</p>");
  //res.sendFile("./views/about.html", { root: __dirname });
  res.render("about", { title: "About" });
});

//blog routes
app.use("/blogs", blogRoutes);

//404 page
//how does 'use' work?
//well, it will launch for any request, but only if the request reaches this point
//thats why it should be put at the bottom of the file
//this makes it doesnt return an status 404, so we have to put it manually
app.use((req, res) => {
  //res.status(404).sendFile("/views/404.html", { root: __dirname });
  res.status(404).render("404", { title: "404" });
});
