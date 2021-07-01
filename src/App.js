import React, { useState } from 'react';
import './styles.css';
import imagesArr from './imageData.js'

export default function App() {

  let currentHeader = "Cities of the World";
  let [bigPhoto, setBigPhoto] = useState(imagesArr[0].img);
  let [cityName, setCityName] = useState(imagesArr[0].city);

  function handleClick(imageURL,imageCaption) {
    setBigPhoto(imageURL);
    setCityName(imageCaption);
  }

  //handleClick(imagesArr[0].img,imagesArr[0].city);

  //bigPhoto = imagesArr[0].img;

  return (
    <div className="App">
      <h1>{cityName}</h1>
      <div id="wrapper">

        <img src={bigPhoto} id="bigimage" alt='bigImage' />

        <div id="thumbnails">
          {imagesArr.map((city, i) => (
            <img src={city.img} className="thumb" key={i} onClick={() => handleClick(city.img, city.city)} />
          ))}
        </div>
      </div>
    </div>
  );
}
