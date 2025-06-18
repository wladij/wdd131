function getTasks() {
    return JSON.parse(localStorage.getItem('tasks')) || [];
  }

  function saveTasks(tasks) {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }

  function renderTasks() {
    const list = document.getElementById('taskList');
    if (!list) return; 
    const tasks = getTasks();
    
    list.innerHTML = '';
    tasks.forEach((task, index) => {
      const li = document.createElement('li');
      li.className = task.completed ? 'completed' : '';
      li.innerHTML = `
        <span>${task.title} - ${task.date}</span>
        <div>
          <button onclick="toggleTask(${index})">✔</button>
          <button onclick="deleteTask(${index})">🗑</button>
        </div>
      `;
      list.appendChild(li);
    });
  }

  function addTask() {
    const title = document.getElementById('task-title').value;
    const date = document.getElementById('task-date').value;
    if (!title || !date) return alert('Please enter both a title and a date.');
    const tasks = getTasks();
    tasks.push({ title, date, completed: false });
    saveTasks(tasks);
    renderTasks();
    document.getElementById('task-title').value = '';
    document.getElementById('task-date').value = '';
  }

  function toggleTask(index) {
    const tasks = getTasks();
    tasks[index].completed = !tasks[index].completed;
    saveTasks(tasks);
    renderTasks();
  }

  function deleteTask(index) {
    const tasks = getTasks();
    tasks.splice(index, 1);
    saveTasks(tasks);
    renderTasks();
  }

  document.addEventListener('DOMContentLoaded', renderTasks);

  function groupTasksByDate(tasks) {
    return tasks.reduce((acc, task) => {
      if (!acc[task.date]) acc[task.date] = [];
      acc[task.date].push(task);
      return acc;
    }, {});
  }

  function renderCalendar() {
    const container = document.getElementById('calendarContent');
    if (!container) return; 
  
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    const grouped = groupTasksByDate(tasks);
    container.innerHTML = '';
    Object.keys(grouped).sort().forEach(date => {
      const section = document.createElement('div');
      section.className = 'task-group';
      section.innerHTML = `<h3>${date}</h3><ul>${grouped[date].map(t => `<li>${t.completed ? '<s>' + t.title + '</s>' : t.title}</li>`).join('')}</ul>`;
      container.appendChild(section);
    });
  }

  


  document.addEventListener('DOMContentLoaded', renderCalendar);
  
document.addEventListener("DOMContentLoaded", function() {
    
    const currentYear = new Date().getFullYear();
    document.getElementById("current-year").innerText = currentYear;

    
    const lastModified = document.lastModified;
    document.getElementById("lastModified").innerText = "Last Modified: " + lastModified;
});