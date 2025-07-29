$(document).ready(() => {
    const $taskInput = $("#taskInput");
    const $taskList = $("#taskList");
    const $modal = new bootstrap.Modal("#taskModal");
    const $modalContent = $("#modalTaskContent");

    const addTask = () => {
        const taskText = $taskInput.val().trim();
        if (!taskText) return;

        const $li = $("<li>")
            .addClass("list-group-item list-group-item-action")
            .text(taskText)
            .on("click", () => {
                $modalContent.text($li.text());
                $modal.show();
            });

        $taskList.append($li);
        $taskInput.val("");
    };

    $("#addTaskBtn").on("click", addTask);

    $taskInput.on("keypress", (e) => {
        if (e.which === 13) {
            addTask();
        }
    });
});

