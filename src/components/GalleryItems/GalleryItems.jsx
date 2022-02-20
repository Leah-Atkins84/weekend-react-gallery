import { useState } from "react";

function GalleryItems ({id, imgSrc, description, likes, putLikes}) {
    console.log(id, imgSrc, description, likes);
   
    const [toggle, setToggle] = useState(true);
    
    const toggleItem = () => setToggle(!toggle);

    const handleClick = () =>{
        console.log('liked!!!' );
        putLikes(id);
      }
   
    return(
        <>
            
            <div>
                <img src={imgSrc} alt={description}></img>
                <button onClick={handleClick}>Like</button>
                <p> {likes} </p>

            </div>
        
        </>

    )
}

export default GalleryItems;