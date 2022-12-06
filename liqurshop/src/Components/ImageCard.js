import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
    height: 10,
    color:"orange",
    borderRadius: 5,
    [`&.${linearProgressClasses.colorPrimary}`]: {
      backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
    },
    [`& .${linearProgressClasses.bar}`]: {
      borderRadius: 5,
      backgroundColor: "orange",
    },
  }));

export default function ImageCard(props) {
  return (
    <Card sx={{ background: " rgba( 253, 253, 253, 0.1 )",
        boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
        backdropFilter: "blur( 20px )",
        borderRadius: "10px",
        border: "1px solid rgba( 255, 255, 255, 0.18 )",
        color:'white',
        maxWidth: 240 , margin:"8px" ,minHeight:"10px",
        // marginLeft:"15%",
        paddingBottom:"10px"
    }}
        
        >
        <div >
         
        <img src={props.image} style={{width:"250px", height:"220px", overflow:'hidden'}} />
        </div>
        <Grid sx={{ flexGrow: 1 ,pb:2,mt:2}} container spacing={0} >
        <Grid item xs={1}></Grid>
        <Grid align="left" item xs={7}>{props.name}</Grid>
        <Grid item xs={4}>Rs {props.price}</Grid>
      <Grid item xs={10}>
      <Box sx={{ margin:"5px" }}>
      <BorderLinearProgress variant="determinate" value={props.alcohol} color="success"  />
    </Box>
      </Grid>
      <Grid item xs={1}>
        {props.alcohol}%
      </Grid>
      </Grid>


      {/* <CardMedia
        component="img"
        alt="green iguana"
        image={props.image}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {props.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {props.description}
        </Typography>
      </CardContent>
      
     
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions> */}
    </Card>
  );
}