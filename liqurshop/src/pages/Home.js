import React, { useState, useEffect } from "react";
import ImageCard from "../Components/ImageCard";
import NavBar from "../Components/NavBar";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import axios from "axios";
import TextField from "@mui/material/TextField";
import { BiSearchAlt } from "react-icons/bi";
import { BiMenuAltLeft } from "react-icons/bi";
import InputAdornment from "@mui/material/InputAdornment";
import Divider from "@mui/material/Divider";
import Chip from "@mui/material/Chip";
import { TbReportMoney } from "react-icons/tb";
import { FaPeopleCarry } from "react-icons/fa";
import { Button } from "@mui/material";
import { alpha, styled } from "@mui/material/styles";
import { IoIosPeople } from "react-icons/io";


const MyButton = styled(Button)({
  background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
  border: 0,
  borderRadius: 10,
  boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
  color: 'white',
  height: 48,
  padding: '0 30px',
});
const MyButton2 = styled(Button)({
  background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
  border: 0,
  borderRadius: 6,
  boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
  color: 'white',
  height: 35,
  padding: '0 20px',
});

const CssTextField = styled(TextField)({
  "& label.Mui-focused": {
    color: "white",
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: "white",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "white",
    },
    "&:hover fieldset": {
      borderColor: "white",
    },
    "&.Mui-focused fieldset": {
      borderColor: "white",
    },
  },
});

function Home() {
  const [post, setPost] = useState([]);
  const [filterShow, setFilterShow] =useState(false)

  function retrivePosts() {
    axios.get("http://127.0.0.1:8000/posts").then((res) => {
      if (res.data.success) {
        let pos = res.data.exsitingPosts;
        setPost(pos);
      }
    });
  }

  useEffect(() => {
    retrivePosts();
    console.log(post);
  }, []);

  return (
    <div class="bg-[#0E172A] text-white">
      <Box
        sx={{
          border: "1px solid ",
          p: 5,
          background: " rgba( 255, 255, 255, 0.2 )",
          boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
          backdropFilter: "blur( 10px )",
          borderRadius: "10px",
          border: "1px solid rgba( 255, 255, 255, 0.18 )",
          color: "white",
          Width: "100px",
          marginLeft: "30%",
          marginRight: "30%",
          // margin:"8px" ,
          // minHeight:"10px",
          // marginLeft:"15%",
          paddingBottom: "30px",
          mb:10,
          mt:5
        }}
      >
        <Grid container>
          <Grid item xs={8} md={8} align="center">
            <CssTextField
              fullWidth
              InputLabelProps={{
                style: { color: "white" },
              }}
              InputProps={{
                sx: {
                  mr:1,
                  height: "40px",
                  color: "white",
                  ".css-1d3z3hw-MuiOutlinedInput-notchedOutline": {
                    border: "2px solid white",
                  },
                  "&:hover": {
                    ".css-1d3z3hw-MuiOutlinedInput-notchedOutline": {
                      border: "2px solid white",
                    },
                  },
                },
                startAdornment: (
                  <InputAdornment position="start">
                    <BiSearchAlt size={20} />
                  </InputAdornment>
                ),
              }}
              id="outlined-basic"
              label="Search"
              variant="outlined"
            />
          </Grid>
          <Grid item xs={4} md={4}  >
            <MyButton2 sx={{ml:2 }}  variant="contained" color="success" onClick={()=>{setFilterShow(!filterShow)}}>
              Filter
              <BiMenuAltLeft size={22}></BiMenuAltLeft>
            </MyButton2>
          </Grid>
        </Grid>
        { filterShow ?
        <>
          <Divider sx={{ padding: 1, size: 20, color: "white" }}>
          <Chip label="Filter" />
        </Divider>
        <Grid container >
          <Grid item xs={12} md={12} align="center">
            <CssTextField
              
              InputLabelProps={{
                style: { color: "white" },
              }}
              sx={{
                ".css-x2l1vy-MuiInputBase-root-MuiOutlinedInput-root": {
                  color: "white",
                  border: "2px solid white",
                },
              }}
              InputProps={{
                sx: {
                  width:"300px",
                  height: "40px",
                  color: "white",
                  ".css-1d3z3hw-MuiOutlinedInput-notchedOutline": {
                    border: "2px solid white",
                  },
                  "&:hover": {
                    ".css-1d3z3hw-MuiOutlinedInput-notchedOutline": {
                      border: "2px solid white",
                    },
                  },
                },
                startAdornment: (
                  <InputAdornment position="start">
                    <TbReportMoney size={20} />
                  </InputAdornment>
                ),
              }}
              id="outlined-basic"
              label="Budget"
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12} md={12} align="center" sx={{mt:"4%"}}>
            <CssTextField
              
              InputLabelProps={{
                style: { color: "white" },
              }}
              sx={{
                ".css-x2l1vy-MuiInputBase-root-MuiOutlinedInput-root": {
                  color: "white",
                  border: "2px solid white",
                },
              }}
              InputProps={{
                sx: {
                  width:"300px",
                  height: "40px",
                  color: "white",
                  ".css-1d3z3hw-MuiOutlinedInput-notchedOutline": {
                    border: "2px solid white",
                  },
                  "&:hover": {
                    ".css-1d3z3hw-MuiOutlinedInput-notchedOutline": {
                      border: "2px solid white",
                    },
                  },
                },
                startAdornment: (
                  <InputAdornment position="start">
                    <IoIosPeople size={20} />
                  </InputAdornment>
                ),
              }}
              id="outlined-basic"
              label="Members"
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12} md={12} sx={{ mt: "4%" }} align="center">
            <CssTextField
              
              InputLabelProps={{
                style: { color: "white" },
              }}
              InputProps={{
                sx: {
                  width:"300px",
                  height: "40px",
                  color: "white",
                  ".css-1d3z3hw-MuiOutlinedInput-notchedOutline": {
                    border: "2px solid white",
                  },
                  "&:hover": {
                    ".css-1d3z3hw-MuiOutlinedInput-notchedOutline": {
                      border: "2px solid white",
                    },
                  },
                },
                startAdornment: (
                  <InputAdornment position="start">
                    <FaPeopleCarry size={20} />
                  </InputAdornment>
                ),
              }}
              id="outlined-basic"
              label="How Many Members Per Bottle"
              variant="outlined"
            />

<Grid sx={{ mt: 2 }} align="center">
            <MyButton  variant="contained">
              Suggest Bottle
            </MyButton>
          </Grid>
          </Grid>

          
        </Grid>
        </>:""
        }
      </Box>

      <Box sx={{ flexGrow: 1 }}>
        <Grid
          container
          spacing={{ xs: 0, md: 0 }}
          columns={{ xs: 2, sm: 8, md: 12 }}
          align="center"
        >
          {post.map((value, index) => (
            <Grid item xs={2} sm={3} md={3} key={index}>
              <ImageCard
                name={value.name}
                description={value.description}
                image={value.imageLink}
                alcohol={value.alcohol}
                price={value.price}
              />
            </Grid>
          ))}
        </Grid>
      </Box>
    </div>
  );
}

export default Home;
