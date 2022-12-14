/* eslint-disable no-unused-vars */
import { InputAdornment, makeStyles, Paper, Toolbar } from '@material-ui/core';
import { Search } from '@material-ui/icons';
import React from 'react';
import Controls from '../../../components/controls/Controls';


const Styles = makeStyles(theme => ({
    pageContent: {
        margin: theme.spacing(1),
        padding: theme.spacing(1)
    },
    searchInput: {
        width: '50%',
        right: '1rem'
    },
}))

function searchProduct(props) {
    const classes = Styles();

    return (
        <>
            <Paper >
                <Toolbar>
                    <Controls.Input
                        label="Search batch number"
                        InputProps={{
                            startAdornment: (<InputAdornment position="start">
                                <Search />
                            </InputAdornment>)
                        }}
                    />
                </Toolbar> 
            </Paper>
            <Paper>
                 
            </Paper>
            
        </>
    );
}

export default searchProduct;