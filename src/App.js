import React, { useState } from 'react';
import './styles.css';
import imagesArr from './imageData.js'

export default function App() {

  let currentHeader = "Cities of the World";
  const [bigPhoto, setBigPhoto] = useState(imagesArr[0]);
  let [cityName, setCityName] = useState(imagesArr[0].city);

  function handleClick(imageURL,imageCaption) {
    setBigPhoto(imageURL);
    setCityName(imageCaption);
  }

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
