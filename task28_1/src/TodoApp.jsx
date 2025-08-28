import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const TodoApp = () => {
    const [todos, setTodos] = useState([]);

    const validationSchema = Yup.object({
        task: Yup.string()
            .min(5, "Мінімум 5 символів")
            .required("Поле обов'язкове"),
    });

    return (
        <div className="app">
            <h1>TODO List з Formik</h1>


            <Formik
                initialValues={{ task: "" }}
                validationSchema={validationSchema}
                onSubmit={(values, { resetForm }) => {
                    setTodos([...todos, values.task]);
                    resetForm();
                }}
            >
                {() => (
                    <Form>
                        <Field
                            name="task"
                            type="text"
                            placeholder="Введіть задачу..."
                        />
                        <button type="submit">Додати</button>
                        <div style={{ color: "red" }}>
                            <ErrorMessage name="task" />
                        </div>
                    </Form>
                )}
            </Formik>


            <ul>
                {todos.map((todo, index) => (
                    <li key={index}>{todo}</li>
                ))}
            </ul>
        </div>
    );
};

export default TodoApp;
