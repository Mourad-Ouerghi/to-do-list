import { useState } from 'react'
const Form = ({onSave}) => {
    const [text,setText]=useState('');
    const [reminder,setReminder]=useState(false);
    const [date,setDate]=useState('');
    const onSubmit=(e)=>{
        e.preventDefault();
        if(text==="")
        alert('add a task please');
        else
        {
            let id=Math.floor(Math.random()*100000)
            onSave({text,date,reminder,id});
        }

        setText('');
        setDate('')
        setReminder(false)
    }
    return (
        <form  action="" onSubmit={onSubmit}>
            <div id="formContainer" className="bg-green-400 shadow bg-opacity-50 w-48 h-48 mx-auto rounded-md">
                <label htmlFor="mainTask" className="mx-auto">add your task</label>
                <input className="w-40 h-7 text-center rounded-md bg-gray-200 mx-auto focus:ring-2 focus:ring-green-700 shadow-lg" type="text" placeholder="your task" value={text} onChange={(e)=>setText(e.target.value)} id='mainTask' />
                <label htmlFor="reminder" className="mx-auto">add your date&hour</label>
                <input className="w-40 h-7 text-center rounded-md bg-gray-200 mx-auto focus:ring-2 focus:ring-green-700 shadow-lg" type="text" placeholder="date&hour" value={date} onChange={(e)=>setDate(e.target.value)} id="reminder" />
                <label htmlFor="reminderBox" className="mx-auto">set reminder </label>
                <input type="checkbox" className="mx-auto" value={reminder} onChange={(e)=>setReminder(e.target.value)} id="reminderBox" />
                <input className="w-20 mx-auto bg-indigo-500 h-8 rounded-md  my-1 font-semibold text-white active:bg-indigo-700"type="submit" value="save task" />
            </div>
        </form>
    )
}

export default Form
