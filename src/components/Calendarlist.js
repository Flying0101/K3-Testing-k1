import React from 'react';
import { useState, useEffect } from 'react';

import { useContext } from 'react';
import { ProjectContext } from '../contexts/ProjectContext';



import '../css/Calendarlist.css';
import ScrollToBottom from 'react-scroll-to-bottom';
import { FaTimes } from "react-icons/fa";

function Calendarlist() {
    //context data/objects/functions.
    const { projects, tasks, timelogs, DelTimelog } = useContext(ProjectContext);


    // the selected date from list 
    const [choosenDate, setChoosenDate] = useState('');

    // current logs array
    const [logsForDate, setLogsForDate] = useState([]);


    // gets rid of duplicates from timelogs array
    const noDuplicates = timelogs.map((logs) => logs.date)
    const oneDate = [...new Set(noDuplicates)]


    // refresh state everytime choosendate gets a new value / if timelogs changes.
    useEffect(() => {
        const thisDateLogs = timelogs.filter((logs) => logs.date === choosenDate)
        setLogsForDate(thisDateLogs);
    }, [choosenDate, timelogs]);


    // function for setting the new state.
    function DateAndLog(logs) {
        setChoosenDate(logs);

    }



    // sends data to the context store for a delete req to db.json.
    function DelSpecificLog(id, title) {
        console.log(id);
        DelTimelog(id, title);
    }


    return (
        <div className="Calendarlist-section">
            <div className="calendar-header">
                <p className="cal-header">Calendar</p>
            </div>

            <select className="cal-droplist" onChange={(event) => { DateAndLog(event.target.value) }} >
                <option>Select Date</option>
                {oneDate.map((logs) => (
                    <option>{logs}</option>
                ))}
            </select>

            <div className="cal-list-container">
                <ScrollToBottom className="scroll-calendar">
                    {logsForDate.map((logs) => (
                        <div className="cal-task-container">
                            <div className="cal-t-wraper">
                                <div className="cal-clr" id="proclr" style={{ background: logs.color }}></div>
                                <p className="cal-task-h">{logs.title}</p>
                                <p className="cal-task-t">{logs.time}</p>
                            </div>
                            <FaTimes className="cal-del-icon" onClick={() => DelSpecificLog(logs.id, logs.title)} />
                        </div>
                    ))}
                </ScrollToBottom>
            </div>

        </div>
    );
}

export default Calendarlist;
