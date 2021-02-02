import React, { useState, useEffect } from 'react';
import './App.css';

import Button from "@material-ui/core/Button"
import Typography from "@material-ui/core/Typography"

import Timer from 'easytimer.js';
import 'fontsource-roboto';

function App() {

  const [timer] = useState(new Timer())
  const [time, setTime] = useState(25);
  const [clockMinutes, setClockMinutes] = useState(time);
  const [clockSeconds, setClockSeconds] = useState(0);
  const [isPaused, setIsPaused] = useState(true)

  const zeroPad = (num, places) => String(num).padStart(places, '0');

  useEffect(() => {
    document.title = (clockMinutes+":"+clockSeconds);
    console.log("timer: "+timer.getTimeValues().toString());
  });

  timer.addEventListener('secondsUpdated', function (e) {
    setTime(timer.getTimeValues().toString());
    setClockMinutes(timer.getTimeValues().minutes)
    setClockSeconds(timer.getTimeValues().seconds)
   
  });

  timer.addEventListener('reset', function (e) {
    setClockMinutes(timer.getTimeValues().minutes)
    setClockSeconds(timer.getTimeValues().seconds)
   
  });

  var resetClock = function(){
    timer.reset();
    timer.pause();
    setIsPaused(true);
  }

  var toggleStart = function(){
    if (isPaused){
      console.log("Start")
      timer.start({countdown: true, startValues: {minutes: time}});
      setIsPaused(false);
    }else{
      console.log("Pause")
      timer.pause();
      setIsPaused(true);
    }
  }

  return (
    <div className="App">
      <Typography>
        {clockMinutes} : {zeroPad(clockSeconds, 2)}
      </Typography>
      <Button onClick={toggleStart} variant="contained">{isPaused ? "Play" : "Pause"}</Button>
      <Button onClick={resetClock} variant="contained">Restart</Button>
    </div>
  );
}

export default App;
