
function addItem() {
    let input = document.getElementById("new-item");
    let text = input.value;

    let todoList = document.getElementById("todo-list");


    if (text !== "") {
        let listItem = document.createElement("li");
        listItem.innerText = text;

        listItem.addEventListener("click", function() {
         this.classList.add("completed");
            setTimeout(function () {
                todoList.removeChild(listItem);
         }, 1000);
    });

    todoList.appendChild(listItem);

    input.value = "";
}
}

let button = document.getElementById("todo-btn");
button.addEventListener("click", addItem);
