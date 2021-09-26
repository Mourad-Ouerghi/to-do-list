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
            let id=Math.floor(Math.random()*10000)
            onSave({text,date,reminder,id});
        }

        setText('');
        setDate('')
        setReminder(false)
    }
    return (
        <form  action="" onSubmit={onSubmit}>
            <div id="formContainer" >
                <label htmlFor="mainTask">add your task</label>
                <input type="text" placeholder="your task" value={text} onChange={(e)=>setText(e.target.value)} id='mainTask' />
                <label htmlFor="reminder">add your date&hour</label>
                <input type="text" placeholder="date&hour" value={date} onChange={(e)=>setDate(e.target.value)} id="reminder" />
                <label htmlFor="reminderBox">set reminder </label>
                <input type="checkbox" value={reminder} onChange={(e)=>setReminder(e.target.value)} id="reminderBox" />
                <input type="submit" value="save task" />
            </div>
        </form>
    )
}

export default Form
