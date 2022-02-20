function GalleryItems ({id, imgSrc, description, likes, putLikes}) {
    console.log(id, imgSrc, description, likes);
   
    const handleClick = () =>{
        console.log('liked!!!' );
        putLikes(id);
      }
   
    return(
        <>
            {/* <p>Gallery goes here</p>

            <img src={"images/goat_small.jpg"}/> */}
            <div>
                <img src={imgSrc} alt={description}></img>
                <button onClick={handleClick}>Like</button>
                <p> {likes} </p>

            </div>
        
        </>

    )
}

export default GalleryItems;