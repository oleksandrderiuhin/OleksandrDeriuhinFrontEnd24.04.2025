const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');

let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

function saveTasks() {
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

function renderTasks() {
    taskList.innerHTML = '';
    tasks.forEach((task, index) => {
        const li = document.createElement('li');
        li.className = task.completed ? 'completed' : '';

        const span = document.createElement('span');
        span.textContent = task.text;
        span.onclick = () => toggleComplete(index);

        const delBtn = document.createElement('button');
        delBtn.textContent = '🗑️';
        delBtn.onclick = () => deleteTask(index);

        li.appendChild(span);
        li.appendChild(delBtn);
        taskList.appendChild(li);
    });
}

function addTask() {
    const text = taskInput.value.trim();
    if (text === '') return;
    tasks.push({ text, completed: false });
    taskInput.value = '';
    saveTasks();
    renderTasks();
}

function deleteTask(index) {
    tasks.splice(index, 1);
    saveTasks();
    renderTasks();
}

function toggleComplete(index) {
    tasks[index].completed = !tasks[index].completed;
    saveTasks();
    renderTasks();
}


window.addEventListener('storage', (event) => {
    if (event.key === 'tasks') {
        tasks = JSON.parse(localStorage.getItem('tasks')) || [];
        renderTasks();
        console.log('Дані синхронізовано з іншої вкладки');
    }
});


renderTasks();