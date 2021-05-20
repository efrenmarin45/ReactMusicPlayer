import { Card, CardContent, CardMedia, Slider, Typography, IconButton } from '@material-ui/core';
import { PlayArrow, SkipNext, SkipPrevious } from '@material-ui/icons';
import React from 'react';
import QueuedSongList from './QueuedSongList';

function SongPlayer(){
    return(
        <>
            <Card variant="outlined">
                <div>
                    <CardContent>
                        <Typography variant="h5" component="h3">
                            Title
                        </Typography>
                        <Typography variant="subtitle1" component="p" color="textSecondary">
                            Artist
                        </Typography>
                    </CardContent>
                    <div>
                        <IconButton>
                            <SkipPrevious />
                        </IconButton>
                        <IconButton>
                            <PlayArrow />
                        </IconButton>
                        <IconButton>
                            <SkipNext />
                        </IconButton>
                        <Typography variant="subtitle1" component="p" color="textSecondary">
                            00:01:30
                        </Typography>
                    </div>
                    <Slider
                        type="range"
                        min={0}
                        max={1}
                        step={0.01}
                    />
                </div>
                <CardMedia image= "https://i.ytimg.com/vi/5qap5aO4i9A/hq720_live.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCjvGK1gm6j9dzv7zj0BmuZ9fR2hA" />
            </Card>
            <QueuedSongList />
        </>
    )
};

export default SongPlayer;