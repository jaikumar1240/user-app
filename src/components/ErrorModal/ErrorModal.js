import ReactDOM from 'react-dom'
import './ErrorModal.css'
const ErrorModal = (props) => {
    function closeModal() {
        props.closeModal(true)
    }
    const Overlay = () => {
        return (
            <div className="modal">
                <h1>{props.title}</h1>
                <p>{props.message}</p>
                <button onClick={closeModal}>Close</button>
            </div>
        )
    }
    return ReactDOM.createPortal(<Overlay />, document.getElementById('overlay-root'));

}
export default ErrorModal;