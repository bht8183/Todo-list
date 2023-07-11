import './Task.css'


function Task(props){
    return(
        <div className = "component">
            <div className = "task-info">
                <h1>
                    {props.name}
                </h1>
                <h2>
                    due: {props.month}/{props.day}/{props.year}
                </h2>

                <input type ='checkbox' className='checkbox'>
                </input>
            </div>
            <div className = "task-manage">
                <button className ='delete' onClick={()=>props.deleteTask(props.name)}>

                </button>
                <button className='edit'>

                </button>
            </div>
        </div>
    );
}
export default Task;