import moment from "moment";

function Modal(props){
    const saveTaskVals = () => {
        var newTaskadd = document.getElementById("newTask").value;
        var newMonthadd = document.getElementById("month").value;
        var newDayadd = document.getElementById("day").value;
        var newYearadd = document.getElementById("year").value;

        var date = newMonthadd+"/"+newDayadd+"/"+newYearadd;
        var isDateValid = moment(date,"MM/DD/YYYY",true).isValid();
        if (!isDateValid){
            alert("date is not valid: "+date);
            return;
        }
        props.addTask(newTaskadd,date);

    }
    return(
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
                    <input id="month" type = "number"></input>
                    <input id="day" type ="number"></input>
                    <input id="year" type = "number"></input>
                </div>
            </div>
            <div id = "buttons">
                <button id = "xbutton" onClick={saveTaskVals}>
                    Save
                </button>
                <button id = "xbutton" onClick={() => props.close()}>
                    Cancel
                </button>
            </div>
        </div>
    );
} export default Modal;