import React from 'react';
import './App.css';
import axios from 'axios';
import {useState, useEffect} from 'react';
// import GalleryItems from '../GalleryItems/GalleryItems';
import GalleryList from '../GalleryList/GalleryList';

function App() {
  
  const [galleryItems, setGalleryPics] = useState ([]);

  useEffect( () =>{
    getPics();
  }, []);

//- Use `axios` to retrieve (`GET`) data from to `/gallery` and store it in `App.jsx`
  const getPics = () => {
    axios({
      method: 'GET',
      url: '/gallery'
    })
      .then( (response) => {
        console.log('Entire response:', response);
        setGalleryPics(response.data);
      })
      .catch(function (error) {
        console.log('Error on get:', error);
      });
  }
  //console.log(getGalleryItems[0].id);
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of My Life</h1>
        </header>
        <GalleryList list = {galleryItems}/>
      </div>
    );





}

export default App;
