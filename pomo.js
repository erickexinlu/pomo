var defaultList = document.getElementsByTagName("LI");
var i;

// loads the initial stuff - will replace with writing from JSON file from britney later
for (i = 0; i < defaultList.length; i++) {
    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    defaultList[i].appendChild(span);
}

function addTodo() {
    var li = document.createElement("li");
    var userInput = document.getElementById("userInput").ariaValueMax;
    var t = document.createTextNode(inputValue);
    li.appendChild(t);
    if (inputValue === '') {
        alert("The input body cannot be empty!");
    } else {
        document.getElementById("todo-body").appendChild(li);
    }
    
    //clears the todo input
    document.getElementById("userInput").value = "";

    var span = document
}

