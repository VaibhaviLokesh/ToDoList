// Simple user credentials for demonstration
const validUsername = 'user123'; // Updated username
const validPassword = 'mypassword'; // Updated password

// Login functionality
document.getElementById('login-form')?.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Check if the entered credentials match the valid ones
    if (username === validUsername && password === validPassword) {
        // Redirect to tasks page
        window.location.href = 'tasks.html';
    } else {
        alert('Invalid username or password');
    }
});

// Registration functionality (for demonstration purposes)
document.getElementById('register-form')?.addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    if (password === confirmPassword) {
        alert('Registration successful! You can now log in.');
        window.location.href = 'login.html'; // Redirect to login page
    } else {
        alert('Passwords do not match. Please try again.');
    }
});

// Task management functionality
window.onload = function() {
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks.forEach(task => addTaskToDOM(task));
};

function addTaskToDOM(taskText) {
    const li = document.createElement('li');
    li.textContent = taskText;
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.onclick = function() {
        li.remove();
        removeTaskFromStorage(taskText);
    };
    li.appendChild(deleteButton);
    document.getElementById('taskList').appendChild(li);
}

function removeTaskFromStorage(taskText) {
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    const updatedTasks = tasks.filter(task => task !== taskText);
    localStorage.setItem('tasks', JSON.stringify(updatedTasks));
}

document.getElementById('addTaskButton')?.addEventListener('click', function() {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value;
    if (taskText === '') {
        alert('Please enter a task!');
        return;
    }
    addTaskToDOM(taskText);
    saveTaskToStorage(taskText);
    taskInput.value = ''; // Clear the input field
});

function saveTaskToStorage(taskText) {
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks.push(taskText);
    localStorage.setItem('tasks', JSON.stringify(tasks));
}