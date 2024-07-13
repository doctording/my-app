import React from 'react';
import './PhotoItem.css';

function PhotoItem({ photo }) {
  return (
    <div className="photo-item">
      <img src={photo.src} alt={photo.title} />
      <p>{photo.title}</p>
    </div>
  );
}

export default PhotoItem;
