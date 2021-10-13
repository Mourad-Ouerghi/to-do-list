import {useState} from 'react'
import Header from "./components/Header"
import Form from "./components/Form"
import Tasks from "./components/Tasks"


function App() {
  const [showAddTask,setShowAddTask]=useState(false);
  const [tasks,setTasks]=useState([]);
  const addTask=(newTask)=>{
    setTasks([...tasks,newTask])
    setShowAddTask(!showAddTask)
  }
  const onDelete=(id)=>{
    setTasks(tasks.filter((task)=>task.id!==id))
  }

  return (
    <div className="App">
      <div className="container mx-auto my-auto max-w-md max-h-lg ">
        <Header  onAdd={()=>setShowAddTask(!showAddTask)} showTask={showAddTask}/>
        {showAddTask && <Form onSave={addTask}/>}
        {
          tasks.length>0 ? <Tasks className="space-y-5" tasks={tasks} onDelete={onDelete} />
          :
          'No tasks to show !'
        }
      </div>
    </div>
  );
}

export default App;
