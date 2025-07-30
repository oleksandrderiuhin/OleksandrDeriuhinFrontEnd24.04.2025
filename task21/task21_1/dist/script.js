"use strict";

$(document).ready(function () {
    var $taskInput = $("#taskInput");
    var $taskList = $("#taskList");
    var $modal = new bootstrap.Modal("#taskModal");
    var $modalContent = $("#modalTaskContent");

    var addTask = function addTask() {
        var taskText = $taskInput.val().trim();
        if (!taskText) return;

        var $li = $("<li>").addClass("list-group-item list-group-item-action").text(taskText).on("click", function () {
            $modalContent.text($li.text());
            $modal.show();
        });

        $taskList.append($li);
        $taskInput.val("");
    };

    $("#addTaskBtn").on("click", addTask);

    $taskInput.on("keypress", function (e) {
        if (e.which === 13) {
            addTask();
        }
    });
});
