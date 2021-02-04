import React, { useState, useEffect } from 'react';
import './App.css';

import SettingsDialog from "./components/SettingsDialog"
import { Divider, Typography, ButtonGroup, Button, Container } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';

import IconButton from '@material-ui/core/IconButton';

import PlayIcon from '@material-ui/icons/PlayArrowRounded';
import PauseIcon from '@material-ui/icons/PauseRounded';
import ReplayIcon from '@material-ui/icons/ReplayRounded';
import SettingsIcon from '@material-ui/icons/Settings';

import Timer from 'easytimer.js';
import 'fontsource-roboto';

import useSound from 'use-sound';
import clickSfx from "./assets/soundEffects/click.mp4"
import completeSfx from "./assets/soundEffects/complete.mp4"

import {
  CircularProgressbar,
  CircularProgressbarWithChildren,
  buildStyles
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";


function App() {

  const [playClickSfx] = useSound(clickSfx);
  const [playCompleteSfx] = useSound(completeSfx);

  const [timerType, setTimerType] = useState("pomodoro");
  const [pomodoroTime, setPomodoroTime] = useState(localStorage.getItem('pomodoroTime') ? parseInt(localStorage.getItem('pomodoroTime')): 25);
  const [shortBreakTime, setShortBreakTime] = useState(localStorage.getItem('shortBreakTime') ? parseInt(localStorage.getItem('shortBreakTime')): 5);
  const [longBreakTime, setLongBreakTime] = useState(localStorage.getItem('longBreakTime') ? parseInt(localStorage.getItem('longBreakTime')): 15);

  const [timer] = useState(new Timer())
  const [time, setTime] = useState(pomodoroTime);
  const [clockMinutes, setClockMinutes] = useState(time);
  const [clockSeconds, setClockSeconds] = useState(0);
  const [isPaused, setIsPaused] = useState(true);
  const [longBreakInterval, setLongBreakInterval] = useState(localStorage.getItem('longBreakInterval') ? parseInt(localStorage.getItem('longBreakInterval')): 4);
  const [pomodorosComplete, setPomodorosComplete] = useState(0);
  const [secondsPassed, setSecondsPassed] = useState(0);

  const [autoStartRound, setAutoStartRound] = useState((localStorage.getItem('autoStartRound') === "true") ? true: false);

  const zeroPad = (num, places) => String(num).padStart(places, '0');

  useEffect(() => {
    
    if(!isPaused){
      setSecondsPassed( ((time*60)-( (clockMinutes*60)+clockSeconds)) )
    }
    
    if ( (timer.getTimeValues().minutes<=0) && (timer.getTimeValues().seconds<=0) && (clockMinutes <= 0)){
      playCompleteSfx();
      
      if (timerType === "pomodoro"){
        setPomodorosComplete(pomodorosComplete + 1)

        


        if ( ((pomodorosComplete + 1) % longBreakInterval) === 0 ){
          setTimerType("longBreak")
        }else{
          setTimerType("shortBreak")
        }
      }else{
        setTimerType("pomodoro")
      }
    }
  }, [clockSeconds, clockMinutes]);

  useEffect(() => {
  }, [secondsPassed]);

  useEffect(() => {
    timer.addEventListener('secondsUpdated', function (e) {
      setClockMinutes(timer.getTimeValues().minutes)
      setClockSeconds(timer.getTimeValues().seconds)

      document.title = (timer.getTimeValues().minutes+":"+zeroPad(timer.getTimeValues().seconds, 2))
    });

    timer.addEventListener('reset', function (e) {
      setClockMinutes(timer.getTimeValues().minutes)
      setClockSeconds(timer.getTimeValues().seconds)
      document.title = (timer.getTimeValues().minutes+":"+zeroPad(timer.getTimeValues().seconds, 2))
     
    });
  }, []);

  useEffect(() => {

    timer.stop();
    if (timerType === "pomodoro"){
      setTime(pomodoroTime);
      timer.start({countdown: true, startValues: {minutes: pomodoroTime}});
      setSecondsPassed(0)

    }else if ( timerType === "shortBreak"){
      setTime(shortBreakTime);
      timer.start({countdown: true, startValues: {minutes: shortBreakTime}});
      setSecondsPassed(0)

    }else{
      setTime(longBreakTime);
      timer.start({countdown: true, startValues: {minutes: longBreakTime}});
      setSecondsPassed(0)
    }

    timer.reset();
    timer.pause();
    setIsPaused(true);

    if (autoStartRound){
      timer.start();
      setIsPaused(false);
    }
    

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

    if( (((mins + minutesGained)<=0) && (secs <= 0)) || ( ((mins + minutesGained)<0) ) ){
      timer.start({countdown: true, startValues: {minutes: 0, seconds: 1}});
      setSecondsPassed(0)
    }else{
      timer.start({countdown: true, startValues: {minutes: (mins + minutesGained), seconds: secs}});
      setClockMinutes(mins + minutesGained)
      setClockSeconds(secs) 
    }

    if (isPaused){
      timer.pause();
    }
    
  }, [pomodoroTime, shortBreakTime, longBreakTime]);

  useEffect(() => {
    localStorage.setItem('longBreakInterval', longBreakInterval);
  }, [longBreakInterval]);

  useEffect(() => {
    localStorage.setItem('autoStartRound', autoStartRound);
  }, [autoStartRound]);

  var resetClock = function(){
    timer.stop()
    playClickSfx();
    setSecondsPassed(0)
    timer.start({countdown: true, startValues: {minutes: time}});
    timer.reset();
    timer.pause();
    setIsPaused(true);
  }

  var toggleStart = function(){
    playClickSfx();
    if (isPaused){
      timer.start({countdown: true, startValues: {minutes: time}});
      setIsPaused(false);
    }else{
      timer.pause();
      setIsPaused(true);
    }
  }

  function PlayPauseButton(props) {
    if (isPaused) {
      return <IconButton aria-label="Play" onClick={toggleStart}><PlayIcon style={{ fontSize: 60 }}/></IconButton>
    }
    return <IconButton aria-label="Pause"  onClick={toggleStart}><PauseIcon style={{ fontSize: 60 }}/></IconButton>
  }

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value) => {
    setOpen(false);
  };

  return (
    <div className="App" style={{ minHeight: "100%"}} >
      <Container  maxWidth="md">

        <div style={{ textAlign: "center"}}>

          <div style={{display: "flex", justifyContent: "space-between", marginBottom: "auto", marginTop: "auto"}}>

            <h1 style={{fontFamily: 'Roboto', color: "#3f51b5"}}>
              Pomodoro
            </h1>

            <Button  color="primary" startIcon={<SettingsIcon />} style={{margin: "1rem"}} onClick={handleClickOpen} variant="contained">Settings</Button>
           

          </div>

          <Card  style={{backgroundColor:"whitesmoke"}}>
            <CardContent>
              <ButtonGroup variant="contained" aria-label="contained primary button group" style={{marginBottom: "1rem", width: "100%"}}>
                <Button onClick={()=>{setTimerType("pomodoro")}} style={{width: "100%"}} color={timerType === "pomodoro"? "primary": "default"}>Pomodoro</Button>
                <Button onClick={()=>{setTimerType("shortBreak")}} style={{width: "100%"}} color={timerType === "shortBreak"? "primary": "default"}>Short Break</Button>
                <Button onClick={()=>{setTimerType("longBreak")}} style={{width: "100%"}} color={timerType === "longBreak"? "primary": "default"}>Long Break</Button>
              </ButtonGroup>

              

              <CircularProgressbarWithChildren
                value={100-(( (secondsPassed)/(time*60))*100)}
                styles={buildStyles({
                  pathColor: "#3f51b5",
                  // trailColor: "#858585"
                })}
                >

                <Typography variant='h1'style={{color: "#3f51b5"}}> 
                  {clockMinutes} : {zeroPad(clockSeconds, 2)} 
                </Typography>
              </CircularProgressbarWithChildren>

              <PlayPauseButton onClick={toggleStart}/>
              <IconButton aria-label="Replay" onClick={resetClock}><ReplayIcon style={{ fontSize: 60 }}/></IconButton>

            </CardContent>
          </Card>

        </div>
      </Container>

      <SettingsDialog 
          pomodoroTime={pomodoroTime}
          shortBreakTime={shortBreakTime}
          longBreakTime={longBreakTime}
          longBreakInterval={longBreakInterval}
          autoStartRound={autoStartRound}

          setPomodoroTime={setPomodoroTime}
          setShortBreakTime={setShortBreakTime}
          setLongBreakTime={setLongBreakTime}
          setLongBreakInterval={setLongBreakInterval}
          setAutoStartRound={setAutoStartRound}

          open={open} 
          onClose={handleClose} />
     
    </div>
  );
}

export default App;
