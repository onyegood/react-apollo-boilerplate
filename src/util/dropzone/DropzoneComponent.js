import React from 'react';
import Dropzone from 'react-dropzone';
import '../../App.css';

const DropzoneComponent = ({ onDrop }) => {
  return (
    <>
      <Dropzone onDrop={onDrop} multiple maxSize={8000000}>
        {({ getRootProps, getInputProps }) => (
          <div
            {...getRootProps()}
            className='dropzone-style' >
            <input {...getInputProps()} />
            <p>Drag 'n' drop some files here, or click to select files</p>
          </div>
        )}
      </Dropzone>
    </>
  )
}

export default DropzoneComponent;