import './Task.css'
import Modal from './modal';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';


function Task(props){
    return(
        <div className = "component">
            <div className = "task-info">
                <h1>
                    {props.name}
                </h1>
                <h2>
                    due: {props.date}
                </h2>

                <input type ='checkbox' className='checkbox'>
                </input>
            </div>
            <div className = "task-manage">
                <button className ='delete' onClick={()=>props.deleteTask(props.id)}>

                </button>
                <button className = 'edit' onClick={()=>props.editTask(props.id)}></button>
                
            </div>
        </div>
    );
}
export default Task;