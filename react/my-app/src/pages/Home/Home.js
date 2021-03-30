import React from 'react';
import './Home.css';
import Logo from '../../Components/Logo/Logo';
import Button from '../../Components/Button/Button';
import {Grid} from '@material-ui/core';



function Home (){
    return(
        <Grid container spacing={1}>
            <Logo/>
            <Button name="Home"/>
            <Button name= "About"/>
            <Button name= "Projects"/>
            <Button name= "Contact"/>
            <Button name= "test"/>
        </Grid>
    )
}

export default Home;
