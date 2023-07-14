import Task from './Task';
import { useState,useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import './Mainframe.css';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import moment, { months } from 'moment/moment';
import Modal from './modal';
import { db } from './firebase.js';
import { 
    collection,
    onSnapshot,
    setDoc,
    updateDoc,
    deleteDoc,
    doc
 } from 'firebase/firestore'


function Mainframe(){

    const [previousTaskId,setId] = useState([]);
    const [taskList,setList] = useState([]);
    var tempname;
    const [isEditing,setIsEditing] = useState(false);
    const [updateItems,setUpdateItems] = useState('');
    const [taskCodeList,setCodeList] = useState([]);

    useEffect( () => {
        onSnapshot( collection( db, 'todos' ), (snapshot) => { 
            setList( snapshot.docs.map(doc => doc.data() ) ); 
        });
    }, [updateItems]);

    useEffect( () => {
        let tempList = [];
        taskList.forEach((task) => {
            tempList.push(<Task key = {task.id} id = {task.id} name = {task.name} date = {task.date} editTask = {editTask} deleteTask = {deleteTask}> </Task>);
        });
        setCodeList( [tempList] );
        console.log( tempList );
    }, [taskList]);

    const addTask = (newTaskAdd,date) => {
        
        var uid = uuidv4();
        
        setDoc( doc( db,'todos',uid), {
            name : newTaskAdd,
            date : date,
            id : uid
        });
        setUpdateItems('');

    }

    const saveEdit = (newTaskName,newTaskDate,taskId) => {
        
        updateDoc( doc( db,'todos',taskId), {
            name : newTaskName,
            date : newTaskDate
        });
        setUpdateItems('');
        
    }

    const editTask = (taskid) => {    
        setId(taskid);
        setIsEditing(true);
        console.log(taskid);
    }

    const deleteTask = (taskid) => {
        deleteDoc( doc( db,'todos',taskid) ).then( ()=>{console.log("document has been deleted"+taskid)} )
        .catch(error => {console.log(error)});
        setUpdateItems('');
    }




    return(
        <div id = "mainframe">
            <div id = "toptab">
                <Popup trigger=
                {<button> + </button>}
                modal nested>{
                    close => (

                        <Modal addTask = {addTask} close = {close} isAdding = {true}></Modal>
                    )
                }

                </Popup>

                <Popup open=
                {isEditing}
                onClose={() => setIsEditing(false)}
                modal nested>{
                    close => (

                        <Modal addTask = {saveEdit} close = {close} isAdding = {false} taskId = {previousTaskId}></Modal>
                    )
                }

                </Popup>
                
            </div>
            <div id = "taskList">

                {taskCodeList}

            </div>

        </div>
    );
} export default Mainframe;
