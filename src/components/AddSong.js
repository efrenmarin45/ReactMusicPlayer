import { InputAdornment, TextField, Button, Dialog, DialogTitle, DialogContent, DialogActions, makeStyles } from '@material-ui/core';
import { AddBoxOutlined, Link } from '@material-ui/icons';
import cassettePhoto from '../cassette.jpg';
import React, { useState } from 'react';

const useStyles = makeStyles(theme => ({
    container: {
        display: "flex",
        alignItems: "center"
    },
    urlInput: {
        margin: theme.spacing(1)
    },
    addSongButton: {
        margin: theme.spacing(1)
    },
    dialog: {
        textAlign: "center"
    },
    thumbnail: {
        width: "90%"
    }
}))

function AddSong(){
    const classes = useStyles();
    const [dialog, setDialog] = useState(false);

    function handleCloseDialog(){
        setDialog(false)
    }

    return(
        <div className={classes.container}>
            <Dialog
                className={classes.dialog}
                open={dialog}
                onClose={handleCloseDialog}
            >
                <DialogTitle>Edit Song Details</DialogTitle>
                <DialogContent>
                    <img className={classes.thumbnail} src={cassettePhoto} alt="Song Thumbnail" />
                    <TextField 
                        margin="dense"
                        name="title"
                        label="Title"
                        fullWidth
                    />
                    <TextField 
                        margin="dense"
                        name="artist"
                        label="Artist"
                        fullWidth
                    />
                    <TextField 
                        margin="dense"
                        name="thumbnail"
                        label="Thumbnail"
                        fullWidth
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleCloseDialog} color="secondary">
                        Cancel
                    </Button>
                    <Button variant="outlined" color="primary">
                        Add AddSong
                    </Button>
                </DialogActions>
            </Dialog>
            <TextField
                className={classes.urlInput} 
                placeholder="Add YouTube/Soundcloud URL"
                fullWidth
                margin="normal"
                type="url"
                InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                            <Link />
                        </InputAdornment>
                    )
                }}
            />
            <Button
                className={classes.addSongButton} 
                onClick={() => setDialog(true)}
                variant="contained" 
                color="primary"
                endIcon={<AddBoxOutlined />}>
                Add
            </Button>
        </div>
    )
};

export default AddSong;