import React from 'react';
import InputFormLocal from './InputFormLocal';
import InputFormRemote from './InputFormRemote';

const getMedia = async () => {
  const constraints = { audio: true, video: true };

  try {
    return await navigator.mediaDevices.getUserMedia(constraints);
    /* use the stream */
  } catch (err) {
    /* handle the error */
    console.error("------------------------", err);
  }
}

getMedia();

const App = () => {
  return <>
    <InputFormLocal />
    <InputFormRemote />
  </>
}

export default App;
