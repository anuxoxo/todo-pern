import React, { Fragment, useState } from 'react';

const InputTodo = () => {
    const [description, setDescription] = useState("");
    const handleSubmit = async e => {
        try {
            e.preventDefault();

        } catch (err) {
            console.error(err.message);
        }
    }
    return (
        <Fragment>
            <h1 className="text-center mt-5">Pern Todo List</h1>
            <form className="d-flex mt-5">
                <input
                    type="text"
                    className="form-control"
                    value={description}
                    onChange={e => setDescription(e.target.value)}
                />
                <button className="btn btn-success" onClick={handleSubmit}>Add</button>
            </form>
        </Fragment>
    )
}

export default InputTodo;