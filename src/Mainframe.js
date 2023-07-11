import Task from './Task';
import { useState } from 'react';
import './Mainframe.css';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import moment, { months } from 'moment/moment';

function Mainframe(){

    const [taskList,setList] = useState([]);
    var tempname;

    const nameCheck = (task) => {
        return task == tempname;
    }

    const addTask = () => {
        var newTaskadd = document.getElementById("newTask").value;
        var newMonthadd = document.getElementById("month").value;
        var newDayadd = document.getElementById("day").value;
        var newYearadd = document.getElementById("year").value;
        var tempList = [];
        var canAdd = true;
        var code =  <Task name={newTaskadd} month={newMonthadd} day = {newDayadd} year = {newYearadd} key = {newTaskadd} deleteTask = {deleteTask}></Task>;
        tempname = newTaskadd;
        var date = newMonthadd+"/"+newDayadd+"/"+newYearadd;
        var isDateValid = moment(date,"MM/DD/YYYY",true).isValid();
        if (!isDateValid){
            alert("date is not valid: "+date);
            return;
        }
        taskList.forEach(task => {
            console.log(task.props.name);
            if(nameCheck(task.props.name)){
                alert("cannot have two task with the same name");
                canAdd = false;
            }
        });
        if (canAdd){
            tempList.push(code);
            setList([...taskList, ...tempList]);
            
            console.log(taskList);
        }
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

                        <div className='modal'>
                            <div id = "inputs">
                                <div className='content'>
                                    name of task: 
                                </div>
                                <input id="newTask"></input>
                                <div className='date'>
                                    due date:  
                                </div>
                                <div id = "date-box">
                                    <input id="month"></input>
                                    <input id="day"></input>
                                    <input id="year"></input>
                                </div>
                            </div>
                            <div id = "buttons">
                                <button id = "xbutton" onClick={addTask}>
                                    Create
                                </button>
                                <button id = "xbutton" onClick=
                                    {() => close()}>
                                        Cancel
                                </button>
                            </div>
                        </div>
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
