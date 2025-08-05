// Contact Form Functionality
document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault(); // Prevent page refresh

  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('formMessage');

  if (!name || !email) {
    message.textContent = 'Please fill in all fields.';
    message.style.color = 'red';
    return;
  }

  if (!email.includes('@')) {
    message.textContent = 'Invalid email address.';
    message.style.color = 'red';
    return;
  }

  message.textContent = 'Form submitted successfully!';
  message.style.color = 'green';

  document.getElementById('contactForm').reset();
});

// To-Do List Functionality
function addTask() {
  const taskInput = document.getElementById('taskInput');
  const task = taskInput.value.trim();

  if (task === '') return;

  const li = document.createElement('li');
  li.textContent = task;

  const removeBtn = document.createElement('button');
  removeBtn.textContent = 'Remove';
  removeBtn.onclick = () => li.remove();

  li.appendChild(removeBtn);
  document.getElementById('taskList').appendChild(li);

  taskInput.value = '';
}
