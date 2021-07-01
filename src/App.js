import React, { useState } from 'react';
import './styles.css';
import imagesArr from './imageData.js'

export default function App() {

  const [bigPhoto, setBigPhoto] = useState(imagesArr[0]);

  // CREATE A HANDLE CLICK FUNCTION THAT ACCEPTS AN IMAGE URL
  // THE FUNCTION SHOULD CALL setBigImage AND PASS IT THE URL
  function handleClick(imageURL) {
    setBigPhoto(imageURL);
  }

  // CREATE A VARIABLE CALLED images THAT LOOPs OVER THE imagesArr AND RETURNS AN <IMG> ELEMENT
  // ASSIGN ALL OF THE PROPERTIES THAT IT NEEDS: src, alt, className, key
  // ALSO ASSIGN AN onClick EVENT THAT CALL THE HANDLE EVENT AND PASSES IT THE IMG URL

  return (
    <div className="App">
      <h1>Cities Of The World</h1>
      <div id="wrapper">

        <img src={bigPhoto} id="bigimage" alt='bigImage' />

        <div id="thumbnails">
          {imagesArr.map((city, i) => (
            <img src={city.img} className="thumb" key={i} onClick={() => handleClick(city.img)} />
          ))}
        </div>
      </div>
    </div>
  );
}
