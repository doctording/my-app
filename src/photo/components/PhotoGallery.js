import React from 'react';
import PhotoGrid from './PhotoGrid';

const photos = [
    { id: 1, src: "https://www.baidu.com/img/PCtm_d9c8750bed0b3c7d089fa7d55720d6cf.png", title: 'Photo 1' },
    { id: 2, src: "https://www.baidu.com/img/PCtm_d9c8750bed0b3c7d089fa7d55720d6cf.png", title: 'Photo 2' },
  // 添加更多照片
];

function PhotoGallery() {
  return (
    <div>
      <h1>My Photo Gallery</h1>
      <PhotoGrid photos={photos} />
    </div>
  );
}

export default PhotoGallery;
