// import useState Hook:
import axios from "axios";
import { useState } from "react";

// using Styled COmponent for styling components:
import styled from "styled-components";
// Importing Components:
import CityWeather from "./components/CityWeather";
import SearchCity from "./components/SearchCity";

// API_KEY Values as COnstant:
const API_KEY="b69e3c3231fbff3df6de8eeb27d84a56";

// Container Component:
const Container=styled.div`
display:flex;
flex-direction:column;
margin:auto;
align-items:center;
box-shadow:0 4px 8px 0 #555;
width:380px;
padding:30px 20px;
background-color:white;
font-family: 'Josefin Sans', sans-serif;
`
// App LAbel Component:
const AppLabel=styled.span`
color:black;
font-size:34px;
font-weight:bold;
`

function App() {
  // State Management for CIty & Weather:
  const[city,setCity]=useState()
  const[weather,setWeather]=useState()
  // console.log(city)

  // fetchWeather to gather API Response:
  const fetchWeather=async (event)=>{

    // prevent form from loading:
    event.preventDefault();
    // using axios to fetch Api Response:
    const response= await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`);
    // console.log(response.data);

    // Now set the response generated :
    setWeather(response.data);
  }
    
 return (
    <Container>
      <AppLabel>Weather-City</AppLabel>

    {/* Conditional Rendering: if weather state is avaialable: <CityWeather/> ELSE <SearchCity/> */}
    {!weather && <SearchCity updateCity={setCity} fetchWeather={fetchWeather}/>}
    {weather && <CityWeather weather={weather}/>}
      {/* passing setCity & fetchWeather from App to SearchCity: */}
      {/* <SearchCity updateCity={setCity} fetchWeather={fetchWeather}/> */}
      {/* <CityWeather/> */}
    </Container>
  );
}

export default App;
