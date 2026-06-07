const tasksResulat = document.querySelector(".tasks__result");
const completedTasks = document.querySelector(".completed");
const uncompletedTask = document.querySelector(".uncompleted");
const addTask = document.querySelector(".add-task");
const addBtn = document.querySelector(".addbtn");
const searchTask = document.querySelector(".search-task");

const tasks = [
  {
    title: "Сделать домашку",
    completed: true,
    important: true,
  },
  {
    title: "Помыть посуду",
    completed: false,
    important: false,
  },
  {
    title: "Подготовиться к контрольной по математике",
    completed: false,
    important: true,
  },
];

function renderTask() {
  for (let task of tasks) {
    const cardTask = document.createElement("div");
    const title = document.createElement("p");
    title.innerHTML = task.title;
    cardTask.append(title);
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

addBtn.addEventListener('click', () => {
  tasks.push({title: addTask.value})
  tasksResulat.innerHTML = ''
  renderTask()
})

searchTask.addEventListener('input', () => {
    function findTask(title){
      return tasks.find(tasks => tasks.title === title)
    }
  console.log(findTask(searchTask.value));
})