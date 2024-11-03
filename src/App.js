import React from 'react';
import Button from '@mui/material/Button';

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
  return <Button color="orange" variant="outlined">Hello, world!</Button>;
}

export default App;
