import { VscTrash } from "react-icons/vsc";
const Task = ({task,onDelete}) => {
    return (
        <div>
            <h3>{task.text} <VscTrash onClick={()=>onDelete(task.id)} style={{color:'red',cursor:'pointer'}}/></h3>
            <p>{task.date}</p>
        </div>
    )
}

export default Task
