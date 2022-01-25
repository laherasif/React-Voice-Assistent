import { Card, Typography, CardActions, CardContent, Button, Grid , Container } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
const useStyle = makeStyles((theme)=>({

}))
function Mian() {
    return (
        <Container>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={3} md={3} lg={3}  >
                    <Card>
                        <CardContent>
                            <Typography variant="h5">Latest News</Typography>
                            <Typography variant="h6">News By Catagory</Typography>
                            <Typography variant="body2" color="textPrimary" component="p">BBC , NNC , BBC , NNC</Typography>
                        </CardContent>
                        <CardActions>
                            <Button color="primary"> explore more </Button>
                        </CardActions>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={3} md={3} lg={3} >
                    <Card>
                        <CardContent>
                            <Typography variant="body2" color="textPrimary" component="h2">Latest News</Typography>
                            <Typography variant="body2" color="textPrimary" component="h3">News By Catagory</Typography>
                            <Typography variant="body2" color="textPrimary" component="p">BBC , NNC , BBC , NNC</Typography>
                        </CardContent>
                        <CardActions>
                            <Button color="primary"> explore more </Button>
                        </CardActions>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={3} md={3} lg={3} >
                    <Card>
                        <CardContent>
                            <Typography variant="body2" color="textPrimary" component="h2">Latest News</Typography>
                            <Typography variant="body2" color="textPrimary" component="h3">News By Catagory</Typography>
                            <Typography variant="body2" color="textPrimary" component="p">BBC , NNC , BBC , NNC</Typography>
                        </CardContent>
                        <CardActions>
                            <Button color="primary"> explore more </Button>
                        </CardActions>
                    </Card>
                </Grid>
                

            </Grid>
        </Container>
    )
}

export default Mian
