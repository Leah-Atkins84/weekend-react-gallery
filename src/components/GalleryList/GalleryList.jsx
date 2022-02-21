
import GalleryItems from "../GalleryItems/GalleryItems";
import "../GalleryList/GalleryList.css";
// List of all the features of my gallery
function GalleryList ({list, putLikes}) {
    return(
        <>
        <div className = "gallery-list">
            {list.map(gallery =>
            <GalleryItems 
                key = {gallery.id} //id the feature
                id = {gallery.id}//# Project Name

                [Project Instructions](./INSTRUCTIONS.md), this line may be removed once you have updated the README.md
                
                ## Description
                
                Your project description goes here. What problem did you solve? How did you solve it?
                
                Additional README details can be found [here](https://github.com/PrimeAcademy/readme-template/blob/master/README.md).
                
                # Weekend SQL ToDo list
                
                ## Description
                * Todo list fullstack application. Allows the user to add tasks to a todo list. Tasks are stored inside of a database (SQL).
                * Each Task has an option to 'Complete' or 'Delete'.
                * When a Task is complete, its visual representation changes on the front end. 
                * Whether or not a Task is complete should is also stored in the database.
                * Deleting a Task removes it both from the front end as well as the Database.
                
                ## Built With
                * Javascript
                * Html5
                * CSS3
                * jQuery
                * Node
                * Express
                * Ajax
                * Postico
                * SQL
                
                ## Acknowledgement
                I would like to thank Prime Digital Academy who equipped and helped me to make this application a reality.
                
                ## Support
                If you have suggestions or issues, please email me at leah.atkins84@gmail.c  
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