require("dotenv").config()

const express = require('express')
const authRouter =require('./routes/auth.js');
const blogRouter =require('./routes/blog.js');
const path = require('path');
const { default: mongoose } = require('mongoose');
const Blog = require("./modals/Blog.modal.js")
const cookieParser=require('cookie-parser');
const {checkForAuth}=require('./middleware/checkAuth.js');
const { error } = require('console');
const app = express()
const port = process.env.PORT



const uri = process.env.MONGO_URI

mongoose.connect(uri)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));


app.set("view engine","ejs")
app.set("views",'./views')



app.use(express.urlencoded({extended:false}))
app.use(express.static(path.resolve('./public')))
app.use(express.json())
app.use(cookieParser())
app.use(checkForAuth())



app.use('/auth',authRouter)
app.use('/blog',blogRouter)



app.get('/',async (req, res) => {
    const allBlogs=await Blog.find({}).populate("createdBy")
   res.render('home',{
    allBlogs,
    user:req.user
   })
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
