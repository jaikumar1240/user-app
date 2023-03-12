import React from "react";
import { useState } from "react";
import ErrorModal from "../ErrorModal/ErrorModal";

const Inputs = (props) => {
    const [isValid, setIsValid] = useState(true);
    const addUser = (event) => {
        event.preventDefault();
        if (name.trim().length === 0 || age.length < 1) {
            setIsValid(false);
            return;
        }
        if (+age < 1) {
            return
        }
        setIsValid(true);
        const user = {
            name: name,
            age: age,
            key: Math.random()
        }
        props.userData(user);
        setName('')
        setAge('')
    }

    const [name, setName] = useState('');
    const nameHandler = (event) => {

        setName(event.target.value)
    }
    const [age, setAge] = useState('')
    const ageHandler = (event) => {
        setAge(event.target.value)
    }
    function closeModal() {
        setIsValid(true);
    }



    return (
        <React.Fragment>
            {!isValid && <ErrorModal closeModal={closeModal} style={{ color: 'red' }} title={' I am Error Modal'} message={'Something went wrong'} ></ErrorModal >}
            <form onSubmit={addUser}>
                <div>
                    <label>UserName</label>
                    <input type='text' value={name} onChange={nameHandler} />
                </div>

                <div>
                    <label>Age</label>
                    <input type='number' value={age} onChange={ageHandler} />
                </div>
                <button type="submit">Add</button>
            </form>
        </React.Fragment>
    )
}
export default Inputs;