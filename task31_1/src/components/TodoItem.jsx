import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { removeTodo, toggleTodo, editTodo } from '../reducers';

export default function TodoItem({ todo }) {
    const dispatch = useDispatch();
    const [isEditing, setIsEditing] = useState(false);
    const [text, setText] = useState(todo.text);

    const handleEdit = () => {
        dispatch(editTodo({ id: todo.id, text }));
        setIsEditing(false);
    };

    return (
        <li style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => dispatch(toggleTodo(todo.id))}
            />
            {isEditing ? (
                <>
                    <input value={text} onChange={(e) => setText(e.target.value)} />
                    <button onClick={handleEdit}>Save</button>
                </>
            ) : (
                <span
                    style={{
                        textDecoration: todo.completed ? 'line-through' : 'none',
                        flexGrow: 1,
                    }}
                >
          {todo.text}
        </span>
            )}
            <button onClick={() => setIsEditing(!isEditing)}>
                {isEditing ? 'Cancel' : 'Edit'}
            </button>
            <button onClick={() => dispatch(removeTodo(todo.id))}>❌</button>
        </li>
    );
}
