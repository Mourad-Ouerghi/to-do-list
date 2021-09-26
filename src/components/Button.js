

const Button = ({text,onAdd}) => {
    return (
        <div>
            <button onClick={onAdd}>{text}</button>
        </div>
    )
}

export default Button
