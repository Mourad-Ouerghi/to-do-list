import Button from "./Button"
const Header = ({onAdd,showTask}) => {
    return (
        <div className="header">
            To Do List
            <Button text={showTask ? "close" : "add"} onAdd={onAdd}/>
        </div>
    )
}

export default Header
