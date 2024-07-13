import React from 'react';
import PhotoItem from './PhotoItem';
import './PhotoGrid.css';

function PhotoGrid({ photos }) {
  return (
    <div className="photo-grid">
      {photos.map(photo => (
        <PhotoItem key={photo.id} photo={photo} />
      ))}
    </div>
  );
}

export default PhotoGrid;
