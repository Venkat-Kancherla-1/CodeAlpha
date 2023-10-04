document.addEventListener('DOMContentLoaded', function () {
    const taskInput = document.getElementById('task-input');
    const addTaskButton = document.getElementById('add-task-button');
    const taskList = document.getElementById('task-list');

    // Function to add a new task
    function addNewTask(taskText) {
        const listItem = document.createElement('li');
        listItem.innerHTML = `
            <div class="container1">
            <input type="checkbox" class="task-checkbox">
            <span>${taskText}</span>
            </div>
            <button class="delete-button">Delete</button>
        `;

        taskList.appendChild(listItem);
        taskInput.value = '';

        // Add event listener to delete button
        const deleteButton = listItem.querySelector('.delete-button');
        deleteButton.addEventListener('click', function () {
            taskList.removeChild(listItem);
        });

        // Add event listener to task checkbox
        const taskCheckbox = listItem.querySelector('.task-checkbox');
        taskCheckbox.addEventListener('change', function () {
            const taskSpan = listItem.querySelector('span');
            if (taskCheckbox.checked) {
                taskSpan.style.textDecoration = 'line-through';
            } else {
                taskSpan.style.textDecoration = 'none';
            }
        });
    }

    // Add initial tasks
    const initialTasks = ['Click "Add" to add a new task ', 'Click the checkbox to strike the task', 'Click the delete button to delete the task permanently'];
    for (const taskText of initialTasks) {
        addNewTask(taskText);
    }

    // Add a new task when the "Add" button is clicked
    addTaskButton.addEventListener('click', function () {
        const taskText = taskInput.value.trim();
        if (taskText !== '') {
            addNewTask(taskText);
        }
    });
});
