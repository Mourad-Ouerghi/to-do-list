import { VscTrash } from "react-icons/vsc";
import { useState } from 'react';
const Task = ({task,onDelete,onCompleted}) => {
    const [taskCompleted,setTaskCompleted]=useState(false);
    return (
        <div onDoubleClick={()=>{setTaskCompleted(!taskCompleted)}} style={taskCompleted?{textDecoration:'line-through'}:{textDecoration:'none'}}>
            <h3>{task.text} <VscTrash onClick={()=>onDelete(task.id)} style={{color:'red',cursor:'pointer'}}/></h3>
            <p>{task.date}</p>
        </div>
    )
}

export default Task
