var tasks_array = []

function update_tasks() {
    var tags = document.getElementById('tasks').childNodes;
    while (tags.length > 1) {
        console.log(tags[0]);
        document.getElementById('tasks').removeChild(tags[0]);
    }
    for (let i = 1; i <= tasks_array.length; i++) {
        const task = tasks_array[i - 1];
        var new_task = document.createElement('li');
        new_task.setAttribute('class', 'task');
        new_task.setAttribute('onclick', 'remove_task\(' + parseInt(i - 1) + ')');
        new_task.appendChild(document.createTextNode(parseInt(i) + '. ' + task));
        var tasks_div = document.getElementById('tasks');
        tasks_div.appendChild(new_task);
    }
    document.getElementById('tasks').removeChild(tags[0]);
}

function remove_task(index) {
    task_array = tasks_array.splice(index, 1);
    update_tasks();
}

function add_task() {
    if (document.getElementById('new-task').value) {
        tasks_array.push(document.getElementById('new-task').value);
        update_tasks();
        document.getElementById('new-task').value = '';
    }
}