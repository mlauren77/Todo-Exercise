    // we pass in two arguments to addEventListener:
    // by using addEventListener, we can attach as many as we want to an individual Element, even if they're the same type of Event (the argument located in the String)
                  
                        // pass in a particular event type as a string
document.addEventListener("DOMContentLoaded", function() {// executed as a function, which will run when the event occurs
    // call addEventListener as a method on a particular element that we've selected (in this example, it's on the element - document)


    let todoForm = document.getElementById("newTodoForm"); // getElementById: returns an Element object whose id matches the specified string
    let todoList = document.getElementById("todoList");
  
    todoForm.addEventListener("submit", function(event) {
         // The submit event is being prevented by this method
      event.preventDefault();

      // createElement creates new element, which is passed through as a string (ie: button)
      let removeButton = document.createElement("button");
      removeButton.textContent = "Delete";
  
      let newTodo = document.createElement("li");
      newTodo.textContent = document.getElementById("task").value;

            // this is appending newTodo to todoList
      todoList.append(newTodo);
      newTodo.append(removeButton);
  
    });
  
    todoList.addEventListener("click", function(event) {
      const targetTagToLowerCase = event.target.tagName.toLowerCase();
      if (targetTagToLowerCase === "li") {
        event.target.style.textDecoration = "line-through";
      } else if (targetTagToLowerCase === "button") {
          // parentNode returns the parent of the specified node in the DOM     
        event.target.parentNode.remove();// the remove element removes any element from the DOM
      }
    });
  });

  const newImg = document.createElement('img');
  newImg.classList.add('thumbnail')
      newImg.setAttribute('src', 'https://www.diyphotography.net/wp-content/uploads/2017/03/checklist.jpg')

      document.body.append(newImg)
  