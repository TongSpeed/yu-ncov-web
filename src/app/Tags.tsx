import React from 'react'
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Box, { BoxProps } from '@material-ui/core/Box'
import clsx from 'clsx';
const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            display: 'flex',
            justifyContent: 'center',
            flexWrap: 'wrap',
            '& > *': {
                margin: theme.spacing(0.5),
            },
        },
    }),
);
const BookIndex: React.SFC<{ size?: 'small' | 'medium' | 'large', src: string, scale?: boolean } & BoxProps> =
    ({ size = 'medium', src, scale = true, ...others }) => {
        const classes = useStyles();

        return <Box className={clsx(
            (classes as any)['size.' + size],

        )} {...others}><img  src={src} />
        </Box>

    }
export default BookIndex