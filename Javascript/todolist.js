// todolist.js


let todoList = [
    {
        id: 1,
        title: "Buy groceries",
        completed: false
    },
    {
        id: 2,
        title: "Walk the dog",
        completed: true
    },
    {
        id: 3,
        title: "Finish homework",
        completed: false
    },
    {
        id: 4,
        title: "Clean the house",
        completed: true
    }
];




function addTodo() {
    const newTodo = {
        id: 5,
        title: "New Todo Item",
        completed: false
    };
    todoList.push(newTodo);
    console.log("Todo added:", newTodo);
}

function displayTodos() {
    console.log("Todo List:");
    todoList.forEach(todo => {
        console.log(`ID: ${todo.id}, Title: ${todo.title}, Completed: ${todo.completed}`);
    });
}

function removeTodo(id) {
    todoList = todoList.filter(todo => todo.id !== id);
    console.log(`Todo with ID ${id} removed.`);
}


displayTodos();
addTodo();
displayTodos();
removeTodo(2);
displayTodos();