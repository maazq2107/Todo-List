import React from 'react';

const TodoList = (props) => {

   

    return (
        <>
            <div className="todoDiv">
                <i className="bi bi-x-circle" aria-hidden="true" 
                    onClick={() => {
                        props.onSelect(props.id);
                    }}
                />
                <li> {props.text} </li>
            </div>
        </>
    );
}

export default TodoList;