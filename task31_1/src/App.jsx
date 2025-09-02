import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTodos, clearTodos } from './reducers';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';

export default function App() {
    const dispatch = useDispatch();
    const loading = useSelector((state) => state.todos.loading);

    useEffect(() => {
        dispatch(fetchTodos());
    }, [dispatch]);

    return (
        <div style={{ padding: 20, maxWidth: 500, margin: '0 auto' }}>
            <h1>TODO App</h1>
            <TodoForm />
            {loading ? <p>Loading...</p> : <TodoList />}
            <button onClick={() => dispatch(clearTodos())}>Clear All</button>
        </div>
    );
}
