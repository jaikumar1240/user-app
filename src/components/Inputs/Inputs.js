import React, { useRef } from "react";
import { useState } from "react";
import ErrorModal from "../ErrorModal/ErrorModal";

const Inputs = (props) => {
    const nameRef = useRef();

    const ageRef = useRef()
    const [isValid, setIsValid] = useState(true);
    const addUser = (event) => {
        const name = nameRef.current.value
        const age = ageRef.current.value;
        event.preventDefault();
        console.log(nameRef);
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
        nameRef.current.value = '';
        ageRef.current.value = '';
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
                    <input ref={nameRef} type='text' />
                </div>

                <div>
                    <label>Age</label>
                    <input ref={ageRef} type='number' />
                </div>
                <button type="submit">Add</button>
            </form>
        </React.Fragment>
    )
}
export default Inputs;