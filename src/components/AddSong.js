import { InputAdornment, TextField, Button } from '@material-ui/core';
import { AddBoxOutlined, Link } from '@material-ui/icons';
import React from 'react';

function AddSong(){
    return(
        <div>
            <TextField 
                placeholder="Add YouTube/Soundcloud URL"
                fullWidth
                margin="normal"
                type="url"
                InputProps={{
                    startAdornment: (
                        <InputAdornment>
                            <Link />
                        </InputAdornment>
                    )
                }}
            />
            <Button 
                variant="contained" 
                color="primary"
                endIcon={<AddBoxOutlined />}>
                Add
            </Button>
        </div>
    )
};

export default AddSong;