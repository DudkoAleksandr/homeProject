const tasksResulat = document.querySelector(".tasks__result");
const completedTasks = document.querySelector(".completed");
const uncompletedTask = document.querySelector(".uncompleted");
const addTask = document.querySelector(".add-task");
const addBtn = document.querySelector(".addbtn");
const searchTask = document.querySelector(".search-task");
const sortBtn = document.querySelector(".sort");

const tasks = [
  {
    id: Date.now(),
    title: "Сделать домашку",
    completed: true,
    important: true,
  },
  {
    id: Date.now(),
    title: "Помыть посуду",
    completed: false,
    important: false,
  },
  {
    id: Date.now(),
    title: "Подготовиться к контрольной по математике",
    completed: false,
    important: true,
  },
];

function renderTask() {
  for (let task of tasks) {
    const cardTask = document.createElement("div");
    const title = document.createElement("p");
    const btnDel = document.createElement("button");
    title.innerHTML = task.title;
    cardTask.append(title);
    cardTask.append(btnDel);
    btnDel.innerHTML = "Удалить";
    btnDel.dataset.id = task.id
    tasksResulat.append(cardTask);
  }
}
renderTask();

function getCompletedTasksCount() {
  let winTasks = 0;
  for (let task of tasks) {
    if (task.completed === true) {
      winTasks = winTasks + 1;
    }
  }
  completedTasks.innerHTML = `Выполнено задач: ${winTasks}`;
}
getCompletedTasksCount();

function getUncompletedTasksCount() {
  let unwinTasks = 0;
  for (let task of tasks) {
    if (task.completed === false) {
      unwinTasks = unwinTasks + 1;
    }
  }
  uncompletedTask.innerHTML = `Невыполнено задач: ${unwinTasks}`;
}
getUncompletedTasksCount();

function getImportantTasks() {
  return tasks.filter((task) => task.important === true);
}
// console.log(getImportantTasks());

function getLongestTask() {
  let longTask = tasks[0];
  for (let i = 0; i < tasks.length; i++) {
    if (tasks[i].title.length > longTask.title.length) {
      longTask = tasks[i];
    }
  }
  return longTask;
}
// console.log(getLongestTask());

addBtn.addEventListener("click", () => {
  tasks.push({ title: addTask.value });
  tasksResulat.innerHTML = "";
  renderTask();
});

searchTask.addEventListener("input", () => {
  function findTask(title) {
    return tasks.find((tasks) => tasks.title === title);
  }
  console.log(findTask(searchTask.value));
});

function sortTasks() {
  tasks.sort((a, b) => b.important - a.important);
}

sortBtn.addEventListener("click", () => {
  sortTasks();
  tasksResulat.innerHTML = "";
  renderTask();
  console.log(tasks);
});

function delTask() {
  const delTaskBtn = document.querySelectorAll(".btnDel");
  for (let delBtn of delTaskBtn) {
    console.log(delBtn);
  }
  console.log(delTaskBtn);
}
delTask();
