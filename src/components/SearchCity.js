import React from "react";
// Styled Component:
import styled from "styled-components";

// Weather Logo COmponent as Image:
const WeatherLogo=styled.img`
width:200px;
height:160px;
margin:30px auto;
`
// CityLabel COmponent as span:
const ChooseCity=styled.span`
font-size:18px;
color:black;
margin:10px auto;
font-weight:bold;
` 

// Search Box Component as form:
const SearchBox=styled.form`
display:flex;
flex-direction:row;
border:1px solid black;
border-radius:2px;
margin:20px auto;

// applying styling to sub tags:
& input{
    padding:10px;
    font-size:15px;
    border:none;
    outline:none;
    font-weight:bold;
}
& button{
    padding:10px;
    font-size:15px;
    border:none;
    outline:none;
    font-weight:bold;
    color:gold;
    background-color:black;
    cursor:pointer;
}


`
const SearchCity=(props)=>{
    return ( 
        // Fragments for wrapping:
        <>
        <WeatherLogo src="icons/weather-logo.svg"/>
        <ChooseCity>Choose City to find Weather Details</ChooseCity>
        {/* Updating CIty & fetching Weather API response using event Handler */}
        <SearchBox onSubmit={props.fetchWeather}>
            <input placeholder="Enter Your City " onChange={(event)=>props.updateCity(event.target.value)}/>
            <button type="submit">Search</button>
        </SearchBox>
        </>
    )
}

export default SearchCity;