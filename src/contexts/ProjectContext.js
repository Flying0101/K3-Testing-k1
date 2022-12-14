import React from 'react';
import { createContext, useCallback } from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { v4 as uuid } from 'uuid';

export const ProjectContext = createContext({});



function Projects({ children }) {

    // useState for getting projects, tasks and timelogs. 
    const [projects, setProjects] = useState([]);
    const [tasks, setTasks] = useState([]);
    const [timelogs, setTimelogs] = useState([]);


    //get the projects
    function getAllProjects() {

        axios.get("http://localhost:3004/projects")
            .then((res) => {
                setProjects(res.data)
            })
            .catch((error) => console.log(error));

        console.log("req projects successful");

    }

    // get the tasks
    function getAllTasks() {

        axios.get("http://localhost:3004/tasks")
            .then((res) => {
                setTasks(res.data)
            })
            .catch((error) => console.log(error));

        console.log("req-task successful");

    }

    // get the timelogs
    function getAllTimelogs() {

        axios.get("http://localhost:3004/timelogs")
            .then((res) => {
                setTimelogs(res.data)
            })
            .catch((error) => console.log(error));

        console.log("req-timelogs successful");

    }



    // load them into site when starting app.
    useEffect(() => {

        getAllProjects();
        getAllTasks();
        getAllTimelogs();

    }, [])



    // function to add a new project into db.json. 
    const AddProject = useCallback((name, color) => {

        const unique_id = uuid();
        const id = unique_id.slice(0, 8)


        axios.post("http://localhost:3004/projects", {
            name,
            color,
            id: id,
        })
            .then(() => {
                getAllProjects();
                getAllTasks();
                console.log('post one project successful..');
            });

    })  // Addproject works well so far, 22-10-24.




    // Add a single task connected to one projekt.
    const AddTask = useCallback((title, color, ProId) => {

        const unique_id = uuid();
        const id = unique_id.slice(0, 8)

        axios.post("http://localhost:3004/tasks", {
            title,
            color,
            projid: ProId,
            id: id
        })
            .then(() => {
                getAllProjects();
                getAllTasks();
                console.log('post one task successful..');
            });
    })


    //Delete one task from db.json.
    const DelTask = useCallback((id) => {
        axios.delete(`http://localhost:3004/tasks/${id}`)
            .then(() => {
                getAllTasks();
                console.log('DELETE one task successful..');
            });

    })


    //Delete one Project and all tasks connected to that project.

    // gets called from forEach method to call this func for each task.
    // deletes one task at a time.
    const onetask = (id) => {
        axios.delete(`http://localhost:3004/tasks/${id}`)
            .then(() => {
                console.log('DELETE p-task successful..');
            });
    }

    // delete project and connected task function.
    const DelProject = useCallback((id) => {

        const protaskens = tasks.filter((t) => t.projid === id);

        protaskens.forEach(t => onetask(t.id));
        // call onetask delete for every task in the array.
        //in that way they get deleted one at a time.


        axios.delete(`http://localhost:3004/projects/${id}`)
            .then(() => {

                console.log('DELETE project successful..');
                getAllProjects();
                getAllTasks();
            });

        getAllProjects();
        getAllTasks();
    })



    // add one timelog.
    const AddTimeLog = useCallback((taskid, title, color, date, time) => {

        const unique_id = uuid();
        const id = unique_id.slice(0, 8)

        axios.post("http://localhost:3004/timelogs", {

            id: id,
            taskid: taskid,
            title: title,
            color: color,
            date: date,
            time: `${time}:sec`
        })
            .then(() => {

                console.log('Timelog successful..');
                getAllTimelogs();
            });

    })


    // delete one timelog.
    const DelTimelog = useCallback((id, title) => {


        axios.delete(`http://localhost:3004/timelogs/${id}`)
            .then(() => {

                console.log(`timelog: ${title}: deleted, successful..`);
                getAllTimelogs();
            });
        getAllTimelogs();
    })




    return (
        <ProjectContext.Provider value={{ projects, tasks, timelogs, AddProject, AddTask, DelTask, DelProject, AddTimeLog, DelTimelog }}>
            {children}
        </ProjectContext.Provider>
    );
}

export default Projects;
