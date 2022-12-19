import React from 'react';
import { useState, useContext } from 'react';
import { ProjectContext } from '../contexts/ProjectContext';

import '../css/Display.css';

import ScrollToBottom from 'react-scroll-to-bottom';
import { FaPlay } from 'react-icons/fa';
import { FaStopCircle } from 'react-icons/fa';



function Display() {
    //context data/objects/functions.
    const { projects, tasks, AddTimeLog } = useContext(ProjectContext);


    // toggle between play and pause with specific id as value.
    const [currTask, setCurrTask] = useState(null);

    //timer store seconds state.
    const [runSeconds, setRunSeconds] = useState(0);

    // time data state
    const [time, setTime] = useState();

    //state for displaying the current task title.
    const [disHeader, setDisHeader] = useState('');

    // get todays date variables
    let today = new Date();
    let day = today.getDate();
    let month = today.getMonth() + 1;
    let year = today.getFullYear();

    // total date of todays date variables.
    let dateForTask = day + '/' + month + '/' + year;



    //start timer function.
    function startTimer(title, id) {
        setDisHeader(title);
        setCurrTask(id);

        const intervalId = setInterval(() => { setRunSeconds(seconds => seconds + 1) }, 1000)
        setTime(intervalId);
    }


    // end timer function and send data to context function.
    function stopTimer(pro, title, color) {
        const timerData = runSeconds;
        clearInterval(time);

        AddTimeLog(pro, title, color, dateForTask, timerData);

        setRunSeconds(0);
        setCurrTask(null);
        setDisHeader('');
    }
 

    return (
        <div className="Display-section">

            <div className="display-inf">
                <p className="timer-header" >Timer</p>
                <div className="d-info-container">
                    <p className="d-time">{runSeconds}</p>
                    <p className="d-task">{disHeader}</p>
                </div>
            </div>

            <div className="timerlist-area" data-testid="map-list-container">
                <ScrollToBottom className="scroll-container">


                    {tasks?.map((data, index) => (
                        <div className="onelist-container">
                            <div className="inf-part-container">
                                <div className="timer-clr" style={{ background: data.color }}></div>
                                <p className="t-task-name">{data.title}</p>
                            </div>
                            <div className="icon-container">
                                <FaPlay className={currTask === null ? "play-icon" : "ds"} onClick={() => startTimer(data.title, data.id)} />
                                <FaStopCircle className={currTask === data.id ? "paus-icon" : "ds"} onClick={() => stopTimer(data.projid, data.title, data.color)} />
                            </div>
                        </div>
                    ))}


                </ScrollToBottom>
            </div>



        </div>
    );
}

export default Display;
