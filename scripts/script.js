//alert("hello!");

//document.querySelector('#new-todo').addEventListener('submit', (e) => {
//    e.preventDefault();
//    const text = e.target.elements.text.value.trim();
//    alert(text);
//})

/*
Exercise 1:
Look for the files index.html and script.js
Open index.html with the Visual Studio Live Server and see how the alert appears
Write a name in the input field Something to do and click the Create button. Right know you don't have to understand the code, but what do you think the code is doing?
*/

/*
Exercise 2:
Delete all the existing code in script.js in the folder scripts
Write code to access the Create button element using document.querySelector()
Log this element using console.log()

let buttonElement = document.querySelector(".button");
console.log(buttonElement);*/

/*
Exercise 3:
Change the background color of the Create button to green using the .style property

let buttonElement = document.querySelector(".button");
buttonElement.style.backgroundColor = "blue";*/

/*
Exercise 4:
Delete all the existing code in script.js in the folder scripts
Write code to access the form with id #new-todo using document.querySelector()
Add a submit event to this form using .addEventListener() which will trim the value of the input Something to do and log it when you click Create button

document.querySelector('#new-todo').addEventListener('submit', (event) => {
    event.preventDefault()
    const text = event.target.elements.text.value.trim()
    console.log(text)
})*/

/*
Exercise 5:
Create an empty array called todos
In the next line create a function called createTodo which takes one parameter named text.
This function should add the value of text parameter to the todos array using .push()
Modify the event created in Exercise 4 to validate text and then call createTodo whenever the form is submitted.
Hint: Use createTodo function inside callback function of addEventListener()
Clear the value of the input Something to do once a new todo is created
Log the todos array.*/

let todos = [ ];
function createTodo (text) {
    todos.push(text);
}

document.querySelector('#new-todo').addEventListener('submit', (evento) => {
    evento.preventDefault()
    const text = evento.target.elements.text.value.trim()

    if (text.length > 0) {
        createTodo(text)
        evento.target.elements.text.value = ''
       }

       //console.log(todos);
       renderTodos(todos);
    })

/*
Exercise 6:
Create a function generateTodoDOM which will take one parameter todo
Create a label element and store it in the todoEl variable using document.createElement('label')
Similarly create a div element and store it in the variable containerEl
Now create a span element and store it in todoText
Assign todo value to todoText using textContent property
Once todoText has been assigned todo value, append it to containerEl using .appendChild()
Add 'list-item' class to todoEl and 'list-item__container' class to containerEl using .classList.add() Note: While it's really easy to change styles directly on elements using the style property, it is usually not a good idea to mix JavaScript and CSS. To solve this, we can use the .classList.add() or .classList.remove() property to set or remove the class for an element instead of changing its styles directly
Append containerEl to todoEl using .appendChild()
Finally return todoEl*/


const generateTodoDOM = (todo) => {
    //se de3clara variables que alamcenan elementos
    const todoEl = document.createElement('label');
    const containerEl = document.createElement('div');
    const todoText = document.createElement('span');
    //se asigna el valor de todo a todoText
    todoText.textContent = todo;
    //añado a containerEl el valor de todoText usando appendChild()
    containerEl.appendChild(todoText);

    // agrego clases a todoEl y a conatinerEl usando classList.add()
    todoEl.classList.add('list-item');
    containerEl.classList.add('list-item__container');
    //agrego containerEl a todoEl usando appendChild()
    todoEl.appendChild(containerEl)

    return todoEl
}

/*
Exercise 7:
Create a function renderTodos that will take one parameter: an array of todos
Write code to access a div with id 'todos' and store it into a todoList variable
Remove everything inside this todoList using the innerHTML property (Hint: Otherwise we will append items multiple times)
Create DOM elements for all items of the todos array by using the forEach() method and generateTodoDOM function, and append the return value of generateTodoDOM to todoList using .appendChild()
Use the renderTodos function instead of console.log(todos) in step 6 of Exercise 5.*/

//const renderTodos = (todos) => {
    //const todoList = document.querySelector('#todos')
    /*todoList.innerHTML = ''*/

    /*todos.forEach((todo) => {*/
            /*todoList.appendChild(generateTodoDOM(todo))*/
    //})
//}

/*
Exercise 8:
Modify the renderTodos function using a conditional statement to check if the todos array is empty.
If it is not empty then generateTodoDOM for each todo and append them to todoList
Else: if it is empty, create a p element and store it into the messageEl variable.
Add a 'empty-message' class to messageEl
Assign the 'There are no todos to show' string to messageEl using textContent
Append messageEl to todoList
Invoke the renderTodos function with the todos array as an argument at the end of script.js file*/

const renderTodos = todos => { 
    const todoList = document.querySelector("#todos"); 
    todoList.innerHTML = ''; 

    if (todos.length >0) { 
    
    todos.forEach((todo) => {
        const newTodo = generateTodoDOM(todo);
        todoList.appendChild(newTodo);
    })
    } else {
        const messageEl = document.createElement("p");
        messageEl.classList.add('empty-message'); 
        messageEl.textContent = 'There are no todos to show'; 
        todoList.appendChild(messageEl);
    }
}

/*
Exercise 9:
Create a function called removeTodo which will take a parameter todoEl
Find the index of this todoEl in the todos array using .findIndex() and store the index value into the todoIndex variable
Check whether todoIndex > -1, and if true then remove the element from the todos array using .splice()*/

const removeTodo = todoEl => { 
    const todoIndex = todos.findIndex((todo)=>{
        return todo.toLowerCase() === todoEl.textContent.toLowerCase()
    })
    if (todoIndex > -1) {
        todos.splice(todoIndex, 1)
    }
}