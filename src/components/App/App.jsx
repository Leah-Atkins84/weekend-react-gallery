import React from 'react';
import './App.css';
import axios from 'axios';
import {useState, useEffect} from 'react';
import GalleryItems from '../GalleryItems/GalleryItems';

function App() {
  
  const [getGalleryItems, setGalleryPics] = useState ([]);

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
  console.log(getGalleryItems);
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of My Life</h1>
        </header>
        <p>Gallery goes here</p>
        <img src="images/goat_small.jpg"/>
      </div>
    );





}

export default App;
