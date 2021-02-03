import React, { useState, useEffect } from 'react';
import './App.css';

import SettingsDialog from "./components/SettingsDialog"
import { Divider, Typography, ButtonGroup, Button, Container } from '@material-ui/core';

import Timer from 'easytimer.js';
import 'fontsource-roboto';

function App() {

  const [timerType, setTimerType] = useState("pomodoro");
  const [pomodoroTime, setPomodoroTime] = useState(localStorage.getItem('pomodoroTime') ? parseInt(localStorage.getItem('pomodoroTime')): 25);
  const [shortBreakTime, setShortBreakTime] = useState(localStorage.getItem('shortBreakTime') ? parseInt(localStorage.getItem('shortBreakTime')): 5);
  const [longBreakTime, setLongBreakTime] = useState(localStorage.getItem('longBreakTime') ? parseInt(localStorage.getItem('longBreakTime')): 15);

  const [timer] = useState(new Timer())
  const [time, setTime] = useState(pomodoroTime);
  const [clockMinutes, setClockMinutes] = useState(time);
  const [clockSeconds, setClockSeconds] = useState(0);
  const [isPaused, setIsPaused] = useState(true);

  const zeroPad = (num, places) => String(num).padStart(places, '0');

  useEffect(() => {
    console.log("tick..")
    document.title = (clockMinutes+":"+zeroPad(clockSeconds, 2))
    if ( (timer.getTimeValues().minutes<=0) && (timer.getTimeValues().seconds<=0) && (clockMinutes <= 0)){
      console.log("done")
      
      if (timerType === "pomodoro"){
        setTimerType("shortBreak")
        console.log("completed pomodoro")
      }else{
        setTimerType("pomodoro")
        console.log("completed break")
      }
    }
  }, [clockSeconds]);

  useEffect(() => {
    timer.addEventListener('secondsUpdated', function (e) {
      setClockMinutes(timer.getTimeValues().minutes)
      setClockSeconds(timer.getTimeValues().seconds)
    });

    timer.addEventListener('reset', function (e) {
      setClockMinutes(timer.getTimeValues().minutes)
      setClockSeconds(timer.getTimeValues().seconds)
     
    });
  }, []);

  useEffect(() => {

    timer.stop();
    if (timerType === "pomodoro"){
      setTime(pomodoroTime);
      timer.start({countdown: true, startValues: {minutes: pomodoroTime}});

    }else if ( timerType === "shortBreak"){
      setTime(shortBreakTime);
      timer.start({countdown: true, startValues: {minutes: shortBreakTime}});

    }else{
      setTime(longBreakTime);
      timer.start({countdown: true, startValues: {minutes: longBreakTime}});
    }

    timer.reset();
    timer.pause();
    setIsPaused(true);

  }, [timerType]);



  useEffect(() => {
    localStorage.setItem('pomodoroTime', pomodoroTime);
    localStorage.setItem('shortBreakTime', shortBreakTime);
    localStorage.setItem('longBreakTime', longBreakTime);

    var minutesGained
    if (timerType === "pomodoro"){
      setTime(pomodoroTime)
      minutesGained = pomodoroTime - time;
    }else if(timerType === "shortBreak"){
      setTime(shortBreakTime)
      minutesGained = shortBreakTime - time;
    }else{
      setTime(longBreakTime)
      minutesGained = longBreakTime - time;
    }

    var mins = timer.getTimeValues().minutes
    var secs = timer.getTimeValues().seconds

    timer.stop();

    console.log("Minutes: "+ (mins + minutesGained))
    console.log("Seconds: "+ secs)

    if( (((mins + minutesGained)<=0) && (secs <= 0)) || ( ((mins + minutesGained)<0) ) ){
      console.log("Over")
      timer.start({countdown: true, startValues: {minutes: 0, seconds: 1}});
    }else{
      timer.start({countdown: true, startValues: {minutes: (mins + minutesGained), seconds: secs}});
      setClockMinutes(mins + minutesGained)
      setClockSeconds(secs) 
    }

    if (isPaused){
      timer.pause();
    }
    
  }, [pomodoroTime, shortBreakTime, longBreakTime]);

  var resetClock = function(){
    timer.start({countdown: true, startValues: {minutes: time}});
    timer.reset();
    timer.pause();
    setIsPaused(true);
  }

  var toggleStart = function(){
    if (isPaused){
      timer.start({countdown: true, startValues: {minutes: time}});
      setIsPaused(false);
    }else{
      timer.pause();
      setIsPaused(true);
    }
  }

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value) => {
    setOpen(false);
  };

  return (
    <div className="App">
      <Container maxWidth="sm">
        <div style={{ textAlign: "center"}}>

          <div style={{display: "flex", justifyContent: "space-between", marginBottom: "auto", marginTop: "auto"}}>
            <Typography variant='h5' style={{float: "left"}}>
              Pomodoro 
            </Typography>

            <Button style={{margin: "1rem"}} onClick={handleClickOpen} variant="contained">Settings</Button>

          </div>

          <Divider variant="middle" style={{marginBottom: "1rem"}}/>

          <ButtonGroup variant="contained" aria-label="contained primary button group">
            <Button onClick={()=>{setTimerType("pomodoro")}} color={timerType === "pomodoro"? "primary": "default"}>Pomodoro</Button>
            <Button onClick={()=>{setTimerType("shortBreak")}} color={timerType === "shortBreak"? "primary": "default"}>Short Break</Button>
            <Button onClick={()=>{setTimerType("longBreak")}} color={timerType === "longBreak"? "primary": "default"}>Long Break</Button>
          </ButtonGroup>

          <Typography variant='h3'>
            {clockMinutes} : {zeroPad(clockSeconds, 2)} 
          </Typography>

          <Button style={{margin: "1rem"}} color="secondary" onClick={toggleStart} variant="contained">{isPaused ? "Play" : "Pause"}</Button>
          <Button color="secondary" onClick={resetClock} variant="contained">Restart</Button>
        </div>
        
        <SettingsDialog 
          pomodoroTime={pomodoroTime}
          shortBreakTime={shortBreakTime}
          longBreakTime={longBreakTime}

          setPomodoroTime={setPomodoroTime}
          setShortBreakTime={setShortBreakTime}
          setLongBreakTime={setLongBreakTime}

          open={open} 
          onClose={handleClose} />
        
      </Container>
     
    </div>
  );
}

export default App;
