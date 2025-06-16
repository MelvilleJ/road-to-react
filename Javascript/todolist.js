// todolist.js

// This script manages a simple todo list with functions to add, display, and remove todos.
// Initial todo list
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
const info = {id: 1, name: "Todo List Manager", version: "1.0.0"};
const {name} = info;
const {version} = info;

console.log(`App Name: ${name}, Version: ${version}`);
// Functions to manipulate the todo list
// Add a new todo item
function addTodo() {
    const newTodo = {
        id: 5,
        title: "New Todo Item",
        completed: false
    };
    todoList.push(newTodo);
    console.log("Todo added:", newTodo);
}
// Display all todo items
function displayTodos() {
    console.log("Todo List:");
    todoList.forEach(todo => {
        console.log(`ID: ${todo.id}, Title: ${todo.title}, Completed: ${todo.completed}`);
    });
}
// Remove a todo item by ID
function removeTodo(id) {
    todoList = todoList.filter(todo => todo.id !== id);
    console.log(`Todo with ID ${id} removed.`);
}
// Example usage
displayTodos();
addTodo();
displayTodos();
removeTodo(2);
displayTodos();

console.log(`End of Demo: ${name} , ${version}`);
