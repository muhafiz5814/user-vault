// Button component to render buttons on Detail card.
const ActionButton = ({title, onClickHandler = () => {}}) => {
    return (
        <>
            <button onClick={onClickHandler} className={`px-3 py-1 mx-3 ${title === "Delete" ? "bg-red-800" : "bg-blue-800"}`} >{title}</button>
        </>
    )
}

export default ActionButton;