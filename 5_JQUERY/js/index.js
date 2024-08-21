import { getLocalStorage, setLocalStorage } from "./utils.js";

$(document).ready(function () {
  // change position of todo
  $(".draggable-container")
    .sortable({
      connectWith: ".draggable-container",
      opacity: "0.95",
      placeholder: "ui-state-highlight",
      update: function (event, ui) {
        console.log(event, ui);
        saveTasks();
      },
    })
    .disableSelection();

  // Load tasks from localStorage
  loadTasks();

  // Load tasks from localStorage
  function loadTasks() {
    let tasks = JSON.parse(localStorage.getItem("multiStatusTasks"));
    if (tasks) {
      tasks.todo.forEach(function (task) {
        $("#todo").append(`<li class="p-1" id=${task.id}>
                  <div class="task-parent card ui-state-default">
                    <div class="card-header">${task.user}</div>
                    <div class="p-2">
                      <p class="mb-0 task-message">
                        <small>
                          ${task.message}
                        </small>
                      </p>
                      <p class="task-date mb-0 text-secondary text-end" style="font-size: 0.9rem">
                        <small>${task.createAt}</small>
                      </p>
                    </div>
                    <div class="card-footer d-flex justify-content-end">
                      <div class="btn-group">
                        <button class="btn btn-sm btn-outline-primary" data-temp=${task.id} >Edit</button>
                        <button class="btn btn-sm btn-outline-primary" data-temp=${task.id} >Delete</button>
                      </div>
                    </div>
                  </div>
                </li>`);
      });

      tasks.inProgress.forEach(function (task) {
        $("#inProgress").append(`<li class="p-1" id=${task.id}>
                  <div class="task-parent card ui-state-default">
                    <div class="card-header">${task.user}</div>
                    <div class="p-2">
                      <p class="mb-0 task-message">
                        <small>
                          ${task.message}
                        </small>
                      </p>
                      <p class="task-date mb-0 text-secondary text-end" style="font-size: 0.9rem">
                        <small>${task.createAt}</small>
                      </p>
                    </div>
                    <div class="card-footer d-flex justify-content-end">
                      <div class="btn-group">
                        <button class="btn btn-sm btn-outline-primary" data-temp=${task.id} >Edit</button>
                        <button class="btn btn-sm btn-outline-primary" data-temp=${task.id} >Delete</button>
                      </div>
                    </div>
                  </div>
                </li>`);
      });

      tasks.onHold.forEach(function (task) {
        $("#onHold").append(`<li class="p-1" id=${task.id}>
                  <div class="task-parent card ui-state-default">
                    <div class="card-header">${task.user}</div>
                    <div class="p-2">
                      <p class="mb-0 task-message">
                        <small>
                          ${task.message}
                        </small>
                      </p>
                      <p class="task-date mb-0 text-secondary text-end" style="font-size: 0.9rem">
                        <small>${task.createAt}</small>
                      </p>
                    </div>
                    <div class="card-footer d-flex justify-content-end">
                      <div class="btn-group">
                        <button class="btn btn-sm btn-outline-primary" data-temp=${task.id} >Edit</button>
                        <button class="btn btn-sm btn-outline-primary" data-temp=${task.id} >Delete</button>
                      </div>
                    </div>
                  </div>
                </li>`);
      });

      tasks.review.forEach(function (task) {
        $("#review").append(`<li class="p-1" id=${task.id}>
                  <div class="task-parent card ui-state-default">
                    <div class="card-header">${task.user}</div>
                    <div class="p-2">
                      <p class="mb-0 task-message">
                        <small>
                          ${task.message}
                        </small>
                      </p>
                      <p class="task-date mb-0 text-secondary text-end" style="font-size: 0.9rem">
                        <small>${task.createAt}</small>
                      </p>
                    </div>
                    <div class="card-footer d-flex justify-content-end">
                      <div class="btn-group">
                        <button class="btn btn-sm btn-outline-primary" data-temp=${task.id} >Edit</button>
                        <button class="btn btn-sm btn-outline-primary" data-temp=${task.id} >Delete</button>
                      </div>
                    </div>
                  </div>
                </li>`);
      });

      tasks.complete.forEach(function (task) {
        $("#complete").append(`<li class="p-1" id=${task.id}>
                  <div class="task-parent card ui-state-default">
                    <div class="card-header">${task.user}</div>
                    <div class="p-2">
                      <p class="mb-0 task-message">
                        <small>
                          ${task.message}
                        </small>
                      </p>
                      <p class="task-date mb-0 text-secondary text-end" style="font-size: 0.9rem">
                        <small>${task.createAt}</small>
                      </p>
                    </div>
                    <div class="card-footer d-flex justify-content-end">
                      <div class="btn-group">
                        <button class="btn btn-sm btn-outline-primary" data-temp=${task.id} >Edit</button>
                        <button class="btn btn-sm btn-outline-primary" data-temp=${task.id} >Delete</button>
                      </div>
                    </div>
                  </div>
                </li>`);
      });
    }
  }

  // Save tasks to localStorage
  function saveTasks() {
    let tasks = {
      todo: [],
      inProgress: [],
      onHold: [],
      review: [],
      complete: [],
    };

    $("#todo li").each(function () {
      console.log({
        id: $(this).attr("id"),
        user: $(this).find(".card-header").text().trim(),
        message: $(this).find(".task-message").text().trim(),
        createAt: $(this).find(".task-date").text().trim(),
      });
      tasks.todo.push({
        id: $(this).attr("id"),
        user: $(this).find(".card-header").text().trim(),
        message: $(this).find(".task-message").text().trim(),
        createAt: $(this).find(".task-date").text().trim(),
      });
    });

    $("#inProgress li").each(function () {
      console.log({
        id: $(this).attr("id"),
        user: $(this).find(".card-header").text().trim(),
        message: $(this).find(".task-message").text().trim(),
        createAt: $(this).find(".task-date").text().trim(),
      });
      tasks.inProgress.push({
        id: $(this).attr("id"),
        user: $(this).find(".card-header").text().trim(),
        message: $(this).find(".task-message").text().trim(),
        createAt: $(this).find(".task-date").text().trim(),
      });
    });

    $("#onHold li").each(function () {
      tasks.onHold.push({
        id: $(this).attr("id"),
        user: $(this).find(".card-header").text().trim(),
        message: $(this).find(".task-message").text().trim(),
        createAt: $(this).find(".task-date").text().trim(),
      });
    });

    $("#review li").each(function () {
      tasks.review.push({
        id: $(this).attr("id"),
        user: $(this).find(".card-header").text().trim(),
        message: $(this).find(".task-message").text().trim(),
        createAt: $(this).find(".task-date").text().trim(),
      });
    });

    $("#complete li").each(function () {
      tasks.complete.push({
        id: $(this).attr("id"),
        user: $(this).find(".card-header").text().trim(),
        message: $(this).find(".task-message").text().trim(),
        createAt: $(this).find(".task-date").text().trim(),
      });
    });

    localStorage.setItem("multiStatusTasks", JSON.stringify(tasks));
  }

  // when modal open using add todo btn hide edit btn
  $("#addNewTodo").on("click", () => {
    $("#createTodo").css({ display: "block" });
    $("#editTodo").css({ display: "none" });
    $("#taskMessage").val("");
    $("#selectedTeamMember").val("");
  });

  // create new todo
  $("#createTodo").on("click", () => {
    createNewTodo();
  });

  function createNewTodo() {
    const newTodo = {
      id: Date.now(),
      user: $("#selectedTeamMember").val(),
      message: $("#taskMessage").val(),
      createAt: new Date().toLocaleString(),
    };

    console.log("newTodo", newTodo);
    $("#todo").append(`<li class="p-1" id=${newTodo.id}>
                  <div class="task-parent card ui-state-default">
                    <div class="card-header">${newTodo.user}</div>
                    <div class="p-2">
                      <p class="mb-0 task-message">
                        <small>
                          ${newTodo.message}
                        </small>
                      </p>
                      <p class="task-date mb-0 text-secondary text-end" style="font-size: 0.9rem">
                        <small>${newTodo.createAt}</small>
                      </p>
                    </div>
                    <div class="card-footer d-flex justify-content-end">
                      <div class="btn-group">
                        <button class="btn btn-sm btn-outline-primary" data-temp=${newTodo.id} >Edit</button>
                        <button class="btn btn-sm btn-outline-primary" data-temp=${newTodo.id} >Delete</button>
                      </div>
                    </div>
                  </div>
                </li>`);

    $(".task-parent").on("click", (e) => {
      if ($(e.target).text() == "Edit") {
        HandelEditTaskModal($(e.target).attr("data-temp"), $(e.target).parents("ul").attr("id"));
      } else if ($(e.target).text() == "Delete") {
        deleteTask($(e.target).attr("data-temp"), $(e.target).parents("ul").attr("id"));
      }
    });

    const tasks = getLocalStorage("multiStatusTasks");
    if (tasks) {
      const todo = tasks.todo;
      const updateTodo = [newTodo, ...todo];
      tasks.todo = updateTodo;
      setLocalStorage("multiStatusTasks", tasks);
    } else {
      setLocalStorage("multiStatusTasks", {
        todo: [newTodo],
        inProgress: [],
        onHold: [],
        review: [],
        complete: [],
      });
    }
    $("#selectedTeamMember").val("");
    $("#taskMessage").val("");
    $("#addTodoModal").modal("hide");
  }

  $(".task-parent").on("click", (e) => {
    if ($(e.target).text() == "Edit") {
      HandelEditTaskModal($(e.target).attr("data-temp"), $(e.target).parents("ul").attr("id"));
    } else if ($(e.target).text() == "Delete") {
      deleteTask($(e.target).attr("data-temp"), $(e.target).parents("ul").attr("id"));
    }
  });

  function HandelEditTaskModal(id, taskStatus) {
    // get task from local storage
    const tasks = getLocalStorage("multiStatusTasks");
    console.log(id, tasks[taskStatus]);
    const editingTask = tasks[taskStatus].find((task) => task.id == id);
    console.log("editing task", editingTask);
    // open model and field input value
    $("#createTodo").css({ display: "none" });
    $("#editTodo").css({ display: "block" });
    $("#addTodoModal").modal("show");
    $("#taskMessage").val(editingTask.message);
    $("#selectedTeamMember").val(editingTask.user);

    $("#editTodo").on("click", () => {
      // update the local storage
      const updatedTask = {
        id: id,
        user: $("#selectedTeamMember").val(),
        message: $("#taskMessage").val(),
        createAt: new Date().toLocaleString(),
      };

      const updateTasks = tasks[taskStatus].map((task) => {
        if (task.id == id) {
          return updatedTask;
        }
        return task;
      });

      tasks[taskStatus] = updateTasks;
      setLocalStorage("multiStatusTasks", tasks);
      // update the DOM content
      $(`#${id} p:nth-child(1) small`).text(updatedTask.message);
      $(`#${id} .card-header`).text(updatedTask.user);
      $(`#${id} p:nth-child(2) small`).text(updatedTask.createAt);

      // reset modal
      $("#taskMessage").val("");
      $("#selectedTeamMember").val("");
      $("#addTodoModal").modal("hide");

      $("#editTodo").off("click");
    });
  }

  function deleteTask(id, taskStatus) {
    console.log(id, taskStatus);
    // get task from local storage
    const tasks = getLocalStorage("multiStatusTasks");
    // update the local storage
    const updateTasks = tasks[taskStatus].filter((task) => task.id != id);
    tasks[taskStatus] = updateTasks;
    setLocalStorage("multiStatusTasks", tasks);

    // delete from DOM content
    $(`#${id}`).remove();
  }
});
