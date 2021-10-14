import { VscTrash } from "react-icons/vsc";
import { useState } from 'react';
const Task = ({task,onDelete,onCompleted}) => {
    const [taskCompleted,setTaskCompleted]=useState(false);
    return (
        <div className="font-semibold my-5 h-20 w-40 bg-gradient-to-r from-yellow-200 to-yellow-400 rounded-md shadow-md mx-36 text-center"
        onDoubleClick={()=>{setTaskCompleted(!taskCompleted)}} style={taskCompleted?{textDecoration:'line-through'}:{textDecoration:'none'}}>
            <div className="flex relative">
                <div className="">
                    <h3 >{task.text}</h3>
                    <p>{task.date}</p>
                </div>
                <VscTrash  className=" absolute left-36 bottom-6" onClick={()=>onDelete(task.id)} style={{color:'red',cursor:'pointer'}}/>
            </div>
        </div>
    )
}

export default Task
