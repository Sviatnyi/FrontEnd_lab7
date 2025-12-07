import React, { useState } from 'react';

function Image() {
  // Список картинок
  const [images, setImages] = useState([{ id: 1, width: 600 }]);

  // Додати картинку
  const addImage = () => {
    const newImage = { id: Date.now(), width: 600 };
    setImages([...images, newImage]);
  };

  // Збільшити
  const increaseSize = () => {
    const updatedImages = images.map(img => ({
      ...img,
      width: Math.round(img.width * 1.2)
    }));
    setImages(updatedImages);
  };

  // Зменшити
  const decreaseSize = () => {
    const updatedImages = images.map(img => ({
      ...img,
      width: Math.max(100, Math.round(img.width * 0.8)) 
    }));
    setImages(updatedImages);
  };

  // Видалити
  const deleteImage = () => {
    setImages(images.slice(0, -1));
  };

  return (
    <div className="image-block">
      <div id="image-container">
        {images.map((img) => (
          <div key={img.id} className="image-wrapper">
             <a href="https://www.muenchen.de/en/home" target="_blank" rel="noreferrer">
                {}
                <img 
                    src="/Munich.jpg" 
                    alt="Фото Мюнхена" 
                    style={{ width: `${img.width}px` }} 
                />
            </a>
          </div>
        ))}
      </div>

      <div className="image-controls">
        <button onClick={addImage}>Додати</button>
        <button onClick={increaseSize}>Збільшити</button>
        <button onClick={decreaseSize}>Зменшити</button>
        <button onClick={deleteImage}>Видалити</button>
      </div>
    </div>
  );
}

export default Image;