$(document).ready(function () {
    const $taskInput = $("#taskInput");
    const $taskList = $("#taskList");
    const $modal = new bootstrap.Modal("#taskModal");
    const $modalContent = $("#modalTaskContent");

    $("#addTaskBtn").click(function () {
        const taskText = $taskInput.val().trim();
        if (taskText === "") return;

        const $li = $("<li>")
            .addClass("list-group-item list-group-item-action")
            .text(taskText)
            .click(function () {
                $modalContent.text($(this).text());
                $modal.show();
            });

        $taskList.append($li);
        $taskInput.val("");
    });


    $taskInput.keypress(function (e) {
        if (e.which === 13) {
            $("#addTaskBtn").click();
        }
    });
});
