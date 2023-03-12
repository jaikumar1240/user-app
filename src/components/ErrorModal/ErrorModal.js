import './ErrorModal.css'
const ErrorModal = (props) => {
    function closeModal(){
        props.closeModal(true)
    }
    return (
        <div className="modal">
            <h1>{props.title}</h1>
            <p>{props.message}</p>
            <button onClick={closeModal}>Close</button>
        </div>
    )
}
export default ErrorModal;