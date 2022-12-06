import React, { useState } from "react";
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import Input from '@mui/material/Input';
import Slider from '@mui/material/Slider';
import { Button } from "@mui/material";
import axios from "axios";



const marks = [
    {
      value: 0,
      label: '0%',
    },
    {
      value: 20,
      label: '8%',
    },
    {
      value: 37,
      label: '37%',
    },
    {
      value: 100,
      label: '100%',
    },
  ];

  function valuetext(value: number) {
    return `${value}%`;
  }

export default function Create() {

  const [name, setName] = useState("")
  const [link, setLink] = useState("")
  const [price, setPrice] = useState("")
  const [description, setDescription] = useState("")
  const [alcohol, setAlcohol] = useState("37")


  const handleSave = (e) =>{
    console.log("clicked")
    e.preventDefault();
    const data = {
      name:name,
      description:description,
      price:parseInt(price),
      alcohol:alcohol,
      imageLink:link
    }
    axios.post('http://127.0.0.1:8000/post/save',data).then((res)=>{
      console.log(res)
      if (res.data.success){
        setName(" ")
        setAlcohol("37")
        setDescription("")
        setPrice("")
        setLink("")
      }
    })
    console.log(data)
  


  }
  
  return (
    <div>
      <Box sx={{ flexGrow: 1}} >
        <Grid
          container
          spacing={{ xs: 0, md: 0 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
            <Grid item xs={3} sm={3} md={3} ></Grid>
            <Grid item xs={6} sm={6} md={6} >
       <Box sx={{
         border:"1px solid " ,
         p:10,
         background: " rgba( 253, 253, 253, 0.1 )",
        boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
        backdropFilter: "blur( 10px )",
        borderRadius: "10px",
        border: "1px solid rgba( 255, 255, 255, 0.18 )",
        color:'white',
       // maxWidth: 240 , 
       // margin:"8px" ,
       // minHeight:"10px",
       // marginLeft:"15%",
        paddingBottom:"10px"


        

    
    }}>
        <Grid container>
            
            <Grid tem xs={12} md={12} >
            <TextField fullWidth id="standard-basic" label="Name" variant="standard" value={name}  onChange={(e)=> {setName(e.target.value)}}/>
            </Grid>
            <Grid tem xs={12} md={12} >
            <TextField fullWidth id="standard-basic" label="Image Link" variant="standard" value={link} onChange={(e)=> {setLink(e.target.value)}} />
            </Grid>
            <Grid tem xs={12} md={12} >
            <TextField fullWidth id="standard-basic" label="Description" variant="standard" value={description} onChange={(e)=> {setDescription(e.target.value)}} />
            </Grid>

            <Grid tem xs={12} md={12} >
            <FormControl fullWidth sx={{ }} variant="standard">
        <InputLabel htmlFor="standard-adornment-amount">Amount</InputLabel>
        <Input
        onChange={(e)=> {setPrice(e.target.value)}}
          id="standard-adornment-amount"
          value={price}

         // value={}
          //onChange={('amount')}
          startAdornment={<InputAdornment position="start">Rs</InputAdornment>}
        />
      </FormControl>
            </Grid>
            <Grid tem xs={12} md={12} >
            <Slider
        aria-label="Always visible"
        defaultValue={alcohol}
        onChange={(e)=> {setAlcohol(e.target.value)}}
        getAriaValueText={valuetext}
        //step={10}
        marks={marks}
        valueLabelDisplay="on"
      />


            </Grid>
            

        </Grid>
        <Grid sx={{p:10}}>
          <Button onClick={handleSave} fullWidth variant="outlined">Submit</Button>
        </Grid>
       
       </Box>
            </Grid>
            <Grid item xs={3} sm={3} md={3} >

              
            </Grid>
        
        </Grid>
      </Box>
    </div>
  );
}
