import React from "react";


function PostCardTemplate({title, description, image}){


    return(
        <> 
        <div>
            <h1>{title}</h1>
            <br />
            <br />
            <img src={image} height='400' width='500'></img>
            <br />
            <br />
            <h2>{description}</h2>
            <br />
            <br />
            <p> Likes</p>
            <img src='https://pic.onlinewebfonts.com/svg/img_530230.png' height='50' width='50'></img>
            <p> Dislikes</p>
            <img src='http://cdn.onlinewebfonts.com/svg/img_530229.png' height='50' width='50'></img>
        </div>
        </>
    )
}


export default PostCardTemplate