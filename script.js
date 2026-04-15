const DUE_DATE = new Date("2026-03-01T18:00:00Z");

const checkbox = document.querySelector('[data-testid="test-todo-complete-toggle"]');
const title = document.querySelector('[data-testid="test-todo-title"]');
const statusBadge = document.querySelector('[data-testid="test-todo-status"]');
const timeRemainingEl = document.querySelector('[data-testid="test-todo-time-remaining"]');
const editBtn = document.querySelector('[data-testid="test-todo-edit-button"]');
const deleteBtn = document.querySelector('[data-testid="test-todo-delete-button"]');

function updateTimeRemaining() {
  const now = new Date();
  const diff = DUE_DATE - now;

  if (diff <= 0) {
    timeRemainingEl.textContent = "Due now!";
    timeRemainingEl.style.color = "#ef4444";
    return;
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

  let text = "";
  if (days > 1) {
    text = `Due in ${days} days`;
  } else if (days === 1) {
    text = "Due tomorrow";
  } else if (hours > 0) {
    text = `Due in ${hours} hours`;
  } else {
    text = "Due very soon";
  }

  timeRemainingEl.textContent = text;
  timeRemainingEl.style.color = (days <= 2) ? "#ef4444" : "#10b981";
}

// Checkbox behavior - Strike through + Status change
checkbox.addEventListener('change', () => {
  if (checkbox.checked) {
    title.style.textDecoration = "line-through";
    title.style.color = "#9ca3af";
    statusBadge.textContent = "Done";
    statusBadge.className = "status-badge done";
  } else {
    title.style.textDecoration = "none";
    title.style.color = "#1e2937";
    statusBadge.textContent = "Pending";
    statusBadge.className = "status-badge pending";
  }
});

editBtn.addEventListener('click', () => {
  console.log("edit clicked");
  alert("Edit clicked - This would open edit form in a real app");
});

deleteBtn.addEventListener('click', () => {
  if (confirm("Are you sure you want to delete this task?")) {
    console.log("delete clicked");
    alert("Task deleted (demo only)");
  }
});

// Initialize
function init() {
  updateTimeRemaining();
  setInterval(updateTimeRemaining, 60000); // Update every 60 seconds
}

window.onload = init;