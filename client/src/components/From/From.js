import React,{useState, useEffect} from "react";
import useStyles from "./styles"
import { TextField , Button, Typography, Paper } from "@material-ui/core";
import FileBase from "react-file-base64";
import { useDispatch ,useSelector} from "react-redux";
// import { createPost } from "../../api";
// import { useSelector } from "react-redux"
import { createPost, updatePost } from "../../actions/posts"



const Form =( {currentId,setCurrentId} )=>{
    const classes = useStyles();
    const [postData,setPostData]=useState({ creator:"",title:"",message:"",tags:"",selectedFile:""});
    const post = useSelector((state) => (currentId ? state.posts.find((message) => message._id === currentId) : null));
    // const post = useSelector((state)=> currentId ? state.posts.find((message)=>message._id ===currentId) : null);
    const dispatch=useDispatch();

    useEffect(()=>{
        if(post) setPostData(post);
    },[post])

    const handelSubmit=(e)=>{
        e.preventDefault();

        if(currentId!==0){
            dispatch(updatePost(currentId , postData));
            
            console.log(postData);

        }else{
            dispatch(createPost(postData));
        }
        clear();

        
    }
    const clear=()=>{
        setCurrentId(null);
        setPostData({ creator:"",title:"",message:"",tags:"",selectedFile:""})

    }

    return(
        <Paper className="classes.paper">
            <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handelSubmit}>
                <Typography variant="h6">{currentId ? 'Editing' : 'Creating' } a memory</Typography>
                <TextField name="creator" variant="outlined" label = "Creator" fullWidth  value={postData.creator} onChange={(e)=>setPostData({...postData, creator:e.target.value})} /> {/* using ... to spread all acrosss and kapt all other data same insted of only adding one to db we will keep all other data same */}
                <TextField name="title" variant="outlined" label = "Title" fullWidth  value={postData.title} onChange={(e)=>setPostData({...postData, title:e.target.value})} />
                <TextField name="message" variant="outlined" label = "Message" fullWidth  value={postData.message} onChange={(e)=>setPostData({...postData, message:e.target.value})} />
                <TextField name="tags" variant="outlined" label = "Tags" fullWidth  value={postData.tags} onChange={(e)=>setPostData({...postData, tags:e.target.value})} /> 
                <div className={classes.fileInput}> <FileBase  type="file" multiple={false} onDone={({base64})=>setPostData({ ...postData,selectedFile:base64})} /> </div>
                <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>Submit</Button>
                <Button  variant="contained" color="secondary" size="small" onClick={clear} fullWidth>Clear</Button>
            </form>
        </Paper>
    );
}

export default Form;