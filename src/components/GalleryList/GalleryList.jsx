import GalleryItems from "../GalleryItems/GalleryItems";
import "../GalleryList/GalleryList.css";

function GalleryList ({list, putLikes}) {
    return(
        <>
        <div className = "gallery-list">
            {list.map(gallery =>
            <GalleryItems 
                key = {gallery.id}
                id = {gallery.id}
                imgSrc = {gallery.path}
                description = {gallery.description}
                likes = {gallery.likes}
                putLikes = {putLikes}/>
            )}
        </div>
        </>

    )
    
}

export default GalleryList;