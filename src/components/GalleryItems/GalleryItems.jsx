function GalleryItems ({imgSrc, description, likes}) {
    console.log(imgSrc, description, likes);
    return(
        <>
            {/* <p>Gallery goes here</p>

            <img src={"images/goat_small.jpg"}/> */}
            <div>
                <img src={imgSrc} alt={description}></img>
                <button>Like</button>
                <p> {likes} </p>

            </div>
        
        </>

    )
}

export default GalleryItems;