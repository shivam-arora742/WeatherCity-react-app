import styled from "styled-components";

// Weather Condition box:
const WeatherCondition=styled.div`
display:flex;
flex-direction:row;
align-items:center;
width:100%;
justify-content:space-between;
margin:30px auto;
`
// WeatherIcon Area:
const WeatherIcon=styled.img`
width:85px;
height:85px;
margin:5px auto;
`

// Condition Area:
const Condition=styled.span`
margin:20px auto;
font-size:17px;
& span{
font-size:30px;
}
`

// Location Area as span:
const Location=styled.span`
font-size:27px;
font-weight:bold;
`

// WeatherInfo COntainer STyling:
const WeatherInfoContainer = styled.div`
  display: flex;
  width: 90%;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;
  border-top:1px solid grey;
`;



// Seperate WeatherInfo Component for Reusability:
const WeatherInfo=(props)=>{
    return (
        <InfoContainer>
            <InfoIcon src={props.source}/>
            <InfoLabel>
               {props.value}
                <span>{props.label}</span>
            </InfoLabel>
        </InfoContainer>
    )
}


// Styling for WeatherInfo Sub COmponents:
const InfoContainer = styled.div`
  display: flex;
  margin: 5px 10px;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
`;
const InfoIcon = styled.img`
  width: 28px;
  height: 28px;
`;
const InfoLabel = styled.span`
  display: flex;
  flex-direction: column;
  font-size: 17px;
  margin: 15px;
  & span {
    font-size: 14px;
    text-transform: capitalize;
  }
`;

// Dictionary/Object for WeatherIcons as per conditional codes:
export const WeatherIcons={
  "01d":"icons/clear-day.svg",
  "01n":"icons/clear-night.svg",
  "02d":"icons/few-clouds-day.svg",
  "02n":"icons/few-clouds-night.svg",
  "03d":"icons/scattered clouds-day.svg",
  "03n":"icons/scattered clouds-night.svg",
  "04d":"icons/broken-clouds.svg",
  "04n":"icons/broken-clouds.svg",
  "09d":"icons/rain shower.svg",
  "09n":"icons/rain shower.svg",
  "10d":"icons/rain.svg",
  "10n":"icons/rain.svg",
  "11d":"icons/thunder storm.svg",
  "11n":"icons/thunder storm.svg",
  "13d":"icons/snow.svg",
  "13n":"icons/snow.svg",
  "50d":"icons/haze-mist.svg",
  "50n":"icons/haze-mist.svg",
}
const CityWeather=(props)=>{

  // object destructuring & passing values to each part dynamically:
  const {weather}=props;
    return (
    <>
    <WeatherCondition>
        <Condition>
            <span>{`${Math.floor(weather.main.temp)-273} °C`} </span>
             | {`${weather.weather[0].description}`}
        </Condition>
        <WeatherIcon src={`${WeatherIcons[weather.weather[0].icon]}`} />
    </WeatherCondition>
    <Location>
        {`${weather.name} , ${weather.sys.country}`}
    </Location>
    <WeatherInfoContainer>
        <WeatherInfo label="Visibility" value={`${weather.visibility} M`} source="icons/visibility.svg"/>
        <WeatherInfo label="Humidity" value={`${weather.main.humidity}`} source="icons/humidity.svg"/>
        <WeatherInfo label="Wind" value={`${weather.wind.speed}`} source="icons/wind.svg"/>
        <WeatherInfo label="Pressure" value={`${weather.main.pressure}`} source="icons/pressure.svg"/>
    </WeatherInfoContainer>
    </>
    )
}

export default CityWeather;