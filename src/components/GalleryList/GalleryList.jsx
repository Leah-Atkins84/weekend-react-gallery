import GalleryItems from "../GalleryItems/GalleryItems";

function GalleryList ({list}) {
    return(
        <>
            {list.map(gallery =>
            <GalleryItems 
                key = {gallery.id}
                imgSrc = {gallery.path}
                description = {gallery.description}
                likes = {gallery.likes}/>
            )}
        </>

    )
    
}

export default GalleryList;