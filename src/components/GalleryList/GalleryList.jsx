import GalleryItems from "../GalleryItems/GalleryItems";

function GalleryList ({list, putLikes}) {
    return(
        <>
            {list.map(gallery =>
            <GalleryItems 
                key = {gallery.id}
                id = {gallery.id}
                imgSrc = {gallery.path}
                description = {gallery.description}
                likes = {gallery.likes}
                putLikes = {putLikes}/>
            )}
        </>

    )
    
}

export default GalleryList;