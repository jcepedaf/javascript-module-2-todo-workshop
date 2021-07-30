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
Add a submit event to this form using .addEventListener() which will trim the value of the input Something to do and log it when you click Create button*/

document.querySelector('#new-todo').addEventListener('submit', (event) => {
    event.preventDefault()
    const text = event.target.elements.text.value.trim()
    console.log(text)
})

