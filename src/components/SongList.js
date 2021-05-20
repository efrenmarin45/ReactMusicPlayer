import { CardActions, CardContent, CardMedia, CircularProgress, IconButton, Typography, Card, makeStyles } from '@material-ui/core';
import { PlayArrow, Save } from '@material-ui/icons';
import React from 'react';

function SongList(){
    let loading = false;

    const song = {
        title: "Aqua Level",
        artist: "Donkey Kong",
        thumbnail: "https://i.ytimg.com/vi/5qap5aO4i9A/hq720_live.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCjvGK1gm6j9dzv7zj0BmuZ9fR2hA"
    }

    if (loading){
        return(
            <div style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                marginTop: 50
            }}
            >
                <CircularProgress />
            </div>
        )
    }
    return (
        <div>
            {Array.from({ length: 10}, () => song).map((song, i) => (
                <Song key={i} song={song} />
            ))}
        </div>
    );
};

const useStyles = makeStyles(theme => ({
    container: {
        margin: theme.spacing(3)
    },
    songInfoContainer: {
        display: "flex",
        alignItems: "center"
    },
    songInfo: {
        width: "100%",
        display: "flex",
        justifyContent: "space-between"
    },
    thumbnail: {
        objectFit: "cover",
        width: 140,
        height: 140
    }
}))

function Song({song}){
    const {title, artist, thumbnail} = song
    const classes = useStyles();

    return (
        <Card className={classes.container}>
            <div className={classes.songInfoContainer}>
                <CardMedia className={classes.thumbnail} image={thumbnail} />
                <div className={classes.songInfo}>
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            {title}
                        </Typography>
                        <Typography variant="body1" component="p" color="textSecondary">
                            {artist}
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <IconButton size="small" color="primary">
                            <PlayArrow />
                        </IconButton>
                        <IconButton size="small" color="secondary">
                            <Save />
                        </IconButton>
                    </CardActions>
                </div>
            </div>
        </Card>
    )
}

export default SongList;