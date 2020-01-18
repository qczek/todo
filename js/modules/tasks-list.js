// Show tasks
function showTasks() {
	tasks.forEach(function(title) {
		addNewTask(title);
	});
}

// Toggle complete
function toggleTaskComplete(toggleBtn) {
	toggleBtn.classList.toggle('btn-success');
}

// Delete task
function deleteTask(deleteBtn) {
	var liToDelete = deleteBtn.closest('li');
	deleteBtn.closest('ul').removeChild(liToDelete);
}