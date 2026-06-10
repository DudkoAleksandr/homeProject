const tasksResulat = document.querySelector(".tasks__result");
const completedTasks = document.querySelector(".completed");
const uncompletedTask = document.querySelector(".uncompleted");
const addTask = document.querySelector(".add-task");
const addBtn = document.querySelector(".addbtn");
const searchTask = document.querySelector(".search-task");
const sortBtn = document.querySelector(".sort");
const select = document.querySelector(".select");

const tasks = [
  {
    id: Date.now() + 1,
    title: "Сделать домашку",
    completed: true,
    important: true,
  },
  {
    id: Date.now() + 2,
    title: "Помыть посуду",
    completed: false,
    important: false,
  },
  {
    id: Date.now() + 3,
    title: "Подготовиться к контрольной по математике",
    completed: false,
    important: true,
  },
];

function renderTask() {
  tasksResulat.innerHTML = "";
  const ol = document.createElement("ol");
  for (let task of tasks) {
    tasksResulat.append(ol);
    const li = document.createElement("li");
    const cardTask = document.createElement("div");
    cardTask.classList.add("card__task");
    const title = document.createElement("p");
    const btnDel = document.createElement("button");
    title.innerHTML = task.title;
    cardTask.append(title);
    cardTask.append(btnDel);
    btnDel.innerHTML = "Удалить";
    btnDel.classList.add("btnDel");
    btnDel.dataset.id = task.id;
    li.append(cardTask);
    ol.append(li);
  }
  delTask();
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
  let important;

  if (select.value === "important") {
    important = true;
  } else if (select.value === "not-important") {
    important = false;
  } else if (select.value === ''){
    alert('Выберите приоритет')
  }

  tasks.push({
    title: addTask.value,
    id: Date.now(),
    completed: false,
    important: important,
  });
  renderTask();
  console.log(tasks);
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
  renderTask();
  console.log(tasks);
});

function delTask() {
  const delTaskBtn = document.querySelectorAll(".btnDel");
  for (let delBtn of delTaskBtn) {
    delBtn.addEventListener("click", () => {
      const id = delBtn.dataset.id;
      for (let i = 0; i < tasks.length; i++) {
        if (tasks[i].id == id) {
          console.log(i);
          tasks.splice(i, 1);
          renderTask();
        }
      }
    });
  }
}
