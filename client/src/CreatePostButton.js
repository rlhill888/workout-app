import React, {useState} from "react";
import CreatePost from "./CreatePost";

function CreatePostButton(){

    const [showCreatePost, setShowCreatePost]= useState(false)

    
    let createPostContent

    if(showCreatePost===false){
        createPostContent=
               <button onClick={setShowCreatePost(true)}>Create Post</button>
           
       }

    
    if(showCreatePost===true){
     createPostContent= <div>
            <button onClick={setShowCreatePost(false)}>Close Create Post Form</button>
            <CreatePost />
        </div>
    }


    return(

        <> 
        {createPostContent}
        </>
    )

}

export default CreatePostButton


