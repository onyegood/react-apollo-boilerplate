import React from 'react';
import { Image, Video, Transformation, CloudinaryContext } from 'cloudinary-react';

const ImageLoaderComponent = ({ public_id }) => {
  return (
    <CloudinaryContext cloudName="your_cloud_name_here">
      <>
        <Image publicId={public_id} width="50" crop="scale" />
      </>
      <Image publicId={public_id} width="0.5" />
    </CloudinaryContext>
  )
}

export default ImageLoaderComponent;