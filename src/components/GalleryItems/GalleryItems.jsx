import { useState } from "react";
import "../GalleryItems/GalleryItems.css";

function GalleryItems ({id, imgSrc, description, likes, putLikes}) {
    console.log(id, imgSrc, description, likes);
   
    

    const handleClick = () =>{
        console.log('liked!!!' );
        // changes like count when clicked
        putLikes(id);
      }

    const [toggle, setToggle] = useState(true);
    
    const toggleItem = () => setToggle(!toggle);

   
    return(
        <>
           <div className = "gallery-items"> 
                 {/* toggle the description when clicked */}
               {toggle ? (    
                   <div className = "image-box">
                       <img id={id} src={imgSrc} alt={description} onClick={() => toggleItem()}/>
                    </div>):
                    (<div className="image-box" onClick={() => toggleItem()}>
                            <p>{description}</p>
                        </div>
                    )
               }  
                    {/*when clicked, = 'liked' */} 
                 <button onClick={handleClick}>Like</button>
                        <p> {likes} </p>

               </div> 
        
        </>

    )
}

export default GalleryItems;