import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Tooltip from 'macoolka-ui-components/lib/Tooltip';
import IconButton from 'macoolka-ui-components/lib/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import { useAppConstant, useAppStyle } from '../AppContext'
const useStyles = makeStyles(theme => ({


    navIconHide: {
        [theme.breakpoints.up('lg')]: {
            display: 'none',
        },
    },

}));
export default () => {
    const classes = useStyles()
    const { openDrawer } = useAppConstant()
    const { toggleNav } = useAppStyle()
    return (

        <Tooltip title={openDrawer} enterDelay={300}>
            <IconButton
                edge="start"
                color="inherit"
                aria-label={openDrawer}
                onClick={()=>toggleNav()}
                className={classes.navIconHide}
            >
                <MenuIcon />
            </IconButton>
        </Tooltip>

    )
}