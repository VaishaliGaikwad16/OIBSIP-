function addTask() {
    const input = document.getElementById('taskInput');
    const taskText = input.value.trim();
  
    if (taskText === '') return;
  
    const li = document.createElement('li');
    li.innerHTML = `
      ${taskText}
      <span>
        <button onclick="markDone(this)">✅</button>
        <button onclick="removeTask(this)">❌</button>
      </span>
    `;
  
    document.getElementById('pendingList').appendChild(li);
    input.value = '';
  }
  
  function markDone(button) {
    const li = button.closest('li');
    button.remove(); // remove the "done" button
    document.getElementById('completedList').appendChild(li);
  }
  
  function removeTask(button) {
    const li = button.closest('li');
    li.remove();
  }
  