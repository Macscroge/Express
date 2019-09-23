const express = require('express');
const multer = require('multer');
const cors = require('cors');
const app = express();

app.use(cors());
const upload = multer({
  dest:'./uploads/'
})

app.post('/upload/',upload.single('file'), (req, res) => {
  res.json({file:req.file});
});

app.listen(3000,()=> console.log("Running on localhost:3000"));
