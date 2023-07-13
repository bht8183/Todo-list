import Task from './Task';
import { useState } from 'react';
import './Mainframe.css';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import moment, { months } from 'moment/moment';
import Modal from './modal';

function Mainframe(){

    const [previousTaskName,setPreviousTaskName] = useState([]);
    const [taskList,setList] = useState([]);
    var tempname;



    const nameCheck = (task) => {
        return task == tempname;
    }

    const addTask = (newTaskAdd,date) => {
        
        var tempList = [];
        var canAdd = true;
        var code =  <Task name={newTaskAdd} date = {date} key = {newTaskAdd} deleteTask = {deleteTask} editTask = {editTask}></Task>;
        tempname = newTaskAdd;

        taskList.forEach(task => {
            
            if(nameCheck(task.props.name)){
                alert("cannot have two task with the same name");
                canAdd = false;
            }
        });
        if (canAdd){
            tempList.push(code);
            setList([...taskList, ...tempList]);
            
        }
    }
    const saveEdit = (taskid) => {
        const newList = taskList.filter((task) => task.name != "");
        console.log(newList);
    }

    const editTask = (taskid) => {    
        setPreviousTaskName(taskid);
        console.log(taskid);
    }

    const deleteTask = (taskid) => {
        setList((currentList) => currentList.filter((task) => task.key != taskid));
    }
    return(
        <div id = "mainframe">
            <div id = "toptab">
                <Popup trigger=
                {<button> + </button>}
                modal nested>{
                    close => (

                        <Modal addTask = {addTask} close = {close}></Modal>
                    )
                }

                </Popup>
                
            </div>
            <div id = "taskList">

                {taskList}

            </div>

        </div>
    );
} export default Mainframe;
