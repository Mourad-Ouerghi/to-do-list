import Button from "./Button"
const Header = ({onAdd,showTask}) => {
    return (
        <div className="header items-center ">
            <p className="self-center">To Do List</p>
            <Button text={showTask ? "-" : "+"} onAdd={onAdd}/>
        </div>
    )
}

export default Header
