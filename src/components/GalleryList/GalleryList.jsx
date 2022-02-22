
import GalleryItems from "../GalleryItems/GalleryItems";
import "../GalleryList/GalleryList.css";
// List of all the features of my gallery
function GalleryList ({list, putLikes}) {
    return(
        <> 
        
        <div className = "gallery-list">
            {list.map(gallery =>
            <GalleryItems  // loop over galleryItems on the dom
                key = {gallery.id} //id the feature
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