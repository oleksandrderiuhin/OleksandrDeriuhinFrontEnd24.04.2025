const containerUl = document.getElementById('list');
const inputField = document.getElementById('newTaskInput');



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
    const strong = document.createElement("strong");
    strong.textContent = inputText;

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Видалити";

    li.appendChild(strong);
    li.appendChild(document.createTextNode(" "));
    li.appendChild(deleteBtn);

    containerUl.appendChild(li);

    inputField.value = "";

})





