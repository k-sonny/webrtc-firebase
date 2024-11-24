import * as React from 'react';


const VideoLocal = () => {
    const videoRef = React.useRef(null);
    const currentVideoRef = videoRef.current;

    React.useEffect(() => {
        if (currentVideoRef === null) return;

        const getMedia = async () => {
            const constraints = { audio: true, video: true };

            try {
                const mediaStream = await navigator.mediaDevices.getUserMedia(constraints);
                currentVideoRef.srcObject = mediaStream;
            } catch (err) {
                console.error("------------------------", err);
            }
        }

        getMedia();
    }, [currentVideoRef]);
    return <>

    </>
}

export default VideoLocal;