import React from 'react'

const TodoItem = (props) => {
  return (
    <div className='todoitem'>
        <div>
            <h4 className={props.complete ? 'complete' : "notcomplete"}>{props.text}</h4>
            <button onClick={() => props.handleDelete(props.id)} >Delete</button>
            <button onClick={() => props.handleComplete(props.id)} >Complete</button>

        </div>

    </div>
  )
}

export default TodoItem