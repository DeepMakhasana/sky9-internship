import { getLocalStorage, setLocalStorage } from "./utils.js";

$(document).ready(function () {
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
        $("#todoList").append(`<li class="p-1">
                  <div class="task-parent card ui-state-default">
                    <div class="card-header">${task.user}</div>
                    <div class="p-2">
                      <p class="mb-0 task-message">
                        <small>
                          ${task.message}
                        </small>
                      </p>
                      <p class="task-date mb-0 text-secondary text-end" style="font-size: 0.9rem">
                        <small>12 Aug 12:24 PM</small>
                      </p>
                    </div>
                    <div class="card-footer d-flex justify-content-end">
                      <div class="btn-group">
                        <button class="btn btn-sm btn-outline-primary">Edit</button>
                        <button class="btn btn-sm btn-outline-primary">Delete</button>
                      </div>
                    </div>
                  </div>
                </li>`);
      });

      tasks.inProgress.forEach(function (task) {
        $("#inProgressList").append(`<li class="p-1">
                  <div class="task-parent card ui-state-default">
                    <div class="card-header">${task.user}</div>
                    <div class="p-2">
                      <p class="mb-0 task-message">
                        <small>
                          ${task.message}
                        </small>
                      </p>
                      <p class="task-date mb-0 text-secondary text-end" style="font-size: 0.9rem">
                        <small>12 Aug 12:24 PM</small>
                      </p>
                    </div>
                    <div class="card-footer d-flex justify-content-end">
                      <div class="btn-group">
                        <button class="btn btn-sm btn-outline-primary">Edit</button>
                        <button class="btn btn-sm btn-outline-primary">Delete</button>
                      </div>
                    </div>
                  </div>
                </li>`);
      });

      tasks.onHold.forEach(function (task) {
        $("#onHoldList").append(`<li class="p-1">
                  <div class="task-parent card ui-state-default">
                    <div class="card-header">${task.user}</div>
                    <div class="p-2">
                      <p class="mb-0 task-message">
                        <small>
                          ${task.message}
                        </small>
                      </p>
                      <p class="task-date mb-0 text-secondary text-end" style="font-size: 0.9rem">
                        <small>12 Aug 12:24 PM</small>
                      </p>
                    </div>
                    <div class="card-footer d-flex justify-content-end">
                      <div class="btn-group">
                        <button class="btn btn-sm btn-outline-primary">Edit</button>
                        <button class="btn btn-sm btn-outline-primary">Delete</button>
                      </div>
                    </div>
                  </div>
                </li>`);
      });

      tasks.review.forEach(function (task) {
        $("#reviewList").append(`<li class="p-1">
                  <div class="task-parent card ui-state-default">
                    <div class="card-header">${task.user}</div>
                    <div class="p-2">
                      <p class="mb-0 task-message">
                        <small>
                          ${task.message}
                        </small>
                      </p>
                      <p class="task-date mb-0 text-secondary text-end" style="font-size: 0.9rem">
                        <small>12 Aug 12:24 PM</small>
                      </p>
                    </div>
                    <div class="card-footer d-flex justify-content-end">
                      <div class="btn-group">
                        <button class="btn btn-sm btn-outline-primary">Edit</button>
                        <button class="btn btn-sm btn-outline-primary">Delete</button>
                      </div>
                    </div>
                  </div>
                </li>`);
      });

      tasks.complete.forEach(function (task) {
        $("#completedList").append(`<li class="p-1">
                  <div class="task-parent card ui-state-default">
                    <div class="card-header">${task.user}</div>
                    <div class="p-2">
                      <p class="mb-0 task-message">
                        <small>
                          ${task.message}
                        </small>
                      </p>
                      <p class="task-date mb-0 text-secondary text-end" style="font-size: 0.9rem">
                        <small>12 Aug 12:24 PM</small>
                      </p>
                    </div>
                    <div class="card-footer d-flex justify-content-end">
                      <div class="btn-group">
                        <button class="btn btn-sm btn-outline-primary">Edit</button>
                        <button class="btn btn-sm btn-outline-primary">Delete</button>
                      </div>
                    </div>
                  </div>
                </li>`);
      });
    }
  }
});

// Save tasks to localStorage
function saveTasks() {
  let tasks = {
    todo: [],
    inProgress: [],
    onHold: [],
    review: [],
    complete: [],
  };

  $("#todoList li").each(function () {
    console.log({
      user: $(this).find(".card-header").text().trim(),
      message: $(this).find(".task-message").text().trim(),
      createAt: $(this).find(".task-date").text().trim(),
    });
    tasks.todo.push({
      user: $(this).find(".card-header").text().trim(),
      message: $(this).find(".task-message").text().trim(),
      createAt: $(this).find(".task-date").text().trim(),
    });
  });

  $("#inProgressList li").each(function () {
    tasks.inProgress.push({
      user: $(this).find(".card-header").text().trim(),
      message: $(this).find(".task-message").text().trim(),
      createAt: $(this).find(".task-date").text().trim(),
    });
  });

  $("#onHoldList li").each(function () {
    tasks.onHold.push({
      user: $(this).find(".card-header").text().trim(),
      message: $(this).find(".task-message").text().trim(),
      createAt: $(this).find(".task-date").text().trim(),
    });
  });

  $("#reviewList li").each(function () {
    tasks.review.push({
      user: $(this).find(".card-header").text().trim(),
      message: $(this).find(".task-message").text().trim(),
      createAt: $(this).find(".task-date").text().trim(),
    });
  });

  $("#completedList li").each(function () {
    tasks.complete.push({
      user: $(this).find(".card-header").text().trim(),
      message: $(this).find(".task-message").text().trim(),
      createAt: $(this).find(".task-date").text().trim(),
    });
  });

  localStorage.setItem("multiStatusTasks", JSON.stringify(tasks));
}

$("#createTodo").on("click", () => {
  createNewTodo();
});

function createNewTodo() {
  const newTodo = {
    id: Date.now(),
    user: $("#selectedTeamMember").val(),
    message: $("#taskMessage").val(),
    createAt: new Date().toISOString(),
  };

  console.log("newTodo", newTodo);
  $("#todoList").append(`<li class="p-1">
                  <div class="task-parent card ui-state-default">
                    <div class="card-header">${newTodo.user}</div>
                    <div class="p-2">
                      <p class="mb-0 task-message">
                        <small>
                          ${newTodo.message}
                        </small>
                      </p>
                      <p class="task-date mb-0 text-secondary text-end" style="font-size: 0.9rem">
                        <small>12 Aug 12:24 PM</small>
                      </p>
                    </div>
                    <div class="card-footer d-flex justify-content-end">
                      <div class="btn-group">
                        <button class="btn btn-sm btn-outline-primary">Edit</button>
                        <button class="btn btn-sm btn-outline-primary">Delete</button>
                      </div>
                    </div>
                  </div>
                </li>`);

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
  $("#staticBackdrop").modal("hide");
}
