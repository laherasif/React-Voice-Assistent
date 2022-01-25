import { AppBar, Typography, Toolbar } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
const useStyle = makeStyles(() => ({
    title: {
        fontSize: '20px',
        fontWeight: 'bold',
        textAlign: 'center'
    }
}))
function Header() {
    const classes = useStyle()
    return (
        <>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" className={classes.title}>
                        News
    </Typography>
                </Toolbar>
            </AppBar>
        </>
    )
}

export default Header
