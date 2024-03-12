const express = require('express');
const ejs = require('ejs')
const mongoose = require('mongoose')
const { userRouter } = require('./Routes/userRouter');
const { postRouter } = require('./Routes/postRouter');
const { commentRouter } = require('./Routes/commentRouter');
const { userModel, user } = require('./Models/userModel');
require('./DbConnection/mongoose')
const app =express()
// app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'ejs');

let PORT = 7000;
const users = [];



app.get('/register', (req, res) => {
    res.render('Register');
  });

app.post('/register', (req, res) => {
    const { username, email, password } = req.body;

  // Check if any of the required fields are missing
  if (!username || !email || !password) {
    return res.status(400).send('Missing required fields');
  }

  try {
    // Check if the username or email already exists
    const existingUser =  user.findOne({ $or: [{ email }] });
    if (existingUser) {
      return res.status(409).send('Username or email already exists');
    }

    // Create a new user and save it to the database
    const newUser = new user({ username, email, password });
    newUser.save();

    // For simplicity, just send a response back for now
    res.send(`Registration successful for ${username} with email ${email}`);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
    });

app.use(express.json())
app.use("/user",userRouter)
app.use("/post",postRouter)
app.use("/comment",commentRouter)


// app.get('/get', (req, res)=>{
//     res.send("demo");
//   });

app.listen(PORT,()=>{
    console.log(`Server is running at ${PORT}`)
})