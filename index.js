let tasks = [];
function displayTasks() {
  const taskTable = document.getElementById('task-table');
  taskTable.innerHTML = `
    <tr>
    <th>Task</th>
      <th>Date</th>
      <th>Time</th>
      <th>Action</th>
    </tr>
  `;

  for (let i = 0; i < tasks.length; i++) {
    const task = tasks[i];
    const row = document.createElement('tr');
    row.innerHTML = `
      <td><input type="date" class="date-input" value="${task.date}"></td>
      <td><input type="time" class="time-input" value="${task.time}"></td>
      <td>${task.task}</td>
      <td>
        <button onclick="editTask(${i})">Edit</button>
        <button onclick="deleteTask(${i})">Delete</button>
      </td>
    `;
    taskTable.appendChild(row);
  }
}
function clearForm() {
  const taskInput = document.getElementById('task-input');
  const dateInput = document.getElementById('date-input');
  const timeInput = document.getElementById('time-input');
  const errorMessage = document.getElementById('error-message');

  taskInput.value = '';
  dateInput.value = '';
  timeInput.value = '';
  errorMessage.innerText = '';
}


function addTask() {
  const taskInput = document.getElementById('task-input');
  const dateInput = document.getElementById('date-input');
  const timeInput = document.getElementById('time-input');
  const errorMessage = document.getElementById('error-message');

  const task = taskInput.value.trim();
  const date = dateInput.value;
  const time = timeInput.value;

  if (task === '') {
    errorMessage.innerText = 'Please enter a task.';
    return;
  }

  const newTask = {
    task,
    date,
    time
  };

  tasks.push(newTask);

  displayTasks();
  clearForm();
}


function editTask(index) {
  const row = document.getElementById('task-table').rows[index + 1];
  const dateInput = row.querySelector('.date-input');
  const timeInput = row.querySelector('.time-input');

  const date = dateInput.value;
  const time = timeInput.value;

  tasks[index].date = date;
  tasks[index].time = time;
}

function deleteTask(index) {
  tasks.splice(index, 1);
  displayTasks();
}


function saveTasks() {
  // Here you can implement the logic to save tasks (e.g., send them to a server or store in local storage)
  console.log('Tasks saved successfully!');
}
