// 1. STATE MANAGEMENT
let state = {
  title: "Finish My Frontend HNG Stage 1 Assignment",
  description: "Implementing state management, edit modes, and advanced synchronization logic for the todo card component.",
  priority: "High",
  status: "Pending",
  dueDate: "2026-04-20T18:00:00",
  isEditing: false,
  isExpanded: false
};

// 2. ELEMENT SELECTORS
const displayContainer = document.getElementById('display-container');
const editForm = document.getElementById('edit-form');
const titleEl = document.querySelector('[data-testid="test-todo-title"]');
const descEl = document.querySelector('[data-testid="test-todo-description"]');
const priorityBadge = document.querySelector('[data-testid="test-todo-priority"]');
const statusBadge = document.querySelector('[data-testid="test-todo-status"]');
const dueDateEl = document.querySelector('[data-testid="test-todo-due-date"]');
const timeRemainingEl = document.querySelector('[data-testid="test-todo-time-remaining"]');
const checkbox = document.getElementById('complete-toggle');

// 3. RENDER FUNCTION (Updates UI based on state)
function render() {
  // Update Text
  titleEl.textContent = state.title;
  
  // Handle Expansion Logic
  const limit = 60;
  if (state.description.length > limit && !state.isExpanded) {
    descEl.textContent = state.description.substring(0, limit) + "...";
    document.getElementById('expand-btn').classList.remove('hidden');
  } else {
    descEl.textContent = state.description;
    document.getElementById('expand-btn').classList.add('hidden');
  }

  // Badges
  priorityBadge.textContent = state.priority;
  priorityBadge.className = `priority-badge ${state.priority.toLowerCase()}`;
  statusBadge.textContent = state.status;
  statusBadge.className = `status-badge ${state.status.replace(" ", "-").toLowerCase()}`;

  // Sync Checkbox
  checkbox.checked = state.status === "Done";
  document.querySelector('.todo-card').classList.toggle('done-state', state.status === "Done");

  // Toggle Edit/Display View
  if (state.isEditing) {
    displayContainer.classList.add('hidden');
    editForm.classList.remove('hidden');
  } else {
    displayContainer.classList.remove('hidden');
    editForm.classList.add('hidden');
  }

  updateTimeRemaining();
}

// 4. TIME LOGIC
function updateTimeRemaining() {
  if (state.status === "Done") {
    timeRemainingEl.textContent = "Completed";
    timeRemainingEl.style.color = "#10b981";
    return;
  }

  const now = new Date();
  const diff = new Date(state.dueDate) - now;

  if (diff <= 0) {
    timeRemainingEl.textContent = "Overdue";
    timeRemainingEl.style.color = "#ef4444";
    timeRemainingEl.setAttribute('data-testid', 'test-todo-overdue-indicator');
  } else {
    const hours = Math.floor(diff / (1000 * 60 * 60));
    timeRemainingEl.textContent = `Due in ${hours} hours`;
    timeRemainingEl.style.color = hours < 24 ? "#f59e0b" : "#64748b";
  }
}

// 5. EVENT LISTENERS
document.querySelector('.edit-btn').addEventListener('click', () => {
  state.isEditing = true;
  // Filling form inputs with current state
  document.getElementById('edit-title').value = state.title;
  document.getElementById('edit-desc').value = state.description;
  document.getElementById('edit-priority').value = state.priority;
  document.getElementById('edit-status').value = state.status;
  document.getElementById('edit-date').value = state.dueDate;
  render();
});

document.getElementById('cancel-btn').addEventListener('click', () => {
  state.isEditing = false;
  render();
});

editForm.addEventListener('submit', (e) => {
  e.preventDefault();
  state.title = document.getElementById('edit-title').value;
  state.description = document.getElementById('edit-desc').value;
  state.priority = document.getElementById('edit-priority').value;
  state.status = document.getElementById('edit-status').value;
  state.dueDate = document.getElementById('edit-date').value;
  state.isEditing = false;
  render();
});

checkbox.addEventListener('change', () => {
  state.status = checkbox.checked ? "Done" : "Pending";
  render();
});

document.getElementById('expand-btn').addEventListener('click', () => {
  state.isExpanded = true;
  render();
});

// INITIALIZE
render();
setInterval(updateTimeRemaining, 30000);