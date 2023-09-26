//THIS FILE IS TO WRITE ALL THE CODE TO HANDEL ROUTE REQUESTS

import  express from "express";

import { getPosts, createPost, updatePost,deletePost, likePost } from "../controllers/posts.js";

const router =express();

router.get("/",getPosts);
router.post("/",createPost);
router.patch('/:id', updatePost);
router.delete("/:id" ,  deletePost);
router.patch("/:id/likePost" , likePost);
export default router;