import ReactSlider from "react-slider";
import './Thermometer.css';
import { useClimate } from '../../context/ClimateContext'
import { useState, useEffect } from 'react'

function Thermometer() {
  const {temperature, setTemperature} = useClimate()
  const [desiredTemperature, setDesiredTemperature] = useState(0)

  // const timerFunction = setTimeout(() => {
  //   temperature > desiredTemperature ? setTemperature(temperature - 1) : setTemperature(temperature + 1)
  // }, 1000)

  useEffect (() => {
    console.log("!")
    if (temperature !== desiredTemperature ){
      const temperatureInterval = setTimeout(() => {
        temperature > desiredTemperature ? setTemperature(temperature - 1) : setTemperature(temperature + 1)
      }, 1000);
    }
    // return () => {
    //   console.log("unmounting Cat component");
    //   clearInterval(tempertureInterval);
    // };
  }, [desiredTemperature, temperature])

  function eventHandler(val){
    //setTemperature(val)
    setDesiredTemperature(val)
  }

  // useEffect(() => {
  //   const colorInterval = setInterval(() => {
  //     setColorNum((prevNum) => ++prevNum % colors.length);
  //     console.log(colorNum, "right after setter");
  //   }, 2000);

  //   return () => {
  //     console.log("unmounting Cat component");
  //     clearInterval(colorInterval);
  //   };
  // }, []);


  return (
    <section>
      <h2>Thermometer</h2>
      <div className="actual-temp">Actual Temperature: {temperature}°F</div>
      <ReactSlider
       // value={Number(`${temperature}`)}
       //value = {temperature}
       value = {desiredTemperature}
        onAfterChange={(val) => eventHandler(val)}
        className="thermometer-slider"
        thumbClassName="thermometer-thumb"
        trackClassName="thermometer-track"
        ariaLabel={"Thermometer"}
        orientation="vertical"
        min={0}
        max={120}
        renderThumb={(props, state) => <div {...props}>{state.valueNow}</div>}
        renderTrack={(props, state) => (
          <div {...props} index={state.index}></div>
        )}
        invert
        pearling
        minDistance={1}
      />
    </section>
  );
}

export default Thermometer;