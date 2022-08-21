import { click } from '@testing-library/user-event/dist/click';
import React, { useState } from 'react'
import Button from './Button'


interface TodosInputProps{
    addTodoHandler: (value: string) => void;
}

// addTodoHandler
const TodosInput = ({addTodoHandler}: TodosInputProps) => {
    const [inputText, setInputText] = useState<string>("")
    const changeHandler:React.ChangeEventHandler<HTMLInputElement> = (e) => {
        setInputText(e.target.value)

    }
    const onClickHandler = () => {
        addTodoHandler(inputText)
        setInputText('')
    }
  return (
    <div>
        <input value={inputText} onChange={changeHandler}/>
        {/* <Button label="Add Todo" handleClick={addTodoHandler} /> */}
        <button onClick={onClickHandler}>Add Todo</button>
    </div>
  )
}

export default TodosInput