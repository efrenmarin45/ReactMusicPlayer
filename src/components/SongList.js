import { CircularProgress } from '@material-ui/core';
import React from 'react';

function SongList(){
    let loading = true;

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
};

export default SongList;