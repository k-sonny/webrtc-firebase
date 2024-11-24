import React, { useState } from 'react';
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
  const [localPeerName, setLocalPeerName] = useState('');
  const [remotePeerName, setRemotePeerName] = useState('');
  console.log({ localPeerName, remotePeerName })

  return <>
    <InputFormLocal
      localPeerName={localPeerName}
      setLocalPeerName={setLocalPeerName}
    />
    <InputFormRemote
      localPeerName={localPeerName}
      remotePeerName={remotePeerName}
      setRemotePeerName={setRemotePeerName}
    />
  </>
}

export default App;
