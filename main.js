var taskName = document.getElementById("add-box");
var addBtn = document.getElementById("add-btn");
count=0;
let pendingNumber = 0;
let completedNumber = 0;

let pending = {
    
}

let completed = {

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
        var doneBox = document.createElement("input");
        doneBox.id = `newItem-${count+1}`;
        var label = document.createElement("label");
        label.innerText = newItem;
        //var t = document.createTextNode(lbl);
        doneBox.type = "checkbox";
        newTodo.appendChild(doneBox);
        newTodo.appendChild(lbl);
        //newTodo.appendChild(t);
        document.getElementById("tlist").appendChild(newTodo);
        document.getElementById("add-box").value = "";
        pending[pendingNumber] = newItem;
        //console.log(pending);
        pendingNumber+=1;
    }
    
}
function doneTask()
{
    console.log(this.value); 
}