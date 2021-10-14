import Button from "./Button"
const Header = ({onAdd,showTask}) => {
    return (
        <div className="header flex">
            <p className=" title italic font-mono font-semibold">To Do List</p>
            <Button text={showTask ? "-" : "+"} onAdd={onAdd}/>
        </div>
    )
}

export default Header
