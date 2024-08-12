const { Router } = require('express');
const router = Router();
const Blog = require("../modals/Blog.modal.js")
const multer  = require('multer');
const Comment = require("../modals/Comment.modal.js")



const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './public/uploads')
    },
    filename: function (req, file, cb) {
      const filename = `${Date.now()}-${file.originalname}`
      cb(null,filename)
    }
  })
  
  const upload = multer({ storage: storage })





router.post('/add',upload.single('blogImage'),async (req,res)=>{
    const {title,content}=req.body;
    const blog=await Blog.create({
        blogImage:`${req.file.filename}`,
      title,
      content,
        createdBy:req.user._id
        });
    res.redirect('/')
})

router.get('/add',(req,res)=>{
  res.render('addBlog',{user:req.user});
})
router.post('/comment/:blogid',async (req,res)=>{
  const {comment}=req.body;
  const blogid=req.params.blogid;
  await Comment.create({
    comment,
    createdBy:req.user._id,
    toBlog:blogid
})
res.redirect(`/blog/${blogid}`)
})

router.get('/:id',async(req,res)=>{
  const id=req.params.id
  const blog=await Blog.findById(id).populate('createdBy')
  const comments=await Comment.find({toBlog:id}).populate("createdBy")
  res.render('blog',{blog, user:req.user,comments})
}
)










module.exports = router