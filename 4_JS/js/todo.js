import { getLocalstorage, setLocalstorage } from "./utils.js";

// form references
const form = document.getElementById("taskForm");
const taskInput = document.getElementById("taskInput");
const isCompeleteTask = document.getElementById("isCompeleteTask");

// task list references
const taskContainer = document.getElementById("taskContainer");

// -------------------------------------------------------------------------

// form data - cretae new task
function createTask(e) {
  e.preventDefault();

  const previousTasks = getLocalstorage("tasks");

  if (previousTasks) {
    // add new task in task list
    const payload = [
      ...previousTasks,
      {
        id: Date.now(),
        task: taskInput.value,
        isCompleted: isCompeleteTask.checked,
      },
    ];
    setLocalstorage("tasks", payload);
  } else {
    // cerate first task
    console.log("first");
    const payload = [
      {
        id: Date.now(),
        task: taskInput.value,
        isCompleted: isCompeleteTask.checked,
      },
    ];
    setLocalstorage("tasks", payload);
  }

  // reset form data
  taskInput.value = "";
  isCompeleteTask.checked = false;

  taskContainer.innerHTML = "";
  LoadTaskList();
}
form.addEventListener("submit", createTask);

// ---------------------------------------------------------------------------

// load list of task
function createElemetTask(id, task, isCompleted) {
  // task parent
  const taskParent = document.createElement("div");
  taskParent.setAttribute("class", "input-group mb-3");

  // task items
  const taskInputParent = document.createElement("div");
  taskInputParent.setAttribute("class", "input-group-text");
  // iscompeted checkbox
  const taskCheck = document.createElement("input");
  taskCheck.setAttribute("class", `task-${id} form-check-input mt-0`);
  taskCheck.setAttribute("id", id);
  taskCheck.type = "checkbox";
  taskCheck.value = id;
  taskCheck.checked = isCompleted;
  // edit task status
  taskCheck.addEventListener("change", (e) => {
    handelTaskStatus(e.target.value);
    const inputTask = document.getElementById(`task-${id}`);
    taskCheck.checked
      ? (inputTask.style.textDecoration = "line-through")
      : (inputTask.style.textDecoration = "none");
  });

  // main task
  const mainTask = document.createElement("input");
  mainTask.setAttribute("class", "form-control");
  mainTask.value = task;
  mainTask.id = `task-${id}`;
  mainTask.disabled = true;
  if (isCompleted) {
    mainTask.setAttribute("style", "text-decoration: line-through;");
  }
  
  // edit boutton
  const editBtn = document.createElement("span");
  editBtn.setAttribute("class", "input-group-text");
  editBtn.setAttribute("style", "cursor: pointer;");
  editBtn.innerText = "Edit";

  editBtn.addEventListener("click", () => {
    handelTaskUpdate(id);
  });

  // delete boutton
  const deleteBtn = document.createElement("span");
  deleteBtn.setAttribute("class", "input-group-text");
  deleteBtn.setAttribute("style", "cursor: pointer;");
  deleteBtn.innerText = "Delete";

  deleteBtn.addEventListener("click", () => {
    handelTaskDelete(id);
  });

  // appending child to parent
  taskInputParent.appendChild(taskCheck);
  taskParent.appendChild(taskInputParent);
  taskParent.appendChild(mainTask);
  taskParent.appendChild(editBtn);
  taskParent.appendChild(deleteBtn);

  return taskParent;
}

// todo list display
const LoadTaskList = () => {
  const taskList = getLocalstorage("tasks");
  if (taskList.length <= 0) {
    taskContainer.innerText = "Create new task, You have not task";
    taskContainer.style.textAlign = "center";
    taskContainer.style.color = "#333";
    taskContainer.style.fontSize = "0.9rem";
  }
  taskList.map((task) => {
    const newtask = createElemetTask(task.id, task.task, task.isCompleted);
    taskContainer.appendChild(newtask);
  });
};
addEventListener("DOMContentLoaded", LoadTaskList);

// ----------------------------------------------------------------------------------

// handel task done
// update task status [completed / incompleted]
function handelTaskStatus(id) {
  const previousTasks = getLocalstorage("tasks");

  const updatedPaylod = previousTasks.map((task) => {
    if (task.id == id) {
      return {
        ...task,
        isCompleted: !task.isCompleted,
      };
    }
    return task;
  });

  setLocalstorage("tasks", updatedPaylod);
}

// update task text
function handelTaskUpdate(id) {
  const previousTasks = getLocalstorage("tasks");
  const inputTask = document.getElementById(`task-${id}`);

  if (!inputTask.getAttribute("data-temp")) {
    inputTask.disabled = false;
    inputTask.focus();
    inputTask.setAttribute("style", "text-decoration: none;");
    inputTask.setAttribute("data-temp", "editing");
  } else {
    const updatedPaylod = previousTasks.map((task) => {
      if (task.id == id) {
        return {
          ...task,
          task: inputTask.value,
        };
      }
      return task;
    });
    setLocalstorage("tasks", updatedPaylod);

    inputTask.blur();
    inputTask.setAttribute("data-temp", "");
    inputTask.setAttribute("style", "text-decoration: line-through;");
    inputTask.disabled = true;
  }
}

// delete task
function handelTaskDelete(id) {
  const previousTasks = getLocalstorage("tasks");

  const updatedPaylod = previousTasks.filter((task) => task.id !== id);
  setLocalstorage("tasks", updatedPaylod);

  taskContainer.innerHTML = "";
  LoadTaskList();
}
