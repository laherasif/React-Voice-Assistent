import React from 'react'
import { AppBar, Typography, Toolbar } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
const useStyle = makeStyles(() => ({
    title: {
        fontSize: '20px',
        fontWeight: 'bold',
        display:'flex',
        alignItems:'center',
        textAlign: 'center',
        justifyContent: 'center'
    },
    name: {
        color: 'red',
        fontSize: '20px',
        fontWeight: 'bold',
        paddingLeft:'10px'
    }
}))
function Footer() {
    const classes = useStyle()

    return (
        <>
            <AppBar position="static">
                    <Typography variant="h6" className={classes.title}>
                        CopyWrite and Develop by
                        <Typography className={classes.name}> Laher asif</Typography>
                    </Typography>
            </AppBar>
        </>
    )
}

export default Footer
