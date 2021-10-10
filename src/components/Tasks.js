import Task from "./Task"
const Tasks = ({tasks,onDelete,onCompleted}) => {
    return (
        <>
        {tasks.map((task)=>(
            <Task key={task.id} task={task} onDelete={onDelete} onCompleted={onCompleted}/>
        ))}
        </>
    )
}

export default Tasks
