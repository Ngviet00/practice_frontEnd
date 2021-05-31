import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import blog1 from './../../image/blog-post-1.jpg';
import blog2 from './../../image/blog-post-2.jpg';
import blog3 from './../../image/blog-post-3.jpg';
import './News.css';

const useStyles = makeStyles((theme) => ({
   icon: {
      marginRight: theme.spacing(2),
   },
   heroContent: {
      backgroundColor: theme.palette.background.paper,
      padding: theme.spacing(8, 0, 6),
   },
   heroButtons: {
      marginTop: theme.spacing(4),
   },
   cardGrid: {
      paddingTop: theme.spacing(8),
      paddingBottom: theme.spacing(8),
   },
   card: {
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
   },
   cardMedia: {
      paddingTop: '56.25%',
   },
   cardContent: {
      flexGrow: 1,
   },
   footer: {
      backgroundColor: theme.palette.background.paper,
      padding: theme.spacing(6),
   },
}));

function News() {
   const classes = useStyles();
   return (
      <div className="news wrapper_container" id="blog">
         <h1 style={{ fontWeight: 'bold', fontSize: '4vw' }} className="text-center">Helpful resources</h1>
         <p style={{ fontSize: '1rem' }} className="text-center">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt optio officiis dolore earum error eaque perferendis laudantium sed.</p>
         <main>
            <Container className={classes.cardGrid} maxWidth="md">
               <Grid container spacing={4}>
                  <Grid className="news__item" item xs={12} sm={6} md={4}>
                     <Card className={classes.card}>
                        <CardMedia
                           className={classes.cardMedia}
                           image={blog1}
                           title="Image title"
                        />
                        <CardContent className={classes.cardContent}>
                           <Box fontWeight="fontWeightBold" fontSize={22} mt={1} mb={1}>
                              5 React Custom Hooks You Should Start Using
                           </Box>
                           <Typography>
                              Amet facilisis magna etiam tempor orci eu lobortis. Pharetra pharetra massa massa ultricies. Phasellus egestas tellus rutrum tellus pellentesque. Morbi blandit cursus risus at.
                              </Typography>
                        </CardContent>
                     </Card>
                  </Grid>

                  <Grid className="news__item" item xs={12} sm={6} md={4}>
                     <Card className={classes.card}>
                        <CardMedia
                           className={classes.cardMedia}
                           image={blog2}
                           title="Image title"
                        />
                        <CardContent className={classes.cardContent}>
                           <Box fontWeight="fontWeightBold" fontSize={22} mt={1} mb={1}>
                              5 Reasons why you should learn ReactJS
                           </Box>
                           <Typography>
                              Amet facilisis magna etiam tempor orci eu lobortis. Pharetra pharetra massa massa ultricies. Phasellus egestas tellus rutrum tellus pellentesque. Morbi blandit cursus risus at.
                              </Typography>
                        </CardContent>
                     </Card>
                  </Grid>

                  <Grid className="news__item" item xs={12} sm={6} md={4}>
                     <Card className={classes.card}>
                        <CardMedia
                           className={classes.cardMedia}
                           image={blog3}
                           title="Image title"
                        />
                        <CardContent className={classes.cardContent}>
                           <Box fontWeight="fontWeightBold" fontSize={22} mt={1} mb={1}>
                              11 Awesome Resources To Bring Your React App
                           </Box>
                           <Typography>
                              Amet facilisis magna etiam tempor orci eu lobortis. Pharetra pharetra massa massa ultricies. Phasellus egestas tellus rutrum tellus pellentesque. Morbi blandit cursus risus at.
                              </Typography>
                        </CardContent>
                     </Card>
                  </Grid>
               </Grid>
            </Container>
         </main>
      </div>
   )
}

export default News
