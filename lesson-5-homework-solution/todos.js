const todos = [
    {title: 'Clean bathroom', done: false, difficulty: 2},
    {title: 'Laundry', done: false, difficulty: 4},
    {title: 'Dishes', done: false, difficulty: 3},
]

export const initTodos = () => {
    render();
    addNewItemSaveListener();
    addOrderListeners();
}

const render = () => {
    const todoList = document.getElementById('todo-list');
    todoList.innerHTML = '';
    todos.forEach(todo => {
        todoList.innerHTML += `
        <div class="todo-list-item">
            <input type="checkbox" ${todo.done ? 'checked' : ''}>
            <span class="${todo.done ? 'done' : 'not-done'}">${todo.title} - ${todo.difficulty}</span>
            <span class="btn-remove">X</span>
        </div>`
    });

    document.getElementById('percentage').innerHTML = `${(calculateCompletionPercentage() * 100).toFixed(0)}%`;
    displayMostDifficultItem();

    const checkboxes = document.querySelectorAll('input[type=checkbox]');
    checkboxes.forEach((checkbox, index) => checkbox.addEventListener('change', () => {
        todos[index].done = !todos[index].done;
        render();
    }));

    addRemoveListener();
}

const addRemoveListener = () => {
    document.querySelectorAll('.btn-remove').forEach((btn, index) => {
        btn.addEventListener('click', () => {
            todos.splice(index, 1);
            render();
        });
    })
}

const addNewItemSaveListener = () => {
    document.getElementById('new-item-save').addEventListener('click', () => {
        const nameElement = document.getElementById('new-item-name');
        const difficultyElement = document.getElementById('new-item-difficulty');
        
        createNewItem(nameElement.value, Number(difficultyElement.value));

        nameElement.value = '';
        difficultyElement.value = 0;
    })
}

const createNewItem = (name, difficulty) => {
    todos.push({title: name, done: false, difficulty});
    render();
}

const orderTodosByDifficulty = (direction) => {
    switch(direction) {
        case 'ASC':
            todos.sort((t1, t2) => t1.difficulty - t2.difficulty);
            break;
        case 'DSC':
            todos.sort((t1, t2) => (t1.difficulty - t2.difficulty) * -1);
            break;
    }

    render();
}

const addOrderListeners = () => {
    document.getElementById('btn-asc').addEventListener('click', () => orderTodosByDifficulty('ASC'));
    document.getElementById('btn-dsc').addEventListener('click', () => orderTodosByDifficulty('DSC'));
}

const displayMostDifficultItem = () => {
    const mostDifficultItemElement = document.getElementById('most-difficult-item');
    const maxDifficulty = Math.max(...todos.map(t => t.difficulty));
    const mostDifficultItem = todos.find(t => t.difficulty === maxDifficulty);

    mostDifficultItemElement.innerHTML = `${mostDifficultItem.title} (${mostDifficultItem.difficulty})`;
}

const calculateCompletionPercentage = () => {
    return todos.reduce((acc, todo) => todo.done ? acc + 1 : acc, 0) / todos.length;
} 