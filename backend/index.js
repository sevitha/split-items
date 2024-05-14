const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const routes = require('./routes/routes')
const cookieparser = require('cookie-parser');
const app = express()

app.use(cors({
    credentials:true,
    origin:['http://localhost:4200']
}))
app.use(cookieparser())
app.use(express.json())
app.use("/api",routes) //Pass it as middleware
// mongoose.connect("mongodb://localhost:27017/jwtproject",{
//     useNewUrlParser: true,
//     useUnifiedTopology: true
// }, ()=> {
//     console.log("Connected to database")
//     app.listen(5000,()=>{
//         console.log("App is listening to port 5000")
//     })
// })

mongoose.connect('mongodb://localhost:27017/jwtproject', {
  useNewUrlParser: true,
})
.then(() => {
  console.log('Connected to MongoDB')
  app.listen(4000,()=> {
    console.log('App is listening on port 4000')
  })
})
.catch((error) => {
  console.error('Error connecting to MongoDB:', error);
});