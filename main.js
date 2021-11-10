var taskName = document.getElementById("add-box");
var addBtn = document.getElementById("add-btn");
let pendingN = 0;
let completedN = 0;
let pending = {
    
}

function addTask(taskName)
{
    var newTodo = document.createElement("li");
    var newItem = document.getElementById("add-box").value;
    if(newItem === "")
    {
        alert("Can't add empty item!");
    }
    else
    {
        var t = document.createTextNode(newItem);
        var doneBox = document.createElement("input");
        doneBox.type = "checkbox";
        newTodo.appendChild(doneBox);
        newTodo.appendChild(t);
        document.getElementById("tlist").appendChild(newTodo);
        document.getElementById("add-box").value = "";
        pending[pendingN] = newItem;
        console.log(pending);
        pendingN+=1;
        
    }
    
}