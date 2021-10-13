import { VscTrash } from "react-icons/vsc";
import { useState } from 'react';
const Task = ({task,onDelete,onCompleted}) => {
    const [taskCompleted,setTaskCompleted]=useState(false);
    return (
        <div className="font-bold shadow-xl max-w-xs max-h-xl rounded bg-gray-300 items-center"
        onDoubleClick={()=>{setTaskCompleted(!taskCompleted)}} style={taskCompleted?{textDecoration:'line-through'}:{textDecoration:'none'}}>
            <div className='flex space-x-4'>
                <h3 >{task.text}</h3>
                <VscTrash  className="" onClick={()=>onDelete(task.id)} style={{color:'red',cursor:'pointer'}}/>
            </div>
            <p>{task.date}</p>
        </div>
    )
}

export default Task
