const mongoose = require('mongoose')

mongoose.connect("mongodb://localhost:27017/project-04-03-2024")
.then(() => {console.log("Connected!");}).catch((err) => {console.log("Disconnected!");});