import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "./todoSlice";

const App = () => {
    const [task, setTask] = useState("");
    const todos = useSelector((state) => state.todos.items);
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (task.trim().length < 1) return;
        dispatch(addTodo(task));
        setTask("");
    };

    return (
        <div style={{ maxWidth: "400px", margin: "50px auto", textAlign: "center" }}>
            <h1>TODO App</h1>


            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={task}
                    onChange={(e) => setTask(e.target.value)}
                    placeholder="Нова задача..."
                />
                <button type="submit">Додати</button>
            </form>


            <ul style={{ textAlign: "left", marginTop: "20px" }}>
                {todos.map((todo) => (
                    <li key={todo.id}>{todo.text}</li>
                ))}
            </ul>


            <footer style={{ marginTop: "20px", fontWeight: "bold" }}>
                Всього задач: {todos.length}
            </footer>
        </div>
    );
};

export default App;
