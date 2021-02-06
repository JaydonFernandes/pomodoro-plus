import React, { useState, useEffect } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import { blue } from '@material-ui/core/colors';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch'
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles({
  avatar: {
    backgroundColor: blue[100],
    color: blue[600],
  },
});

function SettingsDialog(props) {

    const { onClose, open, pomodoroTime, shortBreakTime, longBreakTime, longBreakInterval, autoStartRound, setPomodoroTime, setShortBreakTime, setLongBreakTime, setLongBreakInterval, setAutoStartRound } = props;

    const [tempPomodoroTime, setTempPomodoroTime] = useState(pomodoroTime);
    const [tempShortBreakTime, setTempShortBreakTime] = useState(shortBreakTime);
    const [tempLongBreakTime, setTempLongBreakTime] = useState(longBreakTime);
    const [tempLongBreakInterval, setTempLongBreakInterval] = useState(longBreakInterval)
    const [tempAutoStartRound, setTempAutoStartRound] = useState(autoStartRound)

    const [pomodoroValueError, setPomodoroValueError] = useState(false);
    const [shortBreakValueError, setShortBreakValueError] = useState(false);
    const [longBreakValueError, setLongBreakValueError] = useState(false);
    const [longBreakIntervalValueError, setLongBreakIntervalValueError] = useState(false);

    useEffect(() => {


        if((tempPomodoroTime >= 1) && (tempPomodoroTime <= 60)){
            setPomodoroValueError(false)
        }else{
            setPomodoroValueError(true)
        }

        if((tempShortBreakTime >= 1) && (tempShortBreakTime <= 60)){
            setShortBreakValueError(false)
        }else{
            setShortBreakValueError(true)
        }

        if((tempLongBreakTime >= 1) && (tempLongBreakTime <= 60)){
            setLongBreakValueError(false)
        }else{
            setLongBreakValueError(true)
        }

        if(tempLongBreakInterval > 0){
            setLongBreakIntervalValueError(false)
        }else{
            setLongBreakIntervalValueError(true)
        }


    }, [tempPomodoroTime, tempShortBreakTime, tempLongBreakTime, tempLongBreakInterval]);

    const handleEnter = function(){
        setTempPomodoroTime(pomodoroTime)
        setTempShortBreakTime(shortBreakTime)
        setTempLongBreakTime(longBreakTime)
        setTempLongBreakInterval(longBreakInterval)
    }

    const handleClose = () => {
        onClose();
    };

    const onSave = function(){

        if ( (!pomodoroValueError) && (!shortBreakValueError) && (!longBreakValueError) && (!longBreakIntervalValueError)){
            setPomodoroTime(tempPomodoroTime)
            setShortBreakTime(tempShortBreakTime)
            setLongBreakTime(tempLongBreakTime)
            setLongBreakInterval(tempLongBreakInterval)
            setAutoStartRound(tempAutoStartRound)


            onClose();
        }

        
    };

    return (
        <Dialog onClose={handleClose} onEnter={handleEnter} scroll="body" aria-labelledby="settings-dialog-title" open={open} >
            <DialogTitle id="settings-dialog-title">Settings</DialogTitle>
            

            <DialogContent >

                <div>
                    
                    <Grid container spacing={1} justify="center">
                        <Grid item sm={4} xs={12} style={{textAlign: "center"}}>
                            <TextField
                                style={{width: "100%"}}
                                label="Pomodoro Time"
                                type="number"
                                InputLabelProps={{
                                    shrink: true,
                                }}

                                margin="normal"
                                error = {pomodoroValueError}
                                helperText="Value must be from 1 to 60."
                                variant="outlined"
                                defaultValue={pomodoroTime}
                                onChange={(e)=>{ setTempPomodoroTime(parseInt(e.target.value)) }}
                            />
                        </Grid>

                        <Grid item sm={4} xs={12} style={{textAlign: "center"}}>
                            <TextField
                                style={{width: "100%"}}
                                label="Short Break Time"
                                type="number"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                
                                margin="normal"
                                error = {shortBreakValueError}
                                helperText="Value must be from 1 to 60."
                                min="1"
                                variant="outlined"
                                defaultValue={shortBreakTime}
                                onChange={(e)=>{ setTempShortBreakTime(parseInt(e.target.value))}}
                            />
                        </Grid>

                        <Grid item sm={4} xs={12} style={{textAlign: "center"}}>
                            <TextField
                                style={{width: "100%"}}
                                label="Long Break Time"
                                type="number"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                margin="normal"
                                error = {longBreakValueError}
                                helperText="Value must be from 1 to 60."
                                variant="outlined"
                                defaultValue={longBreakTime}
                                onChange={(e)=>{ setTempLongBreakTime(parseInt(e.target.value))}}
                            />
                        </Grid>

                    </Grid>
                    
                    

                    <Divider variant="middle" style={{margin: "1rem"}}/>
                        
                    <div>

                    <FormControlLabel
                        control={
                            <TextField
                                width='sm'
                                type="number"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                InputProps={{
                                    inputProps: { 
                                        max: 60, min: 1
                                    }
                                }}
                                error={longBreakIntervalValueError}
                                margin="normal"
                                style={{margin: ".5rem"}}
                                defaultValue={longBreakInterval}
                                onChange={(e)=>{ setTempLongBreakInterval(parseInt(e.target.value))  }}
                            />
                        }
                    
                        label="Long Break Interval:"
                        labelPlacement="start"
                    />
                        
                        
                    </div>

                    <Divider variant="middle" style={{margin: "1rem"}}/>
                        
                    <div>
                        <FormControlLabel
                            control={
                            <Switch
                                checked={tempAutoStartRound}
                                onChange={(value)=>{setTempAutoStartRound(!tempAutoStartRound)}}
                                name="checkedB"
                                color="primary"
                            />
                            }
                            label="Auto start next round?"
                            labelPlacement="start"
                        />
                    </div>

                </div>

                

            </DialogContent>

            <DialogActions>
                <Button onClick={onSave} color="primary">
                    Save
                </Button>
            </DialogActions>
        
        </Dialog>
    );
  }
  
  export default SettingsDialog;
  