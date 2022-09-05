import React from 'react'

const TodoItem = (props) => {
  return (
    <div className='todoitem'>
        <div>
            <h4>{props.text}</h4>
            <button>Delete</button>
            <button>Complete</button>

        </div>

    </div>
  )
}

export default TodoItem