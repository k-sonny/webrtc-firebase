import React from 'react';



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
  return <div>Hello, React!</div>;
}

export default App;
