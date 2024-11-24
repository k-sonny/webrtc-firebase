import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import VideoLocal from './VideoLocal';
import VideoRemote from './VideoRemote';

const VideoArea = ({ localPeerName, remotePeerName }) => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid item xs={6}>
                    <VideoLocal localPeerName={localPeerName} ></VideoLocal>
                </Grid>
                <Grid item xs={6}>
                    {/* <VideoRemote remotePeerName={remotePeerName}></VideoRemote> */}
                </Grid>
            </Grid>
        </Box>
    );
}

export default VideoArea;