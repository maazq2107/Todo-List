import React, {useState} from 'react';
import TodoList from './TodoList';

const App = () => {

    const [inputList, setInputList] = useState();
    const [items, setItems] = useState([]);

    const itemEvent = (event) => {
        setInputList(event.target.value);
    }

    const listOfItems = () => {
        setItems((oldItems) => {
            return [...oldItems, inputList];
        });
        setInputList("");
    }

    const deleteItems = (id) => {
        console.log("deleted");

        setItems((oldItems) => {
            return oldItems.filter((arrElem, index) => {
                return index !== id;
            })
        })

    }

    return (
        <>
            <div className="mainDiv">
                <div className="centerDiv">
                    <br/>
                        <h1>To-do List</h1>
                    <br/>
                    <input 
                        type="text" 
                        placeholder="Add Items" 
                        value={inputList}
                        onChange={itemEvent}
                    />
                    <button onClick={listOfItems}> + </button>

                    <ol>
                        {items.map((itemVal, index) => {
                            return <TodoList 
                                key={index} 
                                id={index} 
                                text={itemVal}
                                onSelect={deleteItems}    
                                />;
                        })} 
                    </ol>
                </div>
            </div>
        </>
    );
}

export default App;