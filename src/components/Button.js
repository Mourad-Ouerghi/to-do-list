

const Button = ({text,onAdd}) => {
    return (
        <div>
            <button  className="bg-yellow-300 rounded-3xl p-1 w-10 my-1 shadow-md font-extrabold text-2xl text-white active:bg-yellow-400 button" onClick={onAdd}>{text}</button>
        </div>
    )
}

export default Button
