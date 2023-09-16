import { useRef } from "react";

// function type definition for expection function typed props, which expects a string argument
const NewTodo: React.FC<{onAddTodo: (text: string) => void}> = (props) => {
    // in TS useRef also requires a type definition what type of element is should expect. 
    // useRef is a generic type, so it could be connected with any kind of input elements without TS
    // requires a default value (null)
    const inputRef = useRef<HTMLInputElement>(null);

    const submitHandler = (event: React.FormEvent) => {
        event.preventDefault();

        // current? - handle null case, if it's not sure value exist at this point of code yet
        //  const enteredText = inputRef.current?.value;

        // current! - ! can be defined if it's sure that value is not null at this point of code
        const enteredText = inputRef.current!.value;

        if(enteredText.trim().length === 0) {
            return;
        }

        props.onAddTodo(enteredText);
    }

    return <form onSubmit={submitHandler}>
            <label>Todo Text</label>
            <input type="text" ref={inputRef}></input>
            <button>Add Todo</button>
        </form>
    }

export default NewTodo;