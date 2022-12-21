import React, { useState, useRef } from 'react';

import { useContext } from 'react';
import { ProjectContext } from '../contexts/ProjectContext';

import '../css/FuncOverview.css';


import ScrollToBottom from 'react-scroll-to-bottom';
import { FaTimes } from "react-icons/fa";

import OverviewHeader from './OverviewHeader';


function FuncOverview() {
    //context data/objects/functions.
    const { projects, tasks, AddProject, AddTask, DelTask, DelProject } = useContext(ProjectContext);

    //get the current value with ref.
    const ProNameRef = useRef();
    const ProClrRef = useRef();
    const TaskTitleRef = useRef();

    // show add modal and delete btn, may delete delbtn later. 
    const [show, setShow] = useState(false);


    // state for project and task list-pages
    const [pro, setPro] = useState(true);
    const [task, setTask] = useState(false);


    // state for holding current value for task.
    const [currVal, setCurrentVal] = useState('');



    // open modal, toggle pro-task-page.
    function ModalFunction() {
        setShow(!show);
    }

    // function for project-list site.
    function listBtn() {
        setPro(true)
        setTask(false)

    }

    // function for tasks-list site.
    function listBtn2() {
        setPro(false)
        setTask(true)

    }




    // add project function and reset the value of ref. 
    function addPro() {

        AddProject?.(ProNameRef.current.value, ProClrRef.current.value);
        ProNameRef.current.value = '';
        ProClrRef.current.value = '';
        setShow(false);

    }

    // add task function and reset value of ref.
    function postTask() {
        const linkProject = projects?.filter(pro => pro.color === currVal)
        const ProIdForTask = linkProject?.[0].id;

        AddTask?.(TaskTitleRef.current.value, currVal, ProIdForTask);
        TaskTitleRef.current.value = '';

        setShow(false);
    }


    // deleteFunc calling on delfunc from context. deletes specific task.
    function DeleteFunc(id) {
        DelTask(id);
    }

    // deleteFunc calling on delfunc from context. deletes Project/tasks    
    function DelProFunc(id) {

        DelProject(id);
    }











    return (
        <div className="FuncOverview">


            <div className="over-h-container">
                <OverviewHeader />
            </div>

            <div className="choose-list-btn">
                <button className={pro ? "project-list-btn" : "on"} onClick={() => listBtn()} data-testid="pro-page-btn">Project</button>
                <button className={task ? "on2" : "task-list-btn"} onClick={() => listBtn2()} data-testid="task-page-btn"  >Tasks</button>
            </div>




            {pro ? (
                <div>

                    <div className="over-list-container">
                        <ScrollToBottom className="overview-scroll">
                            {projects?.map((data, index) => (
                                <div className="over-task-con">
                                    <div className="pro-clr" id="proclr" style={{ background: data.color }}></div>
                                    <div className="over-wraper">
                                        <p className="over-p-inf">{data.name}</p>
                                    </div>
                                    <FaTimes className="settings-icon" onClick={() => DelProFunc(data.id)} />
                                </div>
                            ))}
                        </ScrollToBottom>
                    </div>

                    <div>
                        <button className="add-btn" onClick={() => ModalFunction()} data-testid="add-pro-btn">Add Project</button>

                    </div>

                    <div className={show ? "add-modal" : "diss"}>
                        <p className="modal-header">Add Project</p>
                        <input data-testid="project-input" type="text" placeholder="Project name.." className="modal-input" ref={ProNameRef} id="input-erase"></input>
                        <div className="modal-inf-con">
                            <p className="modal-info" id="input-erase">add a color code</p>
                            <input data-testid="color-input" className="modal-choose-group" ref={ProClrRef} placeholder="color code here..."></input>
                        </div>
                        <button className="modal-add-btn" onClick={() => addPro()} data-testid="add-p-btn">ADD</button>
                    </div>





                </div>
            ) : (
                <div>



                    <div className="over-list-container">
                        <ScrollToBottom className="overview-scroll">
                            {tasks?.map((data) => (
                                <div className="over-task-con">
                                    <div className="pro-clr" id="proclr" style={{ background: data.color }}></div>
                                    <div className="over-wraper">
                                        <p className="over-p-inf">{data.title}</p>
                                    </div>
                                    <FaTimes className="settings-icon" onClick={() => DeleteFunc(data.id)} />
                                </div>
                            ))}
                        </ScrollToBottom>
                    </div>


                     


                    <div>
                        <button className="add-btn" onClick={() => ModalFunction()} data-testid="add-task-btn">Add Task</button>

                    </div>


                    <div className={show ? "add-modal" : "diss"}>
                        <p className="modal-header">Add task</p>
                        <input data-testid="task-input" type="text" placeholder="Task name.." className="modal-input" ref={TaskTitleRef}></input>
                        <select data-testid="task-select" className="modal-select" onChange={(event) => { setCurrentVal(event.target.value) }}>
                            <option  >Choose Projekt</option>
                            {projects?.map((data) => (
                                <option data-testid="task-options" key={data.color} value={data.color}>{data.name}</option>
                            ))}
                        </select>
                        <button className="modal-add-btn" onClick={() => postTask()} data-testid="add-t-btn">ADD</button>
                    </div>

                </div>)}






        </div>
    );
}

export default FuncOverview;
