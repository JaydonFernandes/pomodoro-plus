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


    const handleClose = () => {
        onClose();
    };

    const updateValues = function(){

        setPomodoroTime(tempPomodoroTime)
        setShortBreakTime(tempShortBreakTime)
        setLongBreakTime(tempLongBreakTime)
        setLongBreakInterval(tempLongBreakInterval)
        setAutoStartRound(tempAutoStartRound)
        onClose();
    };

    return (
        <Dialog onClose={handleClose} scroll="body" aria-labelledby="settings-dialog-title" open={open} >
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
                                variant="outlined"
                                defaultValue={pomodoroTime}
                                onChange={(e)=>{ (parseInt(e.target.value) >= 1) && ((parseInt(e.target.value) <= 60)) ? setTempPomodoroTime(parseInt(e.target.value)) :  setTempPomodoroTime(parseInt(pomodoroTime))}}
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
                                min="1"
                                variant="outlined"
                                defaultValue={shortBreakTime}
                                onChange={(e)=>{ (parseInt(e.target.value) >= 1) && ((parseInt(e.target.value) <= 60)) ? setTempShortBreakTime(parseInt(e.target.value)) :  setTempShortBreakTime(parseInt(shortBreakTime))}}
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
                                variant="outlined"
                                defaultValue={longBreakTime}
                                onChange={(e)=>{ (parseInt(e.target.value) >= 1) && ((parseInt(e.target.value) <= 60)) ? setTempLongBreakTime(parseInt(e.target.value)) :  setTempLongBreakTime(parseInt(longBreakTime))}}
                            />
                        </Grid>

                    </Grid>
                    
                    {/* <div style={{textAlign: "center"}}>
                        <TextField
                            label="Pomodoro Time"
                            type="number"
                            InputLabelProps={{
                                shrink: true,
                            }}

                            margin="normal"
                            variant="outlined"
                            defaultValue={pomodoroTime}
                            onChange={(e)=>{ (parseInt(e.target.value) >= 1) && ((parseInt(e.target.value) <= 60)) ? setTempPomodoroTime(parseInt(e.target.value)) :  setTempPomodoroTime(parseInt(pomodoroTime))}}
                        />
                        <TextField
                            label="Short Break Time"
                            type="number"
                            InputLabelProps={{
                                shrink: true,
                            }}
                            
                            margin="normal"
                            variant="outlined"
                            defaultValue={shortBreakTime}
                            onChange={(e)=>{ (parseInt(e.target.value) >= 1) && ((parseInt(e.target.value) <= 60)) ? setTempShortBreakTime(parseInt(e.target.value)) :  setTempShortBreakTime(parseInt(shortBreakTime))}}
                        />
                        <TextField
                            width='sm'
                            label="Long Break Time"
                            type="number"
                            InputLabelProps={{
                                shrink: true,
                            }}
                            InputProps={{
                                inputProps: { 
                                    max: 60, min: 1
                                }
                            }}
                        
                            margin="normal"
                            variant="outlined"
                            defaultValue={longBreakTime}
                            onChange={(e)=>{ (parseInt(e.target.value) >= 1) && ((parseInt(e.target.value) <= 60)) ? setTempLongBreakTime(parseInt(e.target.value)) :  setTempLongBreakTime(parseInt(longBreakTime))}}
                        />
                    </div> */}

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
                            
                                margin="normal"
                                style={{margin: ".5rem"}}
                                defaultValue={longBreakInterval}
                                onChange={(e)=>{ (parseInt(e.target.value) >= 1) ? setTempLongBreakInterval(parseInt(e.target.value)) :  setTempLongBreakInterval(parseInt(longBreakInterval))}}
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
                <Button onClick={updateValues} color="primary">
                    Save
                </Button>
            </DialogActions>
        
        </Dialog>
    );
  }
  
  export default SettingsDialog;
  