const todos = [
    {title: 'Clean bathroom', done: false},
    {title: 'Laundry', done: false},
    {title: 'Dishes', done: false},
]

export const initTodos = () => {
    render();
}

const render = () => {
    const todoList = document.getElementById('todo-list');
    todoList.innerHTML = '';
    todos.forEach(todo => {
        todoList.innerHTML += `
        <div class="todo-list-item">
            <input type="checkbox" ${todo.done ? 'checked' : ''}>
            <span class="${todo.done ? 'done' : 'not-done'}">${todo.title}</span>
        </div>`
    });

    document.getElementById('percentage').innerHTML = `${(calculateCompletionPercentage() * 100).toFixed(0)}%`;

    const checkboxes = document.querySelectorAll('input[type=checkbox]');
    checkboxes.forEach((checkbox, index) => checkbox.addEventListener('change', () => {
        todos[index].done = !todos[index].done;
        render();
    }));
}

const calculateCompletionPercentage = () => {
    return todos.reduce((acc, todo) => todo.done ? acc + 1 : acc, 0) / todos.length;
} 