import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles({
   root: {
      position: 'relative',
      zIndex: 1,
      backgroundColor: 'F9FAFB',
      border: 'none'
   },
   title: {
      fontSize: 14,
   },
   pos: {
      marginBottom: 12,
   },
   // margin: {
   //    margin: 'auto'
   // },
   background: {
      backgroundColor: '#F9FAFB'
   },
   position: {
      position: 'relative',
      margin: '0px auto',
   },
   icon: {
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      color: 'white',
      fontSize: '30',
      position: 'absolute'
   }
});
function CardItem(props) {
   const classes = useStyles();
   const TheIcon = props.icon;
   const title = props.title;
   const text = props.text;
   return (
      <Card className={classes.root}>
         <CardContent className={classes.background}>
            <Typography component="div">
               <Box width={50} zIndex="3" className={classes.position} style={{ margin: 'auto' }} borderRadius={5} bgcolor="primary.main" height={50}>
                  <TheIcon className={classes.icon} />
               </Box>
               <Box textAlign="center" mt={3} mb={2} fontWeight="fontWeightBold" fontSize={22}>
                  {title}
               </Box>
               <Box fontSize={15} color="#90a4ae" textAlign="center">
                  {text}
               </Box>
            </Typography>
         </CardContent>
      </Card >
   )
}
export default CardItem
