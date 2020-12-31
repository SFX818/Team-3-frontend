
import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter} from 'react-router-dom'
// Components imports
import App from "./App";
// CSS imports
import "./css/index.css";
import "bootstrap/dist/css/bootstrap.min.css";
require('dotenv').config()

// let express = require('express');
// let app = express();
// let multer = require('multer')
// let upload = multer({ dest: './uploads/'})
// let cloudinary = require('cloudinary')
// let imgUrl = cloudinary.url('i5gehdy7vlsmx20ug32x', {width: 250, height: 250})

// cloudinary.config(process.env.CLOUDINARY_URL)


ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);

// app.get('/', function(req, res) {
//   res.render('index', { image: imgUrl });
// });

// app.post('/', upload.single('myFile'), (req, res )=> {
//   cloudinary.uploader.upload(req.file.path, (result) => {
//     res.send(result.url)
//   })
// })