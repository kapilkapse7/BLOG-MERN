//THIS FILE IS TO WRITE ALL THE CODE TO HANDEL ROUTE REQUESTS

import  express from "express";

import { getPosts, createPost } from "../controllers/posts.js";

const router =express();

router.get("/",getPosts);
router.get("/",createPost);

export default router;