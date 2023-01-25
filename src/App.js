import Form from './components/form/Form';
import Posts from './components/posts/Posts';
import { AppBar, Container, Grow, Typography, Grid } from '@mui/material';
import './App.css';
import socialMedia from './images/social_media.png';

function App() {
  return (
    <>
      <Container maxWidth="lg">
        <AppBar className="appBar" position="static" color="inherit">
          <div className="appBar-content">
            <Typography className='heading' variant='h5' align='center'>Public Posts</Typography>
            <img className='image' src={socialMedia} alt="post" height="80"/>
          </div>
        </AppBar>
        <Grow in>
            <Container>
              <Grid container justify="space-between" alignItems="stretch" spacing={3}>
                  <Grid item xs={12} sm={7}>
                      <Posts />
                  </Grid>
                  <Grid item xs={12} sm={4}>
                    <Form />
                  </Grid>
              </Grid>
            </Container>
        </Grow>
      </Container>
    </>
  );
}

export default App;
