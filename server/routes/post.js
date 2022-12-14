const express = require('express')
const Posts = require("../models/posts")

const router =express.Router();

//save Posts
router.post('/post/save' , (req,res)=>{
    let newPost = new Posts(req.body);
    newPost.save((err)=>{
        if(err){
            return res.status(400).json({
                erroe:err
            })
        }
        return res.status(200).json({
            success:"Posts saved successfully"
        })
    })
})

//get post method
router.get('/posts',(req,res)=> {
    Posts.find().exec((err,posts)=>{
        if(err){
            return res.status(400).json({
                error:err,
                
            })
        }
        return res.status(200).json({
            success:true,
            exsitingPosts:posts
        })
    })
});

//update post

router.put('/post/update/:id',(req,res)=>{
    Posts.findByIdAndUpdate(
        req.params.id,
        {
            $set:req.body
        },
        (err,post)=>
        {
            if(err){
                return res.status(400).json({
                    error:err
                })
            }
            return res.status(200).json({
                success:"updated Succesfully"
            })
        }
    )
});


//delete

router.delete("/post/delete/:id", (req, res) => {
    Posts.findByIdAndDelete(req.params.id).exec((err, deletePost) => {
      if (err) {
        return res.status(400).json({
          message: "delete unsuccesful",
          err,
        });
      }
      return res.status(200).json({ success: "successfully deleted",deletePost });
    });
  });

  //get specific post
  router.get("/post/:id",(req,res)=>{
    let postId = req.params.id;
    Posts.findById(postId,(err,post)=>{
        if(err){
            return res.status(400).json({success:false})
        }
        return res.status(200).json({
            success:true,
            post
        })
    })

  }

  )

module.exports = router;