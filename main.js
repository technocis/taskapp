let taskList = [];

function getAllTasks() {
  const tasksInString = localStorage.getItem("tasks");
  const tasksInArray = JSON.parse(tasksInString);
  return tasksInArray;
}

function deleteAllTask() {
  const emptyArray = [];
  localStorage.setItem("tasks", JSON.parse(emptyArray));
  taskList = getAllTasks();
  renderTasks();
}

function updateTasks(newTask) {
  taskList.push(newTask);
  const tasksInString = JSON.stringify(taskList);
  localStorage.setItem("tasks", tasksInString);
}

function renderTasks() {
  const noOfTask = taskList.length;
  let tasks = "";
  for (i = 0; i < noOfTask; i++) {
    const _task = taskList[i];
    let newTask = " <li class='list-group-item'> " + _task + " </li> ";
    tasks = tasks + newTask;
  }
  const ulTag = document.getElementById("taskLists");
  ulTag.innerHTML = tasks;
}

function submitHandler() {
  event.preventDefault();
  const newTask = document.getElementById("newTask").value;
  updateTasks(newTask);
  renderTasks();
}

function pageOnLoadHandler() {
  const allTasks = getAllTasks();
  if (!allTasks) {
    allTasks = [];
  } else {
  }
  taskList = allTasks;
  renderTasks();
}

pageOnLoadHandler();
