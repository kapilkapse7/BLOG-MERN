//THIS FILE IS TO WRITE ALL THE CODE TO HANDEL ROUTE REQUESTS

import  express from "express";

import { getPosts, createPost, updatePost } from "../controllers/posts.js";

const router =express();

router.get("/",getPosts);
router.post("/",createPost);
router.patch('/:id', updatePost);

export default router;