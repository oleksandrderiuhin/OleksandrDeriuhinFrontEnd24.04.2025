import { useState } from "react";

export default function Home() {
    const [todos, setTodos] = useState([]);
    const [input, setInput] = useState("");

    const addTodo = (e) => {
        e.preventDefault();
        if (!input.trim()) return;
        setTodos([...todos, input]);
        setInput("");
    };

    return (
        <div>
            <h1>TODO список</h1>
            <form onSubmit={addTodo}>
                <input
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Нове завдання"
                />
                <button type="submit">Додати</button>
            </form>
            <ul>
                {todos.map((todo, i) => (
                    <li key={i}>{todo}</li>
                ))}
            </ul>
        </div>
    );
}
