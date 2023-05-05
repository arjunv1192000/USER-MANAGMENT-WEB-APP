import React from "react";
import Head from "../../components/navbar/navbar";
import { Avatar, Grid, Paper } from '@mui/material'
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Homepage = () => {
  const paperStyle = { padding: 20, height: '40vh', width: '450px', margin: '100px auto', backgroundColor: '#003eff21' }
  const avatarStyle = { padding: 10, backgroundColor: 'blue' }
  const navigate = useNavigate();
  const dispatch =useDispatch();
  const user = useSelector((state) => state.user.value);
  return (
    <>
      <Head />
        <Grid>
          <Paper elevation={10} style={paperStyle}>              
            <Grid align='center'>
              <h2>Hello, Welcome</h2>
              <h2>{user.name}</h2>
            </Grid> 
          </Paper>
        </Grid>
    </>
  )
}

export default Homepage