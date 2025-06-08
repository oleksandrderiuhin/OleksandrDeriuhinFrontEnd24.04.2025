const containerUl = document.getElementById('list');
const inputField = document.getElementById('newTaskInput');
const addTaskBtn = document.getElementById('addTaskBtn');


containerUl.addEventListener('click', function(event) {
    if (event.target.tagName === 'BUTTON') {
        const li = event.target.parentElement;
        containerUl.removeChild(li);
    }
});


inputField.addEventListener('change', (e) => {
    const inputText = e.target.value.trim();
    if (inputText === '') return;

    const li = document.createElement("li");
    li.innerHTML = `<strong>${inputText}</strong> <button>Видалити</button>`;
    containerUl.appendChild(li);
    addTaskBtn.value = "";

})

function checkIfEmpty() {
    if (containerUl.children.length === 0) {
        document.getElementById("emptyMessage").style.display = "block";
    } else {
        document.getElementById("emptyMessage").style.display = "none";
    }
}



