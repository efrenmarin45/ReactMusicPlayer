import { Typography, Avatar, IconButton, makeStyles, useMediaQuery } from '@material-ui/core';
import { Delete } from '@material-ui/icons';
import React from 'react';

function QueuedSongList(){
    const greaterThanMD = useMediaQuery(theme => theme.breakpoints.up('md'));

    const song = {
        title: "Aqua Level",
        artist: "Donkey Kong",
        thumbnail: "https://i.ytimg.com/vi/5qap5aO4i9A/hq720_live.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCjvGK1gm6j9dzv7zj0BmuZ9fR2hA"
    }

    return greaterThanMD && (
        <div style={{margin: '10px 0'}}>
            <Typography color="textSecondary" variant="button">
                QUEUE (5)
            </Typography>
            {Array.from({ length: 5 }, () => song).map((song, i) => (
                <QueuedSong key={i} song={song} />
            ))}
        </div>
    )
};

const useStyles = makeStyles({
    avatar: {
        width: 44,
        height: 44
    },
    text: {
        textOverflow: "elipsis",
        overflow: "hidden"
    },
    container: {
        display: "grid",
        gridAutoFlow: "column",
        gridTemplateColumns: "50px auto 50px",
        gridGap: 12,
        alignItems: "center",
        marginTop: 10
    },
    songInfoContainer: {
        overflow: "hidden",
        whitespace: "nowrap"
    }
})

function QueuedSong({ song }){
    const classes = useStyles();
    const { thumbnail,  artist, title} = song
    return( 
        <div className={classes.container}>
            <Avatar src={thumbnail} alt="Song Thumbnail" className={classes.avatar} />
            <div className={classes.songInfoContainer}>
                <Typography variant="subtitle2" className={classes.text}>
                    {title}
                </Typography>
                <Typography color="textSecondary" variant="body2" className={classes.text}>
                    {artist}
                </Typography>
            </div>
            <IconButton>
                <Delete color="error" />
            </IconButton>
        </div>
    )
}

export default QueuedSongList;